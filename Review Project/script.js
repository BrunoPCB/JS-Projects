// Database of reviwes
const reviews = [
  {
    id: 1,
    name: "Marcus Vencetti",
    job: "Data Analyst",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "I'm responsable for Data Analysts collect, process, and analyze data to help organizations make informed decisions and improve performance.",
  },
  {
    id: 2,
    name: "Jully Marcine",
    job: "Web Designer",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "As an Web Designer, I create visually appealing and user-friendly websites, focusing on layout, color, typography, and overall user experience.",
  },
  {
    id: 3,
    name: "Mackenzi Felix",
    job: "Tech Lead",
    img: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "The hole of a Tech Leads is to guide development teams, oversee technical decisions, ensure code quality, and align projects with business goals and timelines.",
  },
];

// Selecting itens
const img = document.getElementById("person");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// Set starting iten

let currentItem = 0;

function showPerson() {
  let item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

window.addEventListener("DOMContentLoaded", function (e) {
  showPerson();
});

prevBtn.addEventListener("click", function (e) {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

nextBtn.addEventListener("click", function (e) {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

randomBtn.addEventListener("click", function (e) {
  currentItem = Math.floor(Math.random() * reviews.length);
  console.log(currentItem);
  showPerson();
});
