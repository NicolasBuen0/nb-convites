const pergunta = document.querySelectorAll('.pergunta');
pergunta.forEach((element) => {
  element.addEventListener('click', () => {
    element.classList.toggle('ativo');
  });
});
/* pergunta.style.background = 'red';  */
