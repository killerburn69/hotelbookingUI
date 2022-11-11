const hidePass = document.querySelectorAll(".hide-pass");
const eyeOpen = document.querySelectorAll(".eye-open");
const eyeClose = document.querySelectorAll(".eye-close");


for(let i = 0; i < eyeClose.length; i++) {
    eyeClose[i].onclick = function () {
        eyeOpen[i].classList.remove("hidden");
        eyeClose[i].classList.add("hidden");
        hidePass[i].setAttribute("type", "text");
    }
}

for(let i = 0; i < eyeOpen.length; i++) {
    eyeOpen[i].onclick = function () {
        eyeOpen[i].classList.add("hidden");
        eyeClose[i].classList.remove("hidden");
        hidePass[i].setAttribute("type", "password");

    }
}







