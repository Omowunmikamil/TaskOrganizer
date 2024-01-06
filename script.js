const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("container-list");

function addTask() {
    if(inputBox.value === '') {
        alert("You must write something");
    }
    else {
        const list = document.createElement("li");
        list.innerText = inputBox.value;
        listContainer.appendChild(list);
        const span = document.createElement("span");
        span.innerText = "x";
        list.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", function(event) {
    if(event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        saveData()
    }
    else if(event.target.tagName === "SPAN") {
        event.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showlist() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showlist();