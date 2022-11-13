const formFile2 = document.querySelector('#photo2');

var uploadImg1 = "";

formFile2.addEventListener("change", function() {
    const readers = new FileReader();
    readers.addEventListener("load", function() {
        uploadImg1 = readers.result;
        document.querySelector(".menu__images1").style.backgroundImage = `url(${uploadImg1})`
    })
    readers.readAsDataURL(this.files[0]);

})