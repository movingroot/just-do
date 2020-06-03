const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

document.querySelector("h2").id = "tagg";
const letgo = document.getElementById("tagg");

const superEventHandler = {

    doneUp: function doneUp(){
        letgo.style.color = colors[0];
        console.log("Do doneUp")
        letgo.innerText = "The mouse is here!";
    },
    doneResize: function doneResize(){
        letgo.style.color = colors[2];
        console.log("Do doneResize")
        letgo.innerText = "You just resized!";
    },
    doneGone: function doneGone(){
        letgo.style.color = colors[1];
        console.log("Do doneGone")
        letgo.innerText = "The mouse is gone!";
    },
    doneRight: function doneRight(){
        letgo.style.color = colors[3];
        console.log("Do doneRight")
        letgo.innerText = "That was a right click!";
    }
};

function init(superEventHandler) {
    letgo.addEventListener("mouseover",superEventHandler.doneUp);
    window.addEventListener("resize",superEventHandler.doneResize);
    letgo.addEventListener("mouseleave",superEventHandler.doneGone);
    window.addEventListener("contextmenu",superEventHandler.doneRight);
}

init(superEventHandler);






