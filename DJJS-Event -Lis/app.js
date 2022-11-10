var square = document.getElementById("square");
// blue when mouse hovers over it
square.addEventListener("mouseover",function() {
    square.style.backgroundColor = 'blue';
});

// red when mouse button is held down over it
square.addEventListener("mousedown",function () {
    square.style.backgroundColor = 'red';
    });

// yellow when mouse button is let go
square.addEventListener("mouseup", function () {
    square.style.backgroundColor = 'yellow';
});

//  green when mouse is double clicked in it
square.addEventListener("dblclick", function () {
    square.style.backgroundColor = 'green';
});

// orange when the mouse scroll is used in the window
window.addEventListener("wheel", function() {
    square.style.backgroundColor = 'orange';
});

// change color when first letter of color is pressed
window.addEventListener("keyup", function (e) {
    
    if(e.key == 'b') {
        square.style.backgroundColor = 'blue';
    } else if (e.key =='r') {
        square.style.backgroundColor = 'red';
    } else if (e.key =='y') {
        square.style.backgroundColor = 'yellow';
    } else if(e.key =='g') {
        square.style.backgroundColor = 'green';
    } else if (e.key =='o') {
        square.style.backgroundColor = 'orange';
    }
});

