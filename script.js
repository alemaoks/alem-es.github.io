const naoButton = document.getElementById('naoButton');

naoButton.addEventListener('click', function() {
  const randomX = Math.floor(Math.random() * 200 - 100); // Gera um valor aleatório para o eixo X
  const randomY = Math.floor(Math.random() * 200 - 100); // Gera um valor aleatório para o eixo Y

  naoButton.style.transform = `translate(${randomX}px, ${randomY}px)`; // Movimento aleatório
});

const simButton = document.getElementById('simButton');

simButton.addEventListener('click', function() {
  alert('significa que vou tentar fazer voce sorrir todos dias pelo menos um pouco'); // Exibe uma mensagem ao clicar no botão "Sim"
});
