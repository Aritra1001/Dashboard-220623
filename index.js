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

let listItem = document.querySelectorAll(".list-item");
// let activeClass = document.querySelector(".active");

listItem.forEach(item =>{
    item.addEventListener('click', ()=>{
        document.querySelector(".active")?.classList.remove("active");
        item.classList.add("active");
    })
})