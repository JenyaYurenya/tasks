let num = prompt('Число', 18);

let message = (num < 15) ? 'В первую четверть' :
  (num < 31) ? 'Во вторую четверть' :
  (num < 46) ? 'В третью четверть' :
  (num < 59) ? 'В четвертую четверть' :
  'В четвертую четверть';

alert( message );