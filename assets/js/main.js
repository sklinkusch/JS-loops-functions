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
  // with mathematical functions
  leap = isLeap(years);
  console.log(`${years}: ${leap}`);
  // with JS functions
  // var leapy = new Date(years, 0, 29).getDay();
  // if (leapy == 29) {
  //   console.log(`${years} is a leap year`);
  // }
}
