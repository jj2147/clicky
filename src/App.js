import React, { Component } from 'react';
import Header from './Components/Header';
import Card from './Components/Card';

function importAll(r) {
    return r.keys().map(r);     //??????
}

//images is an array of paths with keys: "/static/media/2pac.c1a96e18.jpg"
const images = importAll(require.context('./assets', false, /\.(png|jpe?g|svg)$/));
console.log(images);


class App extends Component {

    state = {
        characters: images.map(i => ({img:i})),     //array of objects: {img: "/static/media/2pac.c1a96e18.jpg"}
        score: 0,
        clicked: []
    }

    handleClick = (img)=> {     //use img paths as unique ID's
    
        this.setState({characters: this.shuffle(this.state.characters)});   //not changing state directly

        if(!this.state.clicked.includes(img)){

            this.setState({
                clicked: [...this.state.clicked, img],      //append img path to clicked
                score: this.state.score + 1
            }, () => {  //must wait until state has changed

                    console.log(this.state.score);
    
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

        var copy = array;       //don't directly change state
        var last = copy.length;
        var temp;
        var randomIndex;
    
        while (last) {
            randomIndex = Math.floor(Math.random() * last--);
        
            //switcharoo
            temp = copy[last];
            copy[last] = copy[randomIndex];
            copy[randomIndex] = temp;
        }
        return copy;
    }


    render() {
        return (
        <div style={{width:"600px", margin:"auto"}}>
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
