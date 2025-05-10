class PageController {
  constructor() {
      this.currentPage = new WelcomeView(this);
      this.stageName = "";
      this.mode = "";
  }

  switchToStage() {
      const state = new StageState(this.stageName, this.mode);
      const sidebarCanvas = createGraphics(200, 600);
      const gameCanvas = createGraphics(800, 600);
      const gameview = new GameView(state, gameCanvas);
      const sidebar = new SidebarView(this.stageName, sidebarCanvas);

      switch (this.stageName) {
        case 'Rat':
          this.currentPage = new Stage01Controller(state, gameview, sidebar, this);
          break;
        case 'Ox':
          this.currentPage = new Stage02Controller(state, gameview, sidebar, this);
          break;
        case 'Tiger':
          this.currentPage = new Stage03Controller(state, gameview, sidebar, this);
          break;
        case 'Rabbit':
          this.currentPage = new Stage04Controller(state, gameview, sidebar, this);
          break;
        case 'Dragon':
          this.currentPage = new Stage05Controller(state, gameview, sidebar, this);
          break;
        case 'Snake':
          this.currentPage = new Stage06Controller(state, gameview, sidebar, this);
          break;
        case 'Horse':
          this.currentPage = new Stage07Controller(state, gameview, sidebar, this);
          break;
        case 'Goat':
          this.currentPage = new Stage08Controller(state, gameview, sidebar, this);
          break;
        case 'Monkey':
          this.currentPage = new Stage09Controller(state, gameview, sidebar, this);
          break;
        case 'Rooster':
          this.currentPage = new Stage10Controller(state, gameview, sidebar, this);
          break;
        case 'Dog':
          this.currentPage = new Stage11Controller(state, gameview, sidebar, this);
          break;
        case 'Pig':
          this.currentPage = new Stage12Controller(state, gameview, sidebar, this);
          break;
        default:
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

  switchToNewStageMap() {
    this.currentPage = new NewStageMapView(this);
  }

  switchToGod(){
    this.currentPage = new GodView(this);
  }

  switchToYourZodiac(){
    this.currentPage = new YourZodiacView(this);
  }

  switchToMode() {
    this.currentPage = new ModeView(this);
  }

  setStageName(stageName) {
    this.stageName = stageName;
  }

  setMode(mode) {
    this.mode = mode;
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