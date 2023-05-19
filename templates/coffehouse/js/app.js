$('.coffee-cup').ripples({
	resolution: 912,
	dropRadius: 30,
	perturbance: 0.04,
	interactive: true,
});
$('.coffee-cup-mask').ripples({
	resolution: 512,
	dropRadius: 20,
	perturbance: 0.04,
	interactive: true,
});

// Tabs Action
const tabLink = document.querySelectorAll(".tab-menu-link");
const tabContent = document.querySelectorAll(".tab-bar-content");

tabLink.forEach((item) => {
	item.addEventListener("click", activeTab);
});


function activeTab(item) {
	const btnTarget = item.currentTarget;
	const content = btnTarget.dataset.content;

	tabContent.forEach((item) => {
		item.classList.remove("is-active");
	});

	tabLink.forEach((item) => {
		item.classList.remove("is-active");
	});

	document.querySelector("#" + content).classList.add("is-active");
	btnTarget.classList.add("is-active");
}
  
// Swiper -->
var swiper = new Swiper(".mySwiper", {
	slidesPerView: 3,
	spaceBetween: 30,
	slidesPerGroup: 3,
	loop: true,
	loopFillGroupWithBlank: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

var swiper = new Swiper(".mySwiper1", {
	slidesPerView: 3,
	spaceBetween: 30,
	slidesPerGroup: 3,
	loop: true,
	loopFillGroupWithBlank: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
