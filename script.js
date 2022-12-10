// skill progress bar
const skillSection = document.getElementById("skills-section");

const progressBars = document.querySelectorAll(".bar");

function showProgress() {
  progressBars.forEach((progressBar) => {
    const value = progressBar.dataset.progress;
    progressBar.style.opacity = 1;
    progressBar.style.width = `${value}%`;
  });
}
function hideProgress() {
  progressBars.forEach((p) => {
    p.style.opacity = 0;
    p.style.width = 0;
  });
}

window.addEventListener("scroll", () => {
  const sectionPos = skillSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight;

  if (sectionPos < screenPos) {
    showProgress();
  } else {
    hideProgress();
  }
});

// for randomly changing images
let image = document.getElementById("image");
let images = [
  "images/sam (1).png",
  "images/sam (2).png",
  "images/sam (4).png",
  "images/sam (5).png",
];
setInterval(function () {
  let random = Math.floor(Math.random() * 4);
  image.src = images[random];
}, 800);
