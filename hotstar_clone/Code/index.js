let movies = [
  {
    name: "falcon and winter soldier",
    des: "lorem ipsum vidhi sheth i miss school and what abt u ",
    image: "slider 2.PNG"
  },
  {
    name: "loki",
    des: "lorem ipsum vidhi sheth i miss school and what abt u ",
    image: "slider 1.PNG"
  },
  {
    name: "wanda vision ",
    des: "lorem ipsum vidhi sheth i miss school and what abt u ",
    image: "slider 3.PNG"
  },
  {
    name: "raya and the last dragon",
    des: "lorem ipsum vidhi sheth i miss school and what abt u ",
    image: "slider 4.PNG"
  },
  {
    name: "luca",
    des: "lorem ipsum vidhi sheth i miss school and what abt u ",
    image: "slider 5.PNG"
  }
];

const carousel = document.querySelector(".carousel");
let sliders = [];
let slideIndex = 0;
const createSlide = () => {
  if (slideIndex >= movies.length) {
    slideIndex = 0;
  }
  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  imgElement.src = movies[slideIndex].image;
  slideIndex++;

  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "movie-title";
  p.className = "movie-des";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};
for (let i = 0; i < 3; i++) {
  createSlide();
}
setInterval(() => {
  createSlide();
}, 3000);

//video cards
const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

const cardContainers = document.querySelectorAll(".card-container"); // Use const instead of let
const preBtns = document.querySelectorAll(".pre-btn"); // Use const instead of let
const nxtBtns = document.querySelectorAll(".nxt-btn"); // Use const instead of let

cardContainers.forEach((item, i) => {
  const containerDimensions = item.getBoundingClientRect(); // Use const instead of let
  const containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
