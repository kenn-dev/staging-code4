fetch('posts.json')
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
                                    <li><i class="icon-calendar-empty"></i> On <span>"${post.date}</span>
                                    </li>
                                    <li><i class="icon-inbox-alt"></i> In <a href="#">Top tours</a>
                                    </li>
                                    <li><i class="icon-tags"></i> Tags <a href="#">Works</a>, <a href="#">Personal</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <h2>${post.title}</h2>
                        <p>
                            ${post.title}
                        </p>
                        <a href="single-news.html?id=${post.id}" class="btn_1">Read more</a>
                    </div>
            `;
            postList.appendChild(postElement);
        });
    })
    .catch(error => console.error('Error loading posts:', error));


