console.log('1')
new Promise((r) => {
  console.log('2');
  r('3')
}).then(v => {
  console.log(v);
})
setTimeout(() => {
  console.log('4');
})

new Promise((r) => {
  console.log('5');
  setTimeout(() => {
    console.log('6');
    r('0')
  }, 0);
}).then(v => console.log(v))

setTimeout(() => {
  new Promise(r => {
    console.log('7');
  })
})

console.log('8');