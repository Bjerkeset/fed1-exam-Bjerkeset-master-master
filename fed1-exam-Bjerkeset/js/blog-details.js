import sanityClient from "@sanity/client";
const loadingIndicator = document.getElementById("js-loading-indicator");
const errorContainer = document.getElementById("js-error-container");
const listContainer = document.getElementById("js-list-container");
const urlParams = new URLSearchParams(window.location.search);
const postSlug = urlParams.get("slug");

export function generateCardHTML(post) {
  const { title, author, date, excerpt, body } = post;

  // Transform the body into a string
  const bodyContent = body
    .map((block) => block.children.map((child) => child.text).join("\n"))
    .join("\n");

  return `
    <div class="blog__details " >
      <div class="card__details card__details--title">
        <h4>${title}</h4>
      </div>
      <div class="card__details card__details--author">
        <p>By: ${author}</p>
      </div>
      <div class="card__details card__details--date">
        <p>Date: ${new Date(date).toLocaleDateString()}</p>
      </div>
      <div class="card__details card__details--excerpt">
        <p>${excerpt}</p>
      </div>
      <div class="card__details card__details--body">
        <p>${bodyContent}</p>
      </div>
    </div>
  `;
}

async function fetchBlogPost() {
  try {
    const response = await fetch(
      `https://npd35udx.api.sanity.io/v1/data/query/production?query=*[slug.current == "${postSlug}"]`
    );

    if (!response.ok) {
      throw new Error(`ERROR: ${response.status}`);
    }

    const data = await response.json();
    const post = data.result[0];

    const blogHTML = generateCardHTML(post);
    listContainer.innerHTML = blogHTML;

    console.log("post", post);
  } catch (error) {
    console.error("Error fetching blog post:", error);
    errorContainer.style.display = "block";
    errorContainer.innerHTML = error;
  } finally {
    loadingIndicator.style.display = "none";
  }
}

fetchBlogPost();

// const client = sanityClient({
//   projectId: "npd35udx",
//   dataset: "production",
//   token:
//     "skeEGzdjNcjpyuisOLqITcpYRV1OAxIzoIClVGsAKI1pgOhFPvsbwkMM4e8SKMhFrBo8Sni40WVfL7l2SYKpsPV8Y3pUBkuFTE6gQywUR6w9YM4YYlrMcYxVsLbDH71Zec18vS7IbcDdPmteWDt7ceTXuMvF7D1GWpzz5QFgWOV2zHTE8pCs",
//   useCdn: false, // `false` if you want to ensure fresh data
// });

// document
//   .getElementById("comment-form")
//   .addEventListener("submit", async function (event) {
//     event.preventDefault();

//     const name = document.getElementById("name").value;
//     const comment = document.getElementById("comment").value;

//     const result = await client.create({
//       _type: "comment", // assuming 'comment' is a type in your schema
//       name: name,
//       comment: comment,
//     });

//     console.log("Comment submitted", result);
//   });
