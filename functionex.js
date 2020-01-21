/* function bark (name, weight) {
    if (weight > 20) {
        console.log(name + " says WOOF WOOF");
    } else {
        console.log(name + " says woof woof");
    }
}

function whatShallIWear (temp) {
    if (temp < 60) {
        console.log("Wear a jacket");
    } else if (temp < 70) {
        console.log("Wear a sweater");
    } else {
        console.log("Wear a t-shirt");
    }
}

function calcArea(r) {
    var area;
    if (r <= 0) {
        return 0;
    } else {
        area = Math.PI * r * r;
        return area;
    }
}

var radius = 5.2;
var theArea = calcArea(radius)
console.log("The area is: " + theArea) */

function clunk(times) {
    var num = times;
    while (num > 0) {
        display("clunk");
        num = num -1
    }
}

function thinamajig(size) {
    var facky = 1;
    clunkCounter = 0;
    if (size == 0) {
        display("clank");
    } else if (size == 1) {
        display("thunk");
    } else {
        while (size > 1) {
            facky = facky * size;
            size = size - 1;
        }
        clunk(facky);
    }
}

function display(output) {
    console.log(output);
    clunkCounter = clunkCounter + 1;
}
var clunkCounter = 0;
thinamajig(5);
console.log(clunkCounter);