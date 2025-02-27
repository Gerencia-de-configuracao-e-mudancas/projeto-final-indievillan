// Função de espera (só reage a funções asyncs)
function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

async function slide(){
    imgSlide = window.document.getElementById("banner")
    
}