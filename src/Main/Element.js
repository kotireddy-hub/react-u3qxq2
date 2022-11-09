import React from 'react';
function Element(props) {
  const { EmployData = [] } = props || []; // object destructing
  return (
    <div className="Element">
      {EmployData?.map((Employ) => (
        <div key={Employ.name}>
          <div>{Employ.name}</div>
          <div>{Employ.age}</div>
        </div>
      ))}
    </div>
  );
}

export default Element;
