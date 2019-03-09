let promise = new Promise(resolve => {
  console.log('start 1');
  setTimeout(() => {
    console.log('async setTimeout');
    resolve('success');
  }, 1000)
}).then(value => {
  console.log(value);

  return new Promise(resolve => {
    setTimeout(() => {
      console.log('async2')
      resolve('success2')
    }, 1000);
  });
}).then(value => {
  console.log('3 :: ', value);
})


// 사용하는 방법
/*
promise.then(value => {
  console.log(value);
})*/
