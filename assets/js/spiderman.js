//Animation General

//Effet hover sur le botton
let btniversrse = document.getElementsByClassName('btninverse');
console.log(btniversrse);

for (let i = 0; i < btniversrse.length; i++) {
    btniversrse[i].addEventListener('mouseover', () => {
        btniversrse[i].style.backgroundColor = '#b11313';
        btniversrse[i].style.color = 'white';
        btniversrse[i].style.fontWeight = 'bold';
        btniversrse[i].style.boxShadow = '5px 5px 30px white';
    });
    btniversrse[i].addEventListener('mouseout', () => {
        btniversrse[i].style.backgroundColor = 'white';
        btniversrse[i].style.color = '#b11313';
        btniversrse[i].style.boxShadow = 'none';
    });

}

//Effet sur le footer icones
let footericones = document.getElementsByClassName('footer-icones');
for (let i = 0; i < footericones.length; i++) {
    footericones[i].addEventListener('mouseover', () => {
        footericones[i].style.color = 'white';
    });
    footericones[i].addEventListener('mouseout', () => {
        footericones[i].style.color = 'black';
    });
}

//les rubriques du menu doivent être surligné
let menu = document.querySelectorAll('li');

menu.forEach(function(li) {
    li.addEventListener('mouseover', () => {
        li.style.textDecoration = 'line-through';
    });
    li.addEventListener('mouseout', () => {
        li.style.textDecoration = 'none';
    });
});

//apparaître avec un fade in en démarrant de la gauche(mouvement de gauche à droite).
$(document).ready(function() { //$ =jquery
    $(".box").animate({
        left: '30px ',
    });
    $(".description").fadeIn(5000);
});