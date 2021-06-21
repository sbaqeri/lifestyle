
// for applying comment
const reply = document.querySelector(".anonymous-reply .comment-reply");
const formReply = document.querySelector(".leave-reply");
const cancelReply = document.querySelector(".leave-reply .reply-title span");
if (reply) {
   reply.addEventListener("click", function () {
    formReply.style.display = "block";
}) 
}
if (cancelReply) {
  cancelReply.addEventListener("click", function () {
    formReply.style.display="none"
})  
}
// visitors counter in about page
 const postCounter = document.querySelector(".visitors-counter .post-counter .post-counter-content .post-counter-number");
if (postCounter) {
 const posts = 312;
      let i = 0;
      const counterInterval = setInterval(() => {
        i++;
        postCounter.innerHTML = i;
        if (i >= posts) {
          clearInterval(counterInterval);
        }
      }, 10);
}
 const usersCounter = document.querySelector(".visitors-counter .entertaining-counter .post-entertaining-content .post-entertaining-number");
if (usersCounter) {
  const users =1000;
      let j = 0;
      const usersCounterInterval = setInterval(() => {
        j++;
        usersCounter.innerHTML = j;
        if (j >= users) {
          clearInterval(usersCounterInterval);
        }
      });  
}
        // Form validation
const name2 = document.getElementById("inputName");
const email = document.getElementById("inputEmail");
const submitForm = document.querySelector(".contact-form .contact-control .submit input");

if (submitForm) {
  submitForm.addEventListener("click", function (e) {
          e.preventDefault();
         if( document.myForm.Name.value == "" ) {
            alert( "Please fill your name!" );
           name2.style.borderColor = "red";
         }
         let check=document.myForm.Email.value.includes("@gmail.com");
         if( document.myForm.Email.value == "" && !check ) {
            alert( "Please fill your Email!" );
            email.style.borderColor = "red";
  } 
         return( true ); 
})
}
if (name2) {
  name2.addEventListener("keyup", function () {
   if (document.myForm.Name.value !== ""){
    name2.style.borderColor = "green";
   }
})
}
if (email) {
  email.addEventListener("keyup", function () {
    let check=document.myForm.Email.value.includes
    ("@gmail.com");
   if (document.myForm.Email.value !== "" && check ){
    email.style.borderColor = "green";
    console.log("hi");
         }
})
}
const sentMessage = document.querySelector(".info .news .news-section .sent-messages");
const formContact = document.querySelector(".info .news .news-section .contact");
if (submitForm) {
  submitForm.addEventListener("click", function () {
         if( document.myForm.Name.value !== "" && document.myForm.Email.value !== "" ) {
           sentMessage.style.display = "block";
           formContact.style.display = "none";
         }
         return( true );
})
}
document.getElementById("search-click").addEventListener("click",function(e){
  e.preventDefault();
  let searchVisibility=document.querySelector(".search").style.visibility;
  let searchOpacity=document.querySelector(".search").style.opacity;
 if(searchVisibility="hidden" && searchOpacity==0){
  document.querySelector(".search").style.visibility="visible";
  document.querySelector(".search").style.opacity="1";
 }else if(searchVisibility="visible" && searchOpacity==1){
  document.querySelector(".search").style.visibility="hidden";
  document.querySelector(".search").style.opacity="0";
 }

})
document.querySelector(".search-box").addEventListener("click",function(e){
  e.preventDefault();
  let searchVisibility=document.querySelector(".search").style.visibility;
  let searchOpacity=document.querySelector(".search").style.opacity;
 if(searchVisibility="hidden" && searchOpacity==0){
  document.querySelector(".search").style.visibility="visible";
  document.querySelector(".search").style.opacity="1";
 }else if(searchVisibility="visible" && searchOpacity==1){
  document.querySelector(".search").style.visibility="hidden";
  document.querySelector(".search").style.opacity="0";
 }
})
// jquery
$(function () {
  // elevator
  $(".elevator").click(function () {
    $("body , html").animate({ scrollTop: 0 }, 1000);
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      $(".elevator").fadeIn();
    } else {
      $(".elevator").fadeOut();
    }
  });
  // changing body color for burger menu
  $('.hamburger').on('click', function() {
    $(".opened-menu").css("display","block");
})

// search 
$(".search input").keyup(function(e){
  localStorage.setItem("inputVal",$(".search input").val());
  if(e.which == 13){
    window.open("search.html");
    $(".search input").val("");
    $(".search-box input").val("");}
})
$(".click").click(function(){
  window.open("search.html");
})
    var url = "search.html";
  if ("url:contains('search.html')") {
    var inputSearch=localStorage.getItem("inputVal");
    $(".search2 input").val(inputSearch);
    $(".search-result h5").html(localStorage.getItem("inputVal"));
  }

  // burger menu
  let windowSize = $(window).width();
  if( windowSize<=990){
    $( ".cross" ).hide();
    $(".hamburger").show();
    $( ".hamburger" ).click(function() {
    $( ".menu" ).css("right","0");
      $(".navigation").css("right","0");
      $( ".hamburger" ).hide();
      $( ".cross" ).show();
    });
    $( ".cross" ).click(function() {
      $( ".menu" ).css("right","-100%");
      $(".navigation").css("right","-100%");
    $( ".cross" ).hide();
    $( ".hamburger" ).show();
    $(".opened-menu").css("display","none");
    });
  }else if( windowSize>=990){
    $( ".cross" ).hide();
    $( ".hamburger" ).hide();
  }
  window.addEventListener("click",function(e){
    if(!document.getElementById("search-click").contains(e.target)&&
    !document.getElementById("searchbox").contains(e.target)&&
    !document.querySelector(".search-box").contains(e.target)){
      $(".search").css("visibility","hidden");
    }
  })
  // for closing menu and body changes to default color
  $('.opened-menu').on('click', function() {
    $(".opened-menu").css("display","none");
    $( ".menu" ).css("right","-100%");
    $(".navigation").css("right","-100%");
    $( ".cross" ).hide();
    $( ".hamburger" ).show();
})
});