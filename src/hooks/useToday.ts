import { useContext } from 'react';
import { TodayContext } from '../contexts/TodayContext';

export const useToday = () => useContext(TodayContext);
