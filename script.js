const button = document.querySelector("#buy-button");
const message = document.querySelector("#message");

const messages = [
  "Excellent financial decision!",
  "Your subscription now lasts forever.",
  "Our investors thank you.",
];

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  message.textContent = messages[randomIndex];
});
