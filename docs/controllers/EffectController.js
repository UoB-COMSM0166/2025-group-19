class EffectController {
    constructor(stageController) {
      this.stageController = stageController;
      this.activeEffects = [];
    }

    applyToolEffect(tool) {
      let effect = null;
      switch (tool.type) {
        case 'ballGrow':
          effect = new BallSizeEffect('big');
          break;
        case 'ballShrink':
          effect = new BallSizeEffect('small');
          break;
        case 'paddleGrow':
          effect = new PaddleSizeEffect('long');
          break;
        case 'paddleMax':
          effect = new PaddleSizeEffect('max');
          break;
        case 'paddleShrink':
          effect = new PaddleSizeEffect('short');
          break;
        case 'ballSpeedUp':
          effect = new BallSpeedEffect('speedUp');
          break;
        case 'gravityUp':
          effect = new GravityEffect('gravityUp');
          break;
      }

      if (effect) {
        this.activateEffect(effect);
      }
    }

    activateEffect(effect) {
      console.log("activeEffects:", this.activeEffects);
      this.removeSameTypeEffect(effect);
      effect.activate(this.stageController);
      this.activeEffects.push(effect);
    }

    removeSameTypeEffect(newEffect) {
      this.activeEffects = this.activeEffects.filter(effect => {
        if (effect.constructor === newEffect.constructor) {
          effect.clearTimer();
          effect.removeEffect(this.stageController);
          return false;
        }
        return true;
      });
    }

    removeActiveEffect(effect) {
      this.activeEffects = this.activeEffects.filter(e => e !== effect);
    }
}
