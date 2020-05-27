$(function () {
    // ナビボタンの押下時の動作
    $(".nav__botton").click(function () {
        if (!($(".nav__list").is(":animated"))) {
            // メニューボダンのアクティブ・非アクティブを変更
            $(".nav__botton-line-top").toggleClass("--active");
            $(".nav__botton-line-center").toggleClass("--active");
            $(".nav__botton-line-bottom").toggleClass("--active");
            // リストの表示・非表示を変更
            $(".nav__list").slideToggle(300);
        }
    });
    // 表示されたリストのアイテム押下時の動作
    $(".nav__list-item-anchor").click(function () {
        if (!($(".nav__list").is(":animated"))) {
            // メニューボダンのアクティブ・非アクティブを変更
            $(".nav__botton-line-top").toggleClass("--active");
            $(".nav__botton-line-center").toggleClass("--active");
            $(".nav__botton-line-bottom").toggleClass("--active");
            // リストの表示・非表示を変更
            $(".nav__list").slideToggle(300);
            //スクロール処理
            let id = $(this).attr("href");
            let scTop = $(id).offset().top - 45;
            $("html, body").animate({ scrollTop: scTop });
        }
        return false;
    });
});