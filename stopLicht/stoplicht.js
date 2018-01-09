let werken;
let buitenwerking;
let rijden;
let rijden2;
let rijden3;
let rijden4;
let roodlicht_lr = false;
let roodlicht_bb = false;
let snelheid = 5;
let snelheid2 = 4;
let snelheid3 = 6;
let snelheid4 = 5;
let stoplicht = document.getElementById('stoplicht');
let auto = document.getElementById('auto');
let stoplicht2 = document.getElementById('stoplicht2');
let auto2 = document.getElementById('auto2');
let auto3 = document.getElementById('auto3');
let auto4 = document.getElementById('auto4');

stoplicht.style.position = 'absolute';
stoplicht.style.left = '715px';
stoplicht.style.top = '510px';

stoplicht2.style.position = 'absolute';
stoplicht2.style.left = '499px';
stoplicht2.style.top = '510px';
stoplicht2.style.transform = 'rotate(180deg)';

auto.style.position = 'absolute';
auto.style.left = '650px';
auto.style.top = '800px';

auto2.style.position = 'absolute';
auto2.style.left = '549px';
auto2.style.top = '80px';

auto3.style.position = 'absolute';
auto3.style.left = '800px';
auto3.style.top = '650px';
auto3.style.transform = 'rotate(90deg)';

auto4.style.position = 'absolute';
auto4.style.left = '80px';
auto4.style.top = '549px';
auto4.style.transform = 'rotate(90deg)';


//Auto controller.
function controller(){
    starten();
    starten2();
    starten3();
    starten4();
}

//Auto states.
//Auto 1.
function starten() {
    auto.style.top = parseInt(auto.style.top) - parseInt(snelheid) + 'px';
    rijden = setTimeout(starten, 10);
    let y_auto = auto.style.top;
    if (parseInt(auto.style.top) === -80) {
        auto.style.top = '900px';
        console.log("Auto 1 is teruggeplaatst.")
    }
    if (roodlicht_lr === true && y_auto === '550px') {
        snelheid = 0;
    }
    else {
        snelheid = 5;
    }
}
//Auto 2. Iets trager dan auto 1, gaat de andere kant op.
function starten2() {
    auto2.style.top = parseInt(auto2.style.top) + parseInt(snelheid2) + 'px';
    rijden2 = setTimeout(starten2, 10);
    let y_auto = auto2.style.top;
    if (parseInt(auto2.style.top) === 980) {
        auto2.style.top = '-80px';
        console.log("Auto 2 is teruggeplaatst.")
    }
    if (roodlicht_lr === true && y_auto === '420px') {
        snelheid2 = 0;
    }
    else {
        snelheid2 = 4;
    }
}
//Auto 3. Gaat zijwaarts. Iets sneller.
function starten3() {
    auto3.style.left = parseInt(auto3.style.left) + parseInt(snelheid3) + 'px';
    rijden3 = setTimeout(starten3, 10);
    let y_auto = auto3.style.left;
    if (parseInt(auto3.style.left) === 980) {
        auto3.style.left = '-80px';
        console.log("Auto 3 is teruggeplaatst.")
    }
    if (roodlicht_bb === true && y_auto === '420px') {
        snelheid3 = 0;
    }
    else {
        snelheid3 = 6;
    }
}

//Auto 4. Gaat zijwaarts.
function starten4() {
    auto4.style.left = parseInt(auto4.style.left) + parseInt(snelheid4) + 'px';
    rijden4 = setTimeout(starten4, 10);
    let y_auto = auto4.style.left;
    if (parseInt(auto4.style.left) === 980) {
        auto4.style.left = '-80px';
        console.log("Auto 4 is teruggeplaatst.")
    }
    if (roodlicht_bb === true && y_auto === '420px') {
        snelheid4 = 0;
    }
    else {
        snelheid4 = 5;
    }
}


function stop() {
    clearTimeout(rijden);
    clearTimeout(rijden2);
    clearTimeout(rijden3);
    clearTimeout(rijden4);
}


function opnieuw() {
    clearTimeout(rijden);
    clearTimeout(rijden2);
    clearTimeout(rijden3);
    clearTimeout(rijden4);
    auto.style.top = '800px';
    auto2.style.top = '800px';
}

//Stoplicht automatisering.
function aanzetten() {
    clearTimeout(buitenwerking);
    maakRood();
    werken = setTimeout(maakGroen, 4000);
    werken = setTimeout(maakGeel, 8000);
    werken = setTimeout(aanzetten, 10000);
}

function knipperen() {
    clearTimeout(werken);
    maakGeel();
    buitenwerking = setTimeout(zetUit, 500);
    buitenwerking = setTimeout(knipperen, 1000);
}

function uitzetten() {
    zetUit();
    clearTimeout(buitenwerking);
    clearTimeout(werken);
}

//Stoplicht states.

function maakRood() {
    roodlicht_lr = true;
    stoplicht.src = "img/stoplichtrood.png";
    stoplicht2.src = "img/stoplichtrood.png";
}

function maakGroen() {
    roodlicht_lr = false;
    stoplicht.src = "img/stoplichtgroen.png";
    stoplicht2.src = "img/stoplichtgroen.png";
}

function maakGeel() {
    roodlicht_lr = false;
    stoplicht.src = "img/stoplichtgeel.png";
    stoplicht2.src = "img/stoplichtgeel.png";
}

function zetUit() {
    roodlicht_lr = false;
    stoplicht.src = "img/stoplichtuit.png";
    stoplicht2.src = "img/stoplichtuit.png";
}