import React from 'react';

const person = (
    {
      name,
      age,
      styles,
      onClickHandler,
      onChangeHandler
    }
) => (
    <div>
      <h2 style={styles} onClick={onClickHandler}>
        My name is {name}, and I'm {age} years old
      </h2>
      <input type="text" value={name} onChange={onChangeHandler}/>
    </div>
);

export default person;
