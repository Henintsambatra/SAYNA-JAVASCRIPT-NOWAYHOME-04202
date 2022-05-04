//Animation General

//Effet hover sur le botton
let btniversrse = document.getElementsByClassName('btninverse');
console.log(btniversrse);

for (let i = 0; i < btniversrse.length; i++) {
    btniversrse[i].addEventListener('mouseover', () => {
        btniversrse[i].style.backgroundColor = '#b11313';
        btniversrse[i].style.color = 'white';
    })

}