import { useState } from "react"

export default function Form() {

    let [fullName, setFullName] = useState("Aditya");
    let handleNameChange = (event) => {
        setFullName(event.target.value)
    }
    return (
        <form>
            <input type="text" placeholder="Enter full name : " value={fullName} onChange={handleNameChange}/>
            <button>Submit</button>
        </form>
    )
}