window.tasks.designPatterns.patterns.User = (function () {

	var instance;
	
	function User () {
		
		var data = {};
			
		if (instance) {
			return instance;
		}
		
		this.set = function (params) {
			data = params;
            Object.freeze(data);
		};
		
		this.get = function (field) {
			return data[field];
		};
		
		this.generateId = function (strategy) {
			this.id = strategy.generate();
		};
		
		instance = this;
		
		return this;
	}
	
	return User;
	
} ());