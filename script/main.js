const body = document.querySelector('body');
const main = document.getElementById('main');
var mouseDown = document.keypress;
var a = 0;
var zIndex = 1;
/*var sWidth = 0;
var sHeight = 0;*/
var object;
var classDiv;
let objecatWidth;


/*window.addEventListener('keydown', function (event) {
    switch (event.keyCode) {
        case 37: // Left
            sWidth = -1;
            break;

        case 38: // Up
            sHeight = 1;
            break;

        case 39: // Right
            sWidth = 1;
            break;

        case 40: // Down
            sHeight = -1;
            break;
        default:
            sWidth = 0;
            sHeight = 0;
    }
}, false); */


function trans(e) {
    object.addEventListener("mouseup", function () {
        a = true;
    })
  

    if (!a) {
        /* Aktywacja boxa*/
        object.style.width = widthV - 4 + "px";
        object.style.height = heightV - 4 + "px";
        object.style.border = "2px solid black";
        /* Pozycjonowanie Boxa*/
        object.style.zIndex = zIndex;
        object.style.top = (e.clientY) - 10  + "px";
        object.style.left = (e.clientX) - object.offsetWidth / 2  + "px";
        document.getElementById("positionX").placeholder = (e.clientY) - 10 + "px";
        document.getElementById("positionY").placeholder = (e.clientX) - object.offsetWidth / 2 + "px";


    } else {
        /* Cofanie Aktywacji*/
        object.style.width = widthV + "px";
        object.style.height = heightV + "px";
        object.style.border = "none";
        return;
    }
}


function startMoveWindow(event) {
    a = false;
    zIndex++;
    object = event.target;
    if (event.button == 2) {
        object.parentNode.removeChild(object);


    }
    body.addEventListener("mousemove", trans);

}