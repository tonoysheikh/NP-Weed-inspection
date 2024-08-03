const sliderEl = document.querySelector("#range2")
const sliderValue = document.querySelector(".value2")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value; 
  sliderValue.textContent = tempSliderValue;
  
  const progress = (tempSliderValue / sliderEl.max) * 100;
 
  sliderEl.style.background = `linear-gradient(to right, #16905B ${progress}%, #0D3A2A ${progress}%)`;
})

const sliderEl3 = document.querySelector("#range3")
const sliderValue3 = document.querySelector(".value3")

sliderEl3.addEventListener("input", (event) => {
  const tempSliderValue3 = event.target.value; 
  sliderValue3.textContent = tempSliderValue3;
  
  const progress3 = (tempSliderValue3 / sliderEl3.max) * 100;
 
  sliderEl3.style.background = `linear-gradient(to right, #3BD1D5 ${progress3}%, #0A3373 ${progress3}%)`;
})

const sliderEl4 = document.querySelector("#range4")
const sliderValue4 = document.querySelector(".value4")

sliderEl4.addEventListener("input", (event) => {
  const tempSliderValue4 = event.target.value; 
  sliderValue4.textContent = tempSliderValue4;
  
  const progress4 = (tempSliderValue4 / sliderEl4.max) * 100;
 
  sliderEl4.style.background = `linear-gradient(to right, #40D47E ${progress4}%, #555033 ${progress4}%)`;
})

