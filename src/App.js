import React from 'react';
import Hello from './Hello'

function App({name, qualification}) {
  return (
    <div>
      <h1>My qualification is {qualification}</h1>
      <ul>
        <li>Boot Camp Class1</li>
        <li>Boot Camp Class2</li>
        <li>Boot Camp Class3</li>
      </ul>
      <Hello firstName = {name} age = {20} />
    </div>
  );
}

export default App;
