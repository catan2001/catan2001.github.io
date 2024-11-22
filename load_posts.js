document.addEventListener("DOMContentLoaded", () => {
    const postsContainer = document.getElementById("recent-posts");

    // Fetch the posts JSON
    fetch("posts.json")
        .then(response => response.json())
        .then(posts => {
            // Select the three most recent posts
            const recentPosts = posts.slice(0, 3);

            // Generate HTML for each post
            recentPosts.forEach(post => {
                const postHTML = `
                    <article class="post-preview-index">
                        <h2>${post.title}</h2>
                        <p class="excerpt">${post.excerpt}</p>
                        <a href="${post.url}" class="read-more">Read More</a>
                    </article>
                `;
                postsContainer.innerHTML += postHTML;
            });
        })
        .catch(error => {
            console.error("Error fetching posts:", error);
        });
});