function applyAnimation() {
    const textInput = document.getElementById("AnimeText").value.trim();
    const color = document.getElementById("colortype").value;
    const animationClass = document.getElementById("animetype").value;
    const previewArea = document.getElementById("animatedText");
  
    previewArea.className = ""; // Clear previous animation
    previewArea.style.color = color;
  
    if (!textInput) {
      previewArea.textContent = "Please enter some text!";
      return;
    }
  
    // Set text and apply Animate.css animation
    previewArea.textContent = textInput;
    void previewArea.offsetWidth; // Trick to restart animation
    previewArea.classList.add("animate__animated", animationClass);
  }
  