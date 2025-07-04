const relatos = [
  `“O curso me surpreendeu! Aprendi mais em 2 meses aqui do que em anos em outras instituições.”<br><span class="block text-right text-sm text-gray-500 mt-2">- Ana</span>`,
  `“Os professores são super dedicados e o conteúdo é direto ao ponto. Recomendo demais!”<br><span class="block text-right text-sm text-gray-500 mt-2">- Bruno</span>`,
  `“Consegui meu primeiro emprego na área graças aos projetos práticos que desenvolvi no curso!”<br><span class="block text-right text-sm text-gray-500 mt-2">- Carla</span>`,
  `“O suporte da equipe é excelente. Sempre que precisei, fui atendido com atenção.”<br><span class="block text-right text-sm text-gray-500 mt-2">- Diego</span>`,
  `“A didática é simples, objetiva e transformadora. Amei cada módulo!”<br><span class="block text-right text-sm text-gray-500 mt-2">- Elisa</span>`,
];

let indexAtual = 0;
const elementoRelato = document.getElementById("relato");

function exibirRelato() {
  elementoRelato.innerHTML = relatos[indexAtual];
}

function mudarRelato(direcao) {
  indexAtual += direcao;
  if (indexAtual < 0) indexAtual = relatos.length - 1;
  if (indexAtual >= relatos.length) indexAtual = 0;
  exibirRelato();
}

exibirRelato();
