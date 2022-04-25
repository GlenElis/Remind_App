let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let reminders = document.getElementById("reminders");
let add = document.getElementById("add");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    formValidation();
});

let formValidation = () => {
    if(textInput.value === ""){
        console.log('failure')
        msg.innerHTML = "Reminder cannot be blank";
    }else{
        console.log('Success');
        msg.innerHTML = "";
        acceptData();
        add.setAttribute("data-bs-dismiss", "modal");
        add.click();

        (() => {
            add.setAttribute("data-bs-dismiss", "");  
        })();
    }
};

let data = {};


let acceptData = () => {
    data["text"] = textInput.value;
    data["date"] = dateInput.value;
    data["description"] = textarea.value;

    createReminders();
};

let createReminders = ()=>{
    reminders.innerHTML += 
    `
    <div>
    <span class="fw-bold">${data.text}</span>
    <span class="small text-secondary">${data.date}</span>
    <p>${data.description}</p>

    <span class="options">
    <i onClick="editReminder(this)" data-bs-toggle="modal" data-bs-target="#form" class="fa-solid fa-pen-to-square"></i>
    <i onClick="deleteReminder(this)" class="fa-solid fa-trash-can"></i>
    </span>
    </div>
    `;

    resetForm();
};

let deleteReminder = (e) => {
    e.parentElement.parentElement.remove();
};

let editReminder = (e) => {
    let selectedReminder = e.parentElement.parentElement;

    textInput.value = selectedReminder.children[0].innerHTML;
    dateInput.value = selectedReminder.children[1].innerHTML;
    textarea.value = selectedReminder.children[2].innerHTML;

    selectedReminder.remove();
};

let resetForm = () => {
    textInput.value = "";
    dateInput.value = "";
    textarea.value = "";
};

