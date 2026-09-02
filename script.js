const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A matemática está presente em diversas situações do nosso cotidiano. Você acredita que aprender matemática é importante para a formação dos alunos, mesmo para quem não pretende trabalhar com números?",
        alternativas: [
            {
                texto: "Sim, pois desenvolve o raciocínio lógico, a capacidade de resolver problemas e o pensamento crítico.",
                afirmacao: "A matemática vai muito além dos cálculos: ela ajuda os alunos a desenvolverem o raciocínio lógico, a analisarem situações e a encontrarem soluções para diferentes problemas do cotidiano."
            },
            {
                texto: "Não, pois a matemática é mais importante apenas para quem pretende seguir uma carreira relacionada às exatas.",
                afirmacao: "Apesar de muitas profissões utilizarem a matemática diretamente, seus conhecimentos também contribuem para habilidades importantes em diversas áreas, como organização, análise e resolução de problemas."
            }
        ]
    },
    {
        enunciado: "Muitos alunos consideram a matemática uma matéria difícil. Qual é uma das melhores formas de tornar o aprendizado mais interessante e acessível?",
        alternativas: [
            {
                texto: "Relacionar os conteúdos matemáticos com situações do cotidiano e utilizar atividades práticas e diferentes estratégias de ensino.",
                afirmacao: "Relacionar a matemática com situações reais pode ajudar os alunos a compreenderem melhor os conteúdos e perceberem que aquilo que aprendem pode ser utilizado em seu dia a dia."
            },
            {
                texto: "Focar principalmente na memorização de fórmulas e na repetição de exercícios.",
                afirmacao: "A memorização pode ajudar em alguns momentos, mas compreender o significado dos conceitos matemáticos e saber aplicá-los em diferentes situações é fundamental para um aprendizado mais completo."
            }
        ]
    },
    {
        enunciado: "A matemática também pode ajudar os alunos a desenvolver habilidades que vão além da sala de aula. Você concorda que ela contribui para a tomada de decisões no dia a dia?",
        alternativas: [
            {
                texto: "Sim, pois ajuda a interpretar informações, analisar possibilidades e tomar decisões de maneira mais racional.",
                afirmacao: "O conhecimento matemático pode ajudar os alunos a interpretar gráficos, comparar preços, organizar gastos, analisar informações e tomar decisões de forma mais consciente."
            },
            {
                texto: "Não, pois os conhecimentos matemáticos aprendidos na escola raramente são utilizados fora dela.",
                afirmacao: "Embora nem todos os conteúdos sejam utilizados diretamente no cotidiano, o raciocínio desenvolvido por meio da matemática pode ser aplicado em diversas situações da vida pessoal, acadêmica e profissional."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");

        botaoAlternativas.textContent = alternativa.texto;

        botaoAlternativas.addEventListener("click", () => 
            respostaSelecionada(alternativa)
        );

        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;

    historiaFinal += afirmacoes + " ";

    atual++;

    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sobre a importância da matemática...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
