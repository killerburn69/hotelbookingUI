// form change pass
let oldPass = document.getElementById('oldPass');
let newPass = document.getElementById('newPass');
let confirmPass = document.getElementById('confirmPass');

let form = document.getElementById('form-2');

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
		showError(input2, 'Confirm password must be the same!')
	}
}

// Event listeners
form.addEventListener('submit', function (e) {
	e.preventDefault()

	if (!checkRequired([oldPass, newPass])) {
		checkLength(newPass, 6)
        checkPasswordsMatch(newPass, confirmPass)
	}
})

