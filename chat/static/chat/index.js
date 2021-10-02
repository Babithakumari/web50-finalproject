document.addEventListener('DOMContentLoaded',function(){

    // To enable search bar
    searchBtn = document.querySelector("#search-button")
    if(searchBtn){
        
        searchBtn.onclick = () =>{
            person = document.querySelector("#search-bar").value

            searchContact(person)
        }
    }
})


function searchContact(person)
{
    
    if(person==""){
        //render index view when search bar is empty
        location.reload()
    }

    else{
        fetch(`search_contact/${person}`)
        .then(response => response.json())
        .then(data =>
            {
                if (data.status == "failure")
                {
                    alert("Error : Not found!")
                }
                
               
                if (data.status == "success")
                {
                    window.location.replace(data.chatroom_id)
                }
                console.log(data.status)

                
            })
    }
    document.querySelector('#search-bar').value=""

}

