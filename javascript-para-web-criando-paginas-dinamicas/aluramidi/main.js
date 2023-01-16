function playSound(idElementAudio){
    const idElement = document.querySelector(idElementAudio);

    if(idElement && idElement.localName === "audio"){
        idElement.play();
    }

    else {
        console.log('Elemento não encontrado ou seletor inválido!');
    }
}

const buttonList=document.querySelectorAll('.tecla');

for (let contador=0; contador < buttonList.length; contador++){
    const button = buttonList[contador];
    const instrument = button.classList[1];
    const idAudio = `#som_${instrument}`;

    button.onclick = function() {
        playSound(idAudio);
    }

    button.onkeydown = function(evento) {
        if(evento.code === "Space" || evento.code === "Enter"){
            button.classList.add('ativa');
         }
    }

    button.onkeyup = function(evento){
        if(evento.code === "Space" || evento.code === "Enter"){
            button.classList.remove('ativa');
        }
    }

}