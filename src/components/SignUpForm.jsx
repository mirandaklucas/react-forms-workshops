import { useState } from 'react'

const APIURL = 'https://fsa-jwt-practice.herokuapp.com/'

export default function SignUpForm() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)


    async function handleSubmit(e) {
        e.preventDefault()
        
        try{
            const response = await fetch(APIURL + '/signup')
            const result = await response.json()
            console.log(result)
        } catch(error){
            setError(error.message)
        }

    }
    // handleSubmit()


    return (
    <>
    <h1>Form</h1>
    {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
            <label>Username: </label>
            <input type='text' value={username} onChange={e => setUsername(e.target.value)} />
            <label>Password: </label>
            <input type='text' value={password} onChange={e => setPassword(e.target.value)}/>
            <button>Submit</button>
        </form>
    </>
    )
}

