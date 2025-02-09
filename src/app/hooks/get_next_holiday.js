import { holidays } from "../data/category";

export default function getNextHoliday() {
  const today = new Date();
  const todayDate = `${String(today.getDate()).padStart(2, "0")}-${String(
    today.getMonth() + 1
  ).padStart(2, "0")}`;

  // Получаем ближайший праздник
  let upcomingHolidays = holidays
    .filter((holiday) => holiday.date >= todayDate) // Фильтруем те праздники, которые еще не прошли в этом году
    .sort((a, b) => a.date.localeCompare(b.date)); // Сортируем по дате

  if (upcomingHolidays.length === 0) {
    const nextYear = today.getFullYear() + 1;
    upcomingHolidays = holidays.map((holiday) => {
      const [day, month] = holiday.date.split("-");
      return {
        ...holiday,
        date: `${day}-${month}-${nextYear}`, // Обновляем год на следующий
      };
    });
  }

  return upcomingHolidays[0]; // Возвращаем ближайший праздник
}
