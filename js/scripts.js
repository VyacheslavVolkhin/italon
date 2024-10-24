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


//btn tgl and add
let tglButtons = document.querySelectorAll('.js-btn-tgl')
let addButtons = document.querySelectorAll('.js-btn-add')
for (i = 0;i < tglButtons.length;i++) {
	tglButtons[i].addEventListener('click', function(e) {
		this.classList.contains('active') ? this.classList.remove('active') : this.classList.add('active')
		e.preventDefault()
		return false
	})
}
for (i = 0;i < addButtons.length;i++) {
	addButtons[i].addEventListener('click', function(e) {
		if (!this.classList.contains('active')) {
			this.classList.add('active');
			e.preventDefault()
			return false
		}
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
document.addEventListener('DOMContentLoaded', () => {
	
	const counters = document.querySelectorAll('.js-counter');

	counters.forEach(counter => {
		const btnPlus = counter.querySelector('.js-button-counter-plus');
		const btnMinus = counter.querySelector('.js-button-counter-minus');
		const input = counter.querySelector('.js-input-counter');

		const dataUnit = input.dataset.unit || '';
		const dataStepRaw = input.dataset.step || '1';
		const dataStep = parseFloat(dataStepRaw.replace(',', '.'));
		const dataMin = parseFloat(input.dataset.min) || 0;
		const dataMax = parseFloat(input.dataset.max) || Infinity;

		
		const decimalSeparator = dataStepRaw.includes(',') ? ',' : '.';

		
		const parseValue = (val) => {
			return parseFloat(val.replace(dataUnit, '').trim().replace(',', '.')) || dataMin;
		};

		
		const formatValue = (val) => {
			const decimals = (dataStepRaw.split(decimalSeparator)[1] || '').length;
			return val.toFixed(decimals) + dataUnit;
		};

		
		const updateButtons = (val) => {
			if (val <= dataMin) {
				btnMinus.classList.add('button-disabled');
			} else {
				btnMinus.classList.remove('button-disabled');
			}

			if (val >= dataMax) {
				btnPlus.classList.add('button-disabled');
			} else {
				btnPlus.classList.remove('button-disabled');
			}
		};

		
		let isInitialized = false;

		
		const initializeInput = () => {
			if (!isInitialized) {
				currentValue = dataMin;
				input.value = formatValue(currentValue);
				updateButtons(currentValue);
				isInitialized = true;
			}
		};

		
		let currentValue = null;
		const initialValueAttr = input.getAttribute('value');

		if (initialValueAttr !== null && initialValueAttr !== '') {
			
			let parsedInitialValue = parseFloat(initialValueAttr.replace(',', '.'));
			if (isNaN(parsedInitialValue)) {
				parsedInitialValue = dataMin;
			}
			parsedInitialValue = Math.max(dataMin, Math.min(parsedInitialValue, dataMax));

			
			const stepCount = Math.round((parsedInitialValue - dataMin) / dataStep);
			parsedInitialValue = parseFloat((dataMin + stepCount * dataStep).toFixed(10));

			currentValue = parsedInitialValue;
			input.value = formatValue(currentValue);
			isInitialized = true;
			updateButtons(currentValue);
		} else {
			
			input.value = '';
			updateButtons(dataMin); 
		}

		
		btnPlus.addEventListener('click', () => {
			initializeInput();
			if (btnPlus.classList.contains('button-disabled')) return;
			currentValue = parseFloat((currentValue + dataStep).toFixed(10));
			if (currentValue > dataMax) currentValue = dataMax;
			input.value = formatValue(currentValue);
			updateButtons(currentValue);
		});

		
		btnMinus.addEventListener('click', () => {
			initializeInput();
			if (btnMinus.classList.contains('button-disabled')) return;
			currentValue = parseFloat((currentValue - dataStep).toFixed(10));
			if (currentValue < dataMin) currentValue = dataMin;
			input.value = formatValue(currentValue);
			updateButtons(currentValue);
		});

		
		input.addEventListener('focus', () => {
			initializeInput();
			
			if (currentValue !== null) {
				input.value = parseValue(input.value).toString().replace('.', decimalSeparator);
			}
		});

		
		input.addEventListener('blur', () => {
			if (input.value === '') {
				
				currentValue = null;
				input.value = '';
				btnPlus.classList.remove('button-disabled');
				btnMinus.classList.remove('button-disabled');
				isInitialized = false;
				return;
			}

			let val = parseFloat(input.value.replace(',', '.'));
			if (isNaN(val)) {
				val = dataMin;
			}
			val = Math.max(dataMin, Math.min(val, dataMax));

			
			const stepCount = Math.round((val - dataMin) / dataStep);
			val = parseFloat((dataMin + stepCount * dataStep).toFixed(10));

			input.value = formatValue(val);
			currentValue = val;
			updateButtons(currentValue);
		});

		
		input.addEventListener('input', (e) => {
			let value = input.value;

			
			const regex = dataStepRaw.includes(',') ?
				/[^0-9,]/g :
				/[^0-9.]/g;
			value = value.replace(regex, '');

			
			const parts = value.split(decimalSeparator);
			if (parts.length > 2) {
				value = parts[0] + decimalSeparator + parts.slice(1).join('');
			}

			input.value = value;
		});

		
		input.addEventListener('change', () => {
			if (input.value === '') {
				currentValue = null;
				btnPlus.classList.remove('button-disabled');
				btnMinus.classList.remove('button-disabled');
				isInitialized = false;
				return;
			}

			let val = parseFloat(input.value.replace(',', '.'));
			if (isNaN(val)) {
				val = dataMin;
			}
			val = Math.max(dataMin, Math.min(val, dataMax));

			
			const remainder = (val - dataMin) / dataStep;
			if (!Number.isInteger(remainder)) {
				
				val = dataMin + Math.round(remainder) * dataStep;
			}

			input.value = formatValue(val);
			currentValue = val;
			updateButtons(currentValue);
		});
	});
});


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

