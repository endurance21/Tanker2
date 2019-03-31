let Vec2 = function (x = 0 , y = 0) {
	this.x = x;
	this.y = y;
};
//returns the length of the vector
Vec2.prototype.length = function () {
	return Math.sqrt(this.x * this.x + this.y * this.y);
};
//returns the vector sum with another vector
Vec2.prototype.add = function (vec) {
	return new Vec2(this.x + vec.x , this.y + vec.y);
};
//returns the vector difference with another vector
Vec2.prototype.subtract = function (vec) {
	return new Vec2(this.x - vec.x, this.y - vec.y);
};
//returns a vector scaled by a given factor
Vec2.prototype.scale = function (factor) {
	return new Vec2(this.x * factor, this.y * factor);
};
//returns the dot product with another vector
Vec2.prototype.dot = function (vec) {
	return (this.x * vec.x + this.y * vec.y);
};
//returns the magnitude of cross product with another vector
Vec2.prototype.cross = function (vec) {
	return (this.x * vec.y - this.y * vec.x);
};
//returns a vector rotated by <angle> radians counter clock wise
Vec2.prototype.rotate = function (center, angle) {
	var r = new Vec2(0,0);
	var x = this.x - center.x;
	var y = this.y - center.y;
	r.x = x * Math.cos(angle) - y * Math.sin(angle);
	r.y = x * Math.sin(angle) + y * Math.cos(angle);
	r.x += center.x;
	r.y += center.y;
	return r;
};
//returns a unit vector pointing towards the vector's direction
Vec2.prototype.normalize = function () {
	var len = this.length();
	if ( len > 0 ){
		len = 1.0/len;
	}
	return this.scale(len);
};
//returns the distance between this and another point
Vec2.prototype.distance = function (vec) {
	var x = this.x - vec.x;
	var y = this.y - vec.y;
	return Math.sqrt( x * x + y * y );
};
//returns the angle from vertical Up axis as reference 
//from 0 to 2 * PI in clockwise direction
Vec2.prototype.getAngle = function () {
	let angle = Math.atan2(this.y, this.x);
	if(angle < 0) angle += 2 * Math.PI;
	return (angle);
};