class Car {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width; // 30
    this.height = height; // 50

    this.constrols = new Controls();
  }

  update() {
    if (this.constrols.forward) {
      this.y -= 2;
    }
    
    if (this.constrols.reverse) {
      this.y += 2;
    }

    if (this.constrols.left) {
      this.x -= 2;
    }

    if (this.constrols.right) {
      this.x += 2;
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillRect(
      this.x - this.width / 2,
      this.y - this.height / 2,
      this.width,
      this.height
    );

    ctx.fill();
  }
}