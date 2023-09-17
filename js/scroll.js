$(function () {
  //   console.log("scroll fn here");
  $(".scroll-down-btn").click(function () {
    // window.scrollBy(0, 100);
    let targetOffset = $("#ux-items").offset().top;
    $("html, body").animate({ scrollTop: targetOffset }, 100);
  });
});
