import React from 'react';

const DescribeChanel = ({ chanel, chanels }) => {
  // Ensure chanels is an array before calling .filter
  const filteredChanels = Array.isArray(chanels) ? chanels.filter(c => c._id !== chanel._id) : [];

  return (
    <div>
      <h3>{chanel.name}</h3>
      <p>{chanel.desc}</p>
      {/* Render other details */}
      <div>
        <h4>Other Channels</h4>
        {filteredChanels.map(c => (
          <div key={c._id}>
            <p>{c.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DescribeChanel;
