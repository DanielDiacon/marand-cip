document.addEventListener('DOMContentLoaded', () => {
   const ulTag = document.querySelector('.gallery__wrapper');

   for (let i = 0; i < posts.length; i++) {
      const post = posts[i];
      let liTag = `
       <div class="gallery__item" data-name="${post.type}">
         <a href="./img/posters/${post.src}" data-lightbox="gallery">
            <img src="./img/posters/${post.src}" alt="${post.name}" class="gallery__img" />
         </a>
         <p class="gallery__name">${post.name}</p>
       </div>`;
      ulTag.insertAdjacentHTML('beforeend', liTag);
   }
});

// lets filter cards
const filterBtns = document.querySelectorAll('.gallery__btn');

const filterCardsFn = (e) => {
   const selectedCategory = e.target.getAttribute('data-name');
   const filterCards = document.querySelectorAll('.gallery__item');

   // Remove the 'active' class from the currently active button
   document.querySelector('.active').classList.remove('active');

   // Add the 'active' class to the clicked button
   e.target.classList.add('active');

   // Debugging: Log selected category

   // Filter cards based on the selected category
   filterCards.forEach((card) => {
      const cardCategory = card.getAttribute('data-name'); // Use 'data-name' attribute
      if (selectedCategory === 'all' || selectedCategory === cardCategory) {
         card.classList.remove('hide');
      } else {
         card.classList.add('hide');
      }
   });
};
filterBtns.forEach((btn) => btn.addEventListener('click', filterCardsFn));
