// used in returning an html object of a specific type for use with
// react components
import React from 'react';
import './MakeObject.scss';
import refreshicon from './assets/white-refresh-arrow.png';
import cancelicon from './assets/cancel-mark.png';

// returns a button with a given prop value as input
export function MakeWordButton(props){
    return(
        <div className='word-button-outside'>
            <input 
                type='button'
                className='word-button'
                defaultValue={props.value}
                onClick={props.onClickWord}>
            </input>
        </div>
    );
}

// returns a refresh button to allow user to update certain objects
export function MakeRefreshButton(props){
    //console.log('got refresh: ' + props.active);
    let isactive = props.active ? 'refresh-button-activate' : 'refresh-button';
    return(
        <div className='refresh-button-outside'>
            <input 
                type='image'
                alt='refresh image'
                src={refreshicon}
                className={isactive}
                onClick={props.onClickRefresh}>
            </input>
        </div>
    );
}

// returns image to put into react component
export function MakeImage(props){
    //console.log('image got here - ' + props.image);
    if(props.image){
        return(
            <img className='image' src={props.image} alt='mainimg'/>
        );
    }
    else{
        return(
            <img className='image' src={cancelicon} alt='mainimg'/>
        );
    }
}

// returns paragraph to put into react component
export function MakeParagraph(props){
    //console.log('paragraph got here - ' + props.paragraph);
    if(props.paragraph){
        return(
            <p className='paragraph-text'>
                {props.paragraph}
            </p>
        );
    }
    else{
        return(
            <p className='paragraph-text'>
                Oh No!!! Something went wrong!!!
            </p>
        );
    }
}