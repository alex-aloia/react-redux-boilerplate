import React, {Component} from 'react';

import Character from './Character';

class CharacterList extends Component {
    render() {

        console.log(this.props.characters[0].id);

        let characters = this.props.characters;

        return (
            <ul>
                {characters.map(character =>
                    <Character character={character}
                                key={character.id} />
                )}
            </ul>
        );
    }
}

export default CharacterList;
