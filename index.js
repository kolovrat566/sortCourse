let courses = [
  { name: "Courses in England", prices: [0, 100] }, 
  { name: "Courses in Germany", prices: [500, null] }, 
  { name: "Courses in Italy", prices: [100, 200] }, 
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];

let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

const filterCourse = (range) => {
  if (range[0] === range[1] && range[0] === null) return courses //  проверка на неограниченый поиск
  const newRange = typeof range[0] === typeof range[1] && range[1] < range[0] ?
    [range[1], range[0]] : range  //  конеченое число поиска может быть меньше начального и фильртация будет работать 
  return (courses.filter(item => (
    newRange[0] <= item.prices[0] &&
    1/newRange[1] <= 1/item.prices[1] &&
    (
      typeof newRange[1] !== typeof item.prices[1] ?
      item.prices[1] !== null :
      true
    )
  )))
}

const sortCourse = () => {
  return courses.sort((a, b) => {
    if (a.prices[1] === b.prices[1]) {
      return b.prices[0] - a.prices[0]
    } else {        
      return (
        (b.prices[1] === null ? Infinity : b.prices[1]) -
        (a.prices[1] === null ? Infinity : a.prices[1])
      )
    }
  })
}
