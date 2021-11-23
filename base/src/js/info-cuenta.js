const toggleOldPassword = document.querySelector('#toggleOldPassword');
const oldPassword = document.querySelector('#old-password');

toggleOldPassword.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = oldPassword.getAttribute('type') === 'password' ? 'text' : 'password';
  oldPassword.setAttribute('type', type);
  // toggle the eye slash icon
  this.classList.toggle('fa-eye-slash');
});

const toggleNewPassword = document.querySelector('#toggleNewPassword');
const newPassword = document.querySelector('#new-password');

toggleNewPassword.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = newPassword.getAttribute('type') === 'password' ? 'text' : 'password';
  newPassword.setAttribute('type', type);
  // toggle the eye slash icon
  this.classList.toggle('fa-eye-slash');
});
