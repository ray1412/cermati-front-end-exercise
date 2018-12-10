(function() {
  document.getElementById("content").innerHTML = exampleText;
  window.onscroll = function() {
    const scrollPos = window.pageYOffset;
    const docHeight = document.body.offsetHeight;
    const defaultTimerInMinutes = 2;
    if(scrollPos >= docHeight/2){
      const prevDateTime = Date.parse(localStorage.getItem('savedDateTime'));
      const currentDateTime = new Date();
      const difference = currentDateTime - prevDateTime;
      // difference is milisecs --> divide by 1000 --> secs --> divide by 60 --> minutes
      const minutesDifference = Math.floor(difference/1000/60);
      if(minutesDifference >= defaultTimerInMinutes || isNaN(minutesDifference)) document.getElementById("slider-ads").classList.remove('hiddenSlider');
    } else {
      document.getElementById("slider-ads").classList.add('hiddenSlider');
    }
  }
})();

function closeSticky(e, target){
  switch(target){
    case "navbar":
      document.getElementById(target).classList.add('hiddenNavbar');
      break;
    case "slider-ads": {
      var currentDateTime = new Date();
      localStorage.setItem('savedDateTime', currentDateTime);
      document.getElementById(target).classList.add('hiddenSlider');
    }
      break;
    default:
      break;
  }
}
