import gsap from "gsap";

const slides = document.querySelectorAll(".slide");
const previous_slide_btn = document.getElementById("navigate_before");
const next_slide_btn = document.getElementById("navigate_next");
const footer = document.getElementById("slide-footer");

var page = 0;
var current_slide;
var next_slide;

init();

next_slide_btn.addEventListener("click", nextSlide);
previous_slide_btn.addEventListener("click", previousSlide);

function init() {
  updateFooter();
}

function nextSlide() {
  if (page < slides.length - 1) {
    current_slide = slides[page];
    page += 1;
    next_slide = slides[page];

    current_slide.classList.remove("visible");
    next_slide.classList.add("visible");
    updateFooter(page);
    slideEffect(slides[page]);
  }
}

function previousSlide() {
  if (page > 0) {
    current_slide = slides[page];
    page -= 1;
    next_slide = slides[page];

    current_slide.classList.remove("visible");
    next_slide.classList.add("visible");
    updateFooter(page);
    slideEffect(slides[page]);
  }
}

function slideEffect(slide) {
  next_slide_btn.removeEventListener("click", nextSlide);
  previous_slide_btn.removeEventListener("click", previousSlide);

  const timeline = gsap.timeline({
    onComplete: function () {
      next_slide_btn.addEventListener("click", nextSlide);
      previous_slide_btn.addEventListener("click", previousSlide);
    },
    defaults: { duration: 1 },
  });

  let header = slide.querySelector(".header");
  let content = slide.querySelector(".content");
  let header_title = header.querySelector(".title");
  let content_h2 = content.querySelector("h2");
  let content_p = content.querySelector("p");

  splitText(content_p);

  timeline
    .from(".presentation-area", { y: "-100%", ease: "expo" })
    .fromTo(".presentation-area", { opacity: 0 }, { opacity: 1 }, "<")
    .fromTo(
      header_title,
      { rotation: 0, opacity: 0 },
      { rotation: 720, opacity: 1 }
    );
  if (content_h2) {
    timeline.from(content_h2, {
      opacity: 0,
      y: "40%",
      delay: 0.2,
    });
  }
  timeline.from(content_p.children, {
    opacity: 0,
    stagger: 0.05,
  });
}

function splitText(element) {
  let chars = element.textContent.split("");
  element.textContent = "";

  chars.forEach((char) => {
    let span = document.createElement("span");
    span.className = "fade-in";
    span.textContent = char;
    element.appendChild(span);
  });
}

function updateFooter(page = 0) {
  footer.children[0].children[0].innerHTML = page + 1;
  footer.children[0].children[1].innerHTML = slides.length;
}
