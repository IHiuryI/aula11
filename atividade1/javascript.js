function calcularMedia() {
    let nome = prompt('Qual o nome do aluno');
    let nota1 = Number.parseFloat(prompt(`Digite sua primeira nota ${nome}`));
    let nota2 = Number.parseFloat(prompt(`Digite sua segunda nota ${nome}`));
    
    let media = (nota1 + nota2) /2;
    document.getElementById('resultado').innerHTML = `Sua média é <strong> ${media} </strong>.`;

    let mediafinal = media >= 7 ? 'Aprovado!' : 
                    media >=5 ? ' para Recuperação!' : ' Reprovado!';

    let resultado = document.getElementById('resultado')
    resultado.innerHTML += `<p> As notas obtidas foram <strong> ${nota1} </strong> e <strong> ${nota2}</strong>.</p>`;
    resultado.innerHTML += `<p>A nota final será <strong> ${media} </strong>.</p>`;
    resultado.innerHTML += `<p>O aluno  ${nome} foi <strong> ${mediafinal} </strong>.</p>`;
}