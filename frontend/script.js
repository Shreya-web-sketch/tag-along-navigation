const speakBtn = document.getElementById("speakBtn");
const statusText = document.getElementById("statusText");

speakBtn.addEventListener("click", () => {
  if (!("speechSynthesis" in window)) {
    statusText.textContent = "Sorry, your browser does not support speech.";
    return;
  }

  const text = "Walk straight for forty steps. Turn left at the canteen. The library entrance is on your right.";
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-IN";
  utterance.rate = 0.9;

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);

  statusText.textContent = "Speaking directions...";
  utterance.onend = () => {
    statusText.textContent = "Done. Tap again to repeat.";
  };
});
