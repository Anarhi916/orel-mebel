function ibg() {
  $.each($('.ibg'), function (index, val) {
    if ($(this).find('img').length > 0) {
      $(this).css(
        'background-image',
        'url("' + $(this).find('img').attr('src') + '")'
      )
    }
  })
}
ibg()

//форма просчет стоимости

$('.order-form').click(function (event) {
  $('.forma-callback').show()
})

$('.forma-callback__close-icon').click(function (event) {
  $('.forma-callback').hide()
  $('.forma-callback__form').trigger('reset')
})

$('.forma-callback__form').submit(function () {
  var th = $(this)
  $('.forma-callback').hide()
  $.ajax({
    type: 'POST',
    url: '../mail.php',
    data: th.serialize(),
  }).done(function () {
    $('.forma-congratuletion').show()
    setTimeout(function () {
      th.trigger('reset')
      $('.forma-congratuletion').hide()
    }, 2000)
  })
  return false
})

//конец форма просчет стоимости

//форма перезвонить
const callForm = $('.call-me')

$('.callback-btn,.menu__mobile-icon').click(function (event) {
  callForm.show()
})

$(document).mousedown(function (e) {
  if (
    $(e.target).closest('.call-me').length ||
    $(e.target).closest('.callback-btn').length
  ) {
    return
  } else if (callForm.css('display') == 'block') {
    callForm.hide()
    $('#forma_2').trigger('reset')
  }
})

$('#forma_2').submit(function () {
  var th = $(this)
  $('.call-me').hide()
  $.ajax({
    type: 'POST',
    url: '../mail_1.php',
    data: th.serialize(),
  }).done(function () {
    $('.forma-congratuletion').show()
    setTimeout(function () {
      th.trigger('reset')
      $('.forma-congratuletion').hide()
    }, 2000)
  })
  return false
})

//конец форма перезвонить

// Форма в контактах

$('#forma_3').submit(function () {
  var th = $(this)
  $.ajax({
    type: 'POST',
    url: '../mail_2.php',
    data: th.serialize(),
  }).done(function () {
    $('.forma-congratuletion').show()
    setTimeout(function () {
      th.trigger('reset')
      $('.forma-congratuletion').hide()
    }, 2000)
  })
  return false
})

// конец форма в контактах

// слайдер малый начало

$(document).ready(function () {
  $('.little-slider').slick({
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 800,
    pauseOnFocus: false,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 910,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 710,
        settings: {
          slidesToShow: 1.65,
        },
      },
      {
        breakpoint: 493,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  })

  // скилы слайдер на смартфонах
  let sliderOn = 0
  if ($(window).width() < 1020) {
    $('.main-skills').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 1300,
      variableWidth: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      waitForAnimate: false,
      touchThreshold: 10,
    })
    $('.main-skills').slick('setPosition')
    sliderOn = 1
  }

  function onWindowReduce(e) {
    let windWidth = e.target.outerWidth
    if (windWidth < 1020 && sliderOn == 0) {
      $('.main-skills').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1300,
        variableWidth: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        waitForAnimate: false,
        touchThreshold: 10,
      })
      $('.main-skills').slick('setPosition')
      sliderOn = 1
    }
  }

  function onWindowIncrease(e) {
    let windWidth1 = e.target.outerWidth
    if (windWidth1 >= 1020 && sliderOn == 1) {
      $('.main-skills').slick('unslick')
      sliderOn = 0
    }
  }

  window.addEventListener('resize', onWindowReduce)
  window.addEventListener('resize', onWindowIncrease)
})

// конец скилы слайдер на смартфонах

// большой слайдер начало!

let numberSlide = 1
let bigSliderSrc
let isSliderActive = false
let isMainSliderActive = false
let isPreloadSliderActive = false

