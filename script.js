
const calcular = function() {
    let cateto1 = parseFloat(document.getElementById('cateto1').value)/1; 
    let cateto2 = parseFloat(document.getElementById('cateto2').value)/1;
    let hipotenusa = document.getElementById('hipotenusa')
    
    hipotenusa.value = Math.pow(cateto1, 2) + Math.pow(cateto2, 2) ; 
    alert(Math.sqrt(hipotenusa.value));
    document.getElementById('hipotenusa').value 
}

const excluir = function(){
    document.getElementById('cateto1').value = ""
    document.getElementById('cateto2').value = ""
    document.getElementById('hipotenusa').value = ""
}


// Battistella, para o resultado do Math.pow aparecer é preciso clicar duas vezes no button calcular, desculpa por esse bug :(
