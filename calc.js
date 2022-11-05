let outputEL = document.getElementById('cal-output');
let output = '';
let input = "";

const calNumBtns = document.getElementsByClassName('cal-btn-num');

for (let i = 0; i < calNumBtns.length; i++) {
    calNumBtns[i].addEventListener('click', function (e) {
        input += e.target.innerText;
        console.log(input);
    });
}
