import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.SecureRandom;
import java.util.Scanner;
import javax.crypto.Cipher;
import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

public class Main {
    private static final String RSA = "RSA";
    private static Scanner sc;
    public static KeyPair generateRSAKkeyPair() throws Exception {
        SecureRandom secureRandom = new SecureRandom();
        KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance(RSA);
        keyPairGenerator.initialize(2048, secureRandom);
        return keyPairGenerator.generateKeyPair();
    }
    public static byte[] do_RSAEncryption(String plainText, PrivateKey privateKey) throws
    Exception {
        Cipher cipher = Cipher.getInstance(RSA);
        cipher.init(Cipher.ENCRYPT_MODE, privateKey);
        return cipher.doFinal(plainText.getBytes(StandardCharsets.UTF_8));
    }
    public static String do_RSADecryption(byte[] cipherText, PublicKey publicKey) throws
    Exception {
        Cipher cipher = Cipher.getInstance(RSA);
        cipher.init(Cipher.DECRYPT_MODE, publicKey);
        byte[] result = cipher.doFinal(cipherText);
        return new String(result, StandardCharsets.UTF_8);
    }
    public static String shortByteArrayToHexString(byte[] bytes, int length) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < length && i < bytes.length; i++) {
            sb.append(String.format("%02X", bytes[i]));
        }
        return sb.toString();
    }
    public static void main(String args[]) throws Exception {
        KeyPair keypair = generateRSAKkeyPair();
        sc = new Scanner(System.in);
        int choice;

        do {
            System.out.print("\n1: Encrypt Message\n2: Decrypt Message\n3: View All keys\n4: See Encrypted Message\n5: Exit\nEnter Your Choice: ");
                choice = sc.nextInt();
                sc.nextLine(); // Consume newline

                switch (choice) {
                    case 1:
                        System.out.print("\nEnter the text to encrypt: ");
                        String plainText = sc.nextLine();
                        byte[] cipherText = do_RSAEncryption(plainText, keypair.getPrivate());

                        String encryptedText = Base64.getEncoder().encodeToString(cipherText);
                        try (FileWriter writer = new FileWriter("encrypted.txt")) {
                            writer.write(encryptedText);
                        } catch (IOException e) {
                            e.printStackTrace();
                        }
                        System.out.println("\nText Encrypted and Stored in 'encrypted.txt'");
                        break;

                    case 2:
                        try {
                            String encryptedData = Files.readString(Path.of("encrypted.txt"));
                            byte[] encryptedBytes = Base64.getDecoder().decode(encryptedData);
                            String decryptedText = do_RSADecryption(encryptedBytes, keypair.getPublic());
                            System.out.println("\nDecrypted text: " + decryptedText);
                        } catch (IOException e) {
                            System.out.println("\nError reading encrypted data from file.");
                        }
                        break;

                    case 3:
                        System.out.println("\nPublic Key: " +
                            shortByteArrayToHexString(keypair.getPublic().getEncoded(), 32));
                        System.out.println("\nPrivate Key: " +
                            shortByteArrayToHexString(keypair.getPrivate().getEncoded(), 32));
                        break;

                    case 4:
                        try {
                            String encryptedData = Files.readString(Path.of("encrypted.txt"));
                            System.out.println("\nEncrypted Text: " + encryptedData);
                        } catch (IOException e) {
                            System.out.println("\nError reading encrypted data from file.");
                        }
                        break;

                    case 5:
                        System.out.println("\nThanks for Using Program\n\nExiting...");
                        break;

                    default:
                        System.out.println("\nInvalid choice. Please Enter a valid option.");
                }
            }
            while (choice != 5);
        }
    }