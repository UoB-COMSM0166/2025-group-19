class SoundController {
    constructor() {
      this.isSoundPlaying = false;
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
}