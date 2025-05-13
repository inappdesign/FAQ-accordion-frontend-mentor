"use strict";

const questions = document.querySelectorAll(".accordion-question");
const buttons = document.querySelectorAll(".btn");
const texts = document.querySelectorAll(".accordion-text");

questions.forEach((question, index) => {
	question.addEventListener("click", () => {
		if (buttons[index].classList.contains("minus")) {
			texts[index].classList.remove("active");
			buttons[index].classList.remove("minus");
		} else {
			buttons[index].classList.add("minus");
			texts[index].classList.add("active");
		}
	});
});
