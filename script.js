const buttons = document.querySelectorAll(".project-btns button")
const photoBlock= document.querySelectorAll(".photo-block")

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {

        buttons.forEach((button2) => {
            button2.classList.remove("select")
        })
        const value = e.target.innerText
        const lowValue=value.toLowerCase()
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