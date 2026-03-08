const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts"
    fetch(url)
    .then(res => res.json())
    .then(data => displayPost(data)
    )
}


const displayPost = (posts) => {
     const postContainer = document.getElementById('post_contianer');
     
     

    posts.forEach(post => {
        // console.log(post.body);  
        const li = document.createElement("li");
        li.innerText = post.title;
        
        postContainer.appendChild(li)
        

    }); 
}