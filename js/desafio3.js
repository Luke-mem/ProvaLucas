function grausT(){
    let grauC = parseFloat(document.querySelector("#grauC").value)
    let grauFahrenheit = (grauC * 1.8) + 32
    let resp = document.querySelector("p3")
    resp.innerHTML = `<br><br>A temperatura em Fahrenheit ${grauFahrenheit}!`
}