'use strict';

module.exports.calSum = (event, context, callback) => {
  let totalSum = 0;

  let tempArr = process.argv.slice(2)

  let inputArr = []

  for (let i = 0; i < tempArr.length; i++) {
      inputArr.push(parseInt(tempArr[i]))
  }

  inputArr.forEach((ele) => {
      totalSum += ele
  })
  console.log(process.argv);
    
  const response = {
      statusCode: 200,
      body:JSON.stringify ({
          message: 'OK',
          total: totalSum
      }),
  };

  callback(null, response)
}
