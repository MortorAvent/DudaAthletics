import { useContext } from 'react';
import RatingBar from '../components/RatingBar';
import AppContext from '../data/AppContext';
import { useNavigate } from 'react-router-dom';
function Lab1Page() {
    const context = useContext(AppContext);
    const navigate = useNavigate();
    const dispatch = context.dispatch;
    const items = context.items;

    return (
        <>
            <h1>Laboratorium 1</h1>
            <ul className="list-unstyled">
                {items.map((person) => (
                    <li key={person.id} className="d-flex justify-content-between align-items-center mb-2">
                        <span>{person.name}</span>
                        <div className="ms-auto me-2">
                            <RatingBar rate={person.rating} />
                        </div>
                        <div>
                            <button
                                onClick={() => navigate(`/lab4/edit/${person.id}`)}
                                className="btn btn-primary btn-sm me-2">
                                Edit
                            </button>
                            <button
                                onClick={() => dispatch({ type: "delete", id: person.id })}
                                className="btn btn-danger btn-sm me-2">
                                Delete
                            </button>
                            <button
                                onClick={() => dispatch({ type: "rate", id: person.id })}
                                className="btn btn-warning btn-sm">
                                Rate
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}
 
export default Lab1Page;
 
 