/*
- Mutuation Observer: Dealing with DOM mutuation in Vanilla js is difficult but using Mutuation Observer can make the job easy


- Basic Syntax
const observer = new MutationObserver(callback);
observer.observe(targetNode, config);

1. callback: Fires whenever a mutation occurs.
2. targetNode: The DOM node you want to observe.
3. config: What kind of mutations to observe (e.g., children, attributes, text, etc.).


- entries:- The callback receives an array of mutation records, each describing a change (added nodes, removed nodes, old value, etc.).


*/

const parent = document.querySelector('.parent')

const mutuationObserver = new MutationObserver(entries => {
    console.log("entries", entries)
})



//1. we need to tell MutationObserver what to observer, by calling observe function
mutuationObserver.observe(parent, { childList: true })

//2. mutuationObserver.disconnect() -> stop observing changes
parent.children[0].remove()


//3. Track attribute changes
mutuationObserver.observe(parent, {
    attributes: true,
    attributeOldValue: true
})

parent.id = 'newId'


//4. Track text content changes
mutuationObserver.observe(parent.children[0], {
    characterData: true
})

// -> now if we start typing in div, nothing happens, why?


//4.1 for observing changes in text, text is actually node, so techincally node(array) is a child of current considering div
mutuationObserver.observe(parent.children[0].childNodes[0], {
    characterData: true,
    characterDataOldValue: true
})

//5. Usage of subtree -> Observe everything deeply, to watch changes in all descendants:
mutuationObserver.observe(parent, {
    subtree: true,
    characterData: true,
    characterDataOldValue: true
})




//how can we visualize dom structure ? 