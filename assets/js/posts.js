
fetch ("http://localhost:1337/api/posts?populate=picture") 
.then (data => data.json()) 
.then (jsonPosts => {
    for (let posts of jsonPosts.data){

        let picture = posts.attributes.picture.data[0].attributes.formats.small.url
        let date = posts.attributes.createdAt.slice(0,10)
        let title = posts.attributes.title
        let content = posts.attributes.content
        
    // boucle for qui parcours le tableau et affiche un post du blog récupéré depuis STRAPI
 
        document.querySelector(".post").innerHTML +=
        `<div class = box>
        <h2>${title}</h2>
        <p><span class="image left"><img src="${"http://localhost:1337" + picture}" alt="" /></span>${content}</p>
        </br>
        <span class="date">${date}</span>
        </br>
        </div>`
        }
})

