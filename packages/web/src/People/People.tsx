import React from 'react';
import { PeopleCard, TextInput } from '@lucifer/components';
import { AppDispatch, RootState, searchPeople, resetPeople } from '@lucifer/services';
import { PrimaryButton } from '@fluentui/react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PeopleDetails } from '@lucifer/core';
import PeopleCSS from './People.module.css'

type State = {searchText:string}
type Props = {
  peopleList?: PeopleDetails[],
  status?:string,
  error?:string,
  searchPeople?: any,
  resetPeople?: any,
}

class People extends React.Component<Props,State> {
  constructor(props:Props){
    super(props);
    this.state = {searchText:''}
  }
  componentDidMount(){
    this.props.resetPeople();
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
    else if(this.props.status==='succeeded' && this.props.peopleList) {
      content = 
      <div className={PeopleCSS.peopleContainer}>
          {this.props.peopleList.map((value, index) => {
            return <PeopleCard key={index} peopleDetail={value}/>
          })}
      </div>
    }
  
    return (
      <div className={PeopleCSS.container}>
          <TextInput placeholder='Search for any actor' customClassName={PeopleCSS.textField} onUserInput={this.setSearchText} onSubmit={()=>{this.props.searchPeople(this.state.searchText)}}/>
          <PrimaryButton className={PeopleCSS.searchBtn} text="Search People" onClick={() => this.props.searchPeople(this.state.searchText)}/>
          {content}
      </div>
    ); 

  }

}
function mapStateToProps(state:RootState){
  return {
    peopleList: state.people.peopleList,
    status: state.people.status,
    errot: state.people.error
  }
}
function mapDispatchToProps(dispatch: AppDispatch) {
  return bindActionCreators({
    searchPeople:searchPeople,
    resetPeople: resetPeople
  },dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(People);
