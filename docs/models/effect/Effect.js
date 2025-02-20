class Effect {
  constructor(duration = 10000) { // default 10 s
    this.duration = duration;
    this.timer = null;
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

    this.timer = setTimeout(() => {
      this.removeEffect(stageController);
      effectController.removeActiveEffect(this);
    }, this.duration);
  }

  clearTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }
}
