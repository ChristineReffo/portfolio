


// TODO:
// - Fade out scroll down arrow when scrolling
// - Have navbar hidden at first, show slowly or on scrolling
// - Use typewriter animation for title --> how to get it into three lines
// - resize portfolio images


// Event listener to animate portfolio_wrap
let projectCards = document.getElementById('gallery');

projectCards.addEventListener('mouseover', function(event) {
  event.target.classList.add('text_side')
})
