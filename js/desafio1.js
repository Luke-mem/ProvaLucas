function nomeP(){
    let nome = document.querySelector("#nome").value
    let resp = document.querySelector("p1")
    resp.innerHTML = `<BR><BR>Olá! ${nome}, Vamos resolver os exercícios!`
}

