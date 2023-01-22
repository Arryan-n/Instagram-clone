const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "I dream my painting and I paint my dream.",
        likes: 234
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "I have never seen either angels or goddesses, so I am not interested in painting them.",
        likes: 679
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "One of my self potrait. Looking cool na.",
        likes: 999
    }
]
mainel = document.getElementById("main")
let msg = ""
for(let i=0; i<posts.length; i++){
     let current = posts[i]
     msg+= `   <section class="sections">
     <div class="container">
       <div class="profile">
             <img class="avatar1" src="${current.avatar}"">
             <div class="dp-title">
                 <h4>${current.name}</h4>
                 <p>${current.location}</p>
             </div>
       </div>
         
           <img  class="vang-dp" id="dp${i}"  ondblclick="redheart(${i})" src="${current.post}">
         
       <div class="icons">
       <div class="heart" ondblclick="redheart(${i})" id="red${i}">
            <i  class="fa-regular fa-heart"></i>
       </div>     
             <img src="images/icon-comment.png">
             <img src="images/icon-dm.png">
       </div>
       <div class="description">
         <h4 id="addlikes${i}" > ${current.likes} likes</h4>
         <p>
             <span>${current.username}</span>
            ${current.comment}

         </p>
       </div>
     </div>
 </section>
 
     
     `


}
mainel.innerHTML = msg
let count = 0
function redheart(a){
    let b = "red"+a
    let red = document.getElementById(b)  
    let c = "addlikes"+a
    let addlikes = document.getElementById(c)
    let like = posts[a].likes 
    count++
    if(count%2!=0 ){ //odd
     red.innerHTML = `<i class="fa-solid fa-heart fa-color"></i>`
    addlikes.textContent = like+1+` likes` 
    }
    else{//even
        red.innerHTML = `  <i  class="fa-regular fa-heart"></i>`
        addlikes.textContent = like+` likes`
    }
   
    


}









