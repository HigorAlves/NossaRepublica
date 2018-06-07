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
  var agua = document.querySelector("#inputAgua").value;
  var luz = document.querySelector("#inputLuz").value;
  var internet = document.querySelector("#inputInternet").value;
  var pessoas = document.querySelectorAll("#DS");
  
  pessoas.forEach(function(pessoa){
    var nome = pessoa.querySelector("#inputNomeMorador").value;
    
    pMoradores = {
      nome: nome,
      agua: agua/qtMoradores.value,
      luz: luz/qtMoradores.value,
      internet: internet/qtMoradores.value,
      aluguel: (aluguel/qtMoradores.value),
      iptu: iptu/qtMoradores.value
    }
    
    moradores.push(pMoradores);
  });
  resultado();
}

function resultado(){
  var resultado = document.querySelector("#resultado");
  var divBox = document.createElement("div");
  divBox.classList.add("container");
  divBox.classList.add("formBox");

  divBox.innerHTML += "&#x1F4B8&#x1F4B8&#x1F4B8&#x1F4B8&#x1F4B8&#x1F4B8&#x1F4B8&#x1F4B8&#x1F4B8&#x1F4B8";
  
  var pMoney = document.createElement("p");
  pMoney.textContent = "Contas do Mês";
  
  resultado.appendChild(divBox);
  divBox.appendChild(pMoney);

  moradores.forEach(function(morador){
    var p = document.createElement("p");
    p.innerHTML = "&#x1F468 ";
    p.textContent += morador.nome;
    divBox.appendChild(p);

    var pAgua = document.createElement("p");
    pAgua.innerHTML = "&#x1F30A R$ ";
    pAgua.textContent += morador.agua;
    divBox.appendChild(pAgua);
    //Luz
    var pLuz = document.createElement("p");
    pLuz.innerHTML = "&#x1F4A1 R$ ";
    pLuz.textContent += morador.luz;
    divBox.appendChild(pLuz);
    //Internet
    var pInternet = document.createElement("p");
    pInternet.innerHTML = "&#x1F4BB R$ ";
    pInternet.textContent += morador.internet;
    divBox.appendChild(pInternet);
    //Aluguel
    var pAluguel = document.createElement("p");
    pAluguel.innerHTML = "&#x1F3E0 R$ ";
    pAluguel.textContent += morador.aluguel;
    divBox.appendChild(pAluguel);
    //IPTU
    var pIptu = document.createElement("p");
    pIptu.innerHTML = "&#x1F981 R$ ";
    pIptu.textContent += morador.iptu;
    divBox.appendChild(pIptu);
    //Total
    var pTotal = document.createElement("p");
    pTotal.innerHTML = "&#x1F4B0 Total R$ ";
    pTotal.textContent += (morador.agua + morador.luz + morador.internet + morador.aluguel + morador.iptu);
    divBox.appendChild(pTotal);
    divBox.innerHTML += "--------------------------------------"
    divBox.innerHTML += "<br/>";
  });
}
