let card = document.querySelector('.card');
let loginBtn = document.querySelector('#login-btn');
let cadastroBtn = document.querySelector('#cadastro-btn');

loginBtn.addEventListener('click', () => {
    card.classList.remove('cadastro-active');
    card.classList.add('login-active');
});

cadastroBtn.addEventListener('click', () => {
    card.classList.remove('login-active');
    card.classList.add('cadastro-active');
});

function voltar() {
  if (history.length > 1) {
    history.back();
  } else {
    window.location.href = "index.html";
  }
}