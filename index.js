// Toggling the menu in sm an xs devices

let menu = document.querySelector(".menu");
// console.log(menu);
let sidebar = document.querySelector("aside");

// let count = 0;
let toggle = false;
const showMenu = ()=>{
    // console.log("Menu btn is clicked");
    if( !toggle ){
        sidebar.style.display = "block";
        // sidebar.style.marginTop = "0rem";
        sidebar.style.marginLeft = "1rem";
        sidebar.style.marginRight = "1rem";
        sidebar.style.borderRadius = "0.5rem"
        toggle = true;
    }
    else{
        sidebar.style.display= "none";
        toggle= false;
    }
    // count++;

    // console.log("count", count);
}

// let listItem = document.querySelectorAll(".list-item");
// // console.log(listItem);
// listItem.forEach(item=>{
//     item.addEventListener('click', ()=>{
//         let activeClass = document.querySelector(".active");
//         // activeClass.classList.remove("active");
//         item.classList.add("active");
//     })
// })

// Switching between different sections of menubar

let listItem = document.querySelectorAll(".list-item");
// let activeClass = document.querySelector(".active");

listItem.forEach(item =>{
    item.addEventListener('click', ()=>{
        document.querySelector(".active")?.classList.remove("active");
        item.classList.add("active");
    })
})

// Changing the contents of the page depending on the menubar

let dashboard = document.querySelector('.dashboard');
// console.log(dashboard);
let analyse = document.querySelector('.analysis');
let documents = document.querySelector('.documents');
let inbox = document.querySelector('.inbox');
let history = document.querySelector('.history');
let settings = document.querySelector('.settings')

let welcomeHead = document.querySelector('.welcome');
let mediaBox = document.querySelector('.media-box');
let userBox = document.querySelector('.user-details');
let sideContainer = document.querySelector('.side-container');
let myStudents = document.querySelector('.my-students');
let workHours = document.querySelector('.work-hours');
let spinner =  document.querySelector('.spinner');
let layer = document.querySelector('.layer');

dashboard.addEventListener('click', ()=>{
    spinner.style.display = "block";
    layer.style.display = "block";
    myStudents.style.display = "none";
    workHours.style.display = "none";
    mediaBox.style.visibility = "hidden";
    welcomeHead.style.visibility = "hidden";
    sideContainer.style.visibility = "hidden";
    userBox.style.visibility = "hidden"; 
    setTimeout(()=>{
        layer.style.display = "none";
        welcomeHead.style.visibility = "visible";
        mediaBox.style.visibility = "visible";
        userBox.style.visibility = "visible";
        sideContainer.style.visibility = "visible";
        myStudents.style.display = "block";
        workHours.style.display = "block";
        spinner.style.display = "none";   
    },1500);
    
})
analyse.addEventListener('click', ()=>{
    layer.style.display = "block";
    welcomeHead.style.visibility = "hidden";
    mediaBox.style.visibility = "hidden";
    userBox.style.visibility = "hidden";
    sideContainer.style.visibility = "hidden"; 
    myStudents.style.display = "none";
    workHours.style.display = "none";
    spinner.style.display = "block";
    setTimeout(()=>{
        layer.style.display = "none";
        spinner.style.display = "none";
        myStudents.style.display = "block";
        workHours.style.display = "block";
    },1500)
})  

documents.addEventListener('click', ()=>{
    layer.style.display = "block";
    welcomeHead.style.visibility = "hidden";
    sideContainer.style.visibility = "hidden";   
    myStudents.style.display = "none";
    workHours.style.display = "none";
    userBox.style.visibility = "hidden";
    mediaBox.style.visibility = "hidden";
    spinner.style.display = "block";
    setTimeout(()=>{
        layer.style.display = "none";
        spinner.style.display = "none";
        mediaBox.style.visibility = "visible";
    },1500);
})

history.addEventListener('click', ()=>{
    
})