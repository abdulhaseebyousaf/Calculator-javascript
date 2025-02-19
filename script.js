
var myArray = [    
    {
        "Ecode":"15",
        "Ename":"Haseeb",
        "Salary":"95000",
        "Age":"20",
        "joinDate":"2024-8-7"
       },
       
       {
           "Ecode":"25",
        "Ename":"Sameer",
        "Salary":"20000",
        "Age":"28",
        "joinDate":"2022-7-14"
       },

       {
        "Ecode":"26",
     "Ename":"Abdullah",
     "Salary":"25000",
     "Age":"32",
     "joinDate":"2012-8-17"
    },

    {
        "Ecode":"27",
     "Ename":"Usman",
     "Salary":"15000",
     "Age":"55",
     "joinDate":"2012-8-19"
    },

    {
        "Ecode":"28",
     "Ename":"Momin",
     "Salary":"55000",
     "Age":"60",
     "joinDate":"2011-2-15"
    },

    {
        "Ecode":"29",
     "Ename":"Humara",
     "Salary":"35000",
     "Age":"26",
     "joinDate":"2012-8-9"
    },

    {
        "Ecode":"30",
     "Ename":"Rabia",
     "Salary":"39000",
     "Age":"21",
     "joinDate":"2022-7-21"
    },
   ]

document.addEventListener("DOMContentLoaded", function () {
    
    document.querySelectorAll("ion-icon").forEach((icon) => {
        icon.addEventListener("click", function () {
            const row = this.closest("tr");

           
            if (this.getAttribute("name") === "eye-outline") {
                showData(row);
            } 
            else if (this.getAttribute("name") === "trash-outline") {
                deleteRow(row);
            }
             else if (this.getAttribute("name") === "pencil-outline") {
                editRow(row);
            }
        });
    });

    document.querySelector("#modal button").addEventListener("click", function () {
        document.getElementById("modal").classList.add("hidden");
    
    });
});

function showData(row) {
    const rowData = row.querySelectorAll("td");
    const modal = document.getElementById("modal");
    const fields = modal.querySelectorAll("div.p-2");

    fields[0].innerText = rowData[0].innerText; 
    fields[1].innerText = rowData[1].innerText; 
    fields[2].innerText = rowData[2].innerText; 
    fields[3].innerText = rowData[3].innerText;
    fields[4].innerText = rowData[4].innerText; 
    document.getElementById("modal").classList.add("flex");
    modal.classList.remove("hidden");
}

function deleteRow(row) {
    row.remove();
}

function editRow(row) {
    row.querySelectorAll("td").forEach((td, index) => {
        if (index !== row.children.length - 1) {
            let input = document.getElementById("modall");
            input.style.display = "flex";
            input.type = "text";
            input.value = td.innerText;
            td.innerHTML = "";
            td.appendChild(input);

          
            input.addEventListener(function () {
                td.innerText = input.value;
            });
        }
    });
}