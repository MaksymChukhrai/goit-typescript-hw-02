/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(day: Days): boolean {
  if (day === Days.Saturday || day === Days.Sunday) {
    return true; // Это выходные дни
  } else {
    return false; // Это дни недели
  }
}

// Пример использования
const today = Days.Saturday;
const isTodayWeekend = isWeekend(today);
console.log(`Сегодня выходной? ${isTodayWeekend}`);