window.tasks.patterns.patterns.User = (function () {

	var instance;
	
	function User (name, password) {
	
		if (instance) {
			return instance;
		}
		
		this.name = name;
		this.password = password;
		
		this.generateId = function (strategy) {
			this.id = strategy.generate();
		};
		
		instance = this;
		
		return this;
	}
	
	return User;
	
} ());