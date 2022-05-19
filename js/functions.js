//Modal de propaganda da Loja Virtual Tecnoprint
$(window).on('load',function(){
  $('#modalLoja').modal('show');
});

// Sombra ao descer a página
$(function(){
  $(window).on("scroll", function(){
  if($(window).scrollTop() > 50){
    $(".navbar").addClass("shadowNav");
    } else{
    $(".navbar").removeClass("shadowNav");
    }
  })
});
// Função de ancora suave
function offsetAnchor() 
{
  if(location.hash.length !== 0) 
  {
    window.scrollTo(window.scrollX, window.scrollY - 71);
  }
}

// Simulação de Locação
function HabilitaQtd(value){
  if(value > 0)
  {
    document.querySelector("#QtdEquip").disabled = false;
    var equipType = document.getElementById("EquipType").value;
    var qtdCopy = document.getElementById("QtdCopy");

    const qtdCopyListMono = [
      1000, 
      2000,
      3000,
      4000,
      5000
    ];

    const qtdCopyListColor = [
      500,
      1000,
      2000,
      3000
    ];
    

    if(equipType == 1)
    {
      qtdCopy.length = null; //Zera os options
      for(var i = 0; i < qtdCopyListMono.length; i++)
      {
        var opt = qtdCopyListMono[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        qtdCopy.appendChild(el);
      }
    }
    
    if(equipType == 2)
    {
      qtdCopy.length = null; //Zera os options
      for(var i = 0; i < qtdCopyListColor.length; i++)
      {
        var opt = qtdCopyListColor[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        qtdCopy.appendChild(el);
      }
    }
  }
  else
  {
    document.querySelector("#QtdEquip").disabled = true;
    document.querySelector("#QtdCopy").disabled = true;
    
  }
  
}
function HabilitaCopy(value){
  if(value > 0)
  {
    document.querySelector("#QtdCopy").removeAttribute("disabled");
  }else{
    document.querySelector("#QtdCopy").disabled = true;
  }
}   

function mostrarTeste(){
  var resultadoDiv = document.getElementById("result");
  var errorVal = document.getElementById("ValError");
  var errorCnpj = document.getElementById("CnpjError");
  var quantidade = document.getElementById("QtdEquip").value;
  var copias = document.getElementById("QtdCopy").value;
  var selectEq = document.getElementById("EquipType");
  var option = selectEq.children[selectEq.selectedIndex];
  var textoEquip = option.textContent;
  var total = null;
  var nome = document.getElementById("Nome").value;
  var email = document.getElementById("Email").value;
  var nomeEmpresa = document.getElementById("NomeEmpresa").value;
  var cnpj = document.getElementById("Cnpj").value;

  if(nome === "" || email === "" || nomeEmpresa === "" || cnpj === "" || selectEq.value == 0){
    errorVal.style.display = "block";
    resultadoDiv.style.display = "none";
    errorCnpj.style.display = "none";
  }else{
    if(cnpj == "00000000000000" || 
        cnpj == "11111111111111" || 
        cnpj == "22222222222222" || 
        cnpj == "33333333333333" || 
        cnpj == "44444444444444" || 
        cnpj == "55555555555555" || 
        cnpj == "66666666666666" || 
        cnpj == "77777777777777" || 
        cnpj == "88888888888888" || 
        cnpj == "99999999999999" ||
        cnpj.length !== 14 ){
          errorCnpj.style.display = "block";
          resultadoDiv.style.display = "none";
          errorVal.style.display = "none";
        }else{
          errorVal.style.display = "none";
          errorCnpj.style.display = "none";
          resultadoDiv.style.display = "block";
          if(selectEq.value == 1){
            switch (copias){
                case '1000':
                  total= "R$" + (0.14* copias).toFixed(2) + " (mês)";
                  break;
                case '2000':
                  total= "R$" + (0.095 * copias).toFixed(2) + " (mês)";
                  break;
                case '3000':
                  total= "R$" + (0.086* copias).toFixed(2) + " (mês)";
                  break;
                case '4000':
                  total= "R$" + (0.075* copias).toFixed(2) + " (mês)";
                  break;
                case '5000':
                  total= "R$" + (0.069* copias).toFixed(2) + " (mês)";
                  break;
            }
          }else if(selectEq.value == 2){
            switch (copias){
              case '500':
                total = "R$" + (0.34* copias).toFixed(2) + " (mês)";
                break;
              case '1000':
                total= "R$" + (0.23 * copias).toFixed(2) + " (mês)";
                break;
              case '2000':
                total= "R$" + (0.17* copias).toFixed(2) + " (mês)";
                break;
              case '3000':
                total= "R$" + (0.14* copias).toFixed(2) + " (mês)";
                break;
            }
          }

        }
  }

  document.getElementById("Equipamento").innerHTML = textoEquip;
  document.getElementById("Quantidade").innerHTML = quantidade;
  document.getElementById("FranqCopias").innerHTML = copias;
  document.getElementById("valor").innerHTML = total;
}