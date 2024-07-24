// 🖱️ Dreamcatcher Cursor 
// |￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣|
//     cursor change
// |＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿|
//    \ (•◡•) /

$(document).ready(function () {
     // 정보 칸 호버시
     $(".overlay_info").hover(
          function () {
               $(this).css("cursor", "url('/img/DC_cursor/13.Link Select_연결 선택.png'), pointer");
               $(this).find("a").css("cursor", "url('/img/DC_cursor/13.Link Select_연결 선택.png'), pointer");
          }
     );
     // 방명록 칸 호버시
     $(".comments_btn").hover(
          function () {
               $(this).css("cursor", "url('/img/DC_cursor/13.Link Select_연결 선택.png'), pointer");
          }
     );

     // 마우스를 드래그하여 이동할 때도 커서 유지
     $("html").on("mouseover", ".overlay_info", function () {
          $(this).css("cursor", "url('/img/DC_cursor/13.Link Select_연결 선택.png'), pointer");
          $(this).find("a").css("cursor", "url('/img/DC_cursor/13.Link Select_연결 선택.png'), pointer");
     });

});


     // |￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣|
     //     팝업 숨기기
     // |＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿|
     //    \ (•◡•) /


     $(document).ready(function () {
          $(".header_right").on("click", function () {
               $(".popup_wrap_inner").show(100);
          });

          $(".close_btn ,.bk_common_bg").on("click", function () {
               $(".popup_wrap_inner").hide(100);
          });

     });


