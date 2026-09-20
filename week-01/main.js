
const btn = document.querySelector('#like-btn');
const card = document.querySelector('#about');

btn.addEventListener('click', () => {
  const liked = card.classList.toggle('liked');
  btn.classList.toggle('active', liked);
  btn.setAttribute('aria-pressed', String(liked));
  btn.textContent = liked ? '♥ Liked' : '♡ Like';
});

const form = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = form.elements.name.value.trim();
  formStatus.textContent = `Thanks, ${name}! Your message is saved.`;
  form.reset();
});