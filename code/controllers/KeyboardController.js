function keyPressed() {
    if (key === ' ') {
      balls.push(new Ball(paddle.x + paddle.width / 2, paddle.y - 10));
    }
}
