import React from 'react';
import { ShowCard, TextInput } from '@lucifer/components';
import { AppDispatch, resetShows, RootState, searchShow } from '@lucifer/services';
import { PrimaryButton } from '@fluentui/react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ShowDetails } from '@lucifer/core';
import ShowsCSS from './Shows.module.css'

type State = {searchText:string}
type Props = {
  showsList?: ShowDetails[],
  status?:string,
  error?:string,
  searchShow?: any,
  resetShows?: any
}

class Shows extends React.Component<Props,State> {
  constructor(props:Props){
    super(props);
    this.state = {searchText:''}
  }
  componentDidMount(){
    this.props.resetShows();
  }
  setSearchText = (val:string) => {
    this.setState({
      searchText: val
    })

  }
  render(){
    let content;
    if(this.props.status==="loading") {
      content = <div>Loading...</div>
    }
    else if(this.props.status==='succeeded' && this.props.showsList) {
      content = <div>
          {this.props.showsList.map((value, index) => {
            return <ShowCard key={index} showDetail={value}/>
          })}
      </div>
    }
  
    return (
      <div className={ShowsCSS.container}>
          <TextInput customClassName={ShowsCSS.textField} placeholder='Search for any show' onUserInput={this.setSearchText} onSubmit={()=>{this.props.searchShow(this.state.searchText)}}/>
          <PrimaryButton className={ShowsCSS.searchBtn} text="Search Show" onClick={() => this.props.searchShow(this.state.searchText)}/>
          {content}
      </div>
    ); 

  }

}
function mapStateToProps(state:RootState){
  return {
    showsList: state.shows.showsList,
    status: state.shows.status,
    errot: state.shows.error
  }
}
function mapDispatchToProps(dispatch: AppDispatch) {
  return bindActionCreators({
    searchShow: searchShow,
    resetShows: resetShows
  },dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(Shows);
