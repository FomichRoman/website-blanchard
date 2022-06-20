{
  let burger = document.querySelector(".header-top__burder");
  let menu = document.querySelector(".header-top__nav");
  let menuLincks = menu.querySelectorAll(".header__link");

  burger.addEventListener(
    "click",

    function () {
      menu.classList.toggle("header-top__nav-active");

      burger.classList.toggle("burger-active");

      document.body.classList.toggle(".stop-scroll-mob");
    }
  );

  menuLincks.forEach(function (el) {
    el.addEventListener(
      "click",

      function () {
        burger.classList.remove("burger-active");

        menu.classList.remove("header-top__nav-active");

        document.body.classList.remove(".stop-scroll-mob");
      }
    );
  });
}

{
  let galleryBtn = document.querySelectorAll(".gallery__swiper-slide");
  let popup = document.querySelector(".gallery__popup");
  let popupClose = document.querySelector(".popup__close");

  galleryBtn.forEach(function (el) {
    el.addEventListener(
      "click",

      function () {
        popup.classList.toggle("gallery__popup--active");
        document.body.classList.toggle("stop-scroll");
      }
    );
  });

  popup.addEventListener(
    "click",

    function () {
      popup.classList.remove("gallery__popup--active");
      document.body.classList.remove("stop-scroll");
    }
  );

  popupClose.addEventListener(
    "click",

    function () {
      popup.classList.remove("gallery__popup--active");
      document.body.classList.remove("stop-scroll");
    }
  );
}

let searchOpen = document.querySelector(".header-top__icon-search");
let searchClose = document.querySelector(".header-top__search-close");
let searchForm = document.querySelector(".header-top__form");

searchOpen.addEventListener(
  "click",

  function () {
    searchForm.classList.toggle("header-top__form-active");
  }
);

searchClose.addEventListener(
  "click",

  function () {
    searchForm.classList.remove("header-top__form-active");
  }
);

document.querySelectorAll(".dropdown__simplebar").forEach((dropdown) => {
  new SimpleBar(dropdown, {
    /* чтобы изначально ползунок был виден */
    autoHide: false,
    /* с помощью этого значения вы можете управлять высотой ползунка*/
    scrollbarMaxSize: 25,
  });
});

const btns = document.querySelectorAll(".header-bottom__btn");
const dropdowns = document.querySelectorAll(".dropdown");
const activeClassdropdowns = "dropdown__active";
const activeClassbtns = "header-bottom__btn--active";

btns.forEach((item) => {
  item.addEventListener("click", function () {
    let DropThis = this.parentElement.querySelector(".dropdown");
    dropdowns.forEach((el) => {
      if (el != DropThis) {
        el.classList.remove(activeClassdropdowns);
      }
    });
    btns.forEach((el) => {
      if (el != this) {
        el.classList.remove(activeClassbtns);
      }
    });
    DropThis.classList.toggle(activeClassdropdowns);
    this.classList.toggle(activeClassbtns);
  });
});

const heroSwiper = () => {
  const heroSwiper = document.querySelector(".hero__swiper");
  const gallerySwiper = document.querySelector(".gallery__swiper");
  const eventsSwiper = document.querySelector(".events__swiper");
  const projectsSwiper = document.querySelector(".projects__swiper");

  const swiper = new Swiper(heroSwiper, {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    navigation: {
      nextEl: ".hero__swiper-button-next",
      prevEl: ".hero__swiper-button-prev",
    },
    autoplay: {
      delay: 2000,
    },
  });

  const swiper2 = new Swiper(gallerySwiper, {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    navigation: {
      nextEl: ".gallery__swiper-button-next",
      prevEl: ".gallery__swiper-button-prev",
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 35,
        slidesPerGroup: 2,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 50,
        slidesPerGroup: 3,
      },
    },

    pagination: {
      el: ".gallery__swiper-pagination",
      type: "fraction",
    },
  });

  const swiper3 = new Swiper(eventsSwiper, {
    // Optional parameters
    direction: "horizontal",
    loop: false,
    slidesPerGroup: 3,
    navigation: {
      nextEl: ".events__swiper-button-next",
      prevEl: ".events__swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: "frue",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 34,
        slidesPerGroup: 2,
      },

      1024: {
        slidesPerView: 3,
        spaceBetween: 34,
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });

  const swiper4 = new Swiper(projectsSwiper, {
    direction: "horizontal",
    loop: true,
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".projects__swiper-button-next",
      prevEl: ".projects__swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 35,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });
};

heroSwiper();

const defaultSelect = () => {
  const element = document.querySelector("#gallery-select");
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: "",
    shouldSort: false,
    position: "bottom",
    allowHTML: true,
  });

  let ariaLabel = element.getAttribute("aria-label");
  element.closest(".choices").setAttribute("aria-label", ariaLabel);
};

