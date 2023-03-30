const submitBtn = document.querySelector(".btn-success");
const form = document.querySelector("form");

//Return true si le nom de sujet est valide sinon créer un message d'erreur
const checkSujet = (sujet) => {
	const pattern = /^[a-zA-Z]{1}[a-zA-Z -_.?!:\d]{1,50}$/;
	if (sujet.match(pattern)) {
		return true;
	} else {
		errorMsg("formSujet", "Votre nom de sujet est invalide");
		return false;
	}
};

//Return true si l'adresse email est valide sinon créer un message d'erreur
const checkMail = (mail) => {
	const patternMail =
		/^[a-zA-Z\d]{1,20}[-._]?[a-zA-Z\d]{0,20}@{1}[a-z\d]{1,10}\.{1}[a-z]{2,5}$/;
	if (mail.match(patternMail)) {
		return true;
	} else {
		errorMsg("formMail", "Votre adresse email est invalide");
		return false;
	}
};

//return true si le message est valide sinon créer un message d'erreur
const checkMessage = (message)=>{
	const pattern = /^[\w\d&é"'(-è_çà)=#{+âêŷûîôŝĝĥ ĵŵĉ,;:!§\/?\/äëẗÿüïöḧẅẍ}]{1,144}$/;
	if (message.match(pattern)) {
		return true
	} else {
		errorMsg("formMessage", "Votre message n\'est pas valide");
		return false;
	};
}

//Créer un message d'erreur pour le param1 avec param2 comme message
const errorMsg = (inputDiv, message) => {
	const emplacement = document.querySelector("." + inputDiv);
	const errorElement = document.createElement("span");
	errorElement.classList.add("text-danger", "fw-light", "formErrors");
	errorElement.innerText = message;
	emplacement.appendChild(errorElement);
};

submitBtn.addEventListener("click", (e) => {
	//Désactive le comportement par défault du submit
	e.preventDefault();

	//Récupère tous les champs du formulaire
	const formData = new FormData(form, submitBtn);

	//Transforme les champs en Objet
	const data = Object.fromEntries(formData);

	//Retire tous les messages précédants
	const errorNodes = document.querySelectorAll(".formErrors");
	errorNodes.forEach((e) => {
		e.remove();
	});

    //Envoi si le nom et l'adresse mail sont valident
	if (checkSujet(data.sujet) & checkMail(data.mail) & checkMessage(data.message)) {
        //Affiche nom, adresseMail, Message
        console.log('nom: '+data.sujet, 'adresse email: '+data.mail, 'message: '+data.message);
    }
});
