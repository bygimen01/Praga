function charLimit(limitField, limitNum) {
    if (limitField.value.length > limitNum) {
        limitField.value = limitField.value.substring(0, limitNum);}
}


function fixed_header_menu() {
    let menu = document.getElementById('nav_menu');
    let apartments = document.getElementById('apartments');

    if (window.pageYOffset >1010){
        menu.classList.add('fix-head');
        menu.style.top = '0px';
        apartments.style.paddingTop = '70px';
    } else {
        menu.classList.remove('fix-head');
        apartments.style.paddingTop = '0';
    }

}

// let anim_item = document.getElementsByClassName('anim-item');
// let anim_item_ander = document.getElementsByClassName('anim-item-under');
// let p_anim = document.getElementsByClassName('p-anim');

const anim = document.querySelectorAll('.anim-item');
const anim_item_under = document.querySelectorAll('.anim-item-under');
const p_anim = document.querySelectorAll('.p-anim');


if (anim.length || anim_item_under || p_anim > 0) {
    const animations = [anim, anim_item_under, p_anim];
    window.addEventListener('scroll', animScroll);
    function animScroll(params) {
        for (let index = 0; index <animations.length; index++) {
            for (let j = 0; j < animations[index].length; j++ ) {

                let animItem = animations[index][j];
                let random_anim = ['anim-item', 'anim-item-under', 'p-anim'];

                const animItemHeight = animItem.offsetHeight;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;

                let animItemPoint = window.innerHeight - animItemHeight/animStart;

                if (animItemHeight > window.innerHeight){
                    animItemPoint = window.innerHeight - window.innerHeight / animStart
                }

                if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                    animItem.classList.remove('anim-item');
                    animItem.classList.remove('anim-item-under');
                    animItem.classList.remove('p-anim');
                } else {
                    if (!animItem.classList.contains('anim_no_hide')){
                        animItem.classList.add('p-anim');
                    }

                }
            }

            }


    }



    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}

    }
}

window.addEventListener('scroll', fixed_header_menu);


function fill(el) {
    el.style.background = '#FCFF8F';
}


function createCalendar(elem, year, month) {

    let mon = month - 1;
    let d = new Date(year, mon);

    let table = '<table><tr><th>pn</th><th>wt</th><th>sr</th><th>czw</th><th>pt</th><th>sb</th><th>nd</th></tr><tr>';

    // пробелы для первого ряда
    // с понедельника до первого дня месяца
    // * * * 1  2  3  4
    for (let i = 0; i < getDay(d); i++) {
        table += '<td></td>';
    }

    // <td> ячейки календаря с датами
    while (d.getMonth() == mon) {
        table += '<td>' + d.getDate()  + '</td>';
        // dayselect =  d.getDate() + '.0' + (d.getMonth()+1) + '.' + d.getFullYear();  '<p>' + d.getDate() + '.0' + (d.getMonth()+1) + '.' + d.getFullYear(); + '</p>'

        if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
            table += '</tr><tr>';
        }
        d.setDate(d.getDate() + 1);
    }

    // добить таблицу пустыми ячейками, если нужно
    // 29 30 31 * * * *
    if (getDay(d) != 0) {
        for (let i = getDay(d); i < 7; i++) {
            table += '<td></td>';
        }
    }

    // закрыть таблицу
    table += '</tr></table>';

    elem.innerHTML = table;
}

function getDay(date) { // получить номер дня недели, от 0 (пн) до 6 (вс)
    let day = date.getDay();
    if (day == 0) day = 7; // сделать воскресенье (0) последним днем
    return day - 1;
}


function createCalendar2(elem, year, month) {

    let mon = month - 1;
    let d = new Date(year, mon);

    let table = '<table><tr><th>pn</th><th>wt</th><th>sr</th><th>czw</th><th>pt</th><th>sb</th><th>nd</th></tr><tr>';

    // пробелы для первого ряда
    // с понедельника до первого дня месяца
    // * * * 1  2  3  4
    for (let i = 0; i < getDay(d); i++) {
        table += '<td></td>';
    }

    // <td> ячейки календаря с датами
    while (d.getMonth() == mon) {
        table += '<td>' + d.getDate()  + '</td>';
        // dayselect =  d.getDate() + '.0' + (d.getMonth()+1) + '.' + d.getFullYear();  '<p>' + d.getDate() + '.0' + (d.getMonth()+1) + '.' + d.getFullYear(); + '</p>'

        if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
            table += '</tr><tr>';
        }
        d.setDate(d.getDate() + 1);
    }

    // добить таблицу пустыми ячейками, если нужно
    // 29 30 31 * * * *
    if (getDay(d) != 0) {
        for (let i = getDay(d); i < 7; i++) {
            table += '<td></td>';
        }
    }

    // закрыть таблицу
    table += '</tr></table>';

    elem.innerHTML = table;
}



