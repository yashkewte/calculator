let input = document.querySelector("#inputBox")
let buttons = document.querySelectorAll("button")

let string = "";
let arr = Array.from(buttons)
console.log(arr);

for(let buttons of arr){
    buttons.addEventListener("click", (e) => {
        if(e.target.innerHTML === "="){
            string = eval(string)
            input.value = string;
        }
        else if(e.target.innerHTML === "AC"){
            string = "";
            input.value = string
        }
        else if(e.target.innerHTML === "DEL"){
            string = string.substring(0, string.length-1)
            input.value = string
        }
        else{
            string += e.target.innerHTML;
            input.value = string
        }
        
    })
}