function changeSrc() {
  isSliderActive = true
  $('.intro-mask').show()
  $('.close-icon').show()
  $('.main_galery__load').show()
  preLoadImage()
    .then(() => {
      $('.big-slider_preload').slick({
        slidesToShow: 1,
        infinite: false,
        fade: true,
      })
      isPreloadSliderActive = true
      $('.main_galery__load').hide()
      $('.big-slider_preload').show()
      $('.big-slider_preload').slick('setPosition')
    })
    .then(() => {
      loadImage()
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .then(() => loadImage())
        .catch((err) => false)
        .finally(() => {
          if (isSliderActive === true) {
            $('.big-slider_main').slick({
              slidesToShow: 1,
              infinite: false,
              fade: true,
            })
            isMainSliderActive = true
            let currentSlide = $('.big-slider_preload').slick(
              'slickCurrentSlide'
            )
            $('.big-slider_main').slick('slickGoTo', `${currentSlide}`)
            $('.main_galery__load').hide()
            $('.big-slider_main').show()
            $('.big-slider_main').slick('setPosition')
            $('.big-slider_preload').hide()
          } else {
            $('.big-slider_main').empty()
            numberSlide = 1
          }
        })
    })
}

function loadImage() {
  return new Promise(function (resolve, reject) {
    let bigSliderItem = document.createElement('div')
    bigSliderItem.className = 'big-slider__item'
    $('.big-slider_main').append(bigSliderItem)

    let bigSliderItemWrap = document.createElement('div')
    bigSliderItemWrap.className = 'big-slider__wrap-item'
    bigSliderItem.append(bigSliderItemWrap)

    let image = document.createElement('img')
    image.src = `images/${bigSliderSrc}/${numberSlide}.png`
    bigSliderItemWrap.append(image)

    image.addEventListener('load', () => {
      numberSlide++
      resolve()
    })

    image.addEventListener('error', () => {
      $('.big-slider_main>.big-slider__item:last').remove()
      console.clear()
      reject()
    })
  })
}

function preLoadImage() {
  return new Promise(function (resolve) {
    let bigSliderItem1 = document.createElement('div')
    bigSliderItem1.className = 'big-slider__item'
    $('.big-slider_preload').append(bigSliderItem1)
    let bigSliderItemWrap1 = document.createElement('div')
    bigSliderItemWrap1.className = 'big-slider__wrap-item'
    bigSliderItem1.append(bigSliderItemWrap1)
    let image1 = document.createElement('img')
    image1.src = `images/${bigSliderSrc}/1.png`
    bigSliderItemWrap1.append(image1)

    let bigSliderItem2 = document.createElement('div')
    bigSliderItem2.className = 'big-slider__item'
    $('.big-slider_preload').append(bigSliderItem2)
    let bigSliderItemWrap2 = document.createElement('div')
    bigSliderItemWrap2.className = 'big-slider__wrap-item'
    bigSliderItem2.append(bigSliderItemWrap2)
    let image2 = document.createElement('img')
    image2.src = `images/${bigSliderSrc}/2.png`
    bigSliderItemWrap2.append(image2)

    let bigSliderItem3 = document.createElement('div')
    bigSliderItem3.className = 'big-slider__item'
    $('.big-slider_preload').append(bigSliderItem3)
    let bigSliderItemWrap3 = document.createElement('div')
    bigSliderItemWrap3.className = 'big-slider__wrap-item'
    bigSliderItem3.append(bigSliderItemWrap3)
    let bigSliderItemLoad = document.createElement('div')
    bigSliderItemWrap3.append(bigSliderItemLoad)

    image1.addEventListener('load', () => {
      resolve()
    })
  })
}

$('.close-icon').click(function (event) {
  isSliderActive = false
  $('.big-slider_main').hide()
  $('.big-slider_preload').hide()
  if (isMainSliderActive === true) {
    $('.big-slider_main').slick('unslick')
    isMainSliderActive = false
  }
  if (isPreloadSliderActive === true) {
    $('.big-slider_preload').slick('unslick')
    isPreloadSliderActive = false
  }
  $('.big-slider_main').empty()
  $('.big-slider_preload').empty()
  $('.intro-mask').hide()
  $('.close-icon').hide()
  $('.main_galery__load').hide()
  numberSlide = 1
})

$('.little-slider__btn_kitchen').click(function (event) {
  bigSliderSrc = 'kitchen'
  changeSrc()
})

$('.little-slider__btn_closet').click(function (event) {
  bigSliderSrc = 'closet'
  changeSrc()
})

$('.little-slider__btn_kids').click(function (event) {
  bigSliderSrc = 'kids'
  changeSrc()
})

$('.little-slider__btn_bedroom').click(function (event) {
  bigSliderSrc = 'bedroom'
  changeSrc()
})

