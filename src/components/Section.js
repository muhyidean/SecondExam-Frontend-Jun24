import React from 'react';

const Section = ({ section }) => {

  return (
    <div className='SectionContent'>
      <p>ID: {section.id}</p>
      <p>Name: {section.name}</p>

      <button> Section Details</button>
      <br/>
      <button> Edit</button>
    </div>
  );
};

export default Section;