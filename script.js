document.addEventListener("DOMContentLoaded", () => {
  animateMarquee();
  handleHeaderButton(".support", "#support");
  handleHeaderButton(".about", "#about");
});

// анимация бегущий строки
function animateMarquee() {
  let marqueeContent = document.querySelector(".marquee__content");
  let marqueeText = document.querySelector(".marquee__text");
  let duration = (marqueeText.offsetWidth / marqueeContent.offsetWidth) * 20;
  marqueeContent.style.animationDuration = duration + "s";
}

function handleHeaderButton(buttonSelector, scrollToSelector) {
  const supportButton = document.querySelector(buttonSelector);

  supportButton.addEventListener("click", () => {
    const scrollTo = document.querySelector(scrollToSelector);
    scrollTo.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
