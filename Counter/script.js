const decrease = document.querySelector("#btns button:nth-child(1)");
const reset = document.querySelector("#btns button:nth-child(2)");
const increase = document.querySelector("#btns button:nth-child(3)");
const number = document.querySelector("#titles h1:nth-child(2)")

increase_number = false;
decrease_number = false;

decrease.addEventListener('click', (e) => {
    e.preventDefault()

    number.textContent--;

    let menorQueZero = parseInt(number.textContent) < 0;

    console.log(menorQueZero)

    if(menorQueZero){
        number.style.color = "red"
    };  

});

increase.addEventListener('click', (e) =>{
    e.preventDefault()

    number.textContent++;

    let maiorQueZero = parseInt(number.textContent) > 0;

    console.log(maiorQueZero)

    if(maiorQueZero){
        number.style.color = "green"
    };    
});

reset.addEventListener('click', (e) =>{
    number.textContent = 0;
    number.style.color = "black"    
});