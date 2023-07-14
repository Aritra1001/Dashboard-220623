// Toggling the menu in sm an xs devices

let menu = document.querySelector(".menu");
// console.log(menu);
let sidebar = document.querySelector("aside");

// let count = 0;
let toggle = false;
const showMenu = () => {
  // console.log("Menu btn is clicked");
  if (!toggle) {
    sidebar.style.display = "block";
    // sidebar.style.marginTop = "0rem";
    sidebar.style.marginLeft = "1rem";
    sidebar.style.marginRight = "1rem";
    sidebar.style.borderRadius = "0.5rem";
    toggle = true;
  } else {
    sidebar.style.display = "none";
    toggle = false;
  }
  // count++;

  // console.log("count", count);
};

// Switching between different sections of menubar

// let listItem = document.querySelectorAll(".list-item");
// // let activeClass = document.querySelector(".active");

// listItem.forEach(item =>{
//     item.addEventListener('click', ()=>{
//         document.querySelector(".active")?.classList.remove("active");
//         item.classList.add("active");
//     })
// })

// Changing the contents of the page depending on the menubar

let dashboard = document.querySelector(".dashboard");
// console.log(dashboard);
let analyse = document.querySelector(".analysis");
let documents = document.querySelector(".documents");
let inbox = document.querySelector(".inbox");
let history = document.querySelector(".history");
let settings = document.querySelector(".settings");

let welcomeHead = document.querySelector(".welcome");
let mediaBox = document.querySelector(".media-box");
let tableBody = document.querySelector(".media-box .div-body");
let userBox = document.querySelector(".user-box");
let sideContainer = document.querySelector(".side-container");
let myStudents = document.querySelector(".my-students");
let workHours = document.querySelector(".work-hours");
let spinner = document.querySelector(".spinner");
let layer = document.querySelector(".layer");

// Functions for view all popups
const showLayer = () => {
  layer.style.display = "block";
  spinner.style.display = "block";
};

const showContent = () => {
  layer.style.display = "none";
  spinner.style.display = "none";
  sudentDetails.style.display = "block";
  background.style.filter = "blur(10px)";
  background.style.opacity = "0.3";
  sidebar.style.opacity = "0.1";
  userBox.style.opacity = "0.1";
};

const showMainContent = () => {
  sudentDetails.style.display = "none";
  background.style.filter = "blur(0px)";
  background.style.opacity = "1";
  sidebar.style.opacity = "1";
  userBox.style.opacity = "1";
};

const hideLayer = () => {
  layer.style.display = "none";
  spinner.style.display = "none";
};

// View all pop-up for students
let viewStudent = document.querySelector("#viewStudent");
let background = document.querySelector(".main");
let sudentDetails = document.querySelector(".studentDetails");
let stuCloseBtn = document.querySelector(".stuCloseBtn");

viewStudent.addEventListener("mouseenter", () => {
  viewStudent.style.cursor = "pointer";
});

viewStudent.addEventListener("click", () => {
  showLayer();
  setTimeout(() => {
    showContent();
  }, 1000);
});

stuCloseBtn.addEventListener("mouseenter", () => {
  stuCloseBtn.style.cursor = "pointer";
});

stuCloseBtn.addEventListener("click", () => {
  showMainContent();
});

// Popup for media box
let viewMedia = document.querySelector("#media-view");
let medDetails = document.querySelector(".mediaDetails");
let medCloseBtn = document.querySelector(".medCloseBtn");

viewMedia.addEventListener("mouseenter", () => {
  viewMedia.style.cursor = "pointer";
});

viewMedia.addEventListener("click", () => {
  showLayer();
  setTimeout(() => {
    showContent();
  }, 1000);
});

medCloseBtn.addEventListener("mouseenter", () => {
  medCloseBtn.style.cursor = "pointer";
});

medCloseBtn.addEventListener("click", () => {
  showMainContent();
});

// Popup for lessons
let lessonView = document.querySelector("#lesson-view");
let lessonDetails = document.querySelector(".lessonDetails");
let lessCloseBtn = document.querySelector(".lessCloseBtn");

lessonView.addEventListener("mouseenter", () => {
  lessonView.style.cursor = "pointer";
});

lessonView.addEventListener("click", () => {
  showLayer();
  setTimeout(() => {
    showContent();
  }, 1000);
});

lessCloseBtn.addEventListener("mouseenter", () => {
  lessCloseBtn.style.cursor = "pointer";
});

lessCloseBtn.addEventListener("click", () => {
  showMainContent();
});

// Popup for completed tasks
let taskView = document.querySelector("#task-view");
let taskDetails = document.querySelector(".taskDetails");
let taskCloseBtn = document.querySelector(".taskCloseBtn");

taskView.addEventListener("mouseenter", () => {
  taskView.style.cursor = "pointer";
});

taskView.addEventListener("click", () => {
  showLayer();
  setTimeout(() => {
    showContent();
  }, 1000);
});

