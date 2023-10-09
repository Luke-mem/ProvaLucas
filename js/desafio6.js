function idadeClasse(){
    let idade = parseFloat(document.querySelector("#idade1").value)

    let resp = document.querySelector("p6")

    if(idade <= 13) {
        resp.innerHTML = `<br><br>Essa pessoa é criança!`
    
    }else if(idade <= 18){
        resp.innerHTML = `<br><br>Essa pessoa é adolescente!`

    }else if(idade <= 60){
        resp.innerHTML = `<br><br>Essa pessoa é adulta!`

    }else{
        resp.innerHTML = `<br><br>Essa pessoa é idosa!`

    }
}