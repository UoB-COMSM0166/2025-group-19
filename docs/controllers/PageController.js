class PageController {
    constructor() {
      this.currentScene = new WelcomeView(this);
    }
  
    switchToStage(stageName) {
      const bgImage = skyBackground;
      const state = new StageState(stageName, bgImage);
      const sidebar = new SidebarView(stageName);
      const game = new GameView(state);
    
      switch (stageName) {
        case 'Stage01':
          this.currentScene = new Stage01Controller(state, game, sidebar, this);
          break;
        case 'Stage02':
          this.currentScene = new Stage02Controller(state, game, sidebar, this);
          break;
        default:
          console.error('Unknown: ' + stageName);
          this.switchToWelcome();
      }
    }
  
    switchToWelcome() {
      this.currentScene = new WelcomeView(this);
    }
  
    switchToChooseStage() {
      this.currentScene = new StageMapView(this);
    }
  
    update() {
      this.currentScene.update();
    }
  
    display() {
      this.currentScene.display();
    }
  
    handleKeyPress(key) {
      this.currentScene.handleKeyPress(key);
    }
  }
  