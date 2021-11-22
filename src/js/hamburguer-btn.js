const d = document;

const menuBtn = d.getElementById('btn-menu-id');
const menuNav = d.getElementById('menu-id');
const menuPerfil = d.getElementById('menu-perfil');
const perfil = d.getElementById('perfil');


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
  }
  if(e.target === perfil ){
    menuPerfil.classList.toggle('is-active-menu-perfil')
  }

  if(e.target === menuPerfil || e.target.matches(`#${'menu-perfil'} *`)){
    menuPerfil.classList.toggle('is-active-menu-perfil')
  }
});
