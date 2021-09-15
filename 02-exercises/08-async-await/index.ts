// In this exercise we implement the functions "second" and
// "third" so that the following sequence of strings, in
// this order, is printed to console.
//
// first
// second
// third
//
// Please mind that no code other than the bodies of
// "second" and "third" may be altered.

const sleep = async (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const first = async (): Promise<void> => {
  await sleep(3000);

  console.log("first");
};

/**
 * Implement this function to write "second" to the console.
 */
const second = async (): Promise<void> => {
  await sleep(4000);

  console.log("second");
};

/**
 * Implement this function to write "third" to the console.
 */
const third = async (): Promise<void> => {
  await sleep(5000);

  console.log("third");
};

// Wee need to wrap the code in self invoking function
// since Node.js doesn't allow us to await on the global
// scope
(async () => {
  await Promise.all([first(), second(), third()]); // first, second, third
})();

export {};
