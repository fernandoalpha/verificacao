function verify() {
    var getLog = document.getElementById('txt1')
    var getSen = document.querySelector('input#nun1')
    var result = document.getElementById('resul')

    var veriLog = String(getLog.value)
    var veriSen = String(getSen.value)

    console.log(`O tipo primitivo da variavel getLog: ${typeof veriLog}`)
    console.log(`O tipo primitivo da variavel getSen: ${typeof veriSen}`)

    if (veriLog === 'fernando' || veriLog === 'Fernando') {
        veriLog = true
    } else {
        veriLog = false
    }

    if (veriSen === '123') {
        veriSen = true
    } else {
        veriSen = false
    }

    if (veriLog && veriSen) {
        result.innerHTML = 'Login Aprovado!'
        document.querySelector('div#imagem').innerHTML = "<img src='midia/gato_feliz.png'>"
    } else {
        result.innerHTML = 'Login Negado!'
        document.getElementById('imagem').innerHTML = "<img src='midia/gato_triste.png'>"
    }
}
