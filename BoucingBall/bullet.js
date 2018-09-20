class Bullet extends Ball {
    constructor(left, top, radius, color, leftAcc, topAcc) {
        super(left, top, radius, color, leftAcc, topAcc);
        this.type = "bullet";
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