type CacheValue<T> = {
  current?: (val: T) => void;
};

const cache: CacheValue<string> = {
  current: undefined,
};
let prevValue: string;

const something = (value: string) => {
  // check whether the value has changed
  if (!cache.current || value !== prevValue) {
    cache.current = () => {
      console.log(value);
    };
  }

  // refresh it
  prevValue = value;
  return cache.current;
};

const first = something("first");
const anotherFirst = something("first");
const second = something("second");

first(); // logs "first"
second(); // logs "second"
console.log(first === anotherFirst); // will be true
