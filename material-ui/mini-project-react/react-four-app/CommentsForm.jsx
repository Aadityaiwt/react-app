import { useState } from "react"

export default function CommentsForm() {
    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 5
    });

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value }
        });
    };

    let handleSubmit = (event) => {
        console.log(formData);
        event.preventDefault();
        setFormData(
            {
        username: "",
        remarks: "",
        rating: 5
    }
        )
        
    }

    return (
        <div>
            <h4>Give a comment!</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">username : </label>
                <input 
                name="username" 
                id="username" 
                placeholder="username" 
                type="text" 
                value={formData.username} 
                onChange={handleInputChange} />
                <br /> <br />

                <label htmlFor="ramarks">Remarks : </label>
                <textarea 
                name="remarks" 
                id="remarks" 
                placeholder="add few remarks" 
                value={formData.remarks} 
                onChange={handleInputChange}></textarea>
                <br /> <br />

                <label htmlFor="rating">Rating : </label>
                <input 
                name="rating" 
                id="rating" 
                value={formData.rating} 
                placeholder="rating" 
                type="number" 
                min={1} 
                max={5} 
                onChange={handleInputChange} />
                <br /><br />

                <button>Add Comment</button>
            </form>
        </div>
    )
}