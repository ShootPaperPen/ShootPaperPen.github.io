console.log();

const form = document.getElementById("filters");

const items = document.getElementsByClassName("item");

form.filter.addEventListener("change", () => {
  changeVisibility("filter", form.filter.value);
});

form.female.addEventListener("change", () => {
  changeVisibility("female", form.female.checked);
});

form.male.addEventListener("change", () => {
  changeVisibility("male", form.male.checked);
});

function changeVisibility(from, value) {
  switch (from) {
    case "filter":
      console.log(`Male == ${from}? Value: ${value}`);
      break;
    case "male":
      console.log(`Male == ${from}? Value: ${value}`);
      break;
    case "female":
      if (value)
        console.log(
          "Enter function to search all tags of items and apply filter"
        );
      console.log(`Female == ${from}? Value: ${value}`);
      break;
  }
}
console.log("hi");
