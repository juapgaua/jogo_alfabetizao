// Todas as letras do alfabeto
const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// Container onde ficam os botões das letras
const lettersContainer = document.getElementById("letters");

// Renderiza os botões das letras A-Z
function renderLetters() {
  lettersContainer.innerHTML = "";

  letras.forEach((letra) => {
    const btn = document.createElement("button");
    btn.className = "letter-btn";
    btn.textContent = letra;

    btn.addEventListener("click", () => selecionarLetra(letra, btn));
    lettersContainer.appendChild(btn);
  });
}

// Quando clicar ou sortear
function selecionarLetra(letra, botao) {
  const input = document.getElementById(`input-${letra}`);
  if (input) {
    input.focus();
  }

  // remove botão da letra
  botao.classList.add("hidden");
}

// Função para sortear uma letra
function sortearLetra() {
  const botoes = [...document.querySelectorAll(".letter-btn:not(.hidden)")];

  if (botoes.length === 0) {
    alert("Todas as letras já foram usadas!");
    return;
  }

  // Escolhe uma letra aleatória entre as disponíveis
  const escolhido = botoes[Math.floor(Math.random() * botoes.length)];

  const letra = escolhido.textContent;

  // Foca no input da letra
  const input = document.getElementById(`input-${letra}`);
  input.focus();

  // Oculta a letra
  escolhido.classList.add("hidden");
}

// Botão de sortear
const btnRandom = document.getElementById("btn-random");
btnRandom.addEventListener("click", sortearLetra);

// Botão de reset
const resetBtn = document.getElementById("btn-reset");
resetBtn.addEventListener("click", () => {
  // Reexibe todas as letras
  document.querySelectorAll(".letter-btn").forEach((btn) => {
    btn.classList.remove("hidden");
  });

  // Limpa todos os inputs
  letras.forEach((letra) => {
    const input = document.getElementById(`input-${letra}`);
    if (input) input.value = "";
  });

  document.activeElement.blur();
});

// Inicializa
renderLetters();
