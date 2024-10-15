//DOM elements
const usernameInput = document.getElementById('username');
const saveBtn = document.getElementById('save-btn');
const clearBtn = document.getElementById('clear-btn');
const displayName = document.getElementById('display-name');

//function to determine the time-based greeting
function getTimeBasedGreeting() {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {     //if statement to determine which message to show depending on time
        return 'Good Morning';
    } else if (currentHour < 18) {
        return 'Good Afternoon';
    } else {
        return 'Good Evening';
    }
}

//function to load and display the saved name from localStorage with time-based greeting
function loadSavedName() {
    const savedName = localStorage.getItem('savedName');  //gets the saved name from localStorage
    if (savedName) {
        const greeting = getTimeBasedGreeting();        //gets the time-based greeting
        displayName.textContent = `${greeting}, ${savedName}!`;     //displays the greeting and name
        displayName.style.display = 'block';    //makes the name visible
        usernameInput.value = savedName;        //set the input value to the saved name
    } else {
        displayName.style.display = 'none';     //hide the display if no name is saved
    }
}

//save name to localStorage and display it with time-based greeting
saveBtn.addEventListener('click', () => {
    const username = usernameInput.value;
    if (username) {
        localStorage.setItem('savedName', username);      
        const greeting = getTimeBasedGreeting();          
        displayName.textContent = `${greeting}, ${username}!`;  
        displayName.style.display = 'block';              
    }
});

//clear saved name from localStorage and UI
clearBtn.addEventListener('click', () => {
    localStorage.removeItem('savedName');  //remove the saved name from localStorage
    displayName.style.display = 'none';    //hide the name display
    usernameInput.value = '';       //clear the input field
});

//load the saved name when the page is loaded with a time-based greeting
window.addEventListener('DOMContentLoaded', loadSavedName);



