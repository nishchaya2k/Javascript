/* 
Intersection Observer: its a tool which lets you track visibility of elements relative to the viewport. This is perfect for scroll animations, lazy loading images, infinite scroll, and much more. Also, Intersection Observer is best for Performance-optimized DOM watching 

IntersectionObserver is a browser API that tells you when an element enters or leaves another element's visible area (usually the viewport).

IntersectionObserver observes whether an element is visible inside the viewport

- Syntax

const observer = new IntersectionObserver(callback, options);
observer.observe(targetElement);

1. callback: Fires when visibility changes.
2. options: Fine-tunes behavior (e.g. threshold, rootMargin, root).



*/


const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        // Toggle 'show' class if element is visible in viewport
        entry.target.classList.toggle("show", entry.isIntersecting);

        // Optional: Stop observing after first intersection
        // if (entry.isIntersecting) observer.unobserve(entry.target);
    });
}, {
    // threshold: 0      // Triggers when any part is visible
    // threshold: 1      // Triggers only when fully visible
    // threshold: 0.5    // Triggers when 50% visible
    rootMargin: "+100px" // Triggers before entering viewport (preload feel)
});

cards.forEach(card => observer.observe(card));


