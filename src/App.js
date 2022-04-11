
import React from 'react';
import Wheel from './Wheel'
import BasicForm from './BasicForm'
import {useState} from 'react';


const App = () => {
    var [startGame, setStartGame] = useState(false);
    var [FormValues, setFormValues] = useState(FormValues);
    if (startGame === false) {
        return (
        
            <div>
                <BasicForm startInd = {() => setStartGame()} />
            </div>
        );
    } else {
        console.log((FormValues))
        return (
        
            <div>
                <Wheel/>
            </div>
        );

    }
}

export default App;



