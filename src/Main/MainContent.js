import React from 'react';
// import LeftContent from './LeftContent';
// import RightContent from './RightContent';
const EmployData = [
  {
    name: 'Koti',
    age: '29',
  },
  {
    name: 'krishna',
    age: '29',
  },
  {
    name: 'cha',
    age: '24',
  },
];
function MainContent() {
  return (
    <div className="mainContent">
      {/* <LeftContent />
      <RightContent /> */}
      {EmployData.map((Employ) => (
        <div>
          <div>{Employ.name}</div>
          <div>{Employ.age}</div>
        </div>
      ))}
    </div>
  );
}
/*
<div>EmployData[0].name</div>
          <div>EmployData[0].age</div>
 */

export default MainContent;
