class Effect {
  constructor(duration = 10000, toolType = '') { // default 10 s
    this.duration = duration;
    this.timer = null;
    this.interval = null;
    this.remainingTime = duration / 1000;
    this.isPause = false;
    this.toolType = toolType; // Remenber which tool generate effect.
  }

  applyEffect(stageController) {
    throw new Error("applyEffect() should be implemented by subclass!");
  }

  removeEffect(stageController) {
    throw new Error("removeEffect() should be implemented by subclass!");
  }

  activate(stageController) {
    this.applyEffect(stageController);
    if (this.timer) {
      clearTimeout(this.timer);
    }

    if (this.interval) {
      clearInterval(this.interval);
    }

    this.remainingTime = this.duration / 1000;

    this.interval = setInterval(() => {
      if (this.remainingTime > 0) {
        this.remainingTime -= 1;
        stageController.updateSidebarItems();
      } else {
        clearInterval(this.interval);
      }
    }, 1000);

    this.timer = setTimeout(() => {
      this.removeEffect(stageController);
      stageController.effectController.removeActiveEffect(this);
      clearInterval(this.interval);
      stageController.updateSidebarItems();
    }, this.duration);
  }

  clearTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }

  getEffectType() {
    return this.toolType;
  }

  getRemainingTime() {
    return this.remainingTime;
  }
}
