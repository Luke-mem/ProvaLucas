function tipoTriangulo(){
    let A = parseFloat(document.querySelector("#A1").value)
    let B = parseFloat(document.querySelector("#B1").value)
    let C = parseFloat(document.querySelector("#C1").value)

    let resp = document.querySelector("p5")

    if(A==B==C) {
        resp.innerHTML = `<br><br>Com base nas medidas informadas é um Triângulo Equilátero!`
    
    }else if(A==B || A==C || B==C ){
        resp.innerHTML = `<br><br>Com base nas medidas informadas é um Triângulo Isósceles!`

    }else{
        resp.innerHTML = `<br><br>Com base nas medidas informadas é um Triângulo Escaleno!`

    }
}