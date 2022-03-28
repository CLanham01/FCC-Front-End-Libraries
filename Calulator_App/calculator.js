
const CalButtons= (props) => {
    return(
        <div id='buttonContainer'>
            <button className='buttons' id='equals'>=</button>
            <button className='buttons' id='zero'>0</button>
            <button className='buttons' id='one'>1</button>
            <button className='buttons' id='two'>2</button>
            <button className='buttons' id='three'>3</button>
            <button className='buttons' id='four'>4</button>
            <button className='buttons' id='five'>5</button>
            <button className='buttons' id='six'>6</button>
            <button className='buttons' id='seven'>7</button>
            <button className='buttons' id='eight'>8</button>
            <button className='buttons' id='nine'>9</button>
            <button className='buttons' id='add'>+</button>
            <button className='buttons' id='subtract'>-</button>
            <button className='buttons' id='multiply'>X</button>
            <button className='buttons' id='divide'>/</button>
            <button className='buttons' id='decimal'>.</button>
            <button className='buttons' id='clear'>clear</button>
        </div>
    );
}

const Display = (props) => {
    return(
        <div>
            <div id='display'></div>
        </div>
    );
}

class Calculator extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div>
                <Display />
                <CalButtons />
            </div>
        );
    }
}

ReactDOM.render(<Calculator/>, document.getElementById('calculator-app')
);

