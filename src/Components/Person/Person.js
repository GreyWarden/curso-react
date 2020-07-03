import React from 'react';

const person = ({ name, age, styles }) => (
    <div>
        <h2 style={styles}>
            My name is { name }, and I'm { age } years old
        </h2>
    </div>
);

export default person;
