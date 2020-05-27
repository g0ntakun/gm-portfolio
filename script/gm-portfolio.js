$(function () {
  //logo押下時の動作
  $(".header__title-anchor").click(function () {
    //スクロール処理
    $("html, body").animate({ scrollTop: 0 });
    return false;
  });
  // ナビボタンの押下時の動作
  $(".header__nav-botton").click(function () {
    if (!$(".header__nav-list").is(":animated")) {
      // メニューボダンのアクティブ・非アクティブを変更
      $(".header__nav-botton-line-top").toggleClass("--active");
      $(".header__nav-botton-line-center").toggleClass("--active");
      $(".header__nav-botton-line-bottom").toggleClass("--active");
      // リストの表示・非表示を変更
      $(".header__nav-list").slideToggle(300);
    }
  });
  // 表示されたリストのアイテム押下時の動作
  $(".header__nav-list-item-anchor").click(function () {
    if (!$(".header__nav-list").is(":animated")) {
      //スクロール処理
      let id = $(this).attr("href");
      let scTop = $(id).offset().top - 45;
      $("html, body").animate({ scrollTop: scTop });
    }
    return false;
  });
});
