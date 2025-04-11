const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");

  btn.addEventListener("click", function (e) {
    btn.addEventListener("click", function (item) {
      if (item != question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});

// Using DOM

// const questionBtns = document.querySelectorAll(".question-btn");

// questionBtns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     let questionSection = e.currentTarget.parentElement.parentElement;
//     questionSection.classList.toggle("show-text");
//   });
// });
