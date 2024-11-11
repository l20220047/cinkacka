// Zaregistrování Service Worker
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
          console.log("Service Worker zaregistrován:", registration);
        })
        .catch((error) => {
          console.log("Service Worker registrace selhala:", error);
        });
    });
  }


document.getElementById("spin-button").addEventListener("click", spin);

function spin() {
  const emojis = ["🍒", "🍊", "🍉", "🍇", "🍓"];
  
  // Funkce pro náhodný výběr emoji
  function getRandomEmoji() {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
  }
  
  // Nastavení náhodných hodnot pro tři sloty
  document.getElementById("slot1").textContent = getRandomEmoji();
  document.getElementById("slot2").textContent = getRandomEmoji();
  document.getElementById("slot3").textContent = getRandomEmoji();
}