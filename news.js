fetch('news.json')
    .then(response => response.json())
    .then(posts => {
        const postList = document.getElementById('post-list');
        posts.forEach(post => {
            const postElement = document.createElement('article');
            postElement.innerHTML = `
                    <div class="post">
                        <a href="single-news.html?id=${post.id}"><img src="${post.image}" alt="Image" class="img-fluid">
                        </a>
                        <div class="post_info clearfix">
                            <div class="post-left">
                                <ul>
                                    <li><i class="icon-calendar-empty"></i> On <span>${post.date}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <h2>${post.title}</h2>
                        <p>
                            ${post.content}
                        </p>
                        <a href="single-news.html?id=${post.id}" class="btn_1">Read more</a>
                    </div><hr>
            `;
            postList.appendChild(postElement);
        });

        const recentPosts = document.getElementById('recent-posts');
        posts.forEach(post => {
            const postElement = document.createElement('article');
            postElement.innerHTML = `
                <li>
                    <i class="icon-calendar-empty"></i> ${post.date}
                    <div><a href="single-news.html?id=${post.id}">${post.title}</a>
                    </div>
                </li><hr >
            `;
            recentPosts.appendChild(postElement);
        });
    })
    .catch(error => console.error('Error loading posts:', error));


