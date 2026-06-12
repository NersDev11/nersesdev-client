function isValidDateFormat(dateString) {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(dateString)) return false;

  const date = new Date(dateString);
  const timestamp = date.getTime();
  if (isNaN(timestamp)) return false;

  const [year, month, day] = dateString.split("-").map(Number);

  return (
    date.getUTCFullYear() === year &&
    date.getUTCMonth() + 1 === month &&
    date.getUTCDate() === day
  );
}

export function getAge(birthDateString) {
  if (!isValidDateFormat(birthDateString))
    throw new Error("Incorrect birth date format. Use YYYY-MM-DD");

  const today = new Date();
  const birthDay = new Date(birthDateString);

  let age = today.getFullYear() - birthDay.getFullYear();
  const monthDiff = today.getMonth() - birthDay.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDay.getDate())
  ) {
    age--;
  }

  return age;
}
