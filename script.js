const result  = document.getElementById("result")
const filter  = document.getElementById("filter")

const listItem = []

getData()

filter.addEventListener("input", (e)=>{
    filterData(e.target.value)
})

async function getData(){
    const res = await fetch('https://randomuser.me/api?results=100')

    const {results} = await res.json()

    result.innerHTML = ""

    results.forEach(user => {
        const list = document.createElement("li")
        
        listItem.push(list)
        list.innerHTML = `
        <img src="${user.picture.large}"  alt="${user.name.first}">    

        <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
        </div>
        `
        result.appendChild(list)
    });
  
}

function filterData(searchTerm){
    listItem.forEach(user =>{
        if(user.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
            user.classList.remove("hide")
        }else{
            user.classList.add("hide")
        }
    })
}
