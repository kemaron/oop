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

AquarisX2.printInfo();
AquarisX2.printDetails();