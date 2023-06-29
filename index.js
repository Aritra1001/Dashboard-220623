let menu = document.querySelector(".menu");
// console.log(menu);
let sidebar = document.querySelector("aside");

// let count = 0;
let toggle = false;
const showMenu = ()=>{
    // console.log("Menu btn is clicked");
    if( !toggle ){
        sidebar.style.display = "block";
        sidebar.style.marginTop = "-0.3rem";
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