import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render(){
    return(
      <HTML />
    )
  }
}

class Practice01 extends React.Component {
  constructor(props){
    super(props)
    this.state = {mainpage: "Hello world", list:[], subpage:"", i:0}
    this.handleChange = this.handleChange.bind(this)
    this.addList = this.addList.bind(this)
  }

  handleChange(event){
    this.setState({mainpage: event.target.value})
  }

  addList(){
    let item = this.state.mainpage
      this.state.list.push(
        <li key={this.state.i}>{item}</li>
      )
      this.setState({subpage:this.state.list, i:this.state.i+1})
  }

  render(){
    //type="submit"だと押したら、画面がリロードされてしまう
    //つまりstateの初期化が行われる
    //buttonタグはデフォルトがtype="submit"
    return (
      <div>
        <p>フォームに入力したものをここに表示します</p>
        {this.state.mainpage}
        <form>
          <input type="text" value={this.state.mainpage} onChange={this.handleChange}/>
          <input type="button" value="add" onClick={this.addList} />
          <button type="button" onClick={this.addList}>add</button>
        </form>
        <p>履歴</p>
        <ul>{this.state.subpage}</ul>
      </div>
    );
  }
}

function HTML(){
  return(
    <div>
      <h2>h2タグでタイトル</h2>
      <h3>これはh3</h3>
      <hr />
      <p>pタグで文章を書きます。</p>
      <input type="text" value="値" /><br />
      <input type="password" value="password" /><br />
      <input type="button" value="button" /><br />
      <button type="button">button</button>
    </div>
  )
}

export default App;
