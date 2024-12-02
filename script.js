const form = document.getElementById("filters");
const itemContainers = document.getElementById("item-container");

const promoImg = document.getElementById("frame").parentElement.children[1];
const promoImgFileName = "MIWACLE-PROMO.png"; // ENTER FILENAME FOR PROMO IMG
promoImg.setAttribute("src", "images/" + promoImgFileName);

const orderButton = document.getElementById("order");
const orderURL = "https://www.youtube.com"; // ENTER ORDER URL
orderButton.setAttribute("href", orderURL);

// Use to hold objects
const items = itemContainers.children;

form.filter.addEventListener("change", () => {
  changeVisibility();
});

form.Female.addEventListener("change", () => {
  changeVisibility();
});

form.Male.addEventListener("change", () => {
  changeVisibility();
});

function changeVisibility() {
  for (var item of items) {
    item.style.display = "none";
    if (item.getAttribute("tags").includes("Male") && form.Male.checked) {
      item.style.display = "flex";
    }
    if (item.getAttribute("tags").includes("Female") && form.Female.checked) {
      item.style.display = "flex";
    }
  }
}

function createNewItem(itemName, price, tags) {
  console.log(`Item name:${itemName}, Price:${price}, Tags:${tags}`);

  // create element div for all other elements
  const itemContainer = document.createElement("div");
  const itemContainerStyle = itemContainer.classList;
  itemContainerStyle.add("item");
  itemContainerStyle.add("flex-column");
  itemContainerStyle.add("text-center");
  itemContainerStyle.add("m-2");
  itemContainer.setAttribute("tags", tags);

  // create element div for holding both img
  const imgGrid = document.createElement("div");
  const imgGridStyle = imgGrid.classList;
  imgGridStyle.add("image-grid");

  // create element img for item image
  const imgItem = document.createElement("img");
  const imgItemStyle = imgItem.classList;
  imgItemStyle.add("product");
  imgItem.setAttribute("src", "images/item-image/" + itemName + ".jpg");

  // create element img for frame
  const imgFrame = document.createElement("img");
  const imgFrameClass = imgFrame.classList;
  imgFrameClass.add("frame");
  imgFrame.setAttribute("src", "images/MIWACLE-ITEM-CONTAINER.png");

  // create element span with price
  const priceSpan = document.createElement("span");
  const priceSpanClass = priceSpan.classList;
  priceSpanClass.add("text-color-yellow");
  priceSpan.innerText = "₱" + price;

  // appends elements required inside the item
  itemContainer.appendChild(imgGrid);
  imgGrid.appendChild(imgItem);
  imgGrid.appendChild(imgFrame);
  itemContainer.innerHTML += itemName + "<br />";
  itemContainer.appendChild(priceSpan);

  // appends item to item container
  itemContainers.appendChild(itemContainer);
}

/*
  CREATES ITEMS WITH THE FORMAT OF:
    - itemName = str
    - price = number
    - tags = strings separated with comma (ex. you want tags for male female cat dog then you write "Male, Female, Cat, Dog") well male and female lang yung coded :clown:
  TAKE NOTE:
    - itemName is the name of the image filename (ex. itemName = plushie; => plushie.png)
    - Ex. createNewItem("Miku Plushie", 200, "Female, Male");
*/

createNewItem("Zero Two", 23.3, "Female");
createNewItem("Zero Two - Maid", 99.75, "Female");
createNewItem("Kafka", 1000.4, "Female");
createNewItem("Sage", 645000.9, "Female");
