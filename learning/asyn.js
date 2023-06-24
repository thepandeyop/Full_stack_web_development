// using promises 
const firstonplanet = () =>{
    return (
        fetch('/user.json')
        .then((response)=>response.json())
        .then( (users)=>users[0])
        .then( (user)=>fetch(`/users/${user.name}`))
        .then((userresponse)=> userresponse.json())
    )
}
firstonplanet().then(console.log);

//using asyn
const firstonplanets = async() => {
    const response = await fetch("/user.json")
    const users = await response.json()
    const user = users[0]
const userResponse = await fetch(`/users/${user.name}`)
const userData = await userResponse.json()
return userData         
}