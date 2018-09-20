let Ship = function(left, top, size, imgId) {
    this.left = left;
    this.top = top;
    this.size = size;
    this.leftAcc = 2;
    this.topAcc = 2;
    this.img = document.getElementById(imgId);
    let self = this;
    this.draw = function() {
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.drawImage(self.img,self.left,self.top,self.size,self.size);
    }
}