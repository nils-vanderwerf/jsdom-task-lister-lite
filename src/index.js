document.addEventListener("DOMContentLoaded", () => {

  // your code here
  const mySubmitButton = document.querySelector("input[value='Create New Task']");
  const resetList = document.querySelector("input[value='Reset List']");
  console.log(mySubmitButton);
  mySubmitButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    console.log ("button-clicked");
    
    let value = document.getElementById("new-task-description").value;
    console.log(value);
    addUserInput(value);
  });

  resetList.addEventListener("click", function(evt) {
    clearList();
  });
  
});

function addUserInput(val) {
  const ul = document.querySelector("ul#tasks");
  const li = document.createElement('li');
  li.setAttribute('id', 'task-item');
  li.textContent = val;
  ul.appendChild(li);
}

function clearList() {
  let element = document.getElementById('list');
  let child = element.lastElementChild;
  //while there are still child elements in the list, remove them
  while (child) {
      element.removeChild(child);
      child = element.lastElementChild;
  }
}