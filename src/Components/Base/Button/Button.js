import React from 'react'
import styled from 'styled-components'

const BaseButton = styled.button`
    background-color: green;
    border: 1px solid darkgrey;
    border-radius: 0.7em;
    padding: 0.5em;
    cursor: pointer;
    user-select: none;
    outline: none;
    &:hover {
      background-color: lightgreen;
      border: 1px solid black;
      box-shadow: 2px 3px 1px darkgrey;
    }
`

const Button = ({text, onclick, classes}) => (
    <BaseButton
      onClick={onclick}
      className={classes}
    >
      {text}
    </BaseButton>
)

export default Button