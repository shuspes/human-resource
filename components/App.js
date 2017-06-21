import React from 'react';
import { peoples } from "../data/peoples";

class App extends React.Component {
    render() {
        return (
        	<div>
		        {
		        	peoples.map((people, index) => {
						return(<span key={index}>{`${people.FirstName} ${people.LastName}`}</span>);
		        	})
		        }
        	</div>
        )
    }
}

export default App;