document.querySelector("h1").innerHTML = `
<img class="normal-size" src="http://www.patlabelsonline.co.uk/blog/wp-content/uploads/2015/08/shutterstock_96185378.jpg">
`;

const imageElement = document.querySelector("img");

imageElement.addEventListener("mouseover", increaseSize);

function increaseSize() {
  imageElement.classList = "large-size";
}

imageElement.addEventListener("mouseout", originalSize);

function originalSize() {
  imageElement.classList = "normal-size";
}
