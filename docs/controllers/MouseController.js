class MouseController {
    constructor(pageController, bgMusic) {
      this.pageController = pageController;
      this.bgMusic = bgMusic;
      this.lastClickTime = 0;
      this.clickCooldown = 300; // avoid too fast, default 0.3 s
    }

    handleMousePressed(mx, my) {
      const currentTime = millis();
      if (currentTime - this.lastClickTime < this.clickCooldown) {
        return;
      }
      this.lastClickTime = currentTime;

      // background music
      if (!this.bgMusic.isPlaying()) {
        this.bgMusic.loop();
        this.bgMusic.setVolume(0.5);
      }

      // currentPage mouse event
      const currentPage = this.pageController.currentPage;
      if (currentPage instanceof StageController) {
        currentPage.sidebar.handleMousePressed(mx, my);
      }
    }
}
  