document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
  });

  Fancybox.bind('[data-fancybox="plan"]', {});

  if (document.querySelector(".swiper.main")) {
    let mainSwiperThumbs = new Swiper(".swiper.main-thumbs", {
      loop: true,
      spaceBetween: 16,
      slidesPerView: 5,
      direction: "vertical",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    let mainSwiper = new Swiper(".swiper.main", {
      loop: true,
      spaceBetween: 20,
      thumbs: {
        swiper: mainSwiperThumbs,
      },
    });
  }

  if (document.querySelector(".swiper.slider-plan")) {
    let mainSwiper = new Swiper(".swiper.slider-plan", {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 60,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
});
document.addEventListener('alpine:init', () => {
  Alpine.data('main', () => ({
    selectedTab: "description",
    tabFixed: false,
    screen: "",
    tab_fixed() {
      window.addEventListener('scroll', () => {
        let topPos = this.$el.getBoundingClientRect().top;
        if (this.screen >= 1024) {
          if (topPos <= 110) {
            this.tabFixed = true;
          } else {
            this.tabFixed = false;
          }
        } else {
          if (topPos <= 70) {
            this.tabFixed = true;
          } else {
            this.tabFixed = false;
          }
        }
      });
    }
  }));

  Alpine.data('textCollapse', () => ({
    show: false,
    text: "Показать полностью",
    init() {
      this.screen = document.documentElement.scrollWidth;
      this.check();
      window.addEventListener('resize', () => {
        this.screen = document.documentElement.scrollWidth;
        this.check();
      });
    },
    change() {
      this.show = !this.show;
      if (this.show)
        this.text = "Скрыть";
      else
        this.text = "Показать полностью";
    },
    check() {
      if (this.screen >= 1024) {
        this.show = true;
      } else {
        this.show = false;
      }
    }
  }));
})