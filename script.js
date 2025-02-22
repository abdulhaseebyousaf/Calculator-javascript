
document.addEventListener("DOMContentLoaded", function () {
   
    document.querySelectorAll("ion-icon").forEach((icon) => {
        icon.addEventListener("click", function () {
            const row = this.closest("tr");

            
            if (this.getAttribute("name") === "eye-outline") {
                showData(row);
            } else if (this.getAttribute("name") === "trash-outline") {
                deleteRow(row);
            } else if (this.getAttribute("name") === "pencil-outline") {
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

    modal.classList.add("flex");
    modal.classList.remove("hidden");
}

function deleteRow(row) {
    row.remove();
}

function editRow(row) {
    const modal = document.getElementById("modall");
    const inputs = modal.querySelectorAll("input");
    const rowData = row.querySelectorAll("td");


    inputs[0].value = rowData[0].textContent.trim();
    inputs[1].value = rowData[1].textContent.trim();
    inputs[2].value = rowData[2].textContent.trim();
    inputs[3].value = rowData[3].textContent.trim();
    inputs[4].value = rowData[4].textContent.trim();

  
    modal.style.display = "flex";

   
    inputs[1].addEventListener("input", function () {
        this.value = this.value.replace(/[^a-zA-Z\s]/g, "");
    });

   
    inputs[4].addEventListener("keydown", function (event) {
        if (event.key.length === 1 && !/[0-9]/.test(event.key)) {
            event.preventDefault();
        }
    });

    const doneButton = document.getElementById("doneButton");
    const cancelButton = document.getElementById("Cancel");

    
    const doneHandler = function () {
        rowData[0].textContent = inputs[0].value;
        rowData[1].textContent = inputs[1].value;
        rowData[2].textContent = inputs[2].value;
        rowData[3].textContent = inputs[3].value;
        rowData[4].textContent = inputs[4].value;
        modal.style.display = "none";
        doneButton.removeEventListener("click", doneHandler);
        cancelButton.removeEventListener("click", cancelHandler);
    };


    const cancelHandler = function () {
        modal.style.display = "none";
        doneButton.removeEventListener("click", doneHandler);
        cancelButton.removeEventListener("click", cancelHandler);
    };

   
    doneButton.addEventListener("click", doneHandler);
    cancelButton.addEventListener("click", cancelHandler);
}

function Cancel() {
    const modal = document.getElementById("modall");
    modal.style.display = "none";
    document.getElementById("addUser").style.display = "none";
}

function handleOpenModal() {
    const addUserModal = document.getElementById("addUser");
    addUserModal.style.display = "flex";
}

document.getElementById("ename").addEventListener("input", function () {
    this.value = this.value.replace(/[^a-zA-Z\s]/g, "");
});

document.getElementById("add").addEventListener("click", function () {
    const addUserModal = document.getElementById("addUser");
    addUserModal.style.display = "none";
    
    let ecode = document.getElementById("ecode").value.trim();
    let ename = document.getElementById("ename").value.trim();
    let salary = document.getElementById("salary").value.trim();
    let age = document.getElementById("age").value.trim();
    let joinDate = document.getElementById("joinDate").value.trim();

    let table = document.getElementById("tabel");
    let tbody = table.querySelector("tbody");
    if (!tbody) {
        tbody = document.createElement("tbody");
        table.appendChild(tbody);
    }

    let newRow = tbody.insertRow();
    newRow.innerHTML = `
        <td class="hover:bg-teal-600 text-center transition-all duration-500 hover:text-orange-300 text-white px-2 py-2">${ecode}</td>

        <td class="hover:bg-teal-600 text-center transition-all duration-500 hover:text-orange-300 text-white px-2 py-2">${ename}</td>

        <td class="hover:bg-teal-600 text-center transition-all duration-500 hover:text-[#bd353e] text-white px-2 py-2">${salary}</td>

        <td class="hover:bg-teal-600 text-center transition-all duration-500 hover:text-orange-300 text-white px-2 py-2">${age}</td>

        <td class="hover:bg-teal-600 text-center transition-all duration-500 hover:text-orange-300 text-white px-2 py-2">${joinDate}</td>
        <td class="flex text-center px-2 justify-center py-2 gap-3">

            <ion-icon class="icon view-icon text-1xl text-lime-500 border p-[2px] border-lime-500 rounded-full" name="eye-outline"></ion-icon>

            <ion-icon class="icon delete-icon text-1xl text-red-500 border p-[2px] border-red-500 rounded-full" name="trash-outline"></ion-icon>

            <ion-icon class="icon edit-icon text-1xl text-blue-600 border p-[2px] border-blue-600 rounded-full" name="pencil-outline"></ion-icon>
        </td>
    `;

    newRow.querySelector(".view-icon").addEventListener("click", function () {
        showData(newRow);
    });

    newRow.querySelector(".delete-icon").addEventListener("click", function () {
        newRow.remove();
        
    });

    newRow.querySelector(".edit-icon").addEventListener("click", function () {
        editRow(newRow);
    });

    document.getElementById("ecode").value = "";
    document.getElementById("ename").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("age").value = "";
    document.getElementById("joinDate").value = "";

});

ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200,
   });
   ScrollReveal().reveal('#tabel', { origin: 'bottom' });
   ScrollReveal().reveal('.heading', { origin: 'right' });
