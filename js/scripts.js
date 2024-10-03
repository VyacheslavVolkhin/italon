//frm field-input
function checkInputFields() {
	const formInputs = document.querySelectorAll('.frm-field-input .form-input');
  
	formInputs.forEach(inputField => {
	  const frmFieldInput = inputField.closest('.frm-field-input');
  
	  if (inputField.value.trim() !== '') {
		frmFieldInput.classList.add('inp-active');
	  }
	});
  }
document.addEventListener('input', function(event) {
	if (event.target.closest('.frm-field-input') && event.target.classList.contains('form-input')) {
	  const inputField = event.target;
	  const frmFieldInput = inputField.closest('.frm-field-input');
  
	  if (inputField.value.length > 0) {
		frmFieldInput.classList.add('inp-active');
	  } else {
		frmFieldInput.classList.remove('inp-active');
	  }
	}
  });

//fixed header
let header = document.querySelector(".header");
let menu = document.querySelector(".header .menu-inner-wrap");
let headerHeight = header.offsetHeight;
let menuHeight = menu.offsetHeight;
let content = document.querySelector(".wrap");
document.addEventListener("DOMContentLoaded", function () {
  if (header) {
	if (content) {
	  content.style.paddingTop = headerHeight + "px";
		}
	}
});
// window.addEventListener("resize", function () {
//   let headerHeight = header.offsetHeight;
//   let menuHeight = menu.offsetHeight;
//   if (content) {
// 	content.style.paddingTop = headerHeight + "px";
// 	}
// });
 window.addEventListener("scroll", function () {
   const windowTop = window.pageYOffset;
   if (windowTop > menuHeight) {
     document.querySelector(".wrap").classList.add("header-fixed");
	 header.style.top = -menuHeight + "px";
   } else {
     document.querySelector(".wrap").classList.remove("header-fixed");
	 header.style.top = 0;
   }
});


// filter actions
const filterButtonOpen = document.querySelector('.js-filter-open');
const filterButtonClose = document.querySelector('.js-filter-close');
const filterButtonCloseHeader = document.querySelector('.js-filter-close-header');
if (filterButtonOpen) {
  filterButtonOpen.addEventListener("click", function (event) {
    document.body.classList.add("filter-show");
    event.preventDefault();
  });
}
if (filterButtonClose) {
  filterButtonClose.addEventListener("click", function (event) {
    document.body.classList.remove("filter-show");
    event.preventDefault();
  });
}
if (filterButtonCloseHeader) {
  filterButtonCloseHeader.addEventListener("click", function (event) {
    document.body.classList.remove("filter-show");
    event.preventDefault();
  });
}



//form input clear
const inputFields = document.querySelectorAll(
  ".frm-field-input-action .form-input"
);
const clearButtons = document.querySelectorAll(".button-field-clear");

for (let i = 0; i < inputFields.length; i++) {
  const inputField = inputFields[i];
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
  const clearButton = clearButtons[i];
  clearButton.addEventListener("click", function (event) {
    this.closest(".frm-field-input-action").querySelector(".form-input").value =
      "";
    this.closest(".frm-field-input-action").classList.remove("inp-valid");
    event.preventDefault();
  });
}

//fancybox
Fancybox.bind("[data-fancybox]", {
  //settings
});


//btn tgl
let tglButtons = document.querySelectorAll('.js-btn-tgl')
for (i = 0;i < tglButtons.length;i++) {
	tglButtons[i].addEventListener('click', function(e) {
		this.classList.contains('active') ? this.classList.remove('active') : this.classList.add('active')
		e.preventDefault()
		//e.stopPropagation()
		return false
	})
}


//select toggle content visibility
document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(
	"input[data-content], input[data-content-check], input[data-content-uncheck]"
  );

  inputs.forEach(function (input) {
	toggleContent(input);
	});

  inputs.forEach((input) => {
	input.addEventListener("click", function () {
	  document.querySelectorAll(".frm-content").forEach((content) => {
		content.classList.remove("active");
			});

	  inputs.forEach(toggleContent);
		});
	});

  document.querySelectorAll(".btn[data-content]").forEach((button) => {
	button.addEventListener("click", function () {
	  let dataContent = this.getAttribute("data-content");
	  this.disabled = true;
	  document
		.querySelectorAll('.frm-content[data-content="' + dataContent + '"]')
		.forEach((content) => {
		  content.classList.add("active");
			});
	  return false;
		});
	});

  function toggleContent(input) {
	let selectContent;
	if (input.checked) {
	  selectContent =
		input.getAttribute("data-content-check") ||
		input.getAttribute("data-content");
		} else {
	  selectContent = input.getAttribute("data-content-uncheck");
		}
	document
	  .querySelectorAll('.frm-content[data-content="' + selectContent + '"]')
	  .forEach((content) => {
		content.classList.add("active");
		});
	}
});



