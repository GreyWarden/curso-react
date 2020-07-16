import React from 'react';
import './Person.css'
import styled from 'styled-components'
const person = (
    {
      name,
      age,
      styles,
      onClickHandler,
      onChangeHandler
    }
) => (
    <Card>
      <h2 style={styles} onClick={onClickHandler}>
        My name is {name}, and I'm {age} years old
      </h2>
      <input type="text" value={name} onChange={onChangeHandler}/>
    </Card>
);

const Card = styled.div`
  width: 60%;
  min-width: 200px;
  max-width: 200px;
  margin: 1em;
  border-radius: 0.8em;
  border: 1px solid #123456;
  box-shadow: 0 2px 3px #654321;
  padding: 1em;
  text-align: center;
  flex: 1;
  :hover {
      transform: scale(1.7);
      border-radius: 1em;
      background-color: white;
      z-index: 99;
  }
`
export default person;
