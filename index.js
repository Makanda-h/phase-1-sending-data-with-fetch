// Add your code here
function submitData (name,email){
    return fetch("http://localhost:3000/users", configurationObject)
    .then(response => response.json())
    .then(data =>
        {const id = data.id;
            document.body.innerHTML += `<p>${id}</p>`
        })

    .catch(function (error) {
    document.body.innerHTML += `<p> ${error.message}</p>`
  })
};
const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify({
            name: "Steve",
            email: "steve@steve.com",
        }),
}