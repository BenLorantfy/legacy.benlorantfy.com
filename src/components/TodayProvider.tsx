import * as React from 'react';
import { useState } from "react";
import { TodayContext } from '../contexts/TodayContext';
import { useInterval } from '../hooks/useInterval';


/**
 * "inspired" by https://leonid.shevtsov.me/post/react-usedate-hook/
 *
 * @param param0 
 */
export const TodayProvider: React.FunctionComponent<{}> = ({ children }) => {
  const [currentDate, setDate] = useState(new Date());

  useInterval(() => {
    const newDate = new Date();

    if (removeTimeFromISODate(newDate.toISOString()) !== removeTimeFromISODate(currentDate.toISOString())) {
      setDate(newDate);
    }
  }, 1000)

  return <TodayContext.Provider value={currentDate}>{children}</TodayContext.Provider>;
};

function removeTimeFromISODate(isoDate: string) {
  return isoDate.split("T")[0];
}