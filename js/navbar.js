document.addEventListener('DOMContentLoaded', () => {
  const burgers = document.querySelectorAll('.navbar-burger');
  burgers.forEach(burger => {
    burger.addEventListener('click', () => {
      const targetId = burger.dataset.target;
      const menu = document.getElementById(targetId);
      const expanded = burger.getAttribute('aria-expanded') === 'true';
      burger.classList.toggle('is-active');
      burger.setAttribute('aria-expanded', String(!expanded));
      if (menu) menu.classList.toggle('is-active');
    });
  });
});
