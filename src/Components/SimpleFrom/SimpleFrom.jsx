
import { useRef } from "react";
import "./SimpleForm.css"
import { useEffect } from "react";
const SimpleFrom = () => {
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Submit the form!");
    }

    const nameRef = useRef(null);
            useEffect(() =>{
                nameRef.current.focus();
            }, []);
   

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="SimpleForm">
                    <h2>Bissmillah hirrohamaner rahim</h2>
                    <input ref={nameRef} className="input1" name="name" placeholder="Enter text" type="text" />
                    <br />
                    <input className="input2" type="submit" name="submit" />
                </div>
            </form>
        </div>
    );
};

export default SimpleFrom;