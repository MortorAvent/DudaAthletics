import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import AppContext from "../data/AppContext";

function EditForm() {
    const { id } = useParams(); 
    const { items, dispatch } = useContext(AppContext);
    const navigate = useNavigate();

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    useEffect(() => {
        const itemToEdit = items.find((item) => item.id === parseInt(id));
        if (itemToEdit) {
            setValue("id", itemToEdit.id); 
            setValue("name", itemToEdit.name);
            setValue("rating", itemToEdit.rating);
        }
    }, [id, items, setValue]);

    const onSubmit = (data) => {
        dispatch({
            type: "EDIT_ITEM",
            payload: { id: parseInt(data.id), name: data.name, rating: parseFloat(data.rating) },
        });
        navigate("/"); 
    };

    return (
        <div>
            <h1>Edit Object</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <input type="hidden" {...register("id")} />

                <div>
                    <label htmlFor="name">Imię:</label>
                    <input
                        id="name"
                        {...register("name", { required: "Name is required", maxLength: 50 })}
                    />
                    {errors.name && <p className="text-danger">{errors.name.message}</p>}
                </div>
                <div>
                    <label htmlFor="rating">Ocena:</label>
                    <input
                        type="number"
                        id="rating"
                        {...register("rating", {
                            required: "Rating is required",
                            min: { value: 0, message: "Rating must be at least 0" },
                            max: { value: 10, message: "Rating cannot exceed 10" },
                        })}
                    />
                    {errors.rating && <p className="text-danger">{errors.rating.message}</p>}
                </div>
                <button type="submit">Zapisz zmiany</button>
            </form>
        </div>
    );
}

export default EditForm;
