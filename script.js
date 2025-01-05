const input = document.getElementById('input');
const search = document.getElementById('search');

clean.addEventListener('click', () => {
  input.value = '';
});

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    window.location.href = `https://www.flipkart.com/search?q=${input.value}`;
  }
});
search.addEventListener('click', () => {
  window.location.href = `https://www.flipkart.com/search?q=${input.value}`;
});