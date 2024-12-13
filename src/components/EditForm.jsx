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
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" {...register("id")} />
            
            <label htmlFor="name">Imię użytkownika</label>
            <input type="text" id="name" {...register("name", { required: true, minLength: 3, maxLength: 40 })} />
            {errors.name && <p className="text-danger">Imię użytkownika jest wymagane i musi mieć od 3 do 40 znaków.</p>}
            
            <label htmlFor="birth">Data urodzenia</label>
            <input type="date" id="birth" {...register("birth", { required: true })} />
            {errors.birth && <p className="text-danger">Data urodzenia jest wymagana.</p>}
            
            <label htmlFor="eyes">Kolor oczu użytkownika</label>
            <input type="text" id="eyes" {...register("eyes", { required: true, minLength: 3, maxLength: 20 })} />
            {errors.eyes && <p className="text-danger">Kolor oczu jest wymagany i musi mieć od 3 do 20 znaków.</p>}
            
            <label htmlFor="rating">Rating użytkownika</label>
            <input type="number" id="rating" {...register("rating", { required: true, min: 0, max: 10 })} />
            {errors.rating && <p className="text-danger">Rating użytkownika jest wymagany i musi być w zakresie od 0 do 10.</p>}
            <button type="submit" className="btn btn-primary mt-3">Zapisz</button>
        </form>
    );
}
export default EditForm;