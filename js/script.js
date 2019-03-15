"use strict";

/* ----- tworzenie klasy i prototypowanie ----- */
function Phone(brand, price, color, screen, battery) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.screen = screen;
	this.battery = battery;

}

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

Phone.prototype.printDetails = function() {
	console.log("Screen size is " + this.screen + ", battery has " + this.battery + " mAh.");
}

var AquarisX2 = new Phone ("BQ",1350,"black","5.65''",3100);

// test Czy dziala
AquarisX2.printInfo();
AquarisX2.printDetails();

/* ----- wykorzystanie this i self ----- */

function Button(text) {
	this.text = text || 'Hello';
}

Button.prototype = {
	create: function() {
		var self = this;
		this.element = document.createElement('button');
		this.element.innerText = this.text;
		this.element.addEventListener('click', function() {
			alert(self.text);
		});
		document.body.appendChild(this.element);
	}
}

// test Czy dziala
var btn1 = new Button('Check this buttton');
btn1.create();

var btn2 = new Button();
btn2.create();