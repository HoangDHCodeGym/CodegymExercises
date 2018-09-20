let Ship = function(left, top, size, imgId) {
    this.left = left;
    this.top = top;
    this.size = size;
    this.leftAcc = 0;
    this.topAcc = 0;
    this.type = "ship";
    this.img = document.getElementById(imgId);
    let self = this;
    this.draw = function() {
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.drawImage(self.img,self.left,self.top,self.size,self.size);
    }
    this.randomMove = function() {};
}