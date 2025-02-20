
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
//  FOR DONE JAB SARA DATA LIKH LAN TU LOCAL STORE KRENY KA LEA
    document.getElementById("doneButton").addEventListener("click", function () {
        rowData[0].textContent = inputs[0].value;
        rowData[1].textContent = inputs[1].value;
        rowData[2].textContent = inputs[2].value;
        rowData[3].textContent = inputs[3].value;
        rowData[4].textContent = inputs[4].value;
        modal.style.display = "none";
    });
}
function Cancel() {
    const modal = document.getElementById("modall");
    modal.style.display = "none";
}

