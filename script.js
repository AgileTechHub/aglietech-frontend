const buttons = document.querySelectorAll(".project-btns button")
const test = document.querySelectorAll(".photo-block")

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {

        buttons.forEach((button2) => {
            button2.classList.remove("select")
        })
        const value = e.target.innerText
        const lowValue=value.toLowerCase()
        button.classList.add("select")

        test.forEach((ger) => {

            if (ger.classList.contains(lowValue)) {
                ger.classList.add("active")

            } else {
                ger.classList.remove("active")

            }
        })

    })

})