defaultSelect();

(() => {
  new Accordion(".js-accordion-container");
})();

const catalogTabs = () => {
  let tabsBtn = document.querySelectorAll(".content__link");
  let tabsItem = document.querySelectorAll(".catalog-block");

  tabsBtn.forEach(function (element) {
    element.addEventListener("click", function (e) {
      const path = e.currentTarget.dataset.path;

      tabsBtn.forEach(function (btn) {
        btn.classList.remove("contant__link--active");
      });
      e.currentTarget.classList.add("contant__link--active");

      tabsItem.forEach(function (element) {
        element.classList.remove("catalog-block--active");
      });
      document
        .querySelector(`[data-target="${path}"]`)
        .classList.add("catalog-block--active");
    });
  });
};

catalogTabs();

{
  type =
    "text/javascript" >
    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
  function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [55.75938762962125, 37.59409329888907],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 13,
    });

    myMap.controls.remove("geolocationControl"); // удаляем геолокацию
    myMap.controls.remove("searchControl"); // удаляем поиск
    myMap.controls.remove("trafficControl"); // удаляем контроль трафика
    myMap.controls.remove("typeSelector"); // удаляем тип
    myMap.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
    myMap.controls.remove("zoomControl"); // удаляем контрол зуммирования
    myMap.controls.remove("rulerControl"); // удаляем контрол правил
    myMap.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)

    // Создание геообъекта с типом точка (метка).
    var myGeoObject = new ymaps.GeoObject({
      geometry: {
        type: "Point", // тип геометрии - точка
        coordinates: [55.75938762962125, 37.59409329888907], // координаты точки
      },
    });
    (myPlacemark = new ymaps.Placemark(
      myMap.getCenter([55.75938762962125, 37.59409329888907]),
      {
        hintContent: "Шоурум №4, Леонтьевский переулок, дом 5/1",
        balloonContent: "Шоурум №4, Леонтьевский переулок, дом 5/1",
      },
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#image",
        // Своё изображение иконки метки.
        iconImageHref: "../img/maps-svg.svg",
        // Размеры метки.
        iconImageSize: [20, 20],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [0, 0],
      }
    )),
      // Размещение геообъекта на карте.
      myMap.geoObjects.add(myPlacemark);
  }
}

const form = document.querySelector(".form");
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask("+7 (999) 999-99-99");
inputMask.mask(telSelector);

const validation = new JustValidate(".form");

validation
  .addField(".form__name", [
    {
      rule: "required",
      errorMessage: "Введите Имя",
    },
    {
      rule: "minLength",
      value: 3,
      errorMessage: "Введите более 3х символов",
    },
    {
      rule: "maxLength",
      value: 10,
      errorMessage: "Введите менее 10 символов",
    },
  ])
  .addField(".form__tel", [
    {
      rule: "required",
      value: true,
      errorMessage: "Телефон обязателен",
    },
    {
      rule: "function",
      validator: function () {
        const phone = telSelector.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: "Введите корректный телефон",
    },
  ])
  .onSuccess((event) => {
    console.log("Validation passes and form submitted", event);

    let formData = new FormData(event.target);

    console.log(...formData);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log("Отправлено");
        }
      }
    };

    xhr.open("POST", "mail.php", true);
    xhr.send(formData);

    event.target.reset();
  });
