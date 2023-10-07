function imc(){
    let peso = parseFloat(document.querySelector("#peso1").value)
    let altura = parseFloat(document.querySelector("#altura1").value)
    let IMC = (peso / (altura**2))
    let resp = document.querySelector("p4")
    resp.innerHTML = `<br><br>Seu IMC é ${IMC.toFixed(2)}!`
}