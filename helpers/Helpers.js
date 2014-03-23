window.tasks.patterns.helpers = (function () {

	function render (elem, insertedHtml) {
		elem.innerHTML = insertedHtml;
	}
	
	function addEventClick (elem, callback) {
		elem.addEventListener('click', callback, false);
	}

	return { 

		click: addEventClick,
		
		render: render
		
	};
	
} ());