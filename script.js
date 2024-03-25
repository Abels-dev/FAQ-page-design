const plusbtn = document.querySelectorAll(".plus");
const answers = document.querySelectorAll(".answer");
plusbtn.forEach((plus, index) => {
   plus.onclick = () => {
      answers.forEach((answer, key) => {
         if (index == key) {
            answer.classList.toggle("show");
            if (plus.getAttribute("src") === "assets/images/icon-plus.svg") {
               plus.setAttribute("src", "assets/images/icon-minus.svg");
            } else {
               plus.setAttribute("src", "assets/images/icon-plus.svg");
            }
         }
      });
   };
});
