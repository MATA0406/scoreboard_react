console.log('start');

function resolveAfter2Secondes(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x)
    }, 2000)
  })
}

async function add1(x) {
  const a = await resolveAfter2Secondes(20);
  console.log(a);
  const b = await resolveAfter2Secondes(30);
  return x + a + b;
}

console.log(add1(10).then((value) => console.log('add1:: ', value)));

console.log('end');