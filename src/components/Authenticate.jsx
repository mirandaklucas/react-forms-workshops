import {useState} from 'react'

const URL = "https://fsa-jwt-practice.herokuapp.com/authenticate"

export default function Authenticate({token}) {
    const [sucessMessage, setSuccessMessage] = useState(null)
    const [error, setError] = useState(null)

    console.log("token: ", token)

    async function handleClick() {
        try {
            const response = await fetch(URL, {
                method: "GET",
                headers: {"content-type": "application/json", Authorization: `Bearer ${token}`},
            })
            const result = await response.json()
            console.log("Authenticate Result: ", result)
            setSuccessMessage(result.message)
        } catch(error) {
            setError(error.message)
        }
    }

    return (
        <div>
            <h3>authenticated!</h3>
            {sucessMessage && <p>{sucessMessage}</p>}
            {error && <p>{error}</p>}
            <button onClick={handleClick}>Authenticate Token!</button>
        </div>
    )
    
}

