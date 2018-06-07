window.onload = function(){
    criarMoradores();
    criarMoradores();
}
var moradores = [];
var qtmoradores = document.querySelector("#qtMoradores");
var botao = document.querySelector("#calcular");

qtmoradores.addEventListener("change",criaLista);
botao.addEventListener("click", calculaDivisao);

function criaLista(){
    document.querySelectorAll("#DS").forEach(e => e.parentNode.removeChild(e));
    for (i = 1; i <= qtmoradores.value; i++){
        criarMoradores();
    }
}

function criarMoradores(){
    var morador = document.querySelector("#morador");

    var divSupremo = document.createElement("div");
    //divSupremo.classList.add("col");
    divSupremo.classList.add("col-md-6");
    divSupremo.classList.add("col-sm-12");
    divSupremo.classList.add("col-lg-6");
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

    morador.appendChild(divSupremo);
    divSupremo.appendChild(form);
    form.appendChild(divFormMoradorPorcentagem);
    divFormMoradorPorcentagem.appendChild(divNomeMorador);
    divNomeMorador.appendChild(labelNomeMorador);
    divNomeMorador.appendChild(inputNomeMorador);
    divFormMoradorPorcentagem.appendChild(divPorcentagem);
    divPorcentagem.appendChild(labelPorcentagem);
    divPorcentagem.appendChild(inputPorcetagem);
}

function calculaDivisao(){
  var aluguel = document.querySelector("#inputAluguel").value;
  var iptu = document.querySelector("#inputIPTU").value;
  var pessoas = document.querySelectorAll("#DS");
  var IPTU = iptu/qtMoradores.value;

  pessoas.forEach(function(pessoa){
    var nome = pessoa.querySelector("#inputNomeMorador").value;
    var agua = pessoa.querySelector("#inputAgua").value;
    var luz = pessoa.querySelector("#inputLuz").value;
    var internet = pessoa.querySelector("#inputInternet").value;

    if (pessoa.querySelector("#inputPorAluguel").value > 0){
      //Calcular porcentagem de cada morador
    } else {
      pMoradores = {
        nome: nome,
        agua: agua,
        luz: luz,
        internet: internet,
        aluguel: (aluguel/qtMoradores.value),
        iptu: IPTU
      }
    }
    moradores.push(pMoradores);
  });

  resultado();
}

function resultado(){
  var resultado = document.querySelector("#resultado");

  moradores.forEach(function(morador){
    resultado.innerHTML += morador.nome;
    resultado.innerHTML += morador.agua;
  });
}
