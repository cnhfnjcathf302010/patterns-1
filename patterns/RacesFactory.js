window.tasks.patterns.patterns.RacesFactory = (function (races, patterns) {

	var Races = {

		orc: races.Orc,
		
		elf: races.Elf,
		
		human: races.Human,
		
		factory: function (race) {
			this[race].prototype = new races.Basic();
			this[race].prototype.army = this.generateArmy;
			
			return new this[race]();
		},
		
		generateArmy: function (count) {
			var classes = parseInt(Math.floor(count / 3), 10),
				i;
			
			for (i = 0; i < classes; i++) {
				this.archers[i] = patterns.ClassesFactory.factory('Archer');
				this.mages[i] = patterns.ClassesFactory.factory('Mage');
				this.soldiers[i] = patterns.ClassesFactory.factory('Soldier');
			}
		}
	};
	
	return Races;
	
} (window.tasks.patterns.races, window.tasks.patterns.patterns));