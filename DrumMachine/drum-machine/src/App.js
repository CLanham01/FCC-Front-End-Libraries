import { render } from '@testing-library/react';
import React from 'react';
import './App.css';

const instruments = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Bass Drum',
    url: 'https://github.com/CLanham01/sound-clips/blob/main/Bass-Drum-Hit-Level-6b-www.fesliyanstudios.com.mp3?raw=true'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Floor Tom',
    url: 'https://github.com/CLanham01/sound-clips/blob/main/Floor-Tom-Drum-Hit-Level-7A-www.fesliyanstudios.com.mp3?raw=true'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Mid Tom',
    url: 'https://github.com/CLanham01/sound-clips/blob/main/Medium-Tom-Drum-Hit-Level-7B-www.fesliyanstudios.com.mp3?raw=true'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'High Tom',
    url: 'https://github.com/CLanham01/sound-clips/blob/main/Small-Tom-Drum-Hit-Level-6A-www.fesliyanstudios.com.mp3?raw=true'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Snare',
    url: 'https://github.com/CLanham01/sound-clips/blob/main/Snare-Drum-Hit-Level-5b-www.fesliyanstudios.com.mp3?raw=true'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'https://github.com/CLanham01/sound-clips/blob/main/Hi-Hat-Closed-Hit-E1-www.fesliyanstudios.com.mp3?raw=true'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Open-HH",
    url: 'https://github.com/CLanham01/sound-clips/blob/main/Hi-Hat-Open-Hit-B1-www.fesliyanstudios.com.mp3?raw=true'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Ride Cymbal Bell',
    url: 'https://github.com/CLanham01/sound-clips/blob/main/Ride-Cymbal-Bell-Hit-D-www.fesliyanstudios.com.mp3?raw=true'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Crash',
    url: 'https://github.com/CLanham01/sound-clips/blob/main/Crash-Cymbal-Hit-C-www.fesliyanstudios.com.mp3?raw=true'
  }
]

class Pad extends React.Component{
  constructor(props){
    super(props);
    
    this.audio = React.createRef();
    this.playInstrument = this.playInstrument.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  handleKeyPress(e) {
    if (e.keyCode === this.props.keyCode) {
      this.playInstrument();
    }
  }
  
   playInstrument() {
   this.audio.current.play();
   this.props.displayUpdate(this.props.padId);
  }
  
  render() {
    return(
    
      <div className='drum-pad' id={this.props.padId} onClick={this.playInstrument}>
       <audio className='clip' id={this.props.keyTrigger} src={this.props.url} ref={this.audio}/>
        <p>{this.props.keyTrigger}</p>
      </div>    
    )
  }
}

class DrumKit extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      padId: "Drum Kit"
    }
    this.updateDisplay = this.updateDisplay.bind(this);
  } 
  
  updateDisplay(name) {
    this.setState({
      padId: name
    });
  }
  
  render() {
    let kit = instruments.map((drumObj, i, padArr) => {
      return (
      <Pad padId={padArr[i].id} 
        keyTrigger={padArr[i].keyTrigger} 
        url={padArr[i].url} 
        keyCode={padArr[i].keyCode}
        displayUpdate={this.updateDisplay}
       />
      );  
    });
   return (
     <div>
       <div id ='display'>{this.state.padId}</div>
     <div className='container'>{kit}</div>
     </div>
   );
  }
}
      
class DrumMachine extends React.Component {

  render () {
    return(
      <div id="drum-machine">
        <h1>Drum Machine</h1>
        
        <DrumKit />
      </div> 
    );
  }
}




export default DrumMachine;
