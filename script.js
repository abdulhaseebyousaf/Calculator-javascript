
let string = "";


let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        let value = e.target.innerHTML;

        if (value === "=") {
            try {
                string = string.replace(/(^|[+\-*/])0+(\d+)/g, "$1$2");
                string = eval(string).toString();
                document.querySelector("input").value = string;
            } catch {
                string = "";
                document.querySelector("input").value = "";
            }
        } else if (value === "C") {
            string = "";
            document.querySelector("input").value = string;
        } else if (value === "DEL") {
            string = string.slice(0, -1);
            document.querySelector("input").value = string;
        } else {
            string += value;
            document.querySelector("input").value = string;
        }
    });
});

function validateNumber(input) {
    input.value = input.value.replace(/[^0-9+\-*/.]/g, "");
}
