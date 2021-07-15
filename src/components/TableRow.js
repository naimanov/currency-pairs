import React from 'react';

function TableRow({ rowData }) {
  return (
    <div className='table-row'>
      <div className='table-cell table-row-title'>{rowData.rowTitle}</div>
      {rowData.rowValues.map((item) => {
        return (
          <div
            className={item.min ? 'table-cell table-cell-min' : 'table-cell'}
            key={item.value + item.timestamp}
          >
            <span>{item.value}</span>
          </div>
        );
      })}
    </div>
  );
}

export default TableRow;
