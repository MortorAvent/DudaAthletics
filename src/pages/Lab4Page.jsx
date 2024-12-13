import { useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import AppContext from '../data/AppContext';
 
function Lab4Page() {
  const { items } = useContext(AppContext); // Pobieramy listę obiektów
  const navigate = useNavigate();
  const [editId, setEditId] = useState('');
 
  const handleEditSubmit = () => {
    if (editId) {
      navigate(`/lab4/edit/${editId}`);
    } else {
      alert('Wprowadź poprawne ID obiektu.');
    }
  };
 
  useEffect(() => {
  }, [items]);
  return (
    <>
      <h3
        style={{
          color: 'darkgoldenrod',
          textAlign: 'center',
          marginBottom: '20px',
          textStroke: '1px black', // Obramowanie liter
          WebkitTextStroke: '1px black', // Dla przeglądarek opartych na Webkit
          fontSize: '24px',
        }}
      >
        Dodaj Podopiecznego:
      </h3>
      <div
          className="mt-3"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
      <button
        className="btn"
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
        onClick={() => navigate('/lab4/add')}
      >
        Dodaj
      </button>
      </div>
      <div
        className="mt-4 p-4"
        style={{
          backgroundColor: 'white',
          border: '2px solid black',
          borderRadius: '10px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h3
          style={{
            color: 'darkgoldenrod',
            textAlign: 'center',
            marginBottom: '20px',
            textStroke: '1px black', // Obramowanie liter
            WebkitTextStroke: '1px black', // Dla przeglądarek opartych na Webkit
            fontSize: '24px',
          }}
        >
          Edytuj Podopiecznego:
        </h3>
        <div
          className="mt-3"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <label
            className="mx-2"
            htmlFor="editId"
            style={{ color: 'black', fontWeight: 'bold' }}
          >
            ID osoby do edycji:
          </label>
          <input
            type="number"
            id="editId"
            value={editId}
            onChange={(e) => setEditId(e.target.value)}
            placeholder="Wprowadź ID"
            style={{
              border: '2px solid black',
              borderRadius: '5px',
              padding: '5px 10px',
              marginRight: '10px',
              width: '150px',
            }}
          />
          <button
            className="btn"
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
            onClick={handleEditSubmit}
          >
            Edytuj
          </button>
        </div>
      </div>
    </>
  );
  
  
  
}
export default Lab4Page;