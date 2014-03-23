window.tasks.designPatterns.patterns.ClassesFactory = (function (classes) {

	var Classification = {
	
		Soldier: classes.Soldier,
		Archer: classes.Archer,
		Mage: classes.Mage,
		
		factory: function (classification) {
			return new this[classification]();
		}
	};
	
	return Classification;
	
} (window.tasks.designPatterns.classes));