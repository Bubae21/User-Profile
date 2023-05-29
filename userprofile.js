let output = ''

$.get('https://randomuser.me/api/?results=100', function (data) {
    console.log(data)
   let users = data.results

   for (let user of users) {
     output += `<div class="col-md-3 mb-3">
     <div class="card" >
         <img src="${user.picture.large}" class="card-img-top" alt="...">
         <div class="card-body">
           <h5 class="card-title">${user.name.title}, ${user.name.first}, ${user.name.last} </h5>
           <p>Email: ${user.email}</p>
           <p>Phone number: ${user.phone}</p>
           <p>Gender: ${user.gender}</p>
         </div>
         </div>
       </div>`

   }
    
    $('.users-profile').html(output)
   
})