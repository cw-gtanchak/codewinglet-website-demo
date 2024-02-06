$(window).load(function () {
  // Animate loader off screen
  $(".se-pre-con").fadeOut("slow");
});

//

// tech logo

var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logo-slider").appendChild(copy);

// Accordion _ Technology

$(function () {
  window.setTimeout(function () {
    $(".accord").css("opacity", "1");
  }, 100);
  $(".accord-item").addClass("accord-default");
  $(".accord-trigger").on("click", function (e) {
    e.preventDefault();

    var $clickedItem = $(this);
    var $allItems = $(".accord > .accord-item");

    if (!$clickedItem.hasClass("accord-expand")) {
      $allItems.removeClass("accord-expand");
      $clickedItem.addClass("accord-expand");
    } else {
      $clickedItem.removeClass("accord-expand");
      var $nextItem = $clickedItem.next(".accord-item");

      if ($nextItem.length > 0) {
        $nextItem.addClass("accord-expand");
      }
    }
  });
});

// Define the media query
const mediaQuery = window.matchMedia("(max-width: 600px)");

// Check if the media query matches initially
if (mediaQuery.matches) {
  // The viewport is 600 pixels wide or less
  console.log("Viewport is 600 pixels wide or less initially");
} else {
  // The viewport is wider than 600 pixels initially
  console.log("Viewport is wider than 600 pixels initially");
}

// Add a listener for changes to the media query
mediaQuery.addListener(handleMediaQueryChange);

// Function to handle changes to the media query
function handleMediaQueryChange(event) {
  if (event.matches) {
    // The viewport is 600 pixels wide or less after the change
    console.log("Viewport is 600 pixels wide or less after the change");
  } else {
    // The viewport is wider than 600 pixels after the change
    console.log("Viewport is wider than 600 pixels after the change");
  }
}

//

gsap.registerPlugin(ScrollTrigger);

const splitTypes = document.querySelectorAll(".reveal-type");

splitTypes.forEach((char, i) => {
  const bg = char.dataset.bgColor;
  const fg = char.dataset.fgColor;

  const text = new SplitType(char, { types: "chars" });

  gsap.fromTo(
    text.chars,
    {
      color: bg,
    },
    {
      color: fg,
      duration: 0.3,
      stagger: 0.02,
      scrollTrigger: {
        trigger: char,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        markers: false,
        toggleActions: "play play reverse reverse",
      },
    }
  );
});

const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
