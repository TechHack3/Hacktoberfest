# Contribution Rules📚:

- Do NOT add any DSA Codes
- Do NOT remove other content.
- Styling/code can be pretty, ugly or stupid, big or small as long as it works
- Add your name to the contributorsList file
- Try to keep pull requests small to minimize merge conflicts

## Mandatory Step :
- You have to star this repository

## Getting Started 🤩🤗:

- Fork this repo (button on top)
- Clone on your local machine

Open terminal
```
git clone https://github.com/TechHack3/Hacktoberfest2023.git
```

- Navigate to project directory.
  
```
cd Hacktoberfest2023
```


- Create a new Branch

```
git checkout -b my-new-branch
```

- To Add your File to our repo

```
git add .
```

- Commit your changes.

```
git commit -m "Relevant message"
```

- Then push 

```
git push origin my-new-branch
```

- Create a new pull request from your forked repository

<br>

## Avoid Conflicts {Syncing your fork}

An easy way to avoid conflicts is to add an 'upstream' for your git repo, as other PR's may be merged while you're working on your branch/fork.   

terminal
git remote add upstream https://github.com/TechHack3/Hacktoberfest2023


You can verify that the new remote has been added by typing
terminal
git remote -v


To pull any new changes from your parent repo simply run
terminal
git merge upstream/master


This will give you any eventual conflicts and allow you to easily solve them in your repo. It's a good idea to use it frequently in between your own commits to make sure that your repo is up to date with its parent.
