class EffectController {
    constructor(stageController) {
      this.stageController = stageController;
      this.activeEffects = [];
    }

    applyToolEffect(tool) {
      let effect = null;
      switch (tool.type) {
        case 'ballGrow':
          effect = new BallSizeEffect('big', 10000, tool.type);
          break;
        case 'ballShrink':
          effect = new BallSizeEffect('small', 10000, tool.type);
          break;
        case 'paddleGrow':
          effect = new PaddleSizeEffect('long', 10000, tool.type);
          break;
        case 'paddleMax':
          effect = new PaddleSizeEffect('max', 10000, tool.type);
          break;
        case 'paddleShrink':
          effect = new PaddleSizeEffect('short', 10000, tool.type);
          break;
        case 'ballSpeedUp':
          effect = new BallSpeedEffect('speedUp', 10000, tool.type);
          break;
        case 'gravityUp':
          effect = new GravityEffect('gravityUp', 10000, tool.type);
          break;
        case 'timeIncrease':
          effect = new TimeEffect('add', 10000, tool.type);
          break;
        case 'timeDecrease':
          effect = new TimeEffect('minus', 10000, tool.type);
          break;
        case 'paddleReverse':
          effect = new PaddleDirectionEffect('reverse', 10000, tool.type);
          break;
        case 'infiniteBall':
          effect = new BallInfiniteEffect('infinite', 10000, tool.type);
          break;
      }

      if (effect) {
        effect.toolType = tool.type;
        this.activateEffect(effect);
      }
    }

    activateEffect(effect) {
      this.removeSameTypeEffect(effect);
      effect.activate(this.stageController, this);
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

    getActiveEffects() {
      return this.activeEffects.map(effect => ({
        toolType: effect.getEffectType(),
        remainingTime: effect.getRemainingTime()
      }));
    }
}
