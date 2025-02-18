class TimeEffect extends Effect {
	constructor(sizeType) {
		super();
		this.sizeType = sizeType;
	}

	applyEffect(sidebar) {
    if (this.sizeType === 'add') {
      sidebar.timer += 10;
    } else if (this.sizeType === 'minus') {
      sidebar.timer -= 10;
    } 
	}

}


