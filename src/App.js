import React, { Component } from 'react';
import Header from './Components/Header';
import Card from './Components/Card';

function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('./assets', false, /\.(png|jpe?g|svg)$/));
console.log(images);


class App extends Component {

    state = {
        characters: images.map(i => ({img:i})),
        score: 0,
        clicked: []
    }

    handleClick = (img)=> {
    
        this.setState({characters: this.shuffle(this.state.characters)});

        if(!this.state.clicked.includes(img)){
            
            this.setState({
                clicked: [...this.state.clicked, img],
                score: this.state.score + 1
            }, () => {
                    console.log(this.state.score);
                    console.log(this.state.characters.length);
    
                    if(this.state.score === this.state.characters.length){
                        alert("You win!");
                        this.setState({score: 0, clicked: []});
                    }    
                }
            );        

        }else{
            alert("You lose!");
            this.setState({score: 0, clicked: []});
        }
        
    }


    shuffle = (array) => {

        var copy = array;
        var last = copy.length;
        var temp;
        var randomIndex;
    
        while (last) {    
            randomIndex = Math.floor(Math.random() * last--);
        
            temp = copy[last];
            copy[last] = copy[randomIndex];
            copy[randomIndex] = temp;
        }
        return copy;
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
