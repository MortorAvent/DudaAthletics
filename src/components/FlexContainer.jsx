import { useContext } from 'react';
import AppContext from '../data/AppContext';

function FlexContainer({ element: Element }) {
    const context = useContext(AppContext);
    const data = context.items;

    return (
        <div className="d-flex justify-content-center flex-wrap mt-3">
            {data.map((item) => (
                <Element key={item.id} {...item} />
            ))}
        </div>
    );
}

export default FlexContainer;