// Stores Data
let data = []; // None Filtered Data
let displayData = []; // Filtered Data According to Select

// For Modals
const modalItemName = document.getElementById("modalItemName");
const modalItemPrice = document.getElementById("modalItemPrice");
const modalItemDesc = document.getElementById("modalItemDesc");
const modalImage = document.getElementById("modalImage");

// Form for filtering
const form = document.getElementById("filters");
const filter = form.filter;
const maleCheckbox = form.Male;
const femaleCheckbox = form.Female;

// Item Containers
const itemContainers = document.getElementById("item-container");

// For Promo Images (Soon to be Carousel)
const promoImg = document.getElementById("frame").parentElement.children[1];
const promoImgFileName = "MIWACLE-PROMO.png"; // ENTER FILENAME FOR PROMO IMG
promoImg.setAttribute("src", "images/" + promoImgFileName);

// For Order Button
const orderButton = document.getElementById("order");
const orderURL = "https://www.youtube.com"; // ENTER ORDER URL
orderButton.setAttribute("href", orderURL);

// Use to hold objects
const items = itemContainers.children;

form.filter.addEventListener("change", setFilters);

form.Female.addEventListener("change", setFilters);

form.Male.addEventListener("change", setFilters);

// function changeVisibility() {
//   for (var item of items) {
//     item.style.display = "none";

//     if (item.getAttribute("tags").includes("Male") && form.Male.checked) {
//       item.style.display = "flex";
//     }
//     if (item.getAttribute("tags").includes("Female") && form.Female.checked) {
//       item.style.display = "flex";
//     }
//   }
// }

function optionFilter() {
  displayData = data.filter(function (data) {
    console.log("Filtering: " + filter.value);
    if (filter.value == "All") return data;
    if (data.tags.includes("Anime") && filter.value == "Anime") return data;
    if (data.tags.includes("Games") && filter.value == "Games") return data;
    if (data.tags.includes("Misc") && filter.value == "Misc") return data;
  });
}

function checkboxFiltering() {
  for (const item of data) {
    item.element.style.display = "none";

    if (
      maleCheckbox.checked &&
      displayData.includes(item) &&
      item.tags.includes("Male")
    )
      item.element.style.display = "block";
    if (
      femaleCheckbox.checked &&
      displayData.includes(item) &&
      item.tags.includes("Female")
    )
      item.element.style.display = "block";
  }
}

function setFilters() {
  optionFilter();
  checkboxFiltering();
}

