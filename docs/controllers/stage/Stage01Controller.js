class Stage01Controller extends StageController {
  constructor(state, view, sidebar, pageController) {
    super(state, view, sidebar, pageController);
    this.toolDropRate = 0.4; // 70% dropping rate
    this.toolProbabilities = {
      ballGrow: 0.1,
      ballShrink: 0.8
      ,
    };
  }

  getStageJsonPath() {
    return "./models/components/StagePattern/Stage01.json";
  }

  goToNextStage() {
    this.pageController.switchToStage('Stage02');
  }
}