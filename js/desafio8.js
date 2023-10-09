function fatorial() {
  let fator = document.querySelector("#fator1").value;
  let fatorial = fator >= 1;
  let resp = document.querySelector("p8");

  if (fator = 1) {
    resp.innerHTML = `<br><br>O fatorial é ${fator}!`

  }else(fator > 1){
    resp.innerHTML = `<br><br>O fatorial é  ${fatorial*(fatorial-1)}!`

  }

 // resp.innerHTML = `<br><br>A temperatura em Fahrenheit ${grauFahrenheit}!`;
}
