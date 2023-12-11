

const allData = () => {
  fetch("https://openapi.programming-hero.com/api/videos/category/1000")
      .then((res) => res.json())
      .then((data) => displayData(data))
      .catch((err) => console.log(err));
};
 
const allMusic = () => {
  fetch("https://openapi.programming-hero.com/api/videos/category/1001")
      .then((res) => res.json())
      .then((data) => displayData(data))
      .catch((err) => console.log(err));
};
 
const allComedy = () => {
  fetch("https://openapi.programming-hero.com/api/videos/category/1003")
      .then((res) => res.json())
      .then((data) => displayData(data))
      .catch((err) => console.log(err));
};
 
const allDrawing = () => {
  fetch("https://openapi.programming-hero.com/api/videos/category/1005")
      .then((res) => res.json())
      .then((data) => displayData(data))
      .catch((err) => console.log(err));
};
 
const displayData = (data) => {
  const videoContainer = document.getElementById("video-section");
  videoContainer.innerHTML = " ";
 
  if (!data.data || data.data.length === 0) {
      // Display an error message when data is not available
      const errorMessage = document.createElement("p");
      errorMessage.textContent = "Sorry, no data available.";
      errorMessage.classList.add("error-message");
      videoContainer.appendChild(errorMessage);
      return;
  }
 
  data.data.forEach((videos) => {
      const card = document.createElement("div");
      card.classList.add("vcards");
 
      card.innerHTML = `
          <div class="card col">
              <img class="v-img" src="${videos?.thumbnail}" alt="thumbpic"/>
              <div class="card-body">
              </div>
          </div>
          <h5>${videos?.title}</h5>
          <h6>${videos?.authors[0].profile_name}</h6>
          <p>${videos?.others.views}</p>
      `;
 
      videoContainer.appendChild(card);
  });
};
 
 
const sortByViews = () => {
  const videoContainer = document.getElementById("video-section");
  const videoCards = Array.from(videoContainer.children);
 
 
  videoCards.sort((a, b) => {
      const viewsA = parseInt(a.querySelector('p').textContent, 10);
      const viewsB = parseInt(b.querySelector('p').textContent, 10);
      return viewsB - viewsA;
  });
 
 
  videoContainer.innerHTML = '';
  videoCards.forEach(card => videoContainer.appendChild(card));
};
 
 
document.getElementById("search-btn").addEventListener("click", sortByViews);
 
 
allData();