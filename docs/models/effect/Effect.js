class Effect {
  constructor(duration = 10000, toolType = '') {
    this.duration = duration;
    this.timer = null;
    this.interval = null;
    this.remainingTime = duration / 1000;
    this.isPaused = false;
    this.toolType = toolType;
  }

  applyEffect(stageController) {
    throw new Error("applyEffect() should be implemented by subclass!");
  }

  removeEffect(stageController) {
    throw new Error("removeEffect() should be implemented by subclass!");
  }

  activate(stageController) {
    this.applyEffect(stageController);
    this.startCountdown(stageController);
  }

  startCountdown(stageController) {
    if (this.timer) clearTimeout(this.timer);
    if (this.interval) clearInterval(this.interval);

    this.interval = setInterval(() => {
      if (!this.isPaused && this.remainingTime > 0) {
        this.remainingTime -= 1;
        stageController.updateSidebarItems();
      }
    }, 1000);

    this.timer = setTimeout(() => {
      this.removeEffect(stageController);
      stageController.effectController.removeActiveEffect(this);
      clearInterval(this.interval);
      stageController.updateSidebarItems();
    }, this.remainingTime * 1000);
  }

  pause() {
    if (!this.isPaused) {
      this.isPaused = true;
      clearTimeout(this.timer);
      clearInterval(this.interval);
    }
  }

  resume(stageController) {
    if (this.isPaused) {
      this.isPaused = false;
      this.startCountdown(stageController);
    }
  }

  clearTimer() {
    clearTimeout(this.timer);
    clearInterval(this.interval);
    this.timer = null;
  }

  getEffectType() {
    return this.toolType;
  }

  getRemainingTime() {
    return this.remainingTime;
  }
}
