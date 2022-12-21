// Funtion to play correct sound based on Click and / or Key Events
function drumSound(key) {

    switch (key) {
        case "w":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();                
            break;

        case "a":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "s":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "d":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "j":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "k":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "l":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
    
        default:
            console.log(key);
        break;
    }
}

// Button Animation Function
function buttonAnimation (currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}

// Get total number of buttons with class "drum" and add an event listener to each one and call drumSound() passing in the buttons text content. 
for (let i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        let buttonTextContent = this.textContent;
        drumSound(buttonTextContent);
        buttonAnimation(buttonTextContent);
    });
   
}

// Add an "Event Listener" to the document to detect "Key" presses and call the drumSound() passing in the key.
document.addEventListener("keydown", function(event) {
    drumSound(event.key);
    buttonAnimation(event.key);
});