taskCloseBtn.addEventListener("mouseenter", () => {
  taskCloseBtn.style.cursor = "pointer";
});

taskCloseBtn.addEventListener("click", () => {
  showMainContent();
});

// Toggling of search icon

let searchBar = document.querySelector(".search-dropdown");
let searchBtn = document.querySelector(".search-btn");
let searchIndicator = document.querySelector(".search-indicator");
let toggleSearch = false;

searchBtn.addEventListener("click", (event) => {
  if (!toggleSearch) {
    event.target.style.transform = "rotate(90deg)";
    setTimeout(() => {
      searchIndicator.classList.add("show-search");
      searchBar.classList.add("show-search");
      console.log(searchBar.classList);
    }, 200);
    toggleSearch = true;
  } else {
    event.target.style.transform = "";
    searchIndicator.classList.remove("show-search");
    searchBar.classList.remove("show-search");
    toggleSearch = false;
  }
});

// Toggling of notification menu

let notifyMenu = document.querySelector(".notify-dropdown-container");
let notifyBtn = document.querySelector(".notification-btn");
let notifyIndicator = document.querySelector(".notify-indicator");
let toggleNotify = false;

notifyBtn.addEventListener("click", (event) => {
  if (!toggleNotify) {
    event.target.style.transform = "rotate(45deg)";
    setTimeout(() => {
      notifyIndicator.classList.add("show-notify");
      notifyMenu.classList.add("show-notify");
      console.log(notifyMenu.classList);
    }, 200);
    toggleNotify = true;
  } else {
    event.target.style.transform = "";
    notifyIndicator.classList.remove("show-notify");
    notifyMenu.classList.remove("show-notify");
    toggleNotify = false;
  }
});

// Toggling of profilemenu

let profileMenu = document.querySelector(".profile-dropdown-container");
let profileImage = document.querySelector(".profile-img");
let profileIndicator = document.querySelector(".profile-indicator");
// console.log(profileMenu);
let toggleProfile = false;

profileImage.addEventListener("click", (event) => {
  if (!toggleProfile) {
    setTimeout(() => {
      profileIndicator.classList.add("show-profile");
      profileMenu.classList.add("show-profile");
      console.log(profileMenu.classList);
    }, 100);
    toggleProfile = true;
  } else {
    profileIndicator.classList.remove("show-profile");
    profileMenu.classList.remove("show-profile");
    toggleProfile = false;
  }
});

// Closing of the dropdown on clicking anywhere on the sidebar
sidebar.onclick = function () {
  for (let i = 0; i < searchBar.classList.length; i++) {
    if (searchBar.classList[i] === "show-search") {
      console.log("matches");
      searchBtn.style.transform = "";
      searchIndicator.classList.remove("show-search");
      searchBar.classList.remove("show-search");
      // if(searchBar.classList.contains('show')){
      // }
      toggleSearch = false;
    }
  }
  for (let j = 0; j < notifyMenu.classList.length; j++) {
    if (notifyMenu.classList[j] === "show-notify") {
      console.log("matches 2");
      notifyBtn.style.transform = "";
      notifyIndicator.classList.remove("show-notify");
      notifyMenu.classList.remove("show-notify");
      toggleNotify = false;
    }
  }
  for (let k = 0; k < profileMenu.classList.length; k++) {
    if (profileMenu.classList[k] === "show-profile") {
      console.log("matches-3");
      profileIndicator.classList.remove("show-profile");
      profileMenu.classList.remove("show-profile");
      toggleProfile = false;
    }
  }
};

// Doughnut graph

let doughnut = document.querySelector("#doughnut");
let graph = new Chart(doughnut, {
  type: "doughnut",
  data: {
    labels: ["Done", "Pending"],
    datasets: [
      {
        label: "Task Completion Chart",
        data: [80, 20],
        backgroundColor: ["skyblue", "bisque"],
      },
    ],
  },
  options: {
    aspectRatio: 1.8,
    responsive: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        align: "center",
      },
    },
  },
});

// Dynamic swtiching of tabs

window.onload = () => {
  let tab_switchers = document.querySelectorAll("[data-switcher]");
  // console.log(tab_switchers);
  for (let i = 0; i < tab_switchers.length; i++) {
    const tab_switcher = tab_switchers[i];
    const page_id = tab_switcher.dataset.tab;
    // console.log(page_id);

    tab_switcher.addEventListener("click", () => {
      document.querySelector(".list-item.active").classList.remove("active");
      tab_switcher.parentNode.classList.add("active");
      // layer.style.display = "block";
      // spinner.style.display = "block";
      showLayer();
      setTimeout(() => {
        hideLayer();
        switchPage(page_id);
      }, 800);
    });
  }
};

function switchPage(page_id) {
  console.log(page_id);
  const currPage = document.querySelector(".page.active-page");
  console.log(currPage);
  currPage.classList.remove("active-page");

  const nextPage = document.querySelector(`.page[data-page='${page_id}']`);
  nextPage.classList.add("active-page");
}