// field counter
const inputCounters = document.querySelectorAll(".js-input-counter");
const plusButtons = document.querySelectorAll(".js-button-counter-plus");
const minusButtons = document.querySelectorAll(".js-button-counter-minus");
function increaseCounter(input) {
	input.innerText = parseInt(input.innerText, 10) + 1;
	updateButtonState(input);
}
function decreaseCounter(input) {
	if (input.innerText > 1) {
		input.innerText = parseInt(input.innerText,
		10) - 1;
		updateButtonState(input);
	}
}
function updateButtonState(input) {
	const buttonMinus = input.closest(".js-counter").querySelector(".js-button-counter-minus");
	buttonMinus.classList.toggle("button-disabled", parseInt(input.innerText,
	10) <= 1);
}
inputCounters.forEach((input, i) => {
	const plusButton = plusButtons[i
	];
	const minusButton = minusButtons[i
	];

	if (plusButton) {
		plusButton.addEventListener("click", (event) => {
			event.preventDefault();
			increaseCounter(input);
		});
	}

	if (minusButton) {
		minusButton.addEventListener("click", (event) => {
			event.preventDefault();
			decreaseCounter(input);
		});
	}
});
inputCounters.forEach(input => updateButtonState(input));

//js popup wrap
const togglePopupButtons = document.querySelectorAll(".js-btn-popup-toggle");
const closePopupButtons = document.querySelectorAll(".js-btn-popup-close");
const popupElements = document.querySelectorAll(".js-popup-wrap");
const wrapWidth = document.querySelector(".wrap").offsetWidth;
const bodyElem = document.querySelector("body");
function popupElementsClear() {
  document.body.classList.remove("menu-show");
  document.body.classList.remove("search-show");
  popupElements.forEach((element) => element.classList.remove("popup-right"));
}
function popupElementsClose() {
  togglePopupButtons.forEach((element) => {
    if (!element.closest(".no-close")) {
      element.classList.remove("active");
    }
  });
}
function popupElementsContentPositionClass() {
  popupElements.forEach((element) => {
    let pLeft = element.offsetLeft;
    let pWidth = element.querySelector(".js-popup-block").offsetWidth;
    let pMax = pLeft + pWidth;
    if (pMax > wrapWidth) {
      element.classList.add("popup-right");
    } else {
      element.classList.remove("popup-right");
    }
  });
}
for (i = 0; i < togglePopupButtons.length; i++) {
  togglePopupButtons[i].addEventListener("click", function (e) {
    popupElementsClear();
    if (this.classList.contains("active")) {
      this.classList.remove("active");
    } else {
      popupElementsClose();
      this.classList.add("active");
      if (this.closest(".popup-menu-wrap")) {
        document.body.classList.add("menu-show");
      }
      if (this.closest(".popup-search-wrap")) {
        document.body.classList.add("search-show");
      }
      popupElementsContentPositionClass();
    }
    e.preventDefault();
    e.stopPropagation();
    return false;
  });
}
for (i = 0; i < closePopupButtons.length; i++) {
  closePopupButtons[i].addEventListener("click", function (e) {
    popupElementsClear();
    popupElementsClose();
    e.preventDefault();
    e.stopPropagation();
    return false;
  });
}
document.onclick = function (event) {
  if (!event.target.closest(".js-popup-block")) {
    popupElementsClear();
    popupElementsClose();
  }
};
popupElements.forEach((element) => {
  if (element.classList.contains("js-popup-select")) {
    let popupElementSelectItem = element.querySelectorAll(
      ".js-popup-block li a"
    );
    if (element.querySelector(".js-popup-block .active")) {
      element.classList.add("select-active");
      let popupElementActive = element.querySelector(
        ".js-popup-block .active"
      ).innerHTML;
      let popupElementButton = element.querySelector(".js-btn-popup-toggle");
      popupElementButton.innerHTML = "";
      popupElementButton.insertAdjacentHTML("beforeend", popupElementActive);
    } else {
      element.classList.remove("select-active");
    }
    for (i = 0; i < popupElementSelectItem.length; i++) {
      popupElementSelectItem[i].addEventListener("click", function (e) {
        this.closest(".js-popup-wrap").classList.add("select-active");
        if (
          this.closest(".js-popup-wrap").querySelector(
            ".js-popup-block .active"
          )
        ) {
          this.closest(".js-popup-wrap")
            .querySelector(".js-popup-block .active")
            .classList.remove("active");
        }
        this.classList.add("active");
        let popupElementActive = element.querySelector(
          ".js-popup-block .active"
        ).innerHTML;
        let popupElementButton = element.querySelector(".js-btn-popup-toggle");
        popupElementButton.innerHTML = "";
        popupElementButton.insertAdjacentHTML("beforeend", popupElementActive);
        popupElementsClear();
        popupElementsClose();
        if (!this.closest(".js-tabs-nav")) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
      });
    }
  }
});


