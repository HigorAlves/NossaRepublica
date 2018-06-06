window.onload = function(){
    criarMoradores();
    criarMoradores();
}

var qtmoradores = document.querySelector("#qtMoradores");
qtmoradores.addEventListener("change",criaLista);

function criaLista(){
    document.querySelectorAll("#DS").forEach(e => e.parentNode.removeChild(e));
    for (i = 1; i <= qtmoradores.value; i++){
        
        criarMoradores();
    }
}

function criarMoradores(){
    var morador = document.querySelector("#morador");

    var divSupremo = document.createElement("div");
    divSupremo.classList.add("col");
    divSupremo.classList.add("col-md-6");
    divSupremo.classList.add("col-sm-3");
    divSupremo.setAttribute("id", "DS");

    //Formulario para um morador
    var form = document.createElement("form");
    form.classList.add("formBox");
    
    //Nome do morador
    var divFormMoradorPorcentagem = document.createElement("div");
    divFormMoradorPorcentagem.classList.add("form-row");
    
    var divNomeMorador = document.createElement("div");
    divNomeMorador.classList.add("form-group");
    divNomeMorador.classList.add("col-md-6");

    var labelNomeMorador = document.createElement("label");
    labelNomeMorador.setAttribute("for", "inputNomeMorador");
    labelNomeMorador.innerHTML = "Nome do Morador";
    
    var inputNomeMorador = document.createElement("input");
    inputNomeMorador.setAttribute("type", "name");
    inputNomeMorador.classList.add("form-control");
    inputNomeMorador.setAttribute("id", "inputNomeMorador");
    inputNomeMorador.setAttribute("placeholder", "Insira um nome");
    inputNomeMorador.setAttribute("required", "required");

    //Porcentagem que morador paga a mais
    var divPorcentagem = document.createElement("div");
    divPorcentagem.classList.add("form-group");
    divPorcentagem.classList.add("col-md-6");

    var labelPorcentagem = document.createElement("label");
    labelPorcentagem.setAttribute("for", "inputPorAluguel");
    labelPorcentagem.innerHTML = "Quantos % ele paga a mais?"

    var inputPorcetagem = document.createElement("input");
    inputPorcetagem.setAttribute("type", "value");
    inputPorcetagem.classList.add("form-control");
    inputPorcetagem.setAttribute("id", "inputPorAluguel");
    inputPorcetagem.setAttribute("placeholder", "10");
    inputPorcetagem.setAttribute("pattern", "[1,]{1-3}");

    var divPagamentos = document.createElement("div");
    divPagamentos.classList.add("form-row");

    //Agua
    var divAgua = document.createElement("div");
    divAgua.classList.add("form-group");
    divAgua.classList.add("col");

    var labelAgua = document.createElement("label");
    labelAgua.setAttribute("for", "inputAgua");
    labelAgua.innerHTML = "Agua";

    var inputAgua = document.createElement("input");
    inputAgua.setAttribute("type", "value");
    inputAgua.classList.add("form-control");
    inputAgua.setAttribute("id", "inputAgua");
    inputAgua.setAttribute("placeholder", "72,5");
    inputAgua.setAttribute("pattern", "[1,]{1-6}");

    //Luz
    var divLuz = document.createElement("div");
    divLuz.classList.add("form-group");
    divLuz.classList.add("col");

    var labelLuz = document.createElement("label");
    labelLuz.setAttribute("for", "inputLuz");
    labelLuz.innerHTML = "Luz";

    var inputLuz = document.createElement("input");
    inputLuz.setAttribute("type", "value");
    inputLuz.classList.add("form-control");
    inputLuz.setAttribute("id", "inputLuz");
    inputLuz.setAttribute("placeholder", "72,5");
    inputLuz.setAttribute("pattern", "[1,]{1-6}");

    //Internet
    var divInternet = document.createElement("div");
    divInternet.classList.add("form-group");
    divInternet.classList.add("col");

    var labelInternet = document.createElement("label");
    labelInternet.setAttribute("for", "inputInternet");
    labelInternet.innerHTML = "Internet";

    var inputInternet = document.createElement("input");
    inputInternet.setAttribute("type", "value");
    inputInternet.classList.add("form-control");
    inputInternet.setAttribute("id", "inputInternet");
    inputInternet.setAttribute("placeholder", "72,5");
    inputInternet.setAttribute("pattern", "[1,]{1-6}");

    
    
    morador.appendChild(divSupremo);
    divSupremo.appendChild(form);
    form.appendChild(divFormMoradorPorcentagem);
    divFormMoradorPorcentagem.appendChild(divNomeMorador);
    divNomeMorador.appendChild(labelNomeMorador);
    divNomeMorador.appendChild(inputNomeMorador);
    divFormMoradorPorcentagem.appendChild(divPorcentagem);
    divPorcentagem.appendChild(labelPorcentagem);
    divPorcentagem.appendChild(inputPorcetagem);
    form.appendChild(divPagamentos);
    divPagamentos.appendChild(divAgua);
    divAgua.appendChild(labelAgua);
    divAgua.appendChild(inputAgua);
    divPagamentos.appendChild(divLuz);
    divLuz.appendChild(labelLuz);
    divLuz.appendChild(inputLuz);
    divPagamentos.appendChild(divInternet);
    divInternet.appendChild(labelInternet);
    divInternet.appendChild(inputInternet);
    

}

function calculaDivisão(){

}

function resultado(){
    //
}