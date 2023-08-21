let dia = new Date
let horas = dia.getHours()
let url = window.document.getElementById("tempo")
let imagem2 = window.document.getElementById("flores")

if(horas>=6){
    if(horas<12){
        window.document.body.style.backgroundColor = 'yellow'
        imagem2.style.backgroundImage = `url(imagens/pexels-neosiam-707571.jpg)`
    }
    else if(horas>=12){
        if(horas<18){
            window.document.body.style.backgroundColor = 'green'
            imagem2.style.backgroundImage = `url(imagens/pexels-bill-white-165537\ \(1\).jpg)`
        }
        else{
            window.document.body.style.backgroundColor = 'gray'
            imagem2.style.backgroundImage = `url(imagens/pexels-asad-photo-maldives-1024975.jpg)`
        }  
    }
}
else{
    window.document.body.style.backgroundColor = 'gray'
    imagem2.style.backgroundImage = `url(imagens/pexels-asad-photo-maldives-1024975.jpg)`
}
url.innerText = `Agora é ${horas} horas`