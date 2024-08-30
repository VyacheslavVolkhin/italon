//form input clear
const inputFields = document.querySelectorAll(".frm-field-input-action .form-input");
const clearButtons = document.querySelectorAll(".button-field-clear");

for (let i = 0; i < inputFields.length; i++) {
  const inputField = inputFields[i
	];
  const form = inputField.closest(".frm-field-input-action");

  inputField.addEventListener("input", function () {
	if (inputField.value.length > 0) {
	  form.classList.add("inp-valid");
		} else {
	  form.classList.remove("inp-valid");
		}
	});
}
for (let i = 0; i < clearButtons.length; i++) {
  const clearButton = clearButtons[i
	];
  clearButton.addEventListener("click", function (event) {
	this.closest(".frm-field-input-action").querySelector(".form-input").value = "";
	this.closest(".frm-field-input-action").classList.remove("inp-valid");
	event.preventDefault();
	});
}


//fancybox
Fancybox.bind("[data-fancybox]", {
	//settings
});


//js popup wrap
const togglePopupButtons = document.querySelectorAll('.js-btn-popup-toggle')
const closePopupButtons = document.querySelectorAll('.js-btn-popup-close')
const popupElements = document.querySelectorAll('.js-popup-wrap')
const wrapWidth = document.querySelector('.wrap').offsetWidth
const bodyElem = document.querySelector('body')
function popupElementsClear() {
	document.body.classList.remove('menu-show')
	document.body.classList.remove('filter-show')
	document.body.classList.remove('search-show')
	popupElements.forEach(element => element.classList.remove('popup-right'))
}
function popupElementsClose() {
	togglePopupButtons.forEach(element => {
		if (!element.closest('.no-close')) {
			element.classList.remove('active')
		}
	})
}
function popupElementsContentPositionClass() {
	popupElements.forEach(element => {
		let pLeft = element.offsetLeft
		let pWidth = element.querySelector('.js-popup-block').offsetWidth
		let pMax = pLeft + pWidth;
		if (pMax > wrapWidth) {
			element.classList.add('popup-right')
		} else {
			element.classList.remove('popup-right')
		}
	})
}
for (i = 0; i < togglePopupButtons.length; i++) {
	togglePopupButtons[i].addEventListener('click', function (e) {
		popupElementsClear()
		if (this.classList.contains('active')) {
			this.classList.remove('active')
		} else {
			popupElementsClose()
			this.classList.add('active')
			if (this.closest('.popup-menu-wrap')) {
				document.body.classList.add('menu-show')
			}
			if (this.closest('.popup-search-wrap')) {
				document.body.classList.add('search-show')
			}
			if (this.closest('.popup-filter-wrap')) {
				document.body.classList.add('filter-show')
			}
			popupElementsContentPositionClass()
		}
		e.preventDefault()
		e.stopPropagation()
		return false
	})
}
for (i = 0; i < closePopupButtons.length; i++) {
	closePopupButtons[i].addEventListener('click', function (e) {
		popupElementsClear()
		popupElementsClose()
		e.preventDefault()
		e.stopPropagation()
		return false;
	})
}
document.onclick = function (event) {
	if (!event.target.closest('.js-popup-block')) {
		popupElementsClear()
		popupElementsClose()
	}
}
popupElements.forEach(element => {
	if (element.classList.contains('js-popup-select')) {
		let popupElementSelectItem = element.querySelectorAll('.js-popup-block li a')
		if (element.querySelector('.js-popup-block .active')) {
			element.classList.add('select-active')
			let popupElementActive = element.querySelector('.js-popup-block .active').innerHTML
			let popupElementButton = element.querySelector('.js-btn-popup-toggle')
			popupElementButton.innerHTML = ''
			popupElementButton.insertAdjacentHTML('beforeend', popupElementActive)
		} else {
			element.classList.remove('select-active')
		}
		for (i = 0; i < popupElementSelectItem.length; i++) {
			popupElementSelectItem[i].addEventListener('click', function (e) {
				this.closest('.js-popup-wrap').classList.add('select-active')
				if (this.closest('.js-popup-wrap').querySelector('.js-popup-block .active')) {
					this.closest('.js-popup-wrap').querySelector('.js-popup-block .active').classList.remove('active')
				}
				this.classList.add('active')
				let popupElementActive = element.querySelector('.js-popup-block .active').innerHTML
				let popupElementButton = element.querySelector('.js-btn-popup-toggle')
				popupElementButton.innerHTML = ''
				popupElementButton.insertAdjacentHTML('beforeend', popupElementActive)
				popupElementsClear()
				popupElementsClose()
				if (!this.closest('.js-tabs-nav')) {
					e.preventDefault()
					e.stopPropagation()
					return false
				}
			})
		}
	}
})



