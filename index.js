var numOfButton = document.querySelectorAll(".drum").length;
for (var i = 0; i < numOfButton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        var innerHtml = this.innerHTML;
        makesound(innerHtml);
        buttonPressed(innerHtml);

    });
}
document.addEventListener('keydown', function(event) {
    makesound(event.key);
    buttonPressed(event.key);
});


function makesound(e) {
    switch (e) {

        case "w":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;

        case "a":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;

        case "s":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case "d":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case "j":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "k":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "l":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
    }
}

function buttonPressed(e) {
    var activeButton = document.querySelector("." + e);
    activeButton.classList.add("pressed");
    setTimeout(function(e) {
        activeButton.classList.remove("pressed");
    }, 100);
}