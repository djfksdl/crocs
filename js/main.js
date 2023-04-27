// //gnb호버시 서브메뉴 슬라이드 다운
// const header = document.querySelector('header'), 
// mainMenuList = document.querySelectorAll('.depth1'),
// subMenu = document.querySelectorAll('.depth2')
// // console.log(header, mainMenuList, subMenu)
// // let headerHeight = header.offsetHeight;
// let headerHeight = header.offsetHeight;
// // console.log(headerHeight)
// let subMenuHeight = 0;
// // console.log(subMenu.length)
// for(let i = 0; i < subMenu.length; i++){
//     if(subMenu[i].offsetHeight > subMenuHeight){
//         subMenuHeight = subMenu[i].offsetHeight
//     }
// }
// for(let i = 0; i < mainMenuList.length; i++){
//     mainMenuList[i].addEventListener('mouseover',function(){
//         header.style.height=headerHeight + subMenuHeight + 'px'
//     })
//     mainMenuList[i].addEventListener('mouseout',function(){
//         header.style.height=headerHeight +'px'
//     })
// }
window.onload = function(){
  let navHeight = $('nav').offsetHeight;
  $('nav').mouseenter(function(){
    $('header').stop().animate({height: '500px'}, 300);
  })
  $('header').mouseleave(function(){
    $('header').stop().animate({height:'105px'},300);
  })

  //반응형 1045px
$(window).resize(function(){
  let windowWidth = window.innerWidth;
  console.log(windowWidth)
  if(windowWidth < 1045){
     $('.header .inner').css('height','95px');
      $('.header').css('height','95px');
    $('nav').mouseenter(function(){
      $('.header').stop().animate({height: '400px'}, 150);
    })
    $('.header').mouseleave(function(){
      $('.header').stop().animate({height:'95px'},150);
    })
  }else {
     $('.header').stop().animate({height:'105px'},300);
    $('.header .inner').stop().animate({height:'105px'},300);
  }
})
}


// 신상품 탭메뉴
$(function () {
  const tabAnchor = $('.tabs-nav li a'),
      tabPanel = $('.tabs-panel')
      let tabAchIndex = 0
       tabAnchor.mouseenter(function(e){
          e.preventDefault();
  
          tabAnchor.removeClass('active');
          $(e.currentTarget).addClass("active")
          tabAchIndex = $(this).index();
          tabPanel.hide();
            
          let target =$(this).attr('href')
          $(target).show();
       })
       tabAnchor.eq(0).trigger("mouseenter")

      const tabAnchor1 = $('.tabs-nav1 li a'),
      tabPanel1 = $('.tabs-panel1')
      let tabAchIndex1 = 0
       tabAnchor1.mouseenter(function(e){
          e.preventDefault();
  
          tabAnchor1.removeClass('active');
          $(e.currentTarget).addClass("active")
          tabAchIndex1 = $(this).index();
          tabPanel1.hide();
            
          let target1 =$(this).attr('href')
          $(target1).show();
       })
       tabAnchor1.eq(0).trigger("mouseenter")
       
      const tabAnchor2 = $('.tabs-nav2 li a'),
      tabPanel2 = $('.tabs-panel2')
      let tabAchIndex2 = 0
       tabAnchor2.mouseenter(function(e){
          e.preventDefault();
  
          tabAnchor2.removeClass('active');
          $(e.currentTarget).addClass("active")
          tabAchIndex2 = $(this).index();
          tabPanel2.hide();
            
          let target2 =$(this).attr('href')
          $(target2).show();
       })
       tabAnchor2.eq(0).trigger("mouseenter")

      const tabAnchor3 = $('.tabs-nav3 li a'),
      tabPanel3 = $('.tabs-panel3')
      let tabAchIndex3 = 0
       tabAnchor3.mouseenter(function(e){
          e.preventDefault();
  
          tabAnchor3.removeClass('active');
          $(e.currentTarget).addClass("active")
          tabAchIndex3 = $(this).index();
          tabPanel3.hide();
            
          let target3 =$(this).attr('href')
          $(target3).show();
       })
       tabAnchor3.eq(0).trigger("mouseenter")

       const tabAnchor4 = $('.tabs-nav4 li a'),
      tabPanel4 = $('.tabs-panel4')
      let tabAchIndex4 = 0
       tabAnchor4.mouseenter(function(e){
          e.preventDefault();
  
          tabAnchor4.removeClass('active');
          $(e.currentTarget).addClass("active")
          tabAchIndex4 = $(this).index();
          tabPanel4.hide();
            
          let target4 =$(this).attr('href')
          $(target4).show();
       })
       tabAnchor4.eq(0).trigger("mouseenter")

       const tabAnchor5 = $('.tabs-nav5 li a'),
      tabPanel5 = $('.tabs-panel5')
      let tabAchIndex5 = 0
       tabAnchor5.mouseenter(function(e){
          e.preventDefault();
  
          tabAnchor5.removeClass('active');
          $(e.currentTarget).addClass("active")
          tabAchIndex5 = $(this).index();
          tabPanel5.hide();
            
          let target5 =$(this).attr('href')
          $(target5).show();
       })
       tabAnchor5.eq(0).trigger("mouseenter")

       const tabAnchor6 = $('.tabs-nav6 li a'),
      tabPanel6 = $('.tabs-panel6')
      let tabAchIndex6 = 0
       tabAnchor6.mouseenter(function(e){
          e.preventDefault();
  
          tabAnchor6.removeClass('active');
          $(e.currentTarget).addClass("active")
          tabAchIndex6 = $(this).index();
          tabPanel6.hide();
            
          let target6 =$(this).attr('href')
          $(target6).show();
       })
       tabAnchor6.eq(0).trigger("mouseenter")

       const tabAnchor7 = $('.tabs-nav7 li a'),
      tabPanel7 = $('.tabs-panel7')
      let tabAchIndex7 = 0
       tabAnchor7.mouseenter(function(e){
          e.preventDefault();
  
          tabAnchor7.removeClass('active');
          $(e.currentTarget).addClass("active")
          tabAchIndex7 = $(this).index();
          tabPanel7.hide();
            
          let target7 =$(this).attr('href')
          $(target7).show();
       })
       tabAnchor7.eq(0).trigger("mouseenter")
  });

