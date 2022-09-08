// const del1 = document.querySelector('[data-id="box1"]');


// const del2 = document.querySelectorAll('[data-id="box1"]');

const BOXES = document.querySelectorAll('[data-id]');
const boxCont = document.querySelector('#container');


// const el2 = document.querySelector('[data-id]');

// const elements = document.querySelectorAll('[data-id="box1"]');

// el1.style.backgroundColor = "yellow";
// el2['*'].style.color ="violet";
// el3['*'].style.textDecoration = "underline"

colArray = ["green", "yellow", "red", "blue", "lime", "cyan", "violet", "magenta", "brown", "teal", "olive", "maroon", "grey", "darkgrey" ,"brown"];

setInterval(ChangeColor, 1000);

function ChangeColor() {

    randombg = Math.floor(Math.random() * colArray.length);
    boxCont.style.backgroundColor = colArray[randombg];

    for (let i = 0; i < BOXES.length; i++) {
        random = Math.floor(Math.random() * colArray.length);

        // buradaki kontrolü kutucukların rengi background ile aynı olmasın diye
        while (random == randombg) {
            random = Math.floor(Math.random() * colArray.length);
        }
        BOXES[i].style.backgroundColor = colArray[random];
    }
}
ChangeColor();
// sayfa yuklenir yuklenmez çalışmaya başlasın diye