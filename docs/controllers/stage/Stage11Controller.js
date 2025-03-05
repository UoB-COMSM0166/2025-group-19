class Stage11Controller extends StageController {
    constructor(state, view, sidebar, pageController) {
      super(state, view, sidebar, pageController);
    }
  
    // refer to stage 12
    getStageJsonPath() {
      return "./models/components/StagePattern/Stage11.json";
    }
  
    goToNextStage() {
      this.pageController.setStageName("Pig");
      this.pageController.switchToStage();
    }
  }
  