//js tabs
const tabsNav = document.querySelectorAll('.js-tabs-nav')
const tabsBlocks = document.querySelectorAll('.js-tab-block')
const tabsButtonTitle = document.querySelectorAll('.js-tab-title')
const tabsButtonContent = document.querySelectorAll('.js-tab-content')
function tabsActiveStart() {
	for (iTab = 0; iTab < tabsBlocks.length; iTab++) {
		if (tabsBlocks[iTab].classList.contains('active')) {
			tabsBlocks[iTab].classList.remove('active')
		}
	}
	for (i = 0; i < tabsNav.length; i++) {
		let tabsNavElements = tabsNav[i].querySelectorAll('[data-tab]')
		for (iElements = 0; iElements < tabsNavElements.length; iElements++) {
			if (tabsNavElements[iElements].classList.contains('active')) {
				let tabsNavElementActive = tabsNavElements[iElements].dataset.tab
				for (j = 0; j < tabsBlocks.length; j++) {
					if (tabsBlocks[j].dataset.tab.toString().indexOf(tabsNavElementActive) > -1) {
						console.log(tabsBlocks[j].dataset.tab.toString().indexOf(tabsNavElementActive))
						tabsBlocks[j].classList.add('active')
					}
				}
			}
		}
	}
	
}
for (i = 0; i < tabsButtonTitle.length; i++) {
	tabsButtonTitle[i].addEventListener('click', function (e) {
		this.classList.toggle('active')
		e.preventDefault()
		e.stopPropagation()
		return false
	})
}
for (i = 0; i < tabsNav.length; i++) {
	tabsNav[i].addEventListener('click', function (e) {
		if (e.target.closest('[data-tab]')) {
			let tabsNavElements = this.querySelector('[data-tab].active')
			tabsNavElements ? tabsNavElements.classList.remove('active') : false
			e.target.closest('[data-tab]').classList.add('active')
			tabsActiveStart()
			e.preventDefault()
			e.stopPropagation()
			return false
		}
	})
}
tabsActiveStart()

// Popups
let popupCurrent;
let popupsList = document.querySelectorAll(".popup-outer-box");

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
    for (i = 0; i < popupsList.length; i++) {
      popupsList[i].classList.remove("active");
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
const swiperSliderMain = new Swiper(".slider-main .swiper", {
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
    nextEl: ".btn-action-ico.ico-arrow.ico-arrow-next.button-slider-main-next",
    prevEl: ".btn-action-ico.ico-arrow.ico-arrow-prev.button-slider-main-prev",
  },
});

//slider tiles-cols-3
const swiperSliderTilesCols3 = new Swiper(".slider-tiles-cols-3 .swiper", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 0,
  autoHeight: false,
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
  },
});

//slider tiles-cols-4
const swiperSliderTilesCols4 = new Swiper(".slider-tiles-cols-4 .swiper", {
  loop: true,
  slidesPerView: "auto",
  spaceBetween: 0,
  autoHeight: false,
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
const swiperSliderTilesColsAuto = new Swiper(
  ".slider-tiles-cols-auto .swiper",
  {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 0,
    autoHeight: false,
    speed: 400,
    pagination: false,
    autoplay: false,
    navigation: {
      nextEl:
        ".btn-action-ico.ico-arrow.ico-arrow-next.button-slider-tiles-next",
      prevEl:
        ".btn-action-ico.ico-arrow.ico-arrow-prev.button-slider-tiles-prev",
    },
    breakpoints: {
      1024: {
        loop: false,
      },
    },
  }
);

//slider photo
const swiperSliderPhoto = new Swiper(".slider-photo .swiper", {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 0,
  autoHeight: true,
  speed: 400,
  pagination: false,
  autoplay: false,
  navigation: {
    nextEl: ".btn-action-ico.ico-arrow.ico-arrow-next.button-slider-photo-next",
    prevEl: ".btn-action-ico.ico-arrow.ico-arrow-prev.button-slider-photo-prev",
  },
});


//slider media thumbs preview
const swiperMediaPreview = new Swiper(".slider-media-thumbs .swiper",
{
  loop: false,
  slidesPerView: 5,
  spaceBetween: 0,
  threshold: 5,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  freeMode: false,
  navigation: false,
});

//slider media thumbs main
const swiperMediaMain = new Swiper(".slider-media-main .swiper",
{
  loop: false,
  slidesPerView: 1,
  spaceBetween: 0,
  autoHeight: true,
  speed: 400,
  threshold: 5,
  freeMode: false,
  watchSlidesProgress: true,
  navigation: false,
  pagination: {
	clickable: true,
	},
  thumbs: {
	swiper: swiperMediaPreview,
	},
});

document.addEventListener('DOMContentLoaded', function() {
	checkInputFields();
  });

