import React from 'react';
import { useSelector } from 'react-redux';

function HomePage(props){
  const hobbyList = useSelector( state => state.hobby.list);
  console.log('Hobby list: ', hobbyList);
  return (
    <div className='home-page'>
      <h1>Redux hook home page</h1>
    </div>
  );
}

export default HomePage;