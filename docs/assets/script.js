// Search functionality
document.getElementById('searchInput')?.addEventListener('input', function(e) {
  const term = e.target.value.toLowerCase();
  document.querySelectorAll('.card').forEach(card => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(term) ? 'flex' : 'none';
  });
});