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
      <form
        onSubmit={onSubmit}
        style={{
          backgroundColor: 'white',
          border: '2px solid black',
          borderRadius: '10px',
          padding: '20px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h3
          style={{
            color: 'darkgoldenrod',
            textAlign: 'center',
            marginBottom: '20px',
            textStroke: '1px black', // Obramowanie liter
            WebkitTextStroke: '1px black',
            fontSize: '24px',
          }}
        >
          Formularz użytkownika
        </h3>
    
        {/* Imię użytkownika */}
        <label
          htmlFor="name"
          style={{
            color: 'darkgoldenrod',
            textStroke: '0.5px black',
            WebkitTextStroke: '0.5px black',
            fontWeight: 'bold',
          }}
        >
          Imię użytkownika
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Wpisz imię użytkownika"
          minLength="3"
          maxLength="40"
          required
          style={{
            border: '2px solid black',
            borderRadius: '5px',
            padding: '5px 10px',
            marginBottom: '10px',
            width: '100%',
          }}
        />
    
        {/* Data urodzenia */}
        <label
          htmlFor="birth"
          style={{
            color: 'darkgoldenrod',
            textStroke: '0.5px black',
            WebkitTextStroke: '0.5px black',
            fontWeight: 'bold',
          }}
        >
          Data urodzenia
        </label>
        <input
          type="date"
          id="birth"
          name="birth"
          required
          style={{
            border: '2px solid black',
            borderRadius: '5px',
            padding: '5px 10px',
            marginBottom: '10px',
            width: '100%',
          }}
        />
    
        {/* Kolor oczu */}
        <label
          htmlFor="eyes"
          style={{
            color: 'darkgoldenrod',
            textStroke: '0.5px black',
            WebkitTextStroke: '0.5px black',
            fontWeight: 'bold',
          }}
        >
          Kolor oczu użytkownika
        </label>
        <input
          type="text"
          id="eyes"
          name="eyes"
          placeholder="Wpisz kolor oczu"
          minLength="3"
          maxLength="20"
          required
          style={{
            border: '2px solid black',
            borderRadius: '5px',
            padding: '5px 10px',
            marginBottom: '10px',
            width: '100%',
          }}
        />
    
        {/* Rating */}
        <label
          htmlFor="rating"
          style={{
            color: 'darkgoldenrod',
            textStroke: '0.5px black',
            WebkitTextStroke: '0.5px black',
            fontWeight: 'bold',
          }}
        >
          Rating użytkownika
        </label>
        <input
          type="number"
          id="rating"
          name="rating"
          min="0"
          max="10"
          required
          style={{
            border: '2px solid black',
            borderRadius: '5px',
            padding: '5px 10px',
            marginBottom: '10px',
            width: '100%',
          }}
        />
    
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <button
            type="submit"
            className="btn"
            style={{
              backgroundColor: 'darkgoldenrod',
              color: 'black',
              border: '2px solid black',
              fontWeight: 'bold',
              padding: '10px 20px',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'gold';
              e.target.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'darkgoldenrod';
              e.target.style.boxShadow = 'none';
            }}
            disabled={isSending}
          >
            Zapisz
          </button>
          <button
            type="reset"
            className="btn"
            style={{
              backgroundColor: 'white',
              color: 'red',
              border: '2px solid red',
              fontWeight: 'bold',
              padding: '10px 20px',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'lightcoral';
              e.target.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.boxShadow = 'none';
            }}
          >
            Wyczyść
          </button>
        </div>
      </form>
    );
    
}

export default CreateForm;