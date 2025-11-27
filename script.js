// 1) Calcular idade automaticamente a partir da data de nascimento

function calcularIdade(dataNascimentoStr) {
    // dataNascimentoStr virá no formato "dd/mm/aaaa"
    const partes = dataNascimentoStr.split("/");
    const dia = parseInt(partes[0], 10);
    const mes = parseInt(partes[1], 10) - 1; // meses em JS vão de 0 a 11
    const ano = parseInt(partes[2], 10);

    const hoje = new Date();
    let idade = hoje.getFullYear() - ano;

    // Ajustar se ainda não fez aniversário no ano corrente
    const mesAtual = hoje.getMonth();
    const diaAtual = hoje.getDate();

    if (mesAtual < mes || (mesAtual === mes && diaAtual < dia)) {
        idade--;
    }

    return idade;
}

// Quando a página carregar
document.addEventListener("DOMContentLoaded", () => {
    // 2) Mostrar a idade calculada no span com id "idade"
    const spanIdade = document.getElementById("idade");
    const idade = calcularIdade("14/10/2004");
    spanIdade.textContent = idade;

    // 3) Alternar tema claro/escuro ao clicar no botão
    const btnTema = document.getElementById("btn-tema");

    btnTema.addEventListener("click", () => {
        // alterna a classe "tema-escuro" no body
        document.body.classList.toggle("tema-escuro");
    });

    // 4) Mostrar / ocultar seções (cursos, experiência) usando os botões
    const botoesToggle = document.querySelectorAll(".btn-toggle");

    botoesToggle.forEach((botao) => {
        botao.addEventListener("click", () => {
            // pega o nome do id da seção no atributo data-target
            const targetId = botao.getAttribute("data-target");
            const secao = document.getElementById(targetId);

            if (secao.style.display === "none") {
                secao.style.display = "block";
            } else {
                secao.style.display = "none";
            }
        });
    });
});
