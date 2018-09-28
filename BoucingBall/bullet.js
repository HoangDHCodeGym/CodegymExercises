class Bullet extends Ball {
    constructor(left, top, radius, color, leftAcc, topAcc) {
        super(left, top, radius, color, leftAcc, topAcc);
        this.type = "bullet";
        let self = this;
        this.draw = function () {
            let ctx = canvas.getContext("2d");
            ctx.beginPath();
            ctx.arc(self.left, self.top, self.radius, 0, Math.PI * 2);
            ctx.fillStyle = self.color;
            ctx.shadowColor = self.color;
            ctx.shadowBlur = 20;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
            ctx.fill();
        }
        this.reOrientation = function() {
            //Biến mất khi chạm cạnh trên
            if (this.top < this.radius) {
                this.removeSelf();
            }
            //Biến mất khi chạm cạnh phải
            if (this.left > (WIDTH - this.radius)) {
                this.removeSelf();
            }
            //Biến mất khi chạm cạnh dưới
            if (this.top > (HEIGHT - this.radius)) {
                this.removeSelf();
            }
            //Biến mất khi chạm cạnh trái
            if (this.left < this.radius) {
                this.removeSelf();
            }
        }
    }
}