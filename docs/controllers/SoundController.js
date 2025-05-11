class SoundController {
  constructor() {
    this.isSoundPlaying = false;
    this.throttledPlaySound = this.throttle(this.playBreakBlockSound, 500);
  }

  playBreakBlockSound() {
    if (!this.isSoundPlaying) {
      this.isSoundPlaying = true;
      breakBlockSound.play();
      breakBlockSound.onended(() => {
        this.isSoundPlaying = false;
      });
    }
  }

  throttle(func, wait) {
    let lastTime = 0;
    return (...args) => {
      const now = Date.now();
      if (now - lastTime >= wait) {
        func(...args);
        lastTime = now;
      }
    };
  }
}
