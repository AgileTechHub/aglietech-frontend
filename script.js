// Header dropdwon-menu Js Start

document.querySelector('.burger-menu').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.main-dropdown').classList.toggle('active-drop');
});



// Header dropdwon-menu Js End




// Project Section Change Category Js  Start 



const buttons = document.querySelectorAll(".project-btns button")
const photoBlock = document.querySelectorAll(".photo-block")

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {

        buttons.forEach((button2) => {
            button2.classList.remove("select")
        })
        const value = e.target.innerText
        const lowValue = value.toLowerCase()
        button.classList.add("select")

        photoBlock.forEach((photo) => {

            if (photo.classList.contains(lowValue)) {
                photo.classList.add("active")

            } else {
                photo.classList.remove("active")

            }
        })

    })

})

// Project Section Change Category Js  End





// Team Section Count Plus Start


const infoSpan = document.querySelectorAll(".count-span")
let active = false

window.addEventListener("scroll", () => {


    if (scrollY > 5300 && active === false) {
        infoSpan.forEach((span) => {
            span.innerText = 0
            let count = 0
            function updateCounter() {
                let target = parseInt(span.dataset.count)
                if (target > count) {
                    count++
                    span.innerText = count + "+"
                    setTimeout(updateCounter, 10)
                }
                else {
                    span.innerText = target + "+"
                }
            }
            updateCounter()
            active = true
        })

    }


})

// Team Section Count Plus End



// Top-scroll Button Start


window.addEventListener("scroll", () => {
    console.log(scrollY);
    if (scrollY > 10) {
        document.querySelector(".top-scroll button").style.display = "block"

    }
    if (scrollY > 540) {

        document.querySelector("header").classList.add("fxHeader")
        document.querySelector(".top-bar").style.display = "none"

    }
    else {
        document.querySelector("header").classList.remove("fxHeader")
        document.querySelector(".top-bar").style.display = "flex"
        document.querySelector(".top-scroll button").style.display = "none"
    }

})







// Top-scroll Button End



const play=document.querySelector(".secondary img")
play.addEventListener("click",()=>{
    document.querySelector(".video-shape").style.display="flex"
 
  
})
const exit=document.querySelector(".video-shape").addEventListener("click",(e)=>{
   
  if(e.target.classList.contains("video-shape") || e.target.classList.contains("fa-solid")  ){
    document.querySelector(".video-shape").style.display="none"
  }
})