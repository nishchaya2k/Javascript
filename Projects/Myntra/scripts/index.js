let bagItems; //for keeping selected items which added to  cart or Bag
onLoad();     //to run functions inside it in starting of website running  


function onLoad() {

    let bagItemsStr = localStorage.getItem('bagItems');  //getting back bagItems if there
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];

    displayBagIcon();       //calling in starting to remove 0 count on bagIcon, if bag is empty
    displayItemsOnHomePage();   //to show items on screen
}

function addToBag(itemId) {
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems)); //to maintain bag count, stored in form of strings only
    displayBagIcon();
}

function displayBagIcon() {
    let bagItemCountElement = document.querySelector('.bag-item-count');

    if (bagItems.length > 0) {
        bagItemCountElement.style.visibility = 'visible';   //make it visible when something is added
        bagItemCountElement.innerText = bagItems.length
    }

    else
        bagItemCountElement.style.visibility = 'hidden';   //we dont want bagIcon shows 0 when nothing is added
}

function displayItemsOnHomePage() {
    let itemsContainerElement = document.querySelector('.items-container');

    if (!itemsContainerElement) {
        return;
    }
    //object for items detail, it will contain all the data which we have stored in items.js

    let innerHTML = '';

    items.forEach(item => {
        innerHTML += `
     <div class="item-container">
      <img class="item-image" src="${item.image}" alt="item image">
      <div class="rating">
          ${item.rating.stars} ⭐ | ${item.rating.count}
      </div>
      <div class="company-name">${item.company}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price">
          <span class="current-price">Rs ${item.current_price}</span>
          <span class="original-price">Rs ${item.original_price}</span>
          <span class="discount">(${item.discount_percentage}% OFF)</span>
      </div>
      <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
    </div>`
    })

    itemsContainerElement.innerHTML = innerHTML;   //putting the data into container to show onscreen
}

