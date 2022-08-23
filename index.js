'use strict';

// Validate form data
function validateData() {
	// Remove all error messages
	let errorMsgs = document.querySelectorAll(".signup-container form small:not(form:last-child)");
	for (let i = 0; i < errorMsgs.length; i++) { errorMsgs[i].remove(); }

	// Handle inputs emptyness
	let inputFields = document.querySelectorAll(".signup-container form input:not(input[type=submit])");
	for (let i = 0; i < inputFields.length; i++) {
		if (inputFields[i].value == "") {
			// Highlight missed input field
			inputFields[i].style.borderColor = "var(--red)";
			// Append error message
			let errorMsg = document.createElement("small");
			errorMsg.style.color = "var(--red)";
			errorMsg.style.fontWeight = "600";
			errorMsg.textContent = inputFields[i].name + " cannot bet empty";
			errorMsg.style.textAlign = "right";
			errorMsg.style.fontStyle = "italic";
			errorMsg.style.marginBottom = "5%";
			errorMsg.id = i;
			document.querySelector(".signup-container form").insertBefore(errorMsg, inputFields[i].nextSibling);
			inputFields[i].style.marginBottom = "0";
		} else {
			inputFields[i].style.borderColor = "lightgray";
			inputFields[i].style.marginBottom = "5%";
		}
	}

	// Validate provided e-mail
	let emailInput = document.querySelector(".signup-container form input[type=email]");
	if (/.+@.+\.com/.test(emailInput.value)) {
		document.querySelector("invalid-email").remove();
	} else if (emailInput.value != "") {
		let errorMsg = document.createElement("small");
		emailInput.style.borderColor = "var(--red)";
		errorMsg.style.color = "var(--red)";
		errorMsg.style.fontWeight = "600";
		errorMsg.textContent = "Looks like this is not an email";
		errorMsg.style.textAlign = "right";
		errorMsg.style.fontStyle = "italic";
		errorMsg.id = "invalid-email";
		document.querySelector(".signup-container form").insertBefore(
			errorMsg,
			document.querySelector("input[type=password]")
		);
	}
}
