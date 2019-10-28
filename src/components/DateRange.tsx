import { DateTime } from 'luxon';

function formatDuration(params: { startDate: DateTime, endDate: DateTime }) {
  const startDate = params.startDate;
  const endDate = params.endDate;
  const diff = endDate.diff(startDate).shiftTo('years', 'months')
  const years = diff.years;
  const months = Math.ceil(diff.months);

  if (years === 0) {  
    return `${months} ${months === 1 ? "month" : "months"}`;
  }

  if (months === 0) {
    return `${years} ${years === 1 ? "year" : "years"}`;
  }

  return `${years} ${years === 1 ? "year" : "years"}, ${months} ${months === 1 ? "month" : "months"}`;
}

export interface FormatParams {
  startDate: string,
  endDate?: string, 
  showMonths?: boolean, 
  showDuration?: boolean,
  today: string,
}

export const formatDateRange = (params: FormatParams) => {
  const startDate = DateTime.fromISO(params.startDate);
  const endDate = params.endDate ? DateTime.fromISO(params.endDate) : DateTime.fromISO(params.today);
  const showPresent = !params.endDate;
  const showMonths = typeof params.showMonths === "undefined" ? true : params.showMonths;
  const showDuration = typeof params.showDuration === "undefined" ? true : params.showDuration;

  const format = { month: showMonths ? 'long' : undefined, year: 'numeric' };
  const duration = formatDuration({ startDate, endDate });
  const suffix = showDuration ? `(${duration})` : "";
  
  return `${startDate.toLocaleString(format)} - ${showPresent ? "Present" : endDate.toLocaleString(format)} ${suffix}`;
}
