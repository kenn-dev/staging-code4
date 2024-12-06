fetch('news.json')
    .then(response => response.json())
    .then(posts => {
        const postList = document.getElementById('post-list');
        posts.forEach(post => {
            const postElement = document.createElement('article');
            postElement.innerHTML = `
                    <div class="post">
                        <!-- <a href="single-news.html?id=${post.id}"><img loading="lazy" src="${post.image}" alt="blog image" class="img-fluid">
                        </a> -->
                        <div class="post_info clearfix">
                            <div class="post-left">
                                <ul>
                                    <li><i class="icon-calendar-empty"></i> On  <span class="text-black fw-bold h6">${post.date}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <h2>${post.title}</h2>
                        <p>${post.content[1].paragraph}</p>
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
                    <i class="icon-calendar-empty"></i> <span class="text-black fw-bold h6">${post.date}</span>
                    <div class="mt-3"><a class="text-dark" href="single-news.html?id=${post.id}">${post.title}</a>
                    </div>
                </li><hr>
            `;
            recentPosts.appendChild(postElement);
        });
    })
    .catch(error => console.error('Error loading posts:', error));


