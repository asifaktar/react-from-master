
import "./SimpleForm.css"
const SimpleFrom = () => {
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log("Submit the form!");
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="SimpleForm">
                    <h2>Bissmillah hirrohamaner rahim</h2>
                    <input className="input1" placeholder="Enter text" type="text" />
                    <br />
                    <input className="input2" type="submit" name="submit" />
                </div>
            </form>
        </div>
    );
};

export default SimpleFrom;