// image slider

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide-item");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

// progress bar

// var i = 0;
// document.addEventListener ('scroll', function move() {
//     if (i == 0) {
//     i = 1;
//     var elem = document.getElementById("myBar");
//     var width = 1;
//     var id = setInterval(frame, 10);
//     function frame() {
//       if (width >= 100) {
//         clearInterval(id);
//         i = 0;
//       } else {
//         width++;
//         elem.style.width = width + "%";
//       }
//     }
//   }
// });

const skillsSection = document.querySelector(".my-progress-charts");
const progressBars = document.querySelectorAll(".progress-percent");
function showProgress() {
	progressBars.forEach(progressBar => {
		const value = progressBar.dataset.progress;
		progressBar.style.opacity = 1;
		progressBar.style.width = `${value}%`;
	});
}
function hideProgress() {
	progressBars.forEach(p => {
		p.style.opacity = 0;
		p.style.width = 0;
	});
}
window.addEventListener("scroll", () => {
	const sectionPos = skillsSection.getBoundingClientRect().top;
	const screenPos = window.innerHeight / 2;
	if (sectionPos < screenPos) {
		showProgress();
	} else {
		hideProgress();
	}
})


// skills section 

// var acc = document.getElementsByClassName("front-service");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("mouseenter", function() {
//     /* Toggle between adding and removing the "active" class,
//     to highlight the button that controls the panel */
//     this.classList.toggle("active");

//     /* Toggle between hiding and showing the active panel */
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//       document.getElementsByClassName(front-service).style.display="none";
//     }
//   });
// }



// feedback slider

let feedbackSlideIndex = 1;
mySlides(feedbackSlideIndex);

function plusSlides(n) {
	mySlides(feedbackSlideIndex += n);
}
function currentSlider(n) {
	mySlides(feedbackSlideIndex = n);
}
function mySlides(n) {
	let i;
	let x = document.getElementsByClassName("feedback-slider");
	let y = document.getElementsByClassName("feedback-dots");
	if (n > x.length) { feedbackSlideIndex = 1 }
	if (n < 1) { feedbackSlideIndex = x.length }
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}

	x[feedbackSlideIndex - 1].style.display = "flex";
	y[feedbackSlideIndex - 1].className += " active";
}


