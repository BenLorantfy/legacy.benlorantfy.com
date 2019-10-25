import * as React from 'react';

export const DateRange: React.FC<{ startDate: string, endDate: string, showMonths?: boolean }> = (props) => {
  const months = [
    'January',
    'Febuary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const startDate = new Date(props.startDate);
  const endDate = new Date(props.endDate);

  const startMonthIndex = startDate.getMonth();
  const startMonth = months[startMonthIndex];

  const endMonthIndex = endDate.getMonth();
  const endMonth = months[endMonthIndex];

  const startYear = startDate.getFullYear(); 
  const endYear = endDate.getFullYear(); 

  const numDays = numDaysBetweenDates({ startDate: props.startDate, endDate: props.endDate });

  if (props.showMonths || typeof props.showMonths === "undefined") {
    // return (<span>{startMonth} {startYear} - {endMonth} {endYear} ({numDays} days)</span>);
    return (<span>{startMonth} {startYear} - {endMonth} {endYear}</span>);
  }

  // return (<span>{startYear} - {endYear} ({numDays} days)</span>);
  return (<span>{startYear} - {endYear}</span>);
}

function numDaysBetweenDates(params: { startDate: string, endDate: string }) {
  const date1 = new Date(params.startDate);
  const date2 = new Date(params.endDate);
  const diffTime = Math.abs(date2.getTime() - date1.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  return diffDays;
}