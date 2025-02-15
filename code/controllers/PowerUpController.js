function activatePowerUp(type) {
  if (type === 'ballGrow') {
    activePowerUps.ball = 'grow';
    powerUpTimers.ball = 10000;
    for (let ball of balls) {
      ball.radius = 15;
    }
    resetPowerUp('ball', 10000);
  } else if (type === 'ballShrink') {
    activePowerUps.ball = 'shrink';
    powerUpTimers.ball = 10000;
    for (let ball of balls) {
      ball.radius = 5;
    }
    resetPowerUp('ball', 10000);
  } else if (type === 'paddleGrow') {
    activePowerUps.paddle = 'grow';
    powerUpTimers.paddle = 10000;
    paddle.width = 160;
    resetPowerUp('paddle', 10000);
  } else if (type === 'paddleMax') {
    activePowerUps.paddle = 'max';
    powerUpTimers.paddle = 10000;
    paddle.width = 200;
    resetPowerUp('paddle', 10000);
  } else if (type === 'paddleShrink') {
    activePowerUps.paddle = 'shrink';
    powerUpTimers.paddle = 10000;
    paddle.width = 80;
    resetPowerUp('paddle', 10000);
  }
}

function resetPowerUp(category, duration) {
  setTimeout(() => {
    if (category === 'ball') {
      activePowerUps.ball = null;
      for (let ball of balls) {
        ball.radius = 10;
      }
    } else if (category === 'paddle') {
      activePowerUps.paddle = null;
      paddle.width = 120;
    }
  }, duration);
}

function displayPowerUpTimers() {
  fill(0);
  textSize(16);
  textAlign(LEFT, TOP);
  let y = 10;

  text("Active Power-Ups:", width - 200, y);
  y += 20;

  if (activePowerUps.ball) {
    text(`Ball: ${activePowerUps.ball} (${ceil(powerUpTimers.ball / 1000)}s)`, width - 200, y);
    y += 20;
  }

  if (activePowerUps.paddle) {
    text(`Paddle: ${activePowerUps.paddle} (${ceil(powerUpTimers.paddle / 1000)}s)`, width - 200, y);
  }

  // Update timers
  if (powerUpTimers.ball > 0) {
    powerUpTimers.ball -= deltaTime;
  }
  if (powerUpTimers.paddle > 0) {
    powerUpTimers.paddle -= deltaTime;
  }
}