const d = document;

const menuBtn = d.getElementById('btn-menu-id');
const menuNav = d.getElementById('menu-id');

d.addEventListener('click', (e) => {
  if (
    e.target.matches('#btn-menu-id')
    || e.target.matches(`#${'btn-menu-id'} *`)
  ) {
    menuBtn.classList.toggle('change-menu');
    menuNav.classList.toggle('is-active');
  }
  if (e.target.matches('#menu-id') || e.target.matches(`#${'menu-id'} *`)) {
    menuBtn.classList.toggle('change-menu');
    menuNav.classList.toggle('is-active');
    console.log(e.target);
  }
});
