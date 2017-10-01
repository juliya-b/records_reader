import React from 'react';
import ReactDOM from 'react-dom';

import RecordsApp from './components/RecordsApp.jsx';

function App(){
    return(
        <div>
            <RecordsApp />
        </div>
    );
}
ReactDOM.render(<App />, document.getElementById('root'));