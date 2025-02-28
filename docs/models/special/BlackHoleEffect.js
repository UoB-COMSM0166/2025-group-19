class BlackHoleEffect {
    static absorb(ball, blackHole, stageController) {
      if (ball.isBeingAbsorbed) return; // 避免重複吸收
      ball.isBeingAbsorbed = true;
  
      function animateAbsorption() {
        if (!stageController.state.balls.includes(ball)) return;
        ball.x += (blackHole.x + blackHole.width / 2 - ball.x) * 0.2;
        ball.y += (blackHole.y + blackHole.height / 2 - ball.y) * 0.2;
        ball.radius *= 0.9;
        if (ball.radius < 2) {
          let index = stageController.state.balls.indexOf(ball);
          if (index !== -1) {
            stageController.state.balls.splice(index, 1);
          }
          return;
        }
        requestAnimationFrame(animateAbsorption);
      }
      requestAnimationFrame(animateAbsorption);
    }
}
  