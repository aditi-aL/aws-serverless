'use strict';

module.exports.calSum = (event, context, callback)  => {
  let result = 0;
  let n = 10;
  for(let i = 1; i <= n; i++) {
    result = result + i;
  }
     
 const response = {
   statusCode: 200,
   body: JSON.stringify({
     message: 'OK',
       event: result
   }),
 };
 
  callback(null, response)
}