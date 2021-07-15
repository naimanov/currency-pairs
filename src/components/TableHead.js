import React from 'react';

function TableHead() {
  const tableTitles = ['Pair name/market', 'First', 'Second', 'Third'];
  return (
    <div>
      <div className='table-row'>
        {tableTitles.map((item) => {
          return (
            <div className='table-cell' key={item}>
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TableHead;
