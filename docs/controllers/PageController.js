class PageController {
  constructor() {
      this.currentPage = new WelcomeView(this);
  }

  switchToStage(stageName) {
      const bgImage = skyBackground;
      const state = new StageState(stageName, bgImage);
      const sidebarCanvas = createGraphics(200, 600);
      const gameCanvas = createGraphics(800, 600);
      const gameview = new GameView(state, gameCanvas);
      const sidebar = new SidebarView(stageName, sidebarCanvas);

      switch (stageName) {
        case 'Rat':
          this.currentPage = new Stage01Controller(state, gameview, sidebar, this);
          break;
        case 'Ox':
          this.currentPage = new Stage02Controller(state, gameview, sidebar, this);
          break;
        case 'Tiger':
          this.currentPage = new Stage03Controller(state, gameview, sidebar, this);
          break;
        case 'Dragon':
          this.currentPage = new Stage05Controller(state, gameview, sidebar, this);
          break;
        case 'Monkey':
          this.currentPage = new Stage09Controller(state, gameview, sidebar, this);
          break;
        case 'Rooster':
          this.currentPage = new Stage10Controller(state, gameview, sidebar, this);
          break;
        case 'Pig':
          this.currentPage = new Stage12Controller(state, gameview, sidebar, this);
          break;
        default:
          console.error('Unknown: ' + stageName);
          alert("under construction ...");
          this.switchToWelcome();
      }
  }

  switchToWelcome() {
      this.currentPage = new WelcomeView(this);
  }

  switchToStageMap() {
      this.currentPage = new StageMapView(this);
  }

  update() {
      this.currentPage.update();
  }

  display() {
      this.currentPage.display();
  }

  handleKeyPress(key) {
      this.currentPage.handleKeyPress(key);
  }

  handleKeyReleased(key) {
      this.currentPage.handleKeyReleased(key);
  }

  resizeWindow() {
    if (this.currentPage.resizeWindow) {
      this.currentPage.resizeWindow();
    }
  }
}