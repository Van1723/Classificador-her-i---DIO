
function calculadoraXp() { 

    const herois = document.querySelectorAll('.heroi');
     let resultados = ''; 

    herois.forEach(heroi => { 
    const nome = heroi.querySelector('input[type="text"]').value; 
    const xp = parseInt(heroi.querySelector('input[type="number"]').value); 

    let classificador; 
    if (xp < 1000) { 
     classificador = "Ferro"; 
    } 
     else if (xp >= 1001 && xp <= 2000) 
    { 
     classificador = "Bronze"; }
     else if (xp >= 2001 && xp <= 5000) 
        
    { 
        classificador = "Prata"; } 
     else if (xp >= 5001 && xp <= 7000) 
    { 
        classificador = "Ouro"; } 
     else if (xp >= 7001 && xp <= 8000) 
    { 
        classificador = "Platina"; 
    } 
     else if (xp >= 8001 && xp <= 9000) 
    { 
        classificador = "Ascendente";
    }
     else if (xp >= 9001 && xp <= 10000) 
    { 
        classificador = "Imortal"; } 
    else if (xp >= 10001) 
    { 
        classificador = "Radiante"; 
    } 
    else { 
        classificador = "XP inválido!"; 
    } 
    resultados += `O herói do nome ${nome} está no nível de ${classificador} <br>`; }); 
    const resultadoElement = document.getElementById('resultados'); 
    resultadoElement.innerHTML = resultados;

    
}

