window.tasks.patterns.patterns.Strategy = (function () {
	
	function Strategy (algoritm) {
	
		this.generate = algoritm;
		
		return this;
	}
	
	return Strategy;
	
} ());