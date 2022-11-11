const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const items = $$('.content__item')
const infos = $$('.menu__user--information')
        
items.forEach((item, index) => {
    const info = infos[index];

    item.onclick = function () {
        $('.menu__user--information.active').classList.remove('active');

        $('.content__item.active').classList.remove('active');

        this.classList.add('active');
        info.classList.add('active');
    };
});