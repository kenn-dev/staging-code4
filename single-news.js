const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');

fetch('news.json')
    .then(response => response.json())
    .then(posts => {
        const post = posts.find(p => p.id == postId);
        if (post) {
            const postContent = document.getElementById('single-post');
            postContent.innerHTML = `
                <div class="post nopadding">
                    <img src="${post.image}" alt="Image" class="img-fluid">
                    <div class="post_info clearfix">
                        <div class="post-left">
                            <ul>
                                <li><i class="icon-calendar-empty"></i>On <span>${post.date}</span>
                                </li>
                                <li><i class="icon-inbox-alt"></i>In <a href="#">Top tours</a>
                                </li>
                                <li><i class="icon-tags"></i>Tags <a href="#">Works</a> <a href="#">Personal</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                     <h2>${post.title}</h2>
                    <p>
                        ${post.content}
                    </p>
                </div>
            `;
        } else {
            document.getElementById('post-content').innerHTML = '<h2>Post not found</h2>';
        }

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
