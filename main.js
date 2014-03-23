window.tasks.patterns.loader = (function (app, helpers) {

	function onLoad () {

		var createButton = document.getElementById('create-army'),
			soldiers = quantity.querySelector('.soldiers'),
			archers = quantity.querySelector('.archers'),		
			mages = quantity.querySelector('.mages'),
			algs, 
			user;
			
			
		algs = {
			'Algoritm1': app.algoritms.Algoritm1,
			'Algoritm2': app.algoritms.Algoritm2,
			'Algoritm3': app.algoritms.Algoritm3
		};
		
		function createRace () {
			var races = raceInput.value.toLowerCase();
				
			user.race = app.patterns.RacesFactory.factory(races);
			helpers.render(output, '<li>' + user.race.specify.join('</li><li>') + '</li>');
			countsOfArmy.removeAttribute('disabled');
			document.querySelector('label[for=input-races]').innerHTML = 'Enter the number of ' + races + 's';
		}
		
		function createSomeUser () {
			var algoritm,
				output;
				
			algoritm = algs[selectedAlgoritm.value];			
			
			user = new app.patterns.User(username.value, password.value);
			user.generateId(new app.patterns.Strategy(algoritm));
			
			output = [
				'Hello, ' + user.name,
				'Your id: ' + user.id
			];
			
			helpers.render(loginForm, '<div>' + output.join('</div><div>') + '</div><br />');
			opts.className = '';
		}
		
		function createArmy () {
			var count = parseInt(countOf.value, 10),
				army;
			
			user.race.army(count);
			
			army = [
				'Soldiers: ' + user.race.soldiers.length,
				'Archers: ' + user.race.archers.length,
				'Mages: ' + user.race.mages.length
			];
			
			
			helpers.render(quantity, '<li>' + army.join('</li><li>') + '</li>');
		}
		
		helpers.click(createButton, createRace);
		helpers.click(createUser, createSomeUser);
		helpers.click(countsOfArmy, createArmy);
		
	}
	
	return onLoad;
	
} (window.tasks.patterns, window.tasks.patterns.helpers));

window.addEventListener('load', window.tasks.patterns.loader, false);