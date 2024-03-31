alert('boas vindas ao jogo do número secreto!');
let numeroSecreto = parseInt(Math.random() * intervalo + 1);
let intervalo = 100;
console.log(numeroSecreto);
let chute;
let tentativas = 1; 


//enquanto o chute não for igual ao N.S
while (chute != numeroSecreto) {
    chute = prompt('escolha um número entre 1 a'+ intervalo);
    //se o chute for igual ao número secreto
    {if(chute == numeroSecreto) {
        break;
    } else {
    if(chute > numeroSecreto){
        alert(`o número secreto é menor que ${chute}`); 
    }  else{
        alert(`o número secreto é maior que ${chute}`); 
    }
    // tentativas = tentativas +1;
    tentativas++;
}
    }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; 
alert(`isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

//if(tentativas > 1){
    //alert(`isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
//}else{
    //alert(`isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
//}
 