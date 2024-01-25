

document.addEventListener("DOMContentLoaded", function () {
    const navList = document.querySelector('.nav_list');
    const navItems = document.querySelectorAll('.nav_item');
    const drawerInput = document.getElementById('drawer_input');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Toggle the visibility of the navigation menu
            navList.classList.toggle('nav_list--visible');
            // Toggle the checkbox state to match the visibility
            drawerInput.checked = !drawerInput.checked;
        });
    });
});

if (window.innerWidth <= 1050 && typeof Swiper !== 'undefined') {
    const swiper = new Swiper(".swiper", {
        // Swiper options go here
    });
}

// 動きのきっかけの起点となるアニメーションの名前を定義
function fadeAnime(){

  // ふわっ
  $('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
    }
    });
}

// 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function(){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述

