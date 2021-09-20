class NummerBal extends Bal {
    nummer;

    constructor (_x, _y, _speedX, _speedY, _nummer) {
        super(_x, _y, _speedX, _speedY);
        this.nummer = _nummer;
    }

    show() {
        fill (255, 0, 255);
        ellipse(this.x, this.y, 100, 100);

        fill(255, 255, 0);
        textSize(30);
        text("9", this.x, this.y);
    }


}