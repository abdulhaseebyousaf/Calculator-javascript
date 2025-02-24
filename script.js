let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=> {
button.addEventListener('click',(e)=> {
    if(e.target.innerHTML === '='){
        string = eval(string)
        document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML === 'C'){
        string = ""
        document.querySelector('input').value = string;
    }
    else {
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
    }
    if (e.target.innerHTML === 'DEL'){
        string = string.slice(0, -4);
        document.querySelector('input').value = string;
    }
})
})
function validateNumber(input) {
    input.value = input.value.replace(/[^0-9,+,-,*,=,/]/g, ''); 
  }