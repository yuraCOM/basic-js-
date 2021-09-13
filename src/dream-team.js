import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
// export default function createDreamTeam(str) {
//   console.log(str)
//   if (!str || str.length ===0){
//     console.log('false')
//     return false
//   }
//
//   // else if(str.length() ===1 && typeof str[0] != "string"){
//   //   return  false
//   // }
//
//   else {
//
//     let twoStr = []
//
//     str = str.map( item =>{
//       if (typeof (item) === "string"){
//         item = item.trim().split('')[0]
//         twoStr.push(item)
//       }
//       else{
//         console.log('false')
//         return false
//
//       }
//     })
//     console.log(twoStr.sort().join(''))
//     if ( twoStr.length === 0 || twoStr[0] === false){
//       return false
//     }
//
//   else{
//       return twoStr.sort().join('').toUpperCase()
//     }
//
//   }
// }


// /***************

export default function createDreamTeam(array) {
  console.log(array)
  if (!array || array.length ===0 || !Array.isArray(array)){
    console.log('false')
    return false
  }
  if (array.length ===1 && typeof (array[0]) != "string" ){
    console.log('false')
    return false
  }
  else {
    let twoStr = []

    array.forEach( item =>{
      if (typeof (item) === "string"){
        item = item.trim().split('')[0]
        twoStr.push(item.toUpperCase())
      }
      else{
        console.log('false')
        return false
      }
    })
    if ( twoStr.length === 0){
      return false
    }
    else{
      return twoStr.sort().join('')
    }
  }
}
