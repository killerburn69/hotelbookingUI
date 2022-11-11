let firstname = document.getElementById('firstName');
let lastname = document.getElementById('lastName');
let dateBirth = document.getElementById('dateOfBirth');
let eMail = document.getElementById('emailAddress');
let iPhone = document.getElementById('phoneNumber');
let whereLive = document.getElementById('whereLive');
let form = document.querySelector('form');

// Show input error message
function showError(input, message) {
    const formControl = input.parentElement
    formControl.className = 'container--name error'
    const small = formControl.querySelector('small')
    small.innerText = message;
}

// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'container--name success'
    const small = formControl.querySelector('small')
    small.innerText = '';
}

// Check email is valid
function checkEmail(input) {
	const re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	if (re.test(input.value.trim())) {
		showSuccess(input)
	} else {
		showError(input, 'Please enter a valid email address!')
	}
}

// Check required fields
function checkRequired(inputArr) {
    let isRequired = false
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, 'This field is required!')
			isRequired = true
		} else {
			showSuccess(input)
		}
    })

    return isRequired
}

// Check input length
function checkLength(input, min) {
	if (input.value.length < min) {
		showError(
			input,
			`${getFieldName(input)} must be at least ${min} characters`
		)
	} 
	else {
		showSuccess(input)
	}
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
	if (input1.value !== input2.value) {
		showError(input2, 'Passwords do not match')
	}
}

// Get fieldname
function getFieldName(input) {
	return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

// Event listeners
form.addEventListener('submit', function (e) {
	e.preventDefault()

	if (!checkRequired([firstname, lastname,dateBirth, eMail, iPhone, whereLive])) {
		checkLength(firstname)
		checkLength(lastname)
        checkLength(dateBirth)
		checkEmail(eMail)
        checkLength(iPhone)
        checkLength(whereLive)
		// checkPasswordsMatch(passWord, passWord2)
	}
})

