const text_0 = document.getElementById('text_01');
const text_1 = document.getElementById('text_');
const btnclk = document.getElementById('btn_');

btnclk.addEventListener('click',() => {
    text_0.innerHTML = text_1.value;
    text_1.value = '';
})
