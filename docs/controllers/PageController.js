class PageController {
    constructor() {
      this.currentPage = new WelcomeView(this);
    }
  
    switchToStage(stageName) {
      const bgImage = skyBackground;
      const state = new StageState(stageName, bgImage);
      const sidebar = new SidebarView(stageName);
      const gameview = new GameView(state);
    
      switch (stageName) {
        case 'Stage01':
          this.currentPage = new Stage01Controller(state, gameview, sidebar, this);
          break;
        case 'Stage02':
          this.currentPage = new Stage02Controller(state, gameview, sidebar, this);
          break;
        default:
          console.error('Unknown: ' + stageName);
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
  }
  