import React, {Component} from 'react';

class Character extends Component {
    render() {
        return (
            <p>{this.props.character.name}</p>
        );
    }
}

export default Character;
