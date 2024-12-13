import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import RatingBar from './RatingBar';
import { useContext } from 'react';
import AppContext from '../data/AppContext';
 
function ProfileCard({ id, name, birth, eyes, rating }) {
  const { dispatch } = useContext(AppContext); // Pobierz dispatch z kontekstu
 
  const handleRateClick = () => {
    dispatch({
      type: 'rate',
      id,
      rating: rating === 10 ? 0 : rating + 1,
    });
  };
 
  const handleDeleteClick = () => {
    dispatch({
      type: 'delete',
      id,
    });
  };
 
  const handleEditClick = () => {
    const newName = prompt('Enter new name:', name);
    if (newName !== null) {
      dispatch({
        type: 'edit',
        id,
        payload: { name: newName },
      });
    }
  };
 
  return (
    <Card
      className="h-100"
      style={{
        border: '2px solid black',
        borderRadius: '10px',
        backgroundColor: 'white',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Card.Body className="d-flex flex-column">
        <Card.Title
          style={{
            color: 'darkgoldenrod',
            textAlign: 'center',
            textStroke: '1px black',
            WebkitTextStroke: '1px black',
            fontWeight: 'bold',
            fontSize: '20px',
          }}
        >
          {name}
        </Card.Title>
  
        <Card.Text style={{ color: 'black', marginTop: '10px' }}>
          <strong style={{ color: 'darkgoldenrod' }}>Date of Birth:</strong> {birth}
        </Card.Text>
        <Card.Text style={{ color: 'black', marginTop: '10px' }}>
          <strong style={{ color: 'darkgoldenrod' }}>Eye Color:</strong> {eyes}
        </Card.Text>
        <Card.Text style={{ color: 'black', marginTop: '10px' }}>
          <strong style={{ color: 'darkgoldenrod' }}>Rating:</strong> {rating}
        </Card.Text>
  
        {/* Rating Bar */}
        <RatingBar rate={rating} />
  
        <div className="mt-auto">
          <Button
            onClick={handleEditClick}
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
            Edit
          </Button>
          <Button
            onClick={handleDeleteClick}
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
            Delete
          </Button>
          <Button
            onClick={handleRateClick}
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
            Rate
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
  
  
}
 
ProfileCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  birth: PropTypes.string.isRequired,
  eyes: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};
 
export default ProfileCard;