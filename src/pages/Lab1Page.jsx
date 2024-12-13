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
        <h1
          style={{
            color: 'darkgoldenrod',
            textAlign: 'center',
            marginBottom: '20px',
            textStroke: '1px black', // Obramowanie liter
            WebkitTextStroke: '1px black',
            fontSize: '28px',
          }}
        >
          Lista Podopiecznych
        </h1>
        <ul
          className="list-unstyled"
          style={{
            backgroundColor: 'white',
            border: '2px solid black',
            borderRadius: '10px',
            padding: '20px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          {items.map((person) => (
            <li
              key={person.id}
              className="d-flex justify-content-between align-items-center mb-3"
              style={{
                padding: '10px 15px',
                borderBottom: '1px solid black',
              }}
            >
              <span
                style={{
                  color: 'darkgoldenrod',
                  fontWeight: 'bold',
                }}
              >
                {person.name}
              </span>
              <div className="ms-auto me-2">
                <RatingBar rate={person.rating} />
              </div>
              <div>
                <button
                  onClick={() => navigate(`/lab4/edit/${person.id}`)}
                  className="btn btn-sm me-2"
                  style={{
                    backgroundColor: 'darkgoldenrod',
                    color: 'black',
                    border: '2px solid black',
                    fontWeight: 'bold',
                    margin: '5px',
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
                  Edytuj
                </button>
                <button
                  onClick={() => dispatch({ type: 'delete', id: person.id })}
                  className="btn btn-sm me-2"
                  style={{
                    backgroundColor: 'white',
                    color: 'red',
                    border: '2px solid red',
                    fontWeight: 'bold',
                    margin: '5px',
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
                  Usuń
                </button>
                <button
                  onClick={() => dispatch({ type: 'rate', id: person.id })}
                  className="btn btn-sm "
                  style={{
                    backgroundColor: 'darkgoldenrod',
                    color: 'black',
                    border: '2px solid black',
                    fontWeight: 'bold',
                    margin: '5px',
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
                  Oceń
                </button>
              </div>
            </li>
          ))}
        </ul>
      </>
    );
    
}
 
export default Lab1Page;
 
 