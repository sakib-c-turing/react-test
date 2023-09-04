/*eslint-disable*/

// 1
function foo() {
  return foo;
}
console.log(foo() === foo);

// 2
console.log([] == []);

// 3
async function asyncFunc() {
  await Promise.resolve("Data");
  throw new Error("Error!");
}
asyncFunc().catch(console.log);

// 4
function Parent() {}
Parent.prototype.greet = function () {
  console.log("Hello from Parent");
};

function Child() {}
Child.prototype = new Parent();
const child = new Child();
child.greet();
