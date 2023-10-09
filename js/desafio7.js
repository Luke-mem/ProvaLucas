function impostoRenda() {
    let renda = parseFloat(document.querySelector("#renda1").value);
  
    let resp = document.querySelector("p7");
  
    if ((renda <= 28559/*70*/)) {
      resp.innerHTML = `<br><br>Isento de Imposto de Renda`;
    } else if ((renda <= 40515/*31*/)) {
      resp.innerHTML = `<br><br>O valor de imposto a ser pago é ${
        (renda * 0.075 - 142.80)}!`;

    } else if ((renda <= 53765/*05*/)) {
      resp.innerHTML = `<br><br>O valor de imposto a ser pago é ${
        (renda * 0.15 - 354.80)}!`;

    } else if ((renda <= 66864/*1*/)) {
      resp.innerHTML = `<br><br>O valor de imposto a ser pago é ${
        (renda * 0.225 - 636.13)}!`;

    } else {
      resp.innerHTML = `<br><br>O valor de imposto a ser pago é ${
        (renda * 0.275 - 869.36)}!`;

    }
  }
  