function createNewItem(itemName, price, tags, desc) {
  console.log(`Item name:${itemName}, Price:${price}, Tags:${tags}`);

  // create element div for all other elements
  const itemContainer = document.createElement("div");
  const itemContainerStyle = itemContainer.classList;
  itemContainerStyle.add("item");
  itemContainerStyle.add("flex-column");
  itemContainerStyle.add("align-items-center");
  itemContainerStyle.add("text-center");
  itemContainerStyle.add("m-2");
  itemContainerStyle.add("flex-wrap");
  itemContainer.setAttribute("tags", tags);
  itemContainer.setAttribute("data-bs-toggle", "modal");
  itemContainer.setAttribute("data-bs-target", "#itemModal");

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

  // Create Object with Item Data
  const item = {
    name: itemName,
    price: price,
    tags: tags,
    element: itemContainer,
  };

  // EventListener to Change Name, Price, Description, and Image in Modal
  itemContainer.addEventListener("click", () => {
    modalImage.setAttribute("src", "images/item-image/" + itemName + ".jpg");
    modalItemName.innerText = itemName;
    modalItemPrice.innerText = price;
    modalItemDesc.innerText = desc;
  });

  // Push/stores object to Data
  data.push(item);

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

createNewItem(
  "2B - Nier Automata",
  645000.9,
  "Female, Games",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in orci at elit ultricies hendrerit. Donec pulvinar ex justo, ac sagittis massa fringilla ut. Morbi accumsan consectetur vehicula. Proin vitae ligula neque. Aliquam laoreet, augue non ornare lacinia, dolor metus rutrum mi, sed posuere ex leo sed lectus. Phasellus fermentum, libero a elementum pharetra, velit lorem porta justo, eget malesuada urna nibh nec ipsum. Morbi malesuada risus turpis, ut volutpat turpis efficitur ut. Maecenas elit diam, pellentesque vel porta non, tincidunt quis sapien. Integer ac ornare tortor, et tempor turpis. Suspendisse posuere lobortis velit quis rhoncus. Donec ut lacinia quam. Phasellus sit amet lorem ligula. Phasellus arcu nulla, condimentum vel commodo sit amet, convallis tincidunt enim. Quisque vulputate magna sem, quis tempus odio aliquam eu. Etiam iaculis lacinia nunc in tincidunt."
);
createNewItem("Aura - Freiren Beyond Journey's End", 645000.9, "Female, Anime");
createNewItem("Autumn Fox", 645000.9, "Female, Misc");
createNewItem("Battle Bunny Miss Fortune - LoL", 645000.9, "Female, Games");
createNewItem("Black Lobelia - My Dress-Up Darling", 645000.9, "Female, Anime");
createNewItem("Bomb Devil - Chainsaw Man", 645000.9, "Female, Anime");
createNewItem("CC - Code Geass", 645000.9, "Female, Anime");
createNewItem("Cleo de Nile - Monster High", 645000.9, "Female");
createNewItem("Diaochan - Honor of Kings", 645000.9, "Female, Games");
createNewItem("Dolia - Honor of Kings", 645000.9, "Female, Games");
createNewItem("Fern - Freiren Beyond Journey's End", 645000.9, "Female, Anime");
createNewItem(
  "Freiren - Freiren Beyond Journey's End",
  645000.9,
  "Female, Anime"
);
createNewItem("Gwen - LoL", 645000.9, "Female, Games");
createNewItem("Howl - Howl's Moving Castle", 645000.9, "Male, Anime");
createNewItem("Howl(Blonde) - Howl's Moving Castle", 645000.9, "Male, Anime");
createNewItem("Jinx - Arcane", 645000.9, "Female, Games");
createNewItem("Kafka - HSR", 1000.4, "Female, Games");
createNewItem("Kafka(Dress ver.) - HSR", 645000.9, "Female, Games");
createNewItem("Lute - Hazbin Hotel", 645000.9, "Female, Misc");
createNewItem("Mai Sakurajima - Bunny Girl Senpai", 645000.9, "Female");
createNewItem("Maomao - Apothecary Diaries", 645000.9, "Female, Anime");
createNewItem("Nanami Kento - Jujutsu Kaisen", 645000.9, "Male, Anime");
createNewItem("Nazuna Nanakusa - Call of the Night", 645000.9, "Female, Anime");
createNewItem(
  "Raphtalia - Rising of the Shield Hero",
  645000.9,
  "Female, Anime"
);
createNewItem("Red Blood Cell - Cells at Work", 645000.9, "Female, Anime");
createNewItem("Reina - Tekken 8", 645000.9, "Female, Games");
createNewItem("Reze - Chainsaw Man", 645000.9, "Female, Anime");
createNewItem("Rizu Kyun - My Dress-Up Darling", 645000.9, "Female, Anime");
createNewItem("Sage - Valorant", 645000.9, "Female, Games");
createNewItem("Seraphine - LoL", 645000.9, "Female, Games");
createNewItem("Spirit Blossom Ahri - Lol", 645000.9, "Female, Games");
createNewItem("Ubel - Freiren Beyond Journey's End", 645000.9, "Female, Anime");
createNewItem("Xayah - LoL", 645000.9, "Female, Games");
createNewItem("Yuta Okkotsu - Jujutsu Kaisen", 645000.9, "Male, Anime");
createNewItem("Zero Two - Darling in the Franxx", 23.3, "Female, Anime");
createNewItem("Zero Two(Maid) - Darling in the Franxx", 99.75, "Female, Anime");
