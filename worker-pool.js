const crypto = require("crypto");
const NUM_REQUESTS = 10;
console.time('op');
for (let i = 0; i < NUM_REQUESTS; i++){
  // crypto.pbkdf2Sync(password, salt, iterations, keylen, digest)
  console.time('op'+i);
  crypto.pbkdf2Sync('secret', 'salt', 10000, 512, 'sha512');
  //crypto.pbkdf2('secret', 'salt', 10000, 512, 'sha512', () => {});
  console.timeEnd('op'+i);
}
console.timeEnd('op');
