// строка проверить строку на наличие . и после нее на com или ru

// function checkDomain(str){
//     return str.includes( '.ru') || str.includes('.com')
// }
//
// console.log(checkDomain('https://mail.com'))

// строка проверить длину слова и узнать что длина четная и не больше 8 и не меньше 4

// function checkNum(item){
//     return item.length % 2 === 0 && item.length <= 8 && item.length >= 4
// }
//
// console.log(checkNum('hahaha'))

// строка поменять букву каждого четного индекса на E можно решить через map

// function checkIndex(str){
//     return str.split('').map((item , idx) => idx % 2 === 0 ? 'e':item ).join('')
// }
//
// console.log(checkIndex('ahahahahha'))

// строка1 cтрока2 проверить что пароли совпадают и не должны включать в себя пробелы только в начале ne poluchilos'

//FizzBuzz


// let reserveArray = new Array(100)
//
// let result = [...reserveArray].map((item, index) => {
//     let arrayItem = index + 1
//     if (arrayItem % 3 === 0 && arrayItem % 5 === 0) {
//         return 'FizzBuzz'
//     } else if (arrayItem % 3 === 0) {
//         return 'Fizz'
//     } else if (arrayItem % 5 === 0 && arrayItem % 3 !== 0) {
//         return 'Buzz'
//     } else {
//         return arrayItem
//     }
// })
//
// console.log(result)

// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => 'lorem-ipsum-dolor-sit-amet'

// function chechDash(str){
//     return str.join('-')
// }
// let array = ['lorem', 'ipsum', 'dolor', 'sit', 'amet']
// console.log(chechDash(array))

// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => 'lorem/ipsum/dolor/sit/amet'

// function chechDash(str){
//     return str.join('/')
// }
// let array = ['lorem', 'ipsum', 'dolor', 'sit', 'amet']
// console.log(chechDash(array))

// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => 'lorem ipsum dolor sit amet'

// function chechDash(str){
//     return str.join(' ')
// }
// let array = ['lorem', 'ipsum', 'dolor', 'sit', 'amet']
// console.log(chechDash(array))

// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => ['ipsum', 'sit']

// function checkLetter(str){
//   return str.filter((item) => item !== 'lorem' && item !== 'dolor' && item !== 'amet' )
// }
//
// console.log(checkLetter(['lorem', 'ipsum', 'dolor', 'sit', 'amet']))

// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => ['lorem', 'dolor', 'amet']

// function checkLetter(str){
//   return str.filter((item) => item !== 'ipsum' && item !== 'sit')
// }
//
// console.log(checkLetter(['lorem', 'ipsum', 'dolor', 'sit', 'amet']))

// ['lorem', 'ipsum', 'dolor', 'sit', 'amet'] => ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit']

// function checkLetter(str) {
//     str.push('consectetur', 'adipiscing', 'elit')
//     return str.join(' , ')
// }
//
// console.log(checkLetter(['lorem', 'ipsum', 'dolor', 'sit', 'amet']))

// [123,33,444,'22',55,66,77,88,99] => [123,33,444,55,66,77,88,99]

// function chechNum(str){
//     return str.filter((item)=> typeof item === "number")
// }
//
// console.log(chechNum([123,33,444,'22',55,66,77,88,99]))

// [123,33,444,'22',55,66,77,88,99] => [123,33,444,55,66,77,88,99,22]

// function checkNum(str){
//     str.push(22)
//     return str.filter((item)=> typeof item === "number")
// }
//
// console.log(checkNum([123,33,444,'22',55,66,77,88,99]))

// ['null', undefined, 0, false, true, ''] => [0, false, true]

// function checkLetter(str){
//   return str.filter((item) => item !== 'null' && item !== undefined && item !== '')
// }
//
// console.log(checkLetter(['null', undefined, 0, false, true, '']))

// ['null', undefined, 0, false, true, ''] => [0, false, true, 'null', undefined, '']

// function checkLetter(str) {
//     let a = str.splice(0, 2)
//     return str
// }
//
// console.log(checkLetter(['null', undefined, 0, false, true, ''])) ne poluchilos'

// [1123, 'qwe'] => [1123, 'qwe', 1123, 'qwe']

// function repeatTusk(str){
//     return [...str, ...str]
//
// }
//
// console.log(repeatTusk([1123, 'qwe']))

// [null, undefined] => [null, undefined, null, undefined]

// function repeatTusk(str){
//     return [...str, ...str]
// }
//
// console.log(repeatTusk([null, undefined]))

// 'lorem ipsum dolor sit amet' => ['lorem dolor', 'amet'] => 'lorem dolor amet'

// function transformString(str) {
//     str = str.replace('ipsum', '').replace('sit', '');
//     let arr = str.split(' ');
//     return [arr[0] + ' ' + arr[2], arr[arr.length - 1]];
// }
//
// console.log(transformString('lorem ipsum dolor sit amet'));
//
//
// function transformString(str) {
//     str = str.replace('ipsum', '').replace('sit', '');
//     let arr = str.split(' ');
//     return [arr[0] + ' ' + arr[2], arr[arr.length - 1]].join(' ');
// }
//
// console.log(transformString('lorem ipsum dolor sit amet'));
