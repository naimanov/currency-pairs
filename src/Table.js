import React, { useEffect } from 'react';

function Table() {
  useEffect(() => {
    fetch('/api/v1/first').then((res) => console.log(res));
  });
  return <div></div>;
}

export default Table;
