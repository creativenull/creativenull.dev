export function useCalendarDate() {
  const today = new Date();
  const dates = ref<number[][]>(getDates(today));

  return { today, dates };
}

/**
 * Get all dates of the month in a 2D array, initiate with all zeros and
 * then start filling the 2D array with the dates from 1-30/31 or 1-28 if
 * feb
 */
function getDates(today: Date): number[][] {
  const dates: number[][] = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ];

  const month = today.getMonth();
  const year = today.getFullYear();
  const firstDate = new Date(year, month, 1);
  const firstDay = firstDate.getDay();
  const lastDate = new Date(year, month + 1, 0);
  const lastDay = lastDate.getDay();

  let count = 1;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 7; j++) {
      if (i === 0) {
        if (j >= firstDay) {
          dates[i]![j] = count;
          count++;
        }
      } else {
        if (i === dates.length - 1) {
          if (j <= lastDay) {
            dates[i]![j] = count;
            count++;
          }
        } else {
          dates[i]![j] = count;
          count++;
        }
      }
    }
  }

  return dates;
}
