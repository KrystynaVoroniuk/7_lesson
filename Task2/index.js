
function delay(seconds){
let p = new Promise((resolve, reject) => {
    setTimeout(() => resolve("result"), seconds)
  })
  return p;
}
delay(3000).then(result => console.log(result))