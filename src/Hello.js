import React from 'react';
import './myCss.css';

function Hello({firstName, age}) {
  return (
    <div className="myInfoStyle">
       Hello, My name is <strong>{firstName}</strong> and age {age + 7}
    </div>
  );
}

export default Hello;