let currentDate = new Date();
let currentchose = currentDate.getMonth() + 1;

let month = [
    'styczeń',
    'luty',
    'marzec',
    'kwiecień',
    'maj',
    'czerwiec',
    'lipiec',
    'sierpień',
    'wrzesień',
    'październik',
    'listopad',
    'grudzień'
];



function nextMonth(){
    currentchose++;
    createCalendar(calendar, 2021, currentchose);
    currentMoth.textContent = month[currentchose-1] + ' '+ year.getFullYear();
}

function beforeMonth(){
    currentchose--;
    createCalendar(calendar, 2021, currentchose);
    currentMoth.textContent = month[currentchose-1] + ' '+ year.getFullYear();
}

let chekincalendar = document.getElementById('checkincalendar');
let calendarWrapper = document.getElementById('calendar-wrap');


function showCalendar(){
    document.querySelector('.month').style.left = '330px';

    chekincalendar.style.display = 'block';
    calendarWrapper.style.display = 'block';
}

window.addEventListener('click', checkerCalendar);

function checkout() {


    showCalendar();

    document.querySelector('.month').style.left = '600px';
}

function checkerCalendar() {

    let clientY = event.clientY;
    let clientX = event.clientX;
    let elem = document.elementFromPoint(clientX, clientY);
    let days = document.getElementById('calendar');

    if (elem.tagName == 'TD'){

        elem.classList.add('selected-data');
        if (document.querySelector('.month').style.left == '330px'){
            document.getElementById('checkin').innerText = elem.textContent + ' ' + currentMoth.textContent;
        } else {
            document.getElementById('checkout').innerText = elem.textContent + ' ' + currentMoth.textContent;
        }
        chekincalendar.style.display = 'none';

    }

    if (elem.classList.contains('guest')){
        document.getElementById('numberofguests').innerText = elem.textContent;
        guests.style.display = 'none';
    }

    if (guests.style.display == 'grid'){
        if (elem.id != 'gues'){
            guests.style.display = 'none';
        }
    }

    if (chekincalendar.style.display == 'block'){
        if (!(elem.querySelector('.clndrbtn'))){
            chekincalendar.style.display = 'none';
            calendarWrapper.style.display = 'none';
        }
    }

}

let guests = document.getElementById('guests');

function showGuests(){
    calendarWrapper.style.display = 'block';
    guests.style.display = 'grid';
}

let year = new Date();

let currentMoth = document.getElementById('currentMonth');
currentMoth.textContent = month[currentchose-1]  + ' '+ year.getFullYear();

createCalendar(calendar, 2021, currentchose);


let apartments = document.getElementsByClassName('offer');

let currentapp = 2;

function showApartments() {
    for (let i = 0; i < 3; i++){
        apartments[i].style.display = 'block';
    }

    if (apartments[0].style.display == 'block'){
        document.getElementById('before_apart').style.display = 'none';
    } else {
        document.getElementById('before_apart').style.display = 'block';
    }

    if (apartments[apartments.length-1].style.display == 'block'){
        document.getElementById('next_apart').style.display = 'none';
    } else {
        document.getElementById('next_apart').style.display = 'block';
    }
}

function next_apart(){
    apartments[++currentapp].style.display = 'block';
    apartments[currentapp-3].style.display = 'none';

    if (apartments[0].style.display == 'block'){
        document.getElementById('before_apart').style.display = 'none';
    } else {
        document.getElementById('before_apart').style.display = 'block';
    }

    if (apartments[apartments.length-1].style.display == 'block'){
        document.getElementById('next_apart').style.display = 'none';
    } else {
        document.getElementById('next_apart').style.display = 'block';
    }

}

function before_apart() {
    apartments[currentapp-3].style.display = 'block';
    apartments[currentapp].style.display = 'none';
    currentapp--;

    if (apartments[0].style.display == 'block'){
        document.getElementById('before_apart').style.display = 'none';
    } else {
        document.getElementById('before_apart').style.display = 'block';
    }

    if (apartments[apartments.length-1].style.display == 'block'){
        document.getElementById('next_apart').style.display = 'none';
    } else {
        document.getElementById('next_apart').style.display = 'block';
    }
}

showApartments();

