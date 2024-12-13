import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import AppContext from '../data/AppContext';
function EditForm() {
    const { id } = useParams();
    const context = useContext(AppContext);
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: context.items.find(item => item.id === Number(id))
    });
    const navigate = useNavigate();
    const dispatch = context.dispatch;
    const onSubmit = (data) => {
        dispatch({
            type: "edit",
            data: {
                id: Number(id),
                name: data.name,
                birth: data.birth,
                eyes: data.eyes,
                rating: Number(data.rating)
            }
        });
        navigate("/lab1"); 
    };
    return (
        <form 
          onSubmit={handleSubmit(onSubmit)} 
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
      
          <input type="hidden" {...register("id")} />
      
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
            Imię podopiecznego
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true, minLength: 3, maxLength: 40 })}
            style={{
              border: '2px solid black',
              borderRadius: '5px',
              padding: '5px 10px',
              marginBottom: '10px',
              width: '100%',
            }}
          />
          {errors.name && (
            <p className="text-danger">
              Imię użytkownika jest wymagane i musi mieć od 3 do 40 znaków.
            </p>
          )}
      
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
            {...register("birth", { required: true })}
            style={{
              border: '2px solid black',
              borderRadius: '5px',
              padding: '5px 10px',
              marginBottom: '10px',
              width: '100%',
            }}
          />
          {errors.birth && (
            <p className="text-danger">Data urodzenia jest wymagana.</p>
          )}
      
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
            Kolor oczu 
          </label>
          <input
            type="text"
            id="eyes"
            {...register("eyes", { required: true, minLength: 3, maxLength: 20 })}
            style={{
              border: '2px solid black',
              borderRadius: '5px',
              padding: '5px 10px',
              marginBottom: '10px',
              width: '100%',
            }}
          />
          {errors.eyes && (
            <p className="text-danger">
              Kolor oczu jest wymagany i musi mieć od 3 do 20 znaków.
            </p>
          )}
      
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
           Ocena podopiecznego
          </label>
          <input
            type="number"
            id="rating"
            {...register("rating", { required: true, min: 0, max: 10 })}
            style={{
              border: '2px solid black',
              borderRadius: '5px',
              padding: '5px 10px',
              marginBottom: '10px',
              width: '100%',
            }}
          />
          {errors.rating && (
            <p className="text-danger">
              Rating użytkownika jest wymagany i musi być w zakresie od 0 do 10.
            </p>
          )}
      
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
          >
            Zapisz
          </button>
        </form>
      );
      
}
export default EditForm;