import React from 'react';
import users from "../data/users";

class App extends React.Component {
    render() {
        return (
        	<div>
		        {
		        	users.map((user, index) => {
						return(<span key={index}>{user.name}</span>);
		        	})
		        }
        	</div>
        )
    }
}

export default App;