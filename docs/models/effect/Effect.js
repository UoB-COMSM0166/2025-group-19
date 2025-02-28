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

  activate(stageController, effectController) {
    this.applyEffect(stageController);

    //Test Can console effect name and seconds
    console.log(`🎯 Effect ${this.toolType} activated for ${this.duration / 1000} seconds`);

    if (this.timer) {
      clearTimeout(this.timer);
    }

    this.timer = setTimeout(() => {
      this.removeEffect(stageController);
      stageController.effectController.removeActiveEffect(this); // Make sure effect has been remove.

      //Console effect has expired.
      console.log(`🛑 Effect ${this.toolType} expired.`);
    }, this.duration);
  }

  clearTimer() {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }
}
