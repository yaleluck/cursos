const buttonCalcular = document.querySelector('#calcular');
const result = document.querySelector('.resultado');
buttonCalcular.addEventListener('click', () => {
    result.innerHTML = 'Fui clicado';
})