$('.little-slider__btn_ofice').click(function (event) {
  bigSliderSrc = 'office'
  changeSrc()
})

$('.little-slider__btn_living-room').click(function (event) {
  bigSliderSrc = 'living-room'
  changeSrc()
})

$('.little-slider__btn_hallway').click(function (event) {
  bigSliderSrc = 'hallway'
  changeSrc()
})

$('.little-slider__btn_wardrobe').click(function (event) {
  bigSliderSrc = 'wardrobe'
  changeSrc()
})

// слайдер большой конец

// меню бургер
let burgerActive = false
let burgerCatalog = false
$('.menu__burger').click(function (event) {
  if (burgerActive) {
    $('.cubes__last,.menu__list_mobile,.menu__link_triangle').removeClass(
      'active'
    )
    $('.intro-mask').hide()
    $('.header').css('z-index', '50')
    burgerActive = false
  } else if (burgerCatalog) {
    $('.menu__list_mobile-catalog').removeClass('active-catalog')
    $('.cubes__last,.menu__list_mobile,.menu__link_triangle').removeClass(
      'active'
    )
    $('.intro-mask').hide()
    $('.header').css('z-index', '50')
    burgerCatalog = false
  } else {
    $('.cubes__last,.menu__list_mobile,.menu__link_triangle').addClass('active')
    $('.intro-mask').show()
    $('.header').css('z-index', '150')
    burgerActive = true
  }
  closeMenu()
})

function closeMenu() {
  $(document).click(function (e) {
    if ($(e.target).closest('.menu__wrap').length) {
      return
    } else if (burgerActive === true) {
      $('.cubes__last,.menu__list_mobile,.menu__link_triangle').removeClass(
        'active'
      )
      $('.intro-mask').hide()
      $('.header').css('z-index', '50')
      burgerActive = false
    } else if (burgerCatalog === true) {
      $('.menu__list_mobile-catalog').removeClass('active-catalog')
      $('.cubes__last,.menu__list_mobile,.menu__link_triangle').removeClass(
        'active'
      )
      $('.intro-mask').hide()
      $('.header').css('z-index', '50')
      burgerCatalog = false
    } else {
      return
    }
  })
}

$('.menu__link_prev-def').click(function (event) {
  event.preventDefault()
  if ($(window).width() < 1020) {
    $('.menu__list_mobile-catalog').addClass('active-catalog')
    $('.menu__list_mobile').removeClass('active')
    burgerCatalog = true
    burgerActive = false
  } else {
    return false
  }
})

// меню бургер конец

// замена текста в меню в зависимости от страницы

const menuText = document.querySelector('.menu__mobile-text')
const title = document.querySelector('title').textContent

function changeText() {
  if (title.length < 19) {
    menuText.innerHTML = title
  } else return
}

changeText()

// конец замена текста в меню в зависимости от страницы

// кухни слайдер малый начало!

let numberSlideKitchen = 1
let kitchenSliderSrc

