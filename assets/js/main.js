const isLeap = function(year) {
  let lyear = false;
  if (year % 400 == 0) {
    lyear = true;
  } else if (year % 4 == 0 && year % 100 != 0) {
    lyear = true;
  }
  return lyear;
};

let leap;
for (let years = 2018; years < 2118; years++) {
  leap = isLeap(years);
  console.log(`${years}: ${leap}`);
}
