
let n = 11; // size // must be odd number
let col_size = n + n - 1;
let n_half = Math.floor(n/2);

let container = document.getElementsByClassName("output-container")[0];

for(let row = 0; row < n; row++){
    let row_element = document.createElement("div");
    container.appendChild(row_element);

    for(let col = 0; col < col_size; col++){
        let col_element = document.createElement("span");
       
        if(col+row == n_half || col == row + n_half || row == col+n_half ||
            row+col == n-1+n_half
            //last edge
            || col == row+(n_half*3) || row+col == n-1+n_half*3
        ){
            col_element.innerHTML = "*";
        }
        col_element.classList.add("box");
        row_element.appendChild(col_element);
    }
}