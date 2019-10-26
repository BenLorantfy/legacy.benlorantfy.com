import { DateTime } from 'luxon';

const format = { month: 'long', year: 'numeric' };

function formatDuration(params: { startDate: DateTime, endDate: DateTime }) {
  const startDate = params.startDate;
  const endDate = params.endDate;
  const diff = endDate.diff(startDate).shiftTo('years', 'months')
  const years = diff.years;
  const months = Math.ceil(diff.months);

  if (years === 0) {
    return `${months} months`;
  }

  if (months === 0) {
    return `${years} years`;
  }

  return `${years} years, ${months} months`;
}

export const formatDateRange = (params: { startDate: string, endDate: string, showMonths?: boolean }) => {
  const startDate = DateTime.fromISO(params.startDate);
  const endDate = DateTime.fromISO(params.endDate);
  return `${startDate.toLocaleString(format)} - ${endDate.toLocaleString(format)} (${formatDuration({ startDate, endDate })})`

}
