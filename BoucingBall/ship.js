let Ship = function (left, top, size, imgId) {
    this.left = left;
    this.top = top;
    this.size = size;
    this.leftAcc = 1;
    this.topAcc = 1;
    this.type = "ship";
    this.degree = 0;
    this.radius = 30;
    this.img = document.getElementById(imgId);
    let self = this;
    this.draw = function () {
        self.reOrientation();
        self.move();
        let ctx = canvas.getContext("2d");
        //Start Rotation
        ctx.save();
        ctx.translate(self.left + self.size / 2, self.top + self.size / 2); //go to center of object
        ctx.rotate(Math.PI * this.degree);
        if (this.degree == 2) {
            this.degree = 0
        } else {
            this.degree += 0.02
        };
        ctx.translate(-self.size / 2, -self.size / 2); //go to orginal top and center of object
        ctx.drawImage(self.img, 0, 0, self.size, self.size);
        //End Rotation
        //ctx.drawImage(self.img,self.left,self.top,self.size,self.size);
        ctx.restore();
    }
    this.move = function () {
        this.top += this.topAcc;
        this.left += this.leftAcc;
    }
    this.reOrientation = function () {
        //Đổi hướng khi chạm cạnh trên
        if ((this.top < this.radius) && (this.topAcc < 0)) {
            this.topAcc = 2;
        }
        //Đổi hướng khi chạm cạnh phải
        if ((this.left > (WIDTH - this.radius)) && (this.leftAcc > 0)) {
            this.leftAcc = -2;
        }
        //Đổi hướng khi chạm cạnh dưới
        if ((this.top > HEIGHT - this.radius) && (this.topAcc > 0)) {
            this.topAcc = -2;
        }
        //Đổi hướng khi chạm cạnh trái
        if ((this.left < this.radius) && (this.leftAcc < 0)) {
            this.leftAcc = 2;
        }
    }
    this.randomMove = function () {}
    this.moveOnKeyDown = function () {
        $(document).keydown(function (event) {
            let step = 2;
            if ( (event.which == 40) && (self.topAcc < 10) ) { //Down
                self.topAcc += step;
            }
            if ( (event.which == 38) && (self.topAcc > -10) ) { //Up
                self.topAcc -= step;
            }
            if ( (event.which == 37) && (self.leftAcc > -10) ) { //Left
                self.leftAcc -= step;
            }
            if ( (event.which == 39) && (self.leftAcc < 10) ) { //Right
                self.leftAcc += step;
            }
            if (event.which == 32) { //fire
                self.fire();
            }
        });
    }


}