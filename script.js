



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


/*	CHECK FOR PREFERED REDUCED MOTION
		AND IF SO, DO NOT RUN ANY OF THE SCRIPTS
		SPLITTING THE LIST ELEMENT INTO MULTIPLE
		LISTS OR APPLYING THE SCROLL ANIMATION
*/
const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
if (mediaQuery && !mediaQuery.matches) {
	const tagScroller = document.querySelector(".tag-scroller");
	const allTags = tagScroller.querySelectorAll("li");
	
	function createElement(tagName, className = "") {
		const elem = document.createElement(tagName);
		elem.className = className;
		return elem;
	}

	function scrollersFrom(elements, numColumns = 2) {
		const fragment = new DocumentFragment();
		elements.forEach((element, i) => {
			const column = i % numColumns;
			const children = fragment.children;
			if (!children[column]) fragment.appendChild(createElement("ul", "tag-list"));
			children[column].appendChild(element);
		});
		return fragment;
	}
	
	/*	SPLIT THE LIST ELEMENT INTO TWO LISTS
			AND CALL THE ANIMATION
	*/
	const scrollers = scrollersFrom(allTags, 2);
	tagScroller.innerHTML = "";
	tagScroller.appendChild(scrollers);
	addScrolling();

	/*	ADD scrolling CLASS TO THE WRAPPER ELEMENT,
			CLONE EACH LIST ITEM TO MAKE THE LIST LONG ENOUGH
			FOR INFINITE SCROLL AND THEN CALCULATE THE DURATION
			BASED ON WIDTH OF EACH SCROLLER TO MAKE THEM
			MOVE AT THE SAME RATE OF SPEED
			
			DEPENDING ON THE WIDTH OF .tag-scrollers, THE NUMBER OF
			LIST ITEMS AND THEIR INDIVIDUAL WIDTH, YOU MIGHT NEED
			TO CLONE THEM TWO TIMES EACH TO BE SURE EACH .tag-scroller
			WILL BE WIDE ENOUGH TO SUPPORT INFINITE SCROLL
			
			THIS COULD OF COURSE BE ADDED TO THE SCRIPT
			BUT FOR OUR USE CASE, WE KNOW THE MINIMUM NUMBER OF
			LIST ELEMENTS WILL BE ENOUGH FOR ONE CLONE EACH
	*/
	function addScrolling() {
		tagScroller.classList.add("scrolling");
		document.querySelectorAll(".tag-list").forEach((tagList) => {
			const scrollContent = Array.from(tagList.children);
			scrollContent.forEach((listItem) => {
				const clonedItem = listItem.cloneNode(true);
				clonedItem.setAttribute("aria-hidden", true);
				tagList.appendChild(clonedItem);
			});
			tagList.style.setProperty("--duration", (tagList.clientWidth / 100) + "s");
		});
	}
}

$( '.js-input' ).keyup(function() {
	if( $(this).val() ) {
	   $(this).addClass('not-empty');
	} else {
	   $(this).removeClass('not-empty');
	}
  });