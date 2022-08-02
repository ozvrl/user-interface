
const singleUserEl = document.querySelector('.single-user')
const searchBar=document.getElementById('searchbar')
let newData =[];
const userCards = document.querySelector('.userinformation')


console.log(searchBar)
searchBar.addEventListener('keyup',(e)=>{
  console.log(e.target.value)
  console.searchstring = (e.target.value) 
  const fileteredusers=newData.filter(user =>{
     return card-title.includes(searchstring) 
  })
  console.log(fileteredusers)
});




async function getUsers() {
   const response = await fetch('https://jsonplaceholder.typicode.com/users/')
   const data = await response.json()

    newData = data.slice(0,4)
   newData.forEach(user => {
         userCards.innerHTML += `
         <div class="card" style="width: 18rem;">
           <div class="card-body">
           
            <h5 class="card-title">${user.name}</h5>
            <p class="card-text">${user.email}</p>
          </div>
        </div>
         `   
   document.querySelector('.btn-primary').disabled = true
   });
}
async function searchUser(searchInput) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/?username=${searchInput}`)
  const data = await response.json()

  singleUserEl.innerHTML += `
   <div class="card" style="width: 18rem;">
     <div class="card-body">
       <h5 class="card-title">${data[0].name}</h5>
       <p class="card-text">${data[0].email}</p>
     </div>
   </div>
  `
}
function getSingleUser() {
    let input = searchEl.value
  
    searchUser(input)
  }
  const photoContainer = document.querySelector('.photo-container')

  async function showPhoto() {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos')
    const photos = await response.json()
  
    let newPhotos = photos.slice(0,1)
    newPhotos.forEach((photo)=> {
     photoContainer.innerHTML += `
    <img style="width:270px;" src="${photo.url}" alt="">
     `
    })
   }

//   function delImg() {              DELETE BUTONU İLE FOTOĞRAFİ SİLME DENEDİM OLMADI
//     $('btnphoto').remove();
//     $(photo.url).html("Image Removed");

//     delBtn();
// };

function FetchTodo()
{
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(function(data){
  console.log(data)
  return data.json()
  })

  .then(function(data){
    var results=document.getElementById('results')
    results.innerHTML = `<p>Title of Todo ${data.title} </p>`
    console.log(data)
  })
  .catch(function(error){
    console.log(error)
  })
}