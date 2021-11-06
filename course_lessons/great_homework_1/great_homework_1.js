'use strict';

let userList = [];
let currentUserId;

showGreeting();
getMenuChoice(userList);

function showGreeting() {
    alert("Welcome!");
}

function showGoodbye() {
    alert("See you soon!");
}

function showMenu() {
    let choice;

    choice = prompt(
        "a) Sign in\n" +
        "b) Log in\n" +
        "c) Show user list\n" +
        "d) Change user data\n" +
        "q) Exit"
    );

    return choice;
}

function getMenuChoice() {
    switch(showMenu()) {
        case 'a' :
            registration();
            break;
        case 'b' :
            loginIn();
            break;
        case 'c' :
            showUserList();
            break;
        case 'd' :
            changeUserData();
            break;
        case 'q' :
            exit();
            break;
        default :
            alert("incorrect input");
            getMenuChoice();
    }
}

function getMenuReturn() {
    return confirm("Do you want to return to the menu?");
}

function returnMenu() {
    if (getMenuReturn()) {
        getMenuChoice();
    } else {
        showGoodbye();
    }
}

function addNewUser(firstName, lastName, userEmail, userPassword) {
    let newUser = {
        firstName,
        lastName,
        userEmail,
        userPassword
    };

    userList.push(newUser);
}


function showNewUser() {
    alert(userList[userList.length - 1].firstName + " " +
        userList[userList.length - 1].lastName + " was successfully added");
}

function registration() {
    let firstName, lastName, userEmail, userPassword;

    firstName = prompt("Enter your first name:");
    lastName = prompt("Enter your last name:");
    userEmail = prompt("Enter your email:");
    userPassword = prompt("Enter your password:");

    addNewUser(firstName, lastName, userEmail, userPassword);
    showNewUser();
    returnMenu();
}

function checkEmail(userEmail) {
    let emailCheck = false;

    for (let i = 0; i < userList.length; i++) {
        if (userEmail === userList[i].userEmail) {
            emailCheck = true;
            break;
        }
    }

    return emailCheck;
}

function getEmailId(userEmail) {
    let emailId;

    for (let i = 0; i < userList.length; i++) {
        if (userEmail === userList[i].userEmail) {
            emailId = i;
            break;
        }
    }

    return emailId;
}

function checkPassword(userEmail, userPassword) {
    if (userList[getEmailId(userEmail)].userPassword === userPassword) {
        currentUserId = getEmailId(userEmail);
        alert("Welcome, " + userList[getEmailId(userEmail)].firstName + " " +
            userList[getEmailId(userEmail)].lastName + "!");
    } else {
        alert("Incorrect password!");
        returnMenu();
    }
}

function loginIn() {
    let userEmail, userPassword;

    userEmail = prompt("Enter your email:");

    if(checkEmail(userEmail)) {
        userPassword = prompt("Enter your password:");
        checkPassword(userEmail, userPassword);
    } else {
        alert("No such user found!");
        returnMenu();
    }

    returnMenu();
}

function showUserList() {
    let userNames = "";

    for(let i = 0; i < userList.length; i++) {
        userNames += i + ")" + " " + userList[i].firstName + " " + userList[i].lastName + "\n";
    }

    alert(userNames);
    returnMenu();
}

function showChangeMenu() {
    let choice;

    choice = prompt(
        "a) Change first name\n" +
        "b) Change last name\n" +
        "c) Change email\n" +
        "d) Change password"
    );

    return choice;
}

function changeFirstName() {
    let newFirstName;

    newFirstName = prompt("Enter new first name:");
    userList[currentUserId].firstName = newFirstName;
    alert("First name was successfully changed!");

    getMenuChoice();
}

function changeLastName() {
    let newLastName;

    newLastName = prompt("Enter new last name:");
    userList[currentUserId].lastName = newLastName;
    alert("Last name was successfully changed!");

    getMenuChoice();
}

function changeEmail() {
    let newEmail;

    newEmail = prompt("Enter new email name:");
    userList[currentUserId].userEmail = newEmail;
    alert("Email was successfully changed!");

    getMenuChoice();
}

function changePassword() {
    let newPassword;

    newPassword = prompt("Enter new first name:");
    userList[currentUserId].userPassword = newPassword;
    alert("Password was successfully changed!");

    getMenuChoice();
}

function changeUserData() {
    if(currentUserId !== undefined) {
        switch (showChangeMenu()) {
            case 'a' :
                changeFirstName();
                break;
            case 'b' :
                changeLastName();
                break;
            case 'c' :
                changeEmail();
                break;
            case 'd' :
                changePassword();
                break;
            default :
                alert("incorrect input");
                getMenuChoice();
        }
    } else {
        alert("You are not authorized!");
        getMenuChoice();
    }
}

function exit() {
    showGoodbye();
}