// Popups
let popupCurrent;
let popupsList = document.querySelectorAll('.popup-outer-box')

document.querySelectorAll(".js-popup-open").forEach(function (element) {
  element.addEventListener("click", function (e) {
	document.querySelector(".popup-outer-box").classList.remove("active");
	document.body.classList.add("popup-open");

	popupCurrent = this.getAttribute("data-popup");
	document
	  .querySelector(
		`.popup-outer-box[id="${popupCurrent}"
		]`
	  )
	  .classList.add("active");

	e.preventDefault();
	e.stopPropagation();
	return false;
	});
});
document.querySelectorAll(".js-popup-close").forEach(function (element) {
  element.addEventListener("click", function (event) {
	document.body.classList.remove("popup-open");
	for (i=0;i<popupsList.length;i++) {
		popupsList[i
			].classList.remove("active");
		}
	event.preventDefault();
	event.stopPropagation();
	});
});
document.querySelectorAll(".popup-outer-box").forEach(function (element) {
  element.addEventListener("click", function (event) {
	if (!event.target.closest(".popup-box")) {
	  document.body.classList.remove("popup-open");
	  document.body.classList.remove("popup-open-scroll");
	  document.querySelectorAll(".popup-outer-box").forEach(function (e) {
		e.classList.remove("active");
			});
	  return false;
		}
	});
});



//slider main
const swiperSliderMain = new Swiper('.slider-main .swiper', {
	loop: true,
	slidesPerView: 1,
	spaceBetween: 0,
	autoHeight: true,
	speed: 400,
	pagination: false,
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: '.btn-action-ico.ico-arrow.ico-arrow-next.button-slider-main-next',
		prevEl: '.btn-action-ico.ico-arrow.ico-arrow-prev.button-slider-main-prev',
	},

});


//slider tiles-cols-3
const swiperSliderTilesCols3 = new Swiper('.slider-tiles-cols-3 .swiper', {
	loop: true,
	slidesPerView: 'auto',
	spaceBetween: 0,
	autoHeight: true,
	speed: 400,
	pagination: false,
	autoplay: false,
	navigation: {
		nextEl: '.btn-action-ico.ico-arrow.ico-arrow-next.button-slider-tiles-next',
		prevEl: '.btn-action-ico.ico-arrow.ico-arrow-prev.button-slider-tiles-prev',
	},
	breakpoints: {
		1024: {
			slidesPerView: 3,
			loop: false,
		},
	},

});


//slider tiles-cols-4
const swiperSliderTilesCols4 = new Swiper(".slider-tiles-cols-4 .swiper", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 0,
  autoHeight: true,
  speed: 400,
  pagination: false,
  autoplay: false,
  navigation: {
    nextEl: ".btn-action-ico.ico-arrow.ico-arrow-next.button-slider-tiles-next",
    prevEl: ".btn-action-ico.ico-arrow.ico-arrow-prev.button-slider-tiles-prev",
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      loop: false,
    },
    1200: {
      slidesPerView: 4,
      loop: false,
    },
  },
});

//slider tiles-cols-auto
const swiperSliderTilesColsAuto = new Swiper('.slider-tiles-cols-auto .swiper', {
	loop: true,
	slidesPerView: 'auto',
	spaceBetween: 0,
	autoHeight: true,
	speed: 400,
	pagination: false,
	autoplay: false,
	navigation: {
		nextEl: '.btn-action-ico.ico-arrow.ico-arrow-next.button-slider-tiles-next',
		prevEl: '.btn-action-ico.ico-arrow.ico-arrow-prev.button-slider-tiles-prev',
	},

});


//slider photo
const swiperSliderPhoto = new Swiper('.slider-photo .swiper', {
	loop: false,
	slidesPerView: 1,
	spaceBetween: 0,
	autoHeight: true,
	speed: 400,
	pagination: false,
	autoplay: false,
	navigation: {
		nextEl: '.btn-action-ico.ico-arrow.ico-arrow-next.button-slider-photo-next',
		prevEl: '.btn-action-ico.ico-arrow.ico-arrow-prev.button-slider-photo-prev',
	},

});