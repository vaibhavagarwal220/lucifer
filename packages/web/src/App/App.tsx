import React from 'react';
import { ShowCard, TextInput } from '@lucifer/components';
import { searchShow } from '@lucifer/services';
import './App.css';
import { PrimaryButton } from '@fluentui/react';
import { ShowDetails } from '@lucifer/core';

type Props = {};
type State = {searchText: string,shows: ShowDetails[]};
class App extends React.Component<Props,State> {
  constructor(props: Props){
    super(props);
    this.state = {searchText:'',shows:[]};
    this.onChange = this.onChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onChange(value?: string) {
    if(value == null) return;
    this.setState({searchText: value});
  }
  handleClick(searchString: string){
    searchShow(searchString).then((response ) => {
      const val = response.data;
      this.setState({shows:val});
    })
    .catch(function (error) {
      console.log(error);
    });
  }
 
  render(){
    return (
      <div className='App'>
        <div className='App-header'>
          <TextInput onUserInput={this.onChange} onSubmit={this.handleClick}/>
          <PrimaryButton className="search-btn" text="Search" onClick={() => this.handleClick(this.state.searchText)}/>
        </div>
        {this.state.shows.map((value, index) => {
            return <ShowCard key={index} showDetail={value}/>
        })}
      </div>
    ); 
  }
}

export default App;
