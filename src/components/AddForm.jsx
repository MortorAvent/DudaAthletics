import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from '../data/AppContext';
function CreateForm() {
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    const [isSending, setSending] = useState(false);
    const context = useContext(AppContext);
    const dispatch = context.dispatch;

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        if (data.get("name").charAt(0) !== data.get("name").charAt(0).toUpperCase()) {
            setErrors([...errors, "Nazwa użytkownika musi zaczynać się od wielkiej litery"]);
            return;
        }

        if (errors.length != 0) {            
            return;
        }

        setSending(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        dispatch({
            type: "add",
            data: {
                id: Date.now(),
                name: data.get("name"),
                birth: data.get("birth"),
                eyes: data.get("eyes"),
                rating: Number(data.get("rating"))
            }
        });
        setSending(false);

        for (let key of data.keys()) {
            e.target[key].value = ""; 
        }
        navigate("/lab1", { replace: true });
    };

    return (
       <form onSubmit={onSubmit}>

        {/* {"id":2,"name":"Ola","birth":"1983-12-02","eyes":"brown","rating":7}, */}
        {/* edit na react hook form */}

        <label htmlFor="name">Imię użytkownika</label>
        <input type="text" id="name" name="name" placeholder="Wpisz imię użytkownika" minLength="3" maxLength="40" required />
        
        <label htmlFor="birth">Nazwa użytkownika</label>
        <input type="date" id="birth" name="birth" required />
        
        <label htmlFor="eyes">Kolor oczu użytkownika</label>
        <input type="text" id="eyes" name="eyes" placeholder="Wpisz kolor oczu" minLength="3" maxLength="20" required />
        
        <label htmlFor="rating">Rating użytkownika</label>
        <input type="number" id="rating" name="rating" min="0" max="10" required />

        <button type="submit" className="btn btn-primary mt-3" disabled={isSending}>Zapisz</button>
        <button type="reset" className="btn btn-primary mt-3">Wyczyść</button>
       </form>
    );
}

export default CreateForm;