// 베스트 아이템 탭메뉴
$(function () {
  const BItabAnchor = $('.bi-nav li a'), 
      BItabPanel = $('.bi-tabs-panel')
      //링크를 클릭했을때 할 일
      BItabAnchor.click(function(e){
          e.preventDefault();
          BItabAnchor.removeClass('active');
          $(this).addClass("active")
          BItabPanel.hide();
          let BItarget =$(this).attr('href')
          $(BItarget).show();
       })
       BItabAnchor.eq(0).trigger("click")
  });

// 비주얼 슬라이드
new Swiper(".visual_Swiper", {
  slidesPerView: "1.3",
  spaceBetween: 10,
  centeredSlides: true,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },
  loop:true,
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    "@0.75": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@1.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@1.50": {
      slidesPerView: 1.3,
      spaceBetween: 10,
    },
  },
  pagination: {
    el: ".visual_Swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".visual_Swiper-button-next",
    prevEl: ".visual_Swiper-button-prev",
  },
  
  
});

// 신상품 슬라이드
new Swiper(".new_Swiper", {
  slidesPerView: 4,
  spaceBetween: 100,
  // autoplay: true,
  loop: true,
  navigation: {
      nextEl: ".new_Swiper-button-next",
      prevEl: ".new_Swiper-button-prev",
    },
});
// 베스트 슬라이드
new Swiper(".best_Swiper", {
  slidesPerView: 4.5,
  spaceBetween: 60,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: ".best_swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".best_Swiper-button-next",
    prevEl: ".best_Swiper-button-prev",
  },
});
// 고탑 버튼
$(function () {
  $(window).scroll(function(){
      if($(this).scrollTop()>=300){
          $('.gotop_btn').fadeIn(300)
      }else{
          $('.gotop_btn').fadeOut(300)
      }
      
  })
  $('.gotop_btn').click(function(e){
      e.preventDefault()
      $('html, body').stop().animate({scrollTop:0},500)
  })
});