function changeSrcKitchen() {
  loadImageKitchen()
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .then(() => loadImageKitchen())
    .catch((err) => false)
    .finally(() => {
      $('.kitchen-slider').slick({
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 800,
        pauseOnFocus: false,
        waitForAnimate: false,
        responsive: [
          {
            breakpoint: 760,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      })
      $('.kitchen-slider').slick('setPosition')
      $('.kitchen-slider').show()
    })
}

function loadImageKitchen() {
  return new Promise(function (resolve, reject) {
    let kitchenSliderItem = document.createElement('div')
    kitchenSliderItem.className = 'kitchen-slider__item'
    kitchenSliderItem.id = numberSlideKitchen
    $('.kitchen-slider').append(kitchenSliderItem)

    let imageKitchen = document.createElement('img')
    imageKitchen.className = 'kitchen-slider__img'
    imageKitchen.src = `images/${kitchenSliderSrc}/${numberSlideKitchen}.png`
    kitchenSliderItem.append(imageKitchen)

    imageKitchen.addEventListener('load', () => {
      kitchenSliderItem.style.backgroundImage = `url(images/${kitchenSliderSrc}/${numberSlideKitchen}.png)`
      imageKitchen.remove()
      numberSlideKitchen++
      resolve()
    })

    imageKitchen.addEventListener('error', () => {
      $('.kitchen-slider>.kitchen-slider__item:last').remove()
      console.clear()
      reject()
    })
  })
}

let numberBigKitchenSlider
$(document).click(function (e) {
  if (
    $(e.target).closest('.kitchen-slider__item').length &&
    title === 'Кухни'
  ) {
    bigSliderSrc = 'kitchen'
    numberBigKitchenSlider = e.target.id
    changeBigKitchenSrc()
  } else if (
    $(e.target).closest('.kitchen-slider__item').length &&
    title === 'Шкаф-купе'
  ) {
    bigSliderSrc = 'closet'
    numberBigKitchenSlider = e.target.id
    changeBigKitchenSrc()
  } else if (
    $(e.target).closest('.kitchen-slider__item').length &&
    title === 'Офисная мебель'
  ) {
    bigSliderSrc = 'office'
    numberBigKitchenSlider = e.target.id
    changeBigKitchenSrc()
  } else if (
    $(e.target).closest('.kitchen-slider__item').length &&
    title === 'Детская мебель'
  ) {
    bigSliderSrc = 'kids'
    numberBigKitchenSlider = e.target.id
    changeBigKitchenSrc()
  } else if (
    $(e.target).closest('.kitchen-slider__item').length &&
    title === 'Мебель для спальни'
  ) {
    bigSliderSrc = 'bedroom'
    numberBigKitchenSlider = e.target.id
    changeBigKitchenSrc()
  } else {
    return
  }
})

// малый слайдер кухни конец

// кухни большой слайдер начало

function changeBigKitchenSrc() {
  $('.intro-mask').show()
  $('.close-icon').show()
  loadBigKitchenImage()
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .then(() => loadBigKitchenImage())
    .catch((err) => false)
    .finally(() => {
      let currentKitchenSlide = $(
        `.big-slider__item:nth-child(${numberBigKitchenSlider})`
      )
      $('.big-slider_main').prepend(currentKitchenSlide)
      $('.big-slider_main').slick({
        slidesToShow: 1,
        infinite: false,
        fade: true,
      })
      $('.big-slider_main').show()
      $('.big-slider_main').slick('setPosition')
    })
}

function loadBigKitchenImage() {
  return new Promise(function (resolve, reject) {
    let bigSliderItem = document.createElement('div')
    bigSliderItem.className = 'big-slider__item'
    $('.big-slider_main').append(bigSliderItem)

    let bigSliderItemWrap = document.createElement('div')
    bigSliderItemWrap.className = 'big-slider__wrap-item'
    bigSliderItem.append(bigSliderItemWrap)

    let image = document.createElement('img')
    image.src = `images/${bigSliderSrc}/${numberSlide}.png`
    bigSliderItemWrap.append(image)

    image.addEventListener('load', () => {
      numberSlide++
      resolve()
    })

    image.addEventListener('error', () => {
      $('.big-slider_main>.big-slider__item:last').remove()
      console.clear()
      reject()
    })
  })
}

$('.close-icon_kitchen').click(function (event) {
  $('.big-slider_main').hide()
  $('.big-slider_main').slick('unslick')
  $('.big-slider_main').empty()
  $('.intro-mask').hide()
  $('.close-icon').hide()
  numberSlide = 1
})

if (title === 'Кухни') {
  kitchenSliderSrc = 'kitchen'
  changeSrcKitchen()
} else if (title === 'Шкаф-купе') {
  kitchenSliderSrc = 'closet'
  changeSrcKitchen()
} else if (title === 'Офисная мебель') {
  kitchenSliderSrc = 'office'
  changeSrcKitchen()
} else if (title === 'Детская мебель') {
  kitchenSliderSrc = 'kids'
  changeSrcKitchen()
} else if (title === 'Мебель для спальни') {
  kitchenSliderSrc = 'bedroom'
  changeSrcKitchen()
}

// кухни большой слайдер конец

// function executeSequentially() {
//   var resaltt = Promise.resolve()
//   for(let i = 0; i<40; i++ ){
//   function (myPromise) {
//     resaltt = resaltt.then(myPromise)
//   }()
// }
//   return resaltt
// }

// function myPromise() {
//   return loadImage()
// }
