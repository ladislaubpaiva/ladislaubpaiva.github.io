document.querySelector('.btn-close').addEventListener('click', () => {
  setTimeout(() => {
    document.querySelector('.dialog-container').style.display = 'none';
  }, 200);
});
