import React, { useState } from 'react';
import { ShowCard, TextInput } from '@lucifer/components';
import { getShows, RootState, useAppDispatch } from '@lucifer/services';
import './App.css';
import { PrimaryButton } from '@fluentui/react';
import { useSelector } from 'react-redux';

const App = () => {

  const [searchText,setSearchText] = useState('');
  const shows = useSelector( (state:RootState) => state.shows);
  const status = useSelector( (state:RootState) => state.shows.status);
  const dispatch = useAppDispatch();

  // useEffect(()=>{
  //   console.log('called on update');
  // },[searchText])
  let content;
  if(status==="loading") {
    content = <div>Loading...</div>
  }
  else if(status==='succeeded') {
    content = <div>
        {shows.shows.map((value, index) => {
          return <ShowCard key={index} showDetail={value}/>
        })}
    </div>
  }
 
  return (
    <div className='App'>
      <div className='App-header'>
        <TextInput onUserInput={setSearchText} onSubmit={()=>{dispatch(getShows(searchText))}}/>
        <PrimaryButton className="search-btn" text="Search" onClick={() => dispatch(getShows(searchText))}/>
      </div>
      {content}
    </div>
  ); 
}

export default App;