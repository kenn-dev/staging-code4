fetch('posts.json')
    .then(response => response.json())
    .then(posts => {
        const postList = document.getElementById('post-list');
        posts.forEach(post => {
            const postElement = document.createElement('article');
            postElement.innerHTML = `
                <h2><a href="post.html?id=${post.id}">${post.title}</a></h2>
                <p>${post.date} by ${post.author}</p>
                <p>${post.content.substring(0, 100)}...</p>
            `;
            postList.appendChild(postElement);
        });
    })
    .catch(error => console.error('Error loading posts:', error));
