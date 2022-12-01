const header = document.querySelector("header")
const tabs = document.querySelectorAll(".tab")

function showTab(id){
    header.style.display = "none"
    for(let x of tabs){
        x.style.display = "none"
        x.style.opacity = 0
    }


    document.getElementById(id).style.display = "block"

    var selectTab = document.getElementById(id)
    selectTab.style.display = "block"

    // Animacija
    setTimeout(function(){
        selectTab.style.transition = "opacity 1s"
        selectTab.style.opacity = 1

    }, 100)
}

function closeTab(event){
    event.currentTarget.parentNode.style.display = "none"
    header.style.display = "block"
}


//Intro animacija
const intro = document.querySelector(".intro")
setTimeout(function(){
    intro.style.height = "250px"
}, 100)

setTimeout(function(){
    intro.style.opacity = 1
}, 400)



