const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');

fetch('news.json')
    .then(response => response.json())
    .then(posts => {
        const post = posts.find(p => p.id == postId);
        if (post) {
            const postContent = document.getElementById('single-post');
            let contentHtml = ''; // Initialize an empty string to hold the content

            // Loop through the content array
            post.content.forEach(item => {
                contentHtml += `
                    ${item.heading ? `<h2>${item.heading}</h2>` : ''} 
                    ${item.heading3 ? `<h3>${item.heading3}</h3>` : ''} 
                    <p>${item.paragraph}</p>
                    ${item.paragraph2 ? `<p>${item.paragraph2}</p>` : ''} 
                `;
            });

            postContent.innerHTML = `
                <style>
                    .post h1 {
                        font-weight: 900;
                    }

                    .post h2 {
                        font-weight: 700;
                    }

                    .post h3 {
                        font-weight: 500;
                    }

                    .post p {
                        font-size: 18px;
                    }
                </style>
                <div class="post nopadding">
                    <img src="${post.image}" alt="Image" class="img-fluid">
                    <div class="post_info clearfix">
                        <h1>${post.title}</h1>
                        <p class="author">${post.author} | ${post.date}</p>
                    </div>
                    ${contentHtml} <!-- Include the structured content here -->
                </div>
            `;
        }
    })
    .catch(error => console.error('Error fetching the posts:', error));
