function onSubmit(ev) {
  ev.preventDefault();
  let color = document.getElementById('color-input').value;
  saveColorToStorage(color);

  let birthDate = document.getElementById('date-input').value;
  showAstrological(birthDate);

  let email = document.getElementById('email-input').value;
  let age = document.getElementById('age-input').value;
  let userDate = {
    email,
    age,
    birthDate,
    color,
  };
  saveUserToStorage(userDate);
}
