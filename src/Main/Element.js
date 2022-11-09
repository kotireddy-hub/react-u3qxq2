import React from 'react';
function Element(props) {
  const { Element = [] } = props || []; // object destructing
  //javascript onclick() / react onClick
  const [state, setState] = React.useState('Helllo'); // react Hooks
  const handleToSetState = () => {
    setState('test');
  };
  return (
    <div className="Element">
      {Element?.map((Employ) => (
        <div key={Employ.name}>
          <div>{Employ.name}</div>
          <div>{Employ.age}</div>
        </div>
      ))}
      <div>{state}</div>
      {/* <button onClick={() => setState('test')}> Click </button> */}
      <button onClick={() => handleToSetState()}> Click </button>
    </div>
  );
}

export default Element;
