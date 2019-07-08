import axios from "axios";


export function submitForm(name,email,message)
{
    return  axios.post("/api/form",{
            name,
            email,
            message
          })
          
    
}

export function handleLogin(userCredentials) {

    const { username, password } = userCredentials
    return axios.post('/api/login', {
        username,
        password
        })
  
  }

export  function handleRegister(userCredentials)
{
    const {username,password,email}=userCredentials;
    return axios.post('/api/register',{
        username,
        password,
        email
})
   
       
}
export default{
    submitForm,handleLogin, handleRegister
}

