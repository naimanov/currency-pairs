export const getTableData = (data) => {
  const tableData = [
    getRowDataBaseCurrency('rub/cupcake', data, 'RUB'),
    getRowDataBaseCurrency('usd/cupcake', data, 'USD'),
    getRowDataBaseCurrency('eur/cupcake', data, 'EUR'),
    getRowData('rub/usd', data, 'RUB', 'USD'),
    getRowData('rub/eur', data, 'RUB', 'EUR'),
    getRowData('eur/usd', data, 'EUR', 'USD'),
  ];
  return tableData;
};

const getRowDataBaseCurrency = (title, data, currency) => {
  const rowData = {
    rowTitle: title,
    rowValues: [
      {
        value: +data.infoFirst.rates[currency].toFixed(2),
        min: false,
        timestamp: data.infoFirst.timestamp,
      },
      {
        value: +data.infoSecond.rates[currency].toFixed(2),
        min: false,
        timestamp: data.infoSecond.timestamp,
      },
      {
        value: +data.infoThird.rates[currency].toFixed(2),
        min: false,
        timestamp: data.infoThird.timestamp,
      },
    ],
  };
  const minIndex = findMinIndex(rowData.rowValues);
  rowData.rowValues[minIndex].min = true;
  return rowData;
};

const getRowData = (title, data, currency1, currency2) => {
  const rowData = {
    rowTitle: title,
    rowValues: [
      {
        value: +(
          data.infoFirst.rates[currency1] / data.infoFirst.rates[currency2]
        ).toFixed(2),
        min: false,
        timestamp: data.infoFirst.timestamp,
      },
      {
        value: +(
          data.infoSecond.rates[currency1] / data.infoSecond.rates[currency2]
        ).toFixed(2),
        min: false,
        timestamp: data.infoSecond.timestamp,
      },
      {
        value: +(
          data.infoThird.rates[currency1] / data.infoThird.rates[currency2]
        ).toFixed(2),
        min: false,
        timestamp: data.infoThird.timestamp,
      },
    ],
  };
  const minIndex = findMinIndex(rowData.rowValues);
  rowData.rowValues[minIndex].min = true;
  return rowData;
};

const findMinIndex = (values) => {
  const row = values.map((item) => {
    return item.value;
  });
  const min = Math.min(...row);
  const minIndex = values.findIndex((item) => {
    return item.value === min;
  });
  return minIndex;
};
