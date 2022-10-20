let field = document.getElementById('app-field');
let btn = document.getElementById('app-btn');
let listItems = document.getElementById('app-listItems');
let today_container = document.querySelector('.today');
let this_week_container = document.querySelector('.this-week');
let this_month_container = document.querySelector('.this-month');
var editButtonCheck = 1 ;



// On gère l'event clic
btn.addEventListener('click', () => {
	var option_value = document.querySelector('#text');
	console.log(option_value);
	var value_option = option_value.options[option_value.selectedIndex].value;
	console.log(value_option);

	//on récupère le text de l'input
	//on récupère la valeur de l'input
	let text = field.value;
	// console.log(text);

	//apres il faut penser à utiliser .createElement()

	if (text === '') {} else if (value_option === 'today') {
		//création balise li (tableau) , balise bouton
		let newLi = document.createElement("li");
		let trashButton = document.createElement("button");
		let editButton = document.createElement("button");
         //typage bouton
		editButton.type = "button";
		//Rajouter du HTML
		editButton.innerHTML = '<i class="fa-solid fa-pen"></i>';
		//Rajouter une class
		editButton.classList.add("trash-btn");
        // fonction action quand on clique
		editButton.onclick = function () {
			// Si différent de 0 alors = 1 donc on rentre dans la condition
			if (editButtonCheck != 0 ){
				
			    editButtonCheck = 0 ;
				// console.log(editButtonCheck);
				
				let editButtonType = document.createElement("input");
				let editButtonSubmit = document.createElement("button");
	
				editButtonType.type = "text";
				editButtonType.id = "editInput";
	
				editButtonSubmit.type = "submit";
				editButtonSubmit.innerHTML = 'Modifier';
				editButtonSubmit.id = "submitInput";
	
				editButtonSubmit.onclick = function () {
					// Écraser le texte initital par la valeur émis par le bouton
					newLi.innerHTML = editButtonType.value;
	                // Supprimer la variable
					editButtonSubmit.remove();
					editButtonType.remove();
					// On le repasse à 1 pour qu'on puisse le re modifié
					editButtonCheck = 1 ; 
				};
				today_container.appendChild(editButtonType);
				today_container.appendChild(editButtonSubmit); 
				
			} 
		};
		trashButton.type = "button";
		trashButton.onclick = function () {
			var alertSupprime = confirm("Êtes vous sûr de supprimer ?");
			if (alertSupprime == true) {
				newLi.remove();
				trashButton.remove();
				editButton.remove();
				if (document.getElementById('submitInput') != null) {
					document.getElementById('submitInput').remove();
					document.getElementById('editInput').remove();
				}


			}
		};
		trashButton.innerHTML = '<i class="fas fa-trash"> </i>';

		trashButton.classList.add("trash-btn");

		//input (text)

		newLi.textContent = text;
		//console.log(newLi);

		//Add new elements

		// console.log(newLi)
		newLi.textContent = text;
		// console.log(newLi);

		//on ajoute le nouvel Li à la list
		today_container.appendChild(newLi);
		today_container.appendChild(trashButton);
		today_container.appendChild(editButton);

		// On veut supprimer le text de l'input
		field.value = "";



	} else if (value_option === 'this_week') {
		//création balise li (tableau) , balise bouton
		let newLi = document.createElement("li");
		let trashButton = document.createElement("button");
		let editButton = document.createElement("button");
         //typage bouton
		editButton.type = "button";
		//Rajouter du HTML
		editButton.innerHTML = '<i class="fa-solid fa-pen"></i>';
		//Rajouter une class
		editButton.classList.add("trash-btn");
        // fonction action quand on clique
		editButton.onclick = function () {
			// Si différent de 0 alors = 1 donc on rentre dans la condition
			if (editButtonCheck != 0 ){
				
			    editButtonCheck = 0 ;
				// console.log(editButtonCheck);
				
				let editButtonType = document.createElement("input");
				let editButtonSubmit = document.createElement("button");
	
				editButtonType.type = "text";
				editButtonType.id = "editInput";
	
				editButtonSubmit.type = "submit";
				editButtonSubmit.innerHTML = 'Modifier';
				editButtonSubmit.id = "submitInput";
	
				editButtonSubmit.onclick = function () {
					// Écraser le texte initital par la valeur émis par le bouton
					newLi.innerHTML = editButtonType.value;
	                // Supprimer la variable
					editButtonSubmit.remove();
					editButtonType.remove();
					// On le repasse à 1 pour qu'on puisse le re modifié
					editButtonCheck = 1 ; 
				};
				this_week_container.appendChild(editButtonType);
				this_week_container.appendChild(editButtonSubmit); 
				
			} 
		};
		trashButton.type = "button";
		trashButton.onclick = function () {
			var alertSupprime = confirm("Êtes vous sûr de supprimer ?");
			if (alertSupprime == true) {
				newLi.remove();
				trashButton.remove();
				editButton.remove();
				if (document.getElementById('submitInput') != null) {
					document.getElementById('submitInput').remove();
					document.getElementById('editInput').remove();
				}


			}
		};
		trashButton.innerHTML = '<i class="fas fa-trash"> </i>';

		trashButton.classList.add("trash-btn");

		//input (text)

		newLi.textContent = text;
		//console.log(newLi);

		//Add new elements

		// console.log(newLi)
		newLi.textContent = text;
		// console.log(newLi);

		//on ajoute le nouvel Li à la list
		this_week_container.appendChild(newLi);
		this_week_container.appendChild(trashButton);
		this_week_container.appendChild(editButton);

		// On veut supprimer le text de l'input
		field.value = "";



		
	} else if (value_option === 'this_month') {
		//création balise li (tableau) , balise bouton
		let newLi = document.createElement("li");
		let trashButton = document.createElement("button");
		let editButton = document.createElement("button");
         //typage bouton
		editButton.type = "button";
		//Rajouter du HTML
		editButton.innerHTML = '<i class="fa-solid fa-pen"></i>';
		//Rajouter une class
		editButton.classList.add("trash-btn");
        // fonction action quand on clique
		editButton.onclick = function () {
			// Si différent de 0 alors = 1 donc on rentre dans la condition
			if (editButtonCheck != 0 ){
				
			    editButtonCheck = 0 ;
				// console.log(editButtonCheck);
				
				let editButtonType = document.createElement("input");
				let editButtonSubmit = document.createElement("button");
	
				editButtonType.type = "text";
				editButtonType.id = "editInput";
	
				editButtonSubmit.type = "submit";
				editButtonSubmit.innerHTML = 'Modifier';
				editButtonSubmit.id = "submitInput";
	
				editButtonSubmit.onclick = function () {
					// Écraser le texte initital par la valeur émis par le bouton
					newLi.innerHTML = editButtonType.value;
	                // Supprimer la variable
					editButtonSubmit.remove();
					editButtonType.remove();
					// On le repasse à 1 pour qu'on puisse le re modifié
					editButtonCheck = 1 ; 
				};
				this_month_container.appendChild(editButtonType);
				this_month_container.appendChild(editButtonSubmit); 
				
			} 
		};
		trashButton.type = "button";
		trashButton.onclick = function () {
			var alertSupprime = confirm("Êtes vous sûr de supprimer ?");
			if (alertSupprime == true) {
				newLi.remove();
				trashButton.remove();
				editButton.remove();
				if (document.getElementById('submitInput') != null) {
					document.getElementById('submitInput').remove();
					document.getElementById('editInput').remove();
				}


			}
		};
		trashButton.innerHTML = '<i class="fas fa-trash"> </i>';

		trashButton.classList.add("trash-btn");

		//input (text)

		newLi.textContent = text;
		//console.log(newLi);

		//Add new elements

		// console.log(newLi)
		newLi.textContent = text;
		// console.log(newLi);

		//on ajoute le nouvel Li à la list
		this_month_container.appendChild(newLi);
		this_month_container.appendChild(trashButton);
		this_month_container.appendChild(editButton);

		// On veut supprimer le text de l'input
		field.value = "";
	}

});

let darkToggle = document.querySelector('#darkToggle');

darkToggle.addEventListener('darkmode', () => {
	document.body.classList.toggle('dark');
});

function toggleTheme() {
	// Obtains an array of all <link>
	// elements.
	// Select your element using indexing.
	var theme = document.getElementsByTagName('link')[0];

	// Change the value of href attribute
	// to change the css sheet.
	if (theme.getAttribute('href') == 'style.css') {
		theme.setAttribute('href', 'dark.css');
	} else {
		theme.setAttribute('href', 'style.css');
	}
}