import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Card from './Components/Card/Card';

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('./assets', false, /\.(png|jpe?g|svg)$/));
console.log(images);


class App extends Component {

    state = {
        characters: images.map(i => {return {img:i} }),
        score: 0,
        clicked: []
    }

    handleClick = (img)=> {
    
        this.setState({characters: this.shuffle(this.state.characters)});

        if(!this.state.clicked.includes(img)){
            this.setState({
                clicked: [...this.state.clicked, img],
                score: this.state.score + 1
            })
        }else {
            this.setState({score: 0, clicked: []});
            alert('You lose!')
        }
    }


    shuffle = (charArray) => {

        var charCopy = charArray;
        var last = charCopy.length;
        var temp;
        var randomIndex;
    
        while (last) {
    
            randomIndex = Math.floor(Math.random() * last--);
        
            temp = charCopy[last];
            charCopy[last] = charCopy[randomIndex];
            charCopy[randomIndex] = temp;
        }
        return charCopy;
    }


    render() {
        return (
        <div>
            <Header title="Click each image only once!" score={this.state.score}/>

            <div>
            {
                this.state.characters.map(e => {
                    return <Card handleClick={this.handleClick} img={e.img} />
                })
            }
            </div>
        </div>
        );
    }

}

export default App;
