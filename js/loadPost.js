const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts"
    fetch(url)
        .then(res => res.json())
        .then(data => displayPost(data)
        )
}

/* {
"userId": 1,
"id": 1,
"title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
"body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
} */

const displayPost = (posts) => {
    const postContainer = document.getElementById("postContainer")
    postContainer.innerHTML = "  "
    posts.forEach(post => {
        const postCard = document.createElement("div");
        postCard.innerHTML = `
        <div class="post_card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
        
        `

        postContainer.append(postCard)
    });
}

loadPost()