

//Code adapted from W3 Schools, changed from sliding to fade animation: https://www.w3schools.com/howto/howto_js_navbar_slide.asp

window.onscroll = function () {
  scrollFunction();
  arrowFade();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.opacity = "1";
  } else {
    document.getElementById("navbar").style.opacity = "0";
  }
};

function arrowFade() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("arrow").style.opacity = "0";
  }
   else {
    document.getElementById("arrow").style.opacity = "1";
  }
}



// TODO:
// - Fade out scroll down arrow when scrolling
// - Have navbar hidden at first, show slowly or on scrolling
// - Use typewriter animation for title --> how to get it into three lines
// - resize portfolio images


// Event listener to animate portfolio_wrap
// let projectCards = document.getElementById('gallery');
//
// projectCards.addEventListener('mouseover', function(event) {
//   event.target.classList.add('text_side')
// });
