import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as PIXI from 'pixi.js';

let app = new PIXI.Application({ width: 512, height: 512, transparent: true});
let oleg;
let nadya;
let chosenCharacter;

app.loader
    .add("OlegSpritesheet", "http://i.imgur.com/zsigm.png")
    .add("NadyaSpritesheet", "http://i.imgur.com/J1eVJ.png")
    .load(setup);

    function setup(){
        app.stage.interactive = true;

        let rect = new PIXI.Rectangle(0,192, 64,64);
        let texture = app.loader.resources["OlegSpritesheet"].texture;
        texture.frame = rect;
        oleg = new PIXI.Sprite(texture);

        let olegWalkingRight = setInterval(() => {
            if (rect.x >= 64 * 9) rect.x =0;
            oleg.texture.frame = rect;
            rect.x +=64;
        }, 100);

        let nadyaWalkingRight = setInterval(() => {
            if (rect.x >= 64 * 9) rect.x =0;
            nadya.texture.frame = rect;
            rect.x +=64;
        }, 100);

        texture = app.loader.resources["NadyaSpritesheet"].texture;
        texture.frame = rect;
        nadya = new PIXI.Sprite(texture);
    }

class Game extends Component {
    render(){
        let screen = document.getElementById('screen');

        if (screen){
            if (!screen.firstChild){
                screen.appendChild(app.view);
                if (this.props.man.name ==='Oleg'){
                    app.stage.addChild(oleg);
                    chosenCharacter = 'Oleg';
                } else{
                    app.stage.addChild(nadya);
                    chosenCharacter = 'Nadya';
                }
            } else{
                if(chosenCharacter !== this.props.man.name){
                    if (chosenCharacter === 'Oleg') {
                        app.stage.removeChild(oleg);
                        app.stage.addChild(nadya);
                        chosenCharacter = 'Nadya';
                    } else {
                        app.stage.removeChild(nadya);
                        app.stage.addChild(oleg);
                        chosenCharacter = 'Oleg';
                    }
                }
            }
        }

        if (!this.props.man){
            return(
                <div className="game">
                    <p>Choose a character...</p>
                </div>
            );
        }
        return(
            <div className="game">
                <h3>{this.props.man.name}</h3>
                <div id="screen"></div>
            </div>
        );
    }
}

function mapStateToProps (state){
    return {
        man: state.selected
    }
}

window.onkeydown = event => {
    if(chosenCharacter === 'Oleg'){
        switch(event.keyCode){
            case 39:
                oleg.x += 6;
                break;
            case 37:
                oleg.x -=6;
                break;
            case 40:
                oleg.y +=6;
                break;
            case 38:
                oleg.y -=6;
                break;
        }
    } else{
        switch(event.keyCode){
            case 39:
                nadya.x += 6;
                break;
            case 37:
                nadya.x -=6;
                break;
            case 40:
                nadya.y +=6;
                break;
            case 38:
                nadya.y -=6;
                break;
        }
    }
}

export default connect(mapStateToProps)(Game);