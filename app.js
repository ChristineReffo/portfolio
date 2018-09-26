
var i = 0;
var txt = 'Lorem ipsum dummy text blabla.';

var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("about_text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

document.getElementById("animation_btn").addEventListener("click", typeWriter())


$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});



// TODO:
//
// - Fade out scroll down arrow when scrolling
// - Have navbar hidden at first, show slowly or on scrolling
// - Use typewriter animation for title
// - resize portfolio images
//- in page anchors for url references
