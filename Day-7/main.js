const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];
  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

// array.prototype.some() is at least one person 19 ?
const isAdult = people.some(function (person) {
    const currentYear = (new Date()).getFullYear()
    if(currentYear - person.year >= 19){
        return true
    }
})
console.log(isAdult)

// array.prototype.every() is everyone 19 ?
const allAdults = people.every(person => (new Date()).getFullYear - person.year >= 19)
console.log(allAdults)

//array.prototype.find() subset object

/*const comment = comments.find(function (comment) {
    if (comment.id === 823423) {
         return true
    }
})
console.log(comments)
*/

//arrow function V.
const comment = comments.find(comments => comments.id === 823423)
console.log(comments)


//splice (index, 1)
const index = comments.findIndex(comment => comments.id === 823423)
console.log(index)

const newComments = [
    ...comments.splice(0, index),
    ...comments.splice(index + 1) //... ES6 -> splead 
]