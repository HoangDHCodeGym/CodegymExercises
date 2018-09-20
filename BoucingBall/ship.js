let Ship = function(left, top, size, imgId) {
    this.left = left;
    this.top = top;
    this.size = size;
    this.leftAcc = 2;
    this.topAcc = 2;
    this.type = "ship";
    this.degree = 0;
    //this.radius = 30;
    this.img = document.getElementById(imgId);
    let self = this;
    this.draw = function() {
        let ctx = canvas.getContext("2d");
        //Start Rotation
        ctx.save();
        ctx.translate(self.left+self.size/2, self.top+self.size/2); //go to center of object
        ctx.rotate(Math.PI*this.degree);
        if (this.degree==2) { this.degree=0 } else {this.degree += 0.02};
        ctx.translate(-self.size/2, -self.size/2); //go to orginal top and center of object
        ctx.drawImage(self.img,0,0,self.size,self.size);
        //End Rotation
        //ctx.drawImage(self.img,self.left,self.top,self.size,self.size);
        ctx.restore();
    }
    this.randomMove = function() {};
    this.moveOnKeyDown = function() {
        
    }
}