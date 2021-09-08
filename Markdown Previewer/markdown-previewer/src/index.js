import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import marked from 'marked';

marked.setOptions({
  breaks: true
});
const placeholder = `# This is for heading 1
## this is for heading 2
### heading 3

You can do **this for bold text**.

1 you can 
2 make numbered lists
3 like this

- or 
- unordered lists
- like this

> this is an example of blockquotes

\`<h1>This is example of code</h2>\`

\`\`\`
  <div>
      <h1>Multi-line code</h2>
  </div>
\`\`\`

For more on marked and [click here](https:www.https://www.markdownguide.org/basic-syntax/)

![marked logo](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAXVBMVEX///8AAAB8fHw4ODjb29thYWGWlpb09PTGxsYjIyMoKCjg4ODf39/U1NTAwMD6+vpbW1ulpaXq6uqmpqafn5+GhoZxcXFMTExTU1PMzMwcHBwzMzMNDQ2Ojo7r6+v4T5kFAAAC90lEQVR4nO3cbXOaQBSGYYnpi4lWqkGT1vb//8yqOIaFcxZ5ZprTrvf9LcNmDddIIFlwNiMiIiIiIiIiIiIiIopps20ewmq2m+j919pVwe2iBYTWi2i1qlqsoxUmV0ebnaqjFaa2ihZrW0U7TKyJBmtroh0mto8Ga9tHO0xsHg3WNo92mBhsUrBJwSYFmxRsUrBJwSYFmxRsUrBJwSYFmxRsUrBJwSYFmxRsUrBJwSYFmxRsUrBJwSYFmxRsUrBJwSYFmxRsUhbb/FO3zM7W3XGvoyMyN4WVwPaSjHh29/X7+Ljkpty3stk+p0M2N6nNHq0xX7ojvt4Vm+PWU4Otz2Yef3012AZshttADbYh28BtqAabwdZzM9Rgs9gSN0sNNpOt42aqwWazXd1sNdgctoubowabx3Z289Rgc9mObi/uNtj84b/9TbBJM8EmzQSbNBNs0kywSTPBJs0EWzJi637v6rH7FWzJCPcKd1nB5rMtHLfjX1qw5dhMt2UF2wib4XZSg22EbeB2VoNtjK3n1qqZbD9+Pr2Xsr0dOpvmh3tgS9wuava77fm2F07fesWyddyuqwr2QXqT27f7OEg7bu9rMc7vthvcemols13cOit/3ilh1K2vVjTb2a27XuqeSZf5Fx2olc12dEtW5/0LkKzbUK1wtupXMjBz3ZZxM9RKZ0vLXe66bpYabNec84KpBtuIm60GW97NUYMt6+apwZZzc9Vgy7j5arD5bhk12Fy3nBpsnltWDTbHLfMPcdhctxG1ItjSdYMnf2eT86T/JGC1GVMrgi19nvRgjLj0Ovo86a2VwBYQbFKwScEmBZsUbFKwScEmBZsUbFKwScEmBZsUbFKwScEmBZsUbFKwScEmBZsUbFKwScEmBZsUbFKwScEmBZsUbFL/G1vmw/g/sn20w8SaaLC2JtphYqtosLZVtMPU6mixU3W0wuTWmXtzP6rFevzn/OfaRavtogW0NtvmIaxmm/lQWiIiIiIiIiIiIiIior/aH/PKSQIiPvtcAAAAAElFTkSuQmCC)`

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
    <div className='component'>
      <h2 id='componentTitle'>Editor</h2>
      <h3 id='comonentDiscription'>Enter your Markdown here</h3>
      <textarea id='editor' onChange={props.onChange} type='text' value={props.markdown} />
    </div>
  );
}

const Viewer = (props) => {
  return (
    <div className='component'>
      <h2 id='componentTitle'>Viewer</h2>
      <h3 id='comonentDiscription'>See your markdown here</h3>
      <div id='preview' dangerouslySetInnerHTML={{ __html: marked(props.markdown) }} />
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
