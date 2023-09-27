const heading = document.getElementById("heading")
const nameInput = document.getElementById("name-input")
const inputBox = document.getElementById("input-box");
const list = document.getElementById("list");

// First, we establish four constants that take their values from the Name Box, 
// actual name value, Task Input Box, and the to-do list itself.


// This code firstly ensures that the user inputs some text value into the task
// bar before pressing enter. If that is satisfied, the code creates a list
// element that has the value of the Input Box, and saves the data.
function enterVal(){
    if(inputBox.value === ''){
        alert("Input Value Into Text Box");
    }
    //
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list.appendChild(li);

        //
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputBox.value = "";
    saveData();
    //
}

// This code allows the user to enter a name for the list by adding in text to the 
// Name input box. It assigns a name to the list through the heading element, and saves data.

function enterName(){
    if(nameInput.value === ''){
        alert("Input Value Into Text Box");
    }
    //
    else {
        heading.innerHTML = nameInput.value;

    }
    nameInput.value = "";
    saveData();
    //
}

// This code allows the enter checked or unchecked classes to work, where we use CSS to
// change the way a list item looks based on whether it is toggled or not.
    
list.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// This code ensures that when the user clicks the enter button, it adds to the 
// to-do list as well.

inputBox.addEventListener("keypress", function(enterVal){
    if (event.key == "Enter"){
        document.getElementById("todo").click();
    }
});

// This code saves the list data locally , and calls it when the website is refreshed.
function saveData(){
    localStorage.setItem("data", list.innerHTML);
    localStorage.setItem("name", heading.innerHTML);
}

function showTasks(){
    list.innerHTML = localStorage.getItem("data");
    heading.innerHTML = localStorage.getItem("name");
}
showTasks();