var inp = document.getElementById("input");
var list = document.querySelector(".list");
var deletedList = document.querySelector(".deletedList");
const addItem = () => {
    if (inp.value === "") {
        alert("first enter some task")
        return
    }
    var newElement = document.createElement("div");
    newElement.className = "Item";
    var txt = document.createTextNode(inp.value);
    newElement.appendChild(txt);
    list.appendChild(newElement);
    var doneBtn = document.createElement("button");
    inp.value = ""
    doneBtn.className = "doneBtn";
    doneBtn.innerHTML='<i class="fa-solid fa-trash"></i>';
    newElement.appendChild(doneBtn);
    doneBtn.onclick = function () {       
        this.parentNode.remove();
        var x = this.parentNode.textContent
        var delEL = document.createElement('div')
        var delELtxt = document.createTextNode(x);
        delEL.appendChild(delELtxt);
        deletedList.appendChild(delEL);

    } 
}
