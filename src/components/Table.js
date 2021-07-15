import React, { useEffect, useState } from 'react';
import TableRow from './TableRow';
import TableHead from './TableHead';
import { getTableData } from '../utils/getTableData';

function Table() {
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const queries = ['/api/v1/first', '/api/v1/second', '/api/v1/third'];
  const pollQueries = [
    '/api/v1/first/poll',
    '/api/v1/second/poll',
    '/api/v1/third/poll',
  ];

  //work with server running in localhost:3000
  //and "proxy": "http://localhost:3000" in package.json

  const fetchData = async (firstQuery, secondQuery, thirdQuery) => {
    try {
      const data = await Promise.all([
        fetch(firstQuery),
        fetch(secondQuery),
        fetch(thirdQuery),
      ]).then((responses) => {
        return Promise.all(responses.map((item) => item.json()));
      });
      const marketsData = await {
        infoFirst: data[0],
        infoSecond: data[1],
        infoThird: data[2],
      };
      const tableData = getTableData(marketsData);
      setTableData(tableData);
      setIsLoading(false);
      fetchData(...pollQueries);
    } catch (err) {
      setTimeout(() => {
        fetchData(...pollQueries);
      }, 500);
    }
  };

  useEffect(() => {
    fetchData(...queries);
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <div className='table'>
      <TableHead />
      {tableData.map((item) => {
        return <TableRow rowData={item} key={item.rowTitle} />;
      })}
    </div>
  );
}

export default Table;
