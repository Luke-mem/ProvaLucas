function idadeP(){
    let idade = document.querySelector("#idade").value
    let anoatual = new Date().getFullYear() //new= instanciador de Date=trabalhar com datas e utiliza getFullYear=retorna data com 4 dígitos
    let resp = document.querySelector("p2")
    resp.innerHTML = `Você nasceu em ${anoatual - idade}!`
}