function showAllApartments() {
    if (apartments[0].style.display =='block' && apartments[apartments.length-1].style.display == 'block'){
        for (let i = 3; i<apartments.length; i++){
            apartments[i].style.display = 'none';
        }
        document.getElementById('more_apartments_text').innerText = 'More apartments';
        document.getElementById('next_apart').style.display = 'block';
    } else {
        for (let i = 0; i < apartments.length; i++){
            apartments[i].style.display = 'block';
        }

        document.getElementById('more_apartments_text').innerText = 'Show less apartments';

        document.getElementById('next_apart').style.display = 'none';
        document.getElementById('before_apart').style.display = 'none';
    }


}

function hideMoreApartments(){
    for (let i = 3; i < apartments.length; i++){
        apartments[i].style.display = 'none';
    }
}

let products = document.getElementsByClassName('product');

function hideProduct(){
    for (let i = 4; i < products.length; i++){
        products[i].style.display = 'none';
    }
}

let hit = true;
let count = 0;

let clickerAartments = setInterval(() => {
        if (document.getElementById('next_apart').style.display == 'block' && hit){
            next_apart();
        } else {
            hit = false;
            before_apart();
            count++;
        }
        if (count > 5){
            count = 0;
            hit = true;
            next_apart();
        }
    }, 5000);

let ru = document.querySelector('.ru');
let en =  document.querySelector('.en');
let de = document.querySelector('.de');

function fillEng(el) {
    let langs = [ru, de, en];

    for (let i = 0; i< langs.length; i++){
        langs[i].style.background = 'none';
    }

    el.style.background = '#dad4ee';
}

function to_en() {
    let btn = document.getElementById('lang_btn');
    btn.innerText = document.getElementById('en').textContent;
    fillEng(en);
}

function to_ru() {
    let btn = document.getElementById('lang_btn');
    fillEng(ru);
    btn.innerText = document.getElementById('ru').textContent;
}

function to_de() {
    let btn = document.getElementById('lang_btn');
    fillEng(de);
    btn.innerText = document.getElementById('de').textContent;
}

function show_lg() {
    let list = document.getElementById('lang_list');
    let arrow = document.getElementById('lang_arrow');

    if (list.style.display == 'block'){
        list.style.opacity = 0;
        list.style.display = 'none';
        document.getElementById('lang_arrow').classList.remove('rotate');
    } else {

        arrow.classList.add('rotate');

        list.style.display = 'block';

        let op = 0;  // initial opacity
        let timer = setInterval(function () {
            if (op >= 1){
                clearInterval(timer);
                // list.style.display = 'none';
            }
            op += 0.1;
            list.style.opacity = op;
        }, 50);

    }

}

window.addEventListener('click', close_lg_menu);

function close_lg_menu() {
    let clientY = event.clientY;
    let clientX = event.clientX;
    let elem = document.elementFromPoint(clientX, clientY);
    let list = document.getElementById('lang_list');


    if (list.style.display == 'block' && elem.id!='lang_btn'){
        list.style.opacity = 0;
        list.style.display = 'none';
        document.getElementById('lang_arrow').classList.remove('rotate');
    }


}




function mobile() {
    let mediaQuery = window.innerWidth;
    let searching_block = document.getElementById('srch_btn_hd');
    let header_nav = document.querySelector('.header__nav');
    let booking_btn = document.getElementById('booking-btn');
    let nav_social = document.getElementById('apartments-nav-social-media');
    let nav_apart = document.getElementById('apartments-nav');
    let special_block_wrap = document.querySelector('.special-block-wrapper');
    let header_title = document.querySelector('.title');
    let find_is_text = document.querySelector('.find-us-text');

    if (mediaQuery<1480 && mediaQuery > 1210){
        booking_btn.innerText = 'Booking';
        booking_btn.style.width = '100px';
        nav_social.style.margin = '20px 0px';
        nav_apart.style.marginLeft = '250px';
        nav_apart.style.marginRight = '20px';
        header_nav.style.display = 'block';
        document.querySelector('.mob_logo').style.display = 'none';
        searching_block.style.display = 'flex';
        header_title.style.fontSize = '64px';
        header_title.style.width = '933px';
        find_is_text.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consect tempor incididunt ut labore et dolore magna aliqua.';
    } else if (mediaQuery < 1225 && mediaQuery > 520) {
        header_nav.style.display = 'none';
        document.querySelector('.mob_logo').style.display = 'block';
        searching_block.style.display = 'none';
        header_title.style.fontSize = '38px';
        header_title.style.width = '373px';
        // clearInterval(clickerAartments);
    } else if (mediaQuery < 520){
        clearInterval(clickerAartments);
        find_is_text.innerText = 'Lorem ipsum dolor sit amet, conse ctetur adipiscinpor incididunt ut laboredolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati.';
    } else {
        find_is_text.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consect tempor incididunt ut labore et dolore magna aliqua.';
        booking_btn.innerText = 'Booking online';
        booking_btn.style.width = '160px';
        nav_social.style.margin = '20px 32px';
        nav_apart.style.marginLeft = '0';
        nav_apart.style.marginRight = '137px';

    }

    if (mediaQuery < 1415){
        hideProduct();
    }

    if (mediaQuery < 965){
        hideMoreActiv();
    } else {
        showALlActiv();
        document.getElementById('next_activ').style.display = 'none';
    }



    if (mediaQuery < 1648){
        clearInterval(clickerAartments);
    }
}

let mobMenu = document.querySelector('.mob-menu');
let mobMenuBtn = document.querySelector('.show-mob-menu-btn');
    function showMobMenu() {
        if (mobMenu.style.display == 'block'){
            mobMenu.style.display = 'none';
            mobMenuBtn.style.background = 'none';
        } else {
            mobMenu.style.display = 'block';
            mobMenuBtn.style.background = '#f1eff8';
        }
}



mobile();

window.addEventListener('resize', mobile);
window.addEventListener('resize', showApartments);

// SWIPE SLIDERS

// let products = document.getElementsByClassName('product');

function showAllActivity(){
    for (let i = 0; i< products.length; i++){
        products[i].style.display = 'block';
    }
}

let currentproduct = 1;


function hideMoreActiv(){
        for (let i = 2; i<products.length; i++){
            products[i].style.display = 'none';
        }
}

function next_activ(){
    console.log(currentproduct);


    if (products[0].style.display == 'block'){
        document.getElementById('before_activ').style.display = 'none';
    } else {
        document.getElementById('before_activ').style.display = 'block';
    }

    if (currentproduct == 4){
        document.getElementById('next_activ').style.display = 'none';
    } else {
        document.getElementById('next_activ').style.display = 'block';
    }

    if (currentproduct == products.length -1){
        products[currentproduct-1].style.display = 'none';
        document.getElementById('next_activ').style.display = 'none';
    } else {
        if (currentproduct == 0){
            products[++currentproduct].style.display = 'block';
            products[currentproduct-1].style.display = 'none';

        } else {
            products[++currentproduct].style.display = 'block';
            products[currentproduct-2].style.display = 'none';
        }
    }

}

function before_activ() {
    console.log(currentproduct);

    if (currentproduct == 3){
        currentproduct--;
        products[currentproduct].style.display = 'block';
        // currentproduct = 2;
    } else {
        products[currentproduct-1].style.display = 'block';
        products[currentproduct+1].style.display = 'none';
        currentproduct--;

    }


    if (products[0].style.display == 'block'){
        document.getElementById('before_activ').style.display = 'none';
    } else {
        document.getElementById('before_activ').style.display = 'block';
    }

    if (products[products.length-1].style.display == 'block'){
        document.getElementById('next_activ').style.display = 'none';
    } else {
        document.getElementById('next_activ').style.display = 'block';
    }
}

let opinions = document.getElementsByClassName('opinions-card');
let currentOpinion = 0;

function nextOpinion() {
        opinions[currentOpinion++].style.display = 'none';
        opinions[currentOpinion].style.display = 'flex';


    if (opinions[0].style.display == 'flex'){
        document.getElementById('opinions-left-arrow').style.display = 'none';
    } else {
        document.getElementById('opinions-left-arrow').style.display = 'block';
    }

    if (opinions[opinions.length-1].style.display == 'flex'){
        document.getElementById('opinions-right-arrow').style.display = 'none';
    } else {
        document.getElementById('opinions-right-arrow').style.display = 'block';
    }
}

function beforeOpinion() {
    opinions[currentOpinion--].style.display = 'none';
    opinions[currentOpinion].style.display = 'flex';


    if (opinions[0].style.display == 'flex'){
        document.getElementById('opinions-left-arrow').style.display = 'none';
    } else {
        document.getElementById('opinions-left-arrow').style.display = 'block';
    }

    if (opinions[opinions.length-1].style.display == 'flex'){
        document.getElementById('opinions-right-arrow').style.display = 'none';
    } else {
        document.getElementById('opinions-right-arrow').style.display = 'block';
    }
}

