export function formatBlogDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const suffix =
    ['th', 'st', 'nd', 'rd'][day % 10 > 3 || Math.floor(day / 10) === 1 ? 0 : day % 10] ||
    'th';
  const month = date.toLocaleDateString('en-US', { month: 'long' });
  const year = date.getFullYear();

  return `${day}${suffix} ${month}, ${year}`;
}
