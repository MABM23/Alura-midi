const getSong = (id) => document.querySelector(`#som_tecla_${id}`);
const playSong = (songName) => getSong(songName).play();
const buttonPon = document.querySelectorAll('.tecla').forEach(button => { 
    button.onclick = onclick
    button.onkeydown = onkeydown;
    button.onkeyup = onkeyup;
});

function onclick(button) {
    const buttonName = button.srcElement.textContent.toLowerCase();
    playSong(buttonName);
}

function onkeydown(button) {
    if (['Enter', 'Space'].includes(button.code)) button.srcElement.classList.add('ativa');
}

function onkeyup(button) {
    console.log(button)
    if (['Enter', 'Space'].includes(button.code)) button.srcElement.classList.remove('ativa');
}