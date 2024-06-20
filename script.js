document.addEventListener('DOMContentLoaded', function() {
  const dynamicText = document.querySelector('.dynamic-text');
  const phrases = ["Web Developer", "UI/UX Designer", "Software Engineer","Freelancer", "Tech Enthusiast"];
  let phraseIndex = 0;
  let letterIndex = 0;
  let currentPhrase = '';
  let isDeleting = false;
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const delayBetweenPhrases = 2000;

  function type() {
      const currentPhraseLength = phrases[phraseIndex].length;
      
      if (isDeleting) {
          currentPhrase = phrases[phraseIndex].substring(0, letterIndex - 1);
          letterIndex--;
      } else {
          currentPhrase = phrases[phraseIndex].substring(0, letterIndex + 1);
          letterIndex++;
      }

      dynamicText.textContent = currentPhrase;

      if (!isDeleting && letterIndex === currentPhraseLength) {
          isDeleting = true;
          setTimeout(type, delayBetweenPhrases);
      } else if (isDeleting && letterIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          setTimeout(type, typingSpeed);
      } else {
          setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
      }
  }

  type();
});
