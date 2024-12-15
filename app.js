
let btns = document.querySelectorAll(".read a button");


btns.forEach(btn =>{
    btn.addEventListener("click", (e)=> {
        e.target.style.color = "white";
        e.target.style.backgroundColor = "blue";
        
    })
})



