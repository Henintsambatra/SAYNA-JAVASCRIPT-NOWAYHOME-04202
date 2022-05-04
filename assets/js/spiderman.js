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
    btniversrse[i].addEventListener('mouseover', () => {
        btniversrse[i].style.backgroundColor = 'white';
        btniversrse[i].style.color = '#b11313';
        btniversrse[i].style.boxShadow = 'none';
    });

}
//Effet sur le footer icones

let footericone = document.getElementsByTagName('footer-icones');
for (let i = 0; i < footericone.length; i++) {
    btniversrse[i].addEventListener('mouseover', () => {
        footericone[i].style.color = 'white';
    });
    btniversrse[i].addEventListener('mouseover', () => {
        footericone[i].style.color = 'black';
    });
}