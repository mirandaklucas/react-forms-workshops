import { useState } from 'react'

const APIURL = 'https://fsa-jwt-practice.herokuapp.com/signup'

export default function SignUpForm({setToken}) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [sucessMessage, setSuccessMessage] = useState("")
    const [error, setError] = useState(null)


    async function handleSubmit(e) {
        e.preventDefault()

        try{
            const response = await fetch(APIURL, {
                method: 'POST',
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({
                    username,
                    password
                })
            })
            const result = await response.json()
            console.log("Signup Message:", result)
            setToken(result.token)
            setSuccessMessage(result.message)
            setUsername("")
            setPassword("")
           
        } catch(error){
            setError(error.message)
        }
        

    }
   
    return (
    <>
    <h1>Form</h1>
    {successMessage && <p>{sucessMessage}</p>}
    {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
            <label>Username: {" "}</label>
            <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
            <label>Password:{" "} </label>
            <input type='text' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button>Submit</button>
        </form>
    </>
    )
}

