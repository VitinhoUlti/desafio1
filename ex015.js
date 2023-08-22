let dia = new Date
let horas = dia.getHours()
let url = window.document.getElementById("tempo")
let imagem2 = window.document.getElementById("flores")
let header = window.document.getElementById("header")
let main = window.document.getElementById("main")
let texto =window.document.getElementById("texto")

if(horas>=6){
    if(horas<12){
        window.document.body.style.backgroundColor = 'yellow'
        imagem2.style.backgroundImage = `url(imagens/pexels-neosiam-707571.jpg)`
        header.style.backgroundColor = 'yellow'
        main.style.backgroundColor = 'yellow'
        texto.style.backgroundColor = 'yellow'
    }
    else if(horas>=12){
        if(horas<18){
            window.document.body.style.backgroundColor = 'green'
            imagem2.style.backgroundImage = `url(imagens/arvore.jpg)`
            header.style.backgroundColor = 'green'
            main.style.backgroundColor = 'green'
            texto.style.backgroundColor = 'green'
        }
        else if(horas>=18){
            window.document.body.style.backgroundColor = 'gray'
            imagem2.style.backgroundImage = `url(imagens/pexels-asad-photo-maldives-1024975.jpg)`
            header.style.backgroundColor = 'gray'
            main.style.backgroundColor = 'gray'
            texto.style.backgroundColor = 'gray'
        }  
    }
}
else{
    window.document.body.style.backgroundColor = 'gray'
    imagem2.style.backgroundImage = `url(imagens/pexels-asad-photo-maldives-1024975.jpg)`
    header.style.backgroundColor = 'gray'
    main.style.backgroundColor = 'gray'
    texto.style.backgroundColor = 'gray'
}
url.innerText = `Agora é ${horas} horas`