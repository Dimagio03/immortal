// path timeline
const ptl = gsap.timeline({ease: "none", duration: .5});
    
ptl.to("#path-1", { drawSVG: 0,
  onComplete: function () {
    $('.btn-lesson-1').addClass('active')
     ptl.to(window, {
      scrollTo: {y:"#path-1", },
    });
  }
});
ptl.from("#path-2", { drawSVG: 0,
  onComplete: function () {
    $('.btn-lesson-2').addClass('active')
    ptl.to(window, {
      scrollTo: {y:"#path-2", },
    });
  }
});
ptl.from("#path-3", { drawSVG: 0});
ptl.to(".ladder > rect",  0.5, {fill: "#FDA760"});
ptl.from("#path-4", { drawSVG: 0,
  onComplete: function () {
    $('.btn-lesson-3').addClass('active')
  }
});
ptl.from("#path-5", { drawSVG: 0});
ptl.to(".ladder-2 > rect",  0.5, {fill: "#FDA760"});
ptl.from("#path-6", { drawSVG: 0,
  onComplete: function () {
    $('.btn-lesson-4').addClass('active')
  }
});
ptl.from("#path-7", { drawSVG: 0,
  onComplete: function () {
    $('.btn-lesson-5').addClass('active')
  }
});
ptl.from("#path-8", { drawSVG: 0});
ptl.to(".ladder-3 > rect",  0.5, {fill: "#FDA760"});
ptl.from("#path-9", { drawSVG: 0,
  onComplete: function () {
    $('.btn-lesson-6').addClass('active')
  }
});
ptl.from("#path-10", { drawSVG: 0,
  onComplete: function () {
    $('.btn-lesson-7').addClass('active')
  }
});
ptl.from("#path-11", { drawSVG: 0});
ptl.to(".ladder-4 > rect",  0.5, {fill: "#FDA760"});
ptl.from("#path-12", { drawSVG: 0,
  onComplete: function () {
    $('.btn-lesson-8').addClass('active')
  }
});
ptl.from("#path-13", { drawSVG: 0,
  onComplete: function () {
    $('.btn-lesson-9').addClass('active')
  }
});
ptl.to("#path-14", { drawSVG: 0,
  onComplete: function () {
    $('.btn-lesson-10').addClass('active')
  }
});