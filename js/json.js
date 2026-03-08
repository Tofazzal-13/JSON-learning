const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
}


const loadPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => displayPost(data)
    )
}


const displayPost = (posts) => {
    posts.forEach(post => {
        console.log(post);  
    }); 
}