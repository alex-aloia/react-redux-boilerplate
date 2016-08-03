import React, {Component} from 'react';

import CharacterList from './CharacterList';

class App extends Component {
    render() {
        return (
            <div>
                <CharacterList characters={this.props.characters} />
            </div>
        );
    }
}

export default App;
