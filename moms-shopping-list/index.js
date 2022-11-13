// part 1
let form = document.addItem;
let list = document.getElementById("list");

form.addEventListener("submit",(e) => {
    e.preventDefault();
   //add new item in new li
// 1. create new <li></li>
   let newLi = document.createElement("li");

   let newDiv = document.createElement("div");
//    append new li to list
    list.append(newLi);
    // 2. add new value from box into <li><div></div></li>
   let newItem = form.title.value;
   newDiv.textContent = newItem;
   
   newLi.prepend(newDiv);
   form.title.value = "";
// create edit button
let editButton = document.createElement("button");
editButton.textContent = "edit";
editButton.setAttribute("class","editBtn");
// create delete button
let deleteButton = document.createElement("button");
deleteButton.textContent = "X";
deleteButton.setAttribute("class","deleteBtn");
// add edit and delete buttons to new list item
newLi.append(editButton, deleteButton);

// part 2
// be able to delete item from list using the delete button
deleteButton.addEventListener("click", () => {
      newLi.remove();
   })
// Extra credit
let saveButton = document.createElement("button");
saveButton.textContent = "save";

let inputBox = document.createElement("input");

editButton.addEventListener("click", () => {
      newLi.append(inputBox);
      inputBox.value = newItem;
      newLi.append(saveButton);
   })

saveButton.addEventListener("click", () => {
      newLi.textContent = inputBox.value;
      inputBox.remove();
      saveButton.remove();
      newLi.append(editButton, deleteButton);

   })
});
 


