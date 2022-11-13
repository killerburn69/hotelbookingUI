const formFile1 = document.querySelector('#photo1')

var uploadImg = "";

formFile1.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", function() {
        uploadImg = reader.result;
        document.querySelector(".menu__images").style.backgroundImage = `url(${uploadImg})`
    })
    reader.readAsDataURL(this.files[0]);

})

