function handleForm(event) {
  event.preventDefault();
  const msg = document.getElementById("formMsg");
  msg.textContent = "Thank you! Your message has been sent successfully 🌿";
  event.target.reset();
  return false;
}
