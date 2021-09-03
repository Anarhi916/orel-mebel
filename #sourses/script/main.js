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

let sliderImages = $('.big-slider__wrap-item').children()
sliderImages = Array.prototype.slice.call(sliderImages)

$(document).ready(function () {
  // запуск слайдера на в категориях(кухни, шкафы и т.д) после загрузки страницы
  changeSrcKitchen()
  // конец
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

function changeSrc() {
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
          $('.big-slider_main').slick({
            slidesToShow: 1,
            infinite: false,
            fade: true,
          })
          let currentSlide = $('.big-slider_preload').slick('slickCurrentSlide')
          $('.big-slider_main').slick('slickGoTo', `${currentSlide}`)
          $('.main_galery__load').hide()
          $('.big-slider_main').show()
          $('.big-slider_main').slick('setPosition')
          $('.big-slider_preload').hide()
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
  $('.big-slider_main').hide()
  $('.big-slider_preload').hide()
  $('.big-slider_main').slick('unslick')
  $('.big-slider_preload').slick('unslick')
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

$('.menu__burger').click(function (event) {
  $('.cubes__last,.menu__list,.menu__link_triangle').toggleClass('active')
  closeMenu()
})

function closeMenu() {
  $(document).click(function (e) {
    if ($(e.target).closest('.menu').length) {
      return
    } else {
      $('.cubes__last,.menu__list,.menu__link_triangle').removeClass('active')
    }
  })
}

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
    imageKitchen.src = `images/kitchen/${numberSlideKitchen}.png`
    kitchenSliderItem.append(imageKitchen)

    imageKitchen.addEventListener('load', () => {
      kitchenSliderItem.style.backgroundImage = `url(images/kitchen/${numberSlideKitchen}.png)`
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

// changeSrcKitchen()

let numberBigKitchenSlider
$(document).click(function (e) {
  if ($(e.target).closest('.kitchen-slider__item').length) {
    bigSliderSrc = 'kitchen'
    numberBigKitchenSlider = e.target.id
    changeBigKitchenSrc()
  }
  return
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

// кухни большой слайдер конец
