let Ball = function(left, top, radius, color, leftAcc, topAcc) {
    this.top = top;
    this.left = left;
    this.radius = radius;
    this.color = color;
    let self = this;
    this.leftAcc = leftAcc;
    this.topAcc = topAcc;

    this.draw = function() {
        ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(self.left,self.top,self.radius,0,Math.PI*2);
        ctx.fillStyle = self.color;
        ctx.fill();
    }
    this.randomMove = function() {
        this.reOrientation();
        this.top += this.topAcc;
        this.left += this.leftAcc;
    }
    this.reOrientation = function() {
        //Đổi hướng khi chạm cạnh trên
        if ((this.top<this.radius)&&(this.topAcc<0)) {
            this.topAcc = (-1)*this.topAcc;
        }
        //Đổi hướng khi chạm cạnh phải
        if ((this.left>(canvas.width-this.radius))&&(this.leftAcc>0)) {
            this.leftAcc = (-1)*this.leftAcc;
        }
        //Đổi hướng khi chạm cạnh dưới
        if ((this.top>canvas.height-this.radius)&&(this.topAcc>0)) {
            this.topAcc = (-1)*this.topAcc;
        }
        //Đổi hướng khi chạm cạnh trái
        if ((this.left<this.radius)&&(this.leftAcc<0)) {
            this.leftAcc = (-1)*this.leftAcc;
        }
        //Đổi hướng khi chạm vật thể khác
        let distance,l,t;
        for (element of objectList) {
            if ((this.top!=element.top)&&(this.left!=element.left)) {
                distance = Math.pow(this.top-element.top,2)+Math.pow(this.left-element.left,2)
                if ( (distance<Math.pow(element.radius+this.radius,2)) && (reverseOrientation(this,element)) ) {
                    l = this.leftAcc;
                    t = this.topAcc;
                    this.leftAcc = element.leftAcc;
                    this.topAcc = element.topAcc;
                    element.topAcc = t;
                    element.leftAcc = l;
                }
            }
        }
        function reverseOrientation(objA,objB) {
            if ((objA.topAcc*objB.topAcc<0)||(objA.leftAcc*objB.leftAcc<0)) {
                return true;
            }
            return false;
        }
    }
}