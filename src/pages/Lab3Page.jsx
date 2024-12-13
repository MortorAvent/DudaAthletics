import FlexContainer from '../components/FlexContainer';
import ProfileCard from '../components/ProfileCard';
import { data } from '../data/module-data';
 
function Lab3Page() {
  return (
    <div>
      <h1 style={{ 
            color: 'darkgoldenrod',
            textAlign: 'center',
            textStroke: '1px black',
            WebkitTextStroke: '1px black',
            fontWeight: 'bold',
            fontSize: '36px', }}>
            Profile podopiecznych
      </h1>
      <FlexContainer element={ProfileCard} data={data} />
    </div>
  );
}
 
export default Lab3Page;