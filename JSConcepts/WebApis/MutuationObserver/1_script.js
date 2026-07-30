// Element whose text changes we want to observe
const parent = document.getElementById("parent");

// Create a MutationObserver
const observer = new MutationObserver((mutations) => {
    // Go through each mutation one by one, multiple changes can happen together
    mutations.forEach((mutation, index) => {

        alert(
            `Mutation ${index + 1}\n\n` +
            `Type: ${mutation.type}`
        );
    });
});

// Start observing
observer.observe(parent, {
    characterData: true,
    subtree: true
});