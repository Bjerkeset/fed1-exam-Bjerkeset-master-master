import { toggleHamburgerMenu } from "./assets/navbar";

toggleHamburgerMenu();

const listContainer = document.querySelector("#js-list-container");

function generateCardHTML(post) {
  const { name, author, description, readtime } = post.attributes;

  return `
    <div class="blog__card">
      <div class="card__item card__item--readtime">
        <p>Read time: ${readtime} min</p>
      </div>
      <div class="card__item card__item--title">
        <h4>${name}</h4>
      </div>
      <div class="card__item card__item--description">
        <p>${description}</p>
      </div>
      <div class="card__item card__item--author">
        <p>By: ${author}</p>
      </div>
      <div class="card__item card__item--btn">
        <a> READ </a>
      </div>
    </div>
  `;
}

function generateShowBlogsButtonHTML() {
  return `
    <div class="show-blogs__btn">
      <a href=""><button class="button button--view-all-posts">View All Posts</button></a>
    </div>
  `;
}

async function fetchBlogPosts() {
  try {
    const response = await fetch(
      "https://strapi-gwbt8.ondigitalocean.app/api/blog-posts-homepages"
    );

    if (!response.ok) {
      throw new Error(`ERROR: ${response.status}`);
    }

    const responseData = await response.json();
    const data = responseData.data;
    const container = listContainer;

    // Create a card container
    const cardContainer = document.createElement("div");
    cardContainer.className = "card__container";
    container.appendChild(cardContainer);

    for (let i = 0; i < data.length; i++) {
      const post = data[i];
      const cardHTML = generateCardHTML(post);

      // Create a blog card and append it to the card container
      const blogCardWrapper = document.createElement("div");
      blogCardWrapper.className = "blog__card";
      blogCardWrapper.innerHTML = cardHTML;
      cardContainer.appendChild(blogCardWrapper);
    }

    const showBlogsButtonHTML = generateShowBlogsButtonHTML();
    const showBlogsButtonWrapper = document.createElement("div");
    showBlogsButtonWrapper.className = "show-blogs__btn";
    showBlogsButtonWrapper.innerHTML = showBlogsButtonHTML;
    container.appendChild(showBlogsButtonWrapper);
    applyMouseEffect();
  } catch (error) {
    console.error("Error fetching blog posts:", error);
  }
}

fetchBlogPosts();

// Intersection observer
const observer = new IntersectionObserver((entries) => {
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    const card = entry.target;

    if (entry.isIntersecting) {
      card.classList.add("is-visible");
    } else {
      card.classList.remove("is-visible");
    }
  }
});

const cards = document.querySelectorAll(".services__card");
for (let i = 0; i < cards.length; i++) {
  observer.observe(cards[i]);
}

// Mouse effect
const handleOnMouseMove = (e) => {
  const { currentTarget: target } = e;

  const rect = target.getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top;

  target.style.setProperty("--mouse-x", `${x}px`);
  target.style.setProperty("--mouse-y", `${y}px`);
};

for (const card of document.querySelectorAll(".blog__card")) {
  card.onmousemove = (e) => handleOnMouseMove(e);
}

// Mouse effect logic
function applyMouseEffect() {
  const handleOnMouseMove = (e) => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };
  for (const card of document.querySelectorAll(".blog__card")) {
    card.onmousemove = (e) => handleOnMouseMove(e);
  }
}

/*
============================================
Constants
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L66
============================================
*/

// TODO: Get DOM elements from the DOM

/*
============================================
DOM manipulation
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L89
============================================
*/

// TODO: Fetch and Render the list to the DOM

// TODO: Create event listeners for the filters and the search

/**
 * TODO: Create an event listener to sort the list.
 * @example https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/search-form.html#L91
 */

/*
============================================
Data fectching
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L104
============================================
*/

// TODO: Fetch an array of objects from the API

/*
============================================
Helper functions
https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L154
============================================
*/

/**
 * TODO: Create a function to filter the list of item.
 * @example https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/search-form.html#L135
 * @param {item} item The object with properties from the fetched JSON data.
 * @param {searchTerm} searchTerm The string used to check if the object title contains it.
 */

/**
 * TODO: Create a function to create a DOM element.
 * @example https://github.com/S3ak/fed-javascript1-api-calls/blob/main/src/js/detail.js#L36
 * @param {item} item The object with properties from the fetched JSON data.
 */
