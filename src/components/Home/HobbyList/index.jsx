import PropTypes from 'prop-types';
import React from 'react';
import './index.css';

HobbyList.propTypes = {
  hobbyList: PropTypes.array,
  onHobbyClick: PropTypes.func,
  activeId: PropTypes.number,
}
HobbyList.defaultProps = {
  hobbyList: [],
  activeId: null,
  onHobbyClick: null,
};

function HobbyList(props) {
  const  { hobbyList, onHobbyClick, activeId } = props;

  const handleOnClick = (hobby) => {
    if(onHobbyClick){
      onHobbyClick(hobby);
    }
  }
  return(
    <ul className ="hobby-list">
      {hobbyList.map(hobby => (
        <li
        className = {hobby.id === activeId ? 'active' : ''}
        key={hobby.id} 
        onClick={() =>{ 
          handleOnClick(hobby);
        }}
        >
          {hobby.title}
        </li>
      ))}
    </ul>
  );
};

export default HobbyList;