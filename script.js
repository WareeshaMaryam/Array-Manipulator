let myArray = [];

function displayArray() {
    const arrayDisplay = document.getElementById("array-display");
    arrayDisplay.innerHTML = "";
    for (let i = 0; i < myArray.length; i++) {
      const element = document.createElement("div");
      element.className = "array-item";
      element.textContent = myArray[i];
      arrayDisplay.appendChild(element);
    }
  }

function addElement() {
    const inputArray = document.getElementById("input-array");
    if (inputArray) {
        myArray.push(inputArray.value)
        displayArray()
        document.getElementById("input-array").value = "";
    }
}

function push() {
    myArray.push(prompt("Write element to push in array.."));
    displayArray();
    document.getElementById("result").textContent =
      "Push() array method add element in last.";
  }
  function pop() {
    myArray.pop();
    displayArray();
    document.getElementById("result").textContent =
      "Pop() array method remove element in last.";
  }
  function shift() {
    myArray.shift();
    displayArray();
    document.getElementById("result").textContent =
      "shift() array method remove element in start.";
  }
  function unshift() {
    myArray.unshift(prompt("Write element to unshift in array.."));
    displayArray();
    document.getElementById("result").textContent =
      "Unshift() array method add element in start.";
  }
  function slice() {
    const start = parseInt(prompt("Enter start index for slice:"));
    const end = parseInt(prompt("Enter end index for slice:"));
    const slicedArray = myArray.slice(start, end);
    alert("Sliced Array: " + slicedArray);
  }
  
  function splice() {
    const index = parseInt(prompt("Enter index to splice:"));
    const count = parseInt(prompt("Enter number of elements to remove:"));
    const removedItems = myArray.splice(index, count);
    alert("Removed items: " + removedItems);
    displayArray();
  }