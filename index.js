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
    layer.style.display = "block";
    spinner.style.display = "block";
    setTimeout(()=>{
        myStudents.style.display = "none";
        workHours.style.display = "none";
        mediaBox.style.visibility = "hidden";
        welcomeHead.style.visibility = "hidden";
        sideContainer.style.visibility = "hidden";
        userBox.style.visibility = "hidden"; 
    }, 500)
   
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
    spinner.style.display = "block";
    setTimeout(()=>{
        welcomeHead.style.visibility = "hidden";
        mediaBox.style.visibility = "hidden";
        userBox.style.visibility = "hidden";
        sideContainer.style.visibility = "hidden"; 
        myStudents.style.display = "none";
        workHours.style.display = "none";
    },500);
   
    setTimeout(()=>{
        layer.style.display = "none";
        spinner.style.display = "none";
        myStudents.style.display = "block";
        workHours.style.display = "block";
    },1500)
})  

documents.addEventListener('click', ()=>{
    layer.style.display = "block";
    spinner.style.display = "block";
    setTimeout(()=>{
        welcomeHead.style.visibility = "hidden";
        sideContainer.style.visibility = "hidden";   
        myStudents.style.display = "none";
        workHours.style.display = "none";
        userBox.style.visibility = "hidden";
        mediaBox.style.visibility = "hidden";
    }, 500);

    setTimeout(()=>{
        layer.style.display = "none";
        spinner.style.display = "none";
        mediaBox.style.visibility = "visible";
    },1500);
})

// history.addEventListener('click', ()=>{
    
// })


// View all pop-up for students
let viewStudent = document.querySelector('#viewStudent');
let background = document.querySelector('.main');
let sudentDetails = document.querySelector('.studentDetails');
let stuCloseBtn = document.querySelector('.stuCloseBtn');

viewStudent.addEventListener('mouseenter',()=>{
    viewStudent.style.cursor = "pointer";       
})

viewStudent.addEventListener('click', ()=>{
    layer.style.display = "block";
    spinner.style.display = "block";
    setTimeout(()=>{
        sudentDetails.style.display = "block";
        background.style.filter = "blur(10px)";
        background.style.opacity = "0.5"
        // background.style.zIndex = "-1";
    },1000)
})

stuCloseBtn.addEventListener('mouseenter', ()=>{
    stuCloseBtn.style.cursor = "pointer";
})

stuCloseBtn.addEventListener('click', ()=>{
        layer.style.display = "none";
        spinner.style.display = "none";
        sudentDetails.style.display = "none";
        background.style.filter = "blur(0px)";
        background.style.opacity = "1"
        // background.style.zIndex = "0"; 
})

// Popup for media box
let viewMedia = document.querySelector("#media-view");
let medDetails = document.querySelector('.mediaDetails');
let medCloseBtn = document.querySelector(".medCloseBtn");

viewMedia.addEventListener('mouseenter', ()=>{
    viewMedia.style.cursor = "pointer";
})

viewMedia.addEventListener('click', ()=>{
    layer.style.display = "block";
    spinner.style.display = "block";
    setTimeout(()=>{
        medDetails.style.display = "block";
        background.style.filter = "blur(10px)";
        background.style.opacity = "0.5";
        // background.style.zIndex = "-1";
    }, 1000)
})

medCloseBtn.addEventListener('mouseenter', ()=>{
    medCloseBtn.style.cursor = "pointer";
})

medCloseBtn.addEventListener('click', ()=>{
    layer.style.display = "none";
    spinner.style.display = "none";
    medDetails.style.display = "none";
    background.style.filter = "blur(0px)";
    background.style.opacity = "1"
    // background.style.zIndex = "0"; 
})

// Popup for lessons
let lessonView = document.querySelector('#lesson-view');
let lessonDetails = document.querySelector('.lessonDetails');
let lessCloseBtn = document.querySelector('.lessCloseBtn');

lessonView.addEventListener('mouseenter', ()=>{
    lessonView.style.cursor = "pointer";
})

lessonView.addEventListener('click', ()=>{
    layer.style.display = "block";
    spinner.style.display = "block";
    setTimeout(()=>{
        lessonDetails.style.display = "block";
        background.style.filter = "blur(10px)";
        background.style.opacity = "0.5";
        // background.style.zIndex = "-1";
    },1000)
})

lessCloseBtn.addEventListener('mouseenter', ()=>{
    lessCloseBtn.style.cursor = "pointer";
})

lessCloseBtn.addEventListener('click', ()=>{
    layer.style.display = "none";
    spinner.style.display = "none";
    lessonDetails.style.display = "none";
    background.style.filter = "blur(0px)";
    background.style.opacity = "1";
    // background.style.zIndex = "0";
})

// Popup for completed tasks
let taskView = document.querySelector("#task-view");
let taskDetails = document.querySelector('.taskDetails');
let taskCloseBtn = document.querySelector('.taskCloseBtn');

taskView.addEventListener('mouseenter', ()=>{
    taskView.style.cursor = "pointer";
})

taskView.addEventListener('click', ()=>{
    layer.style.display = "block";
    spinner.style.display = "block";
    setTimeout(()=>{
        taskDetails.style.display = "block";
        background.style.filter = "blur(10px)";
        background.style.opacity = "0.5";
        // background.style.zIndex = "-1";
    },1000)
})

taskCloseBtn.addEventListener('mouseenter', ()=>{
    taskCloseBtn.style.cursor = "pointer";
})

taskCloseBtn.addEventListener('click', ()=>{
    layer.style.display = "none";
    spinner.style.display = "none";
    taskDetails.style.display = "none";
    background.style.filter = "blur(0px)";
    background.style.opacity = "1";
    // background.style.zIndex = "0";
})


// Toggling of search icon

let searchBar = document.querySelector('.search-dropdown');
let searchBtn = document.querySelector('.search-btn');
let toggleSearch = false;

searchBtn.addEventListener('click', (event)=>{
    if(!toggleSearch){
        event.target.style.transform = "rotate(90deg)";
        setTimeout(()=>{
            searchBar.classList.add('show');
        },200)
        toggleSearch = true;
    }
    else{
        event.target.style.transform = "";
        searchBar.classList.remove('show');
        toggleSearch = false;
    }
})

// Toggling of notification menu

let notifyMenu = document.querySelector('.notify-dropdown-container');
let notifyBtn = document.querySelector('.notification-btn');
let toggleNotify = false;

notifyBtn.addEventListener('click', (event)=>{
    if(!toggleNotify){
        event.target.style.transform = "rotate(90deg)";
        event.target.style.backgroundColor = "rgb(238, 189, 185)";
        setTimeout(()=>{
            notifyMenu.classList.add('show');
        },200)
        toggleNotify = true;
    }
    else{
        event.target.style.transform = "";
        event.target.style.backgroundColor = "";
        notifyMenu.classList.remove('show');
        toggleNotify = false;
    }   
})


// Toggling of profilemenu

let profileMenu = document.querySelector('.profile-dropdown-container');
let profileImage = document.querySelector('.profile-img');
// console.log(profileMenu);
let toggleMenu = false;

profileImage.addEventListener('click', (event)=>{
   if(!toggleMenu){
    event.target.style.transform = "rotate(90deg)";
    setTimeout(()=>{
        profileMenu.classList.add('show');
    },200)
    toggleMenu = true;
   }
   else{
    event.target.style.transform = "";
    profileMenu.classList.remove('show');
    toggleMenu = false;
   }
})
