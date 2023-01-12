
function addNewTask() {
    let task = document.querySelector(".txtTask")
    if(task.value == ""){
        alert("Digite uma atividade")
    }else{
        let inputItem = document.getElementById("box")
        let item = document.createElement("div")
        item.className = "item"
        let newTask = document.createElement("input")
        newTask.id = "itemList"
        
        let btnEdit = document.createElement("input")
        btnEdit.type = "button"
        btnEdit.id = "btnEdit"
        btnEdit.value = "Edit task" 
        
        
        newTask.value = task.value
        item.appendChild(newTask)
        item.appendChild(btnEdit)
    
        inputItem.appendChild(item)
    } 
}