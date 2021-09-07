import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

const placeholder = "This is still a test"

class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder
    };

    this.handlechange = this.handlechange.bind(this)

  }


  handlechange(e) {
    this.setState({
      markdown: e.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Markdown Previwer</h1>
        <Editor markdown={this.state.markdown} onChange={this.handlechange} />
        <Viewer markdown={this.state.markdown} />
      </div>
    );
  }
};

const Editor = (props) => {
  return (
    <div>
      <h2>Editor</h2>
      <h3>Enter your Markdown here</h3>
      <textarea onChange={props.onChange} type='text' value={props.markdown} />
    </div>
  );
}

const Viewer = (props) => {
  return (
    <div>
      <h2>Viewer</h2>
      <h3>See you markdown here</h3>
      <div>{props.markdown}</div>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>

    <MarkdownPreviewer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
