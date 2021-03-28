# Loscore Returns

This looks familiar! But with a few small changes.

1.  During precourse, you relied a lot on the browser. But now you know what Node is (hopefully. If you don't, go google it)! Let's get used to using Node to run our JavaScript and rely a little less on the browser.
1.  Skim `package.json` and see if you recognize anything.

Note: While getting to know the Lodash and Underscore libraries is good, this exercise's intent is to practice and gain fluency with creating higher order functions and reading tests. We want you to think about what happens "underneath the hood" of some of these well-known libraries---how are things done? And to show you that you can absolutely do the same---it just takes time and patience.

## Objectives

* Be able to use Node and yarn to run tests
* Ensure there are at least two tests for each method
* Be able to commit code after each milestone
* Create functions that accept functions as arguments (higher order functions)
* Write code to make Jasmine tests pass
* Store values as a hash map
* Retrieve values from a hash map

## Set Up

Fork and clone this repository following the Code Chrysalis git flow instructions.

Install dependencies: `yarn install`

Command to run tests: `yarn test`

## Basic Requirements

Successfully completing these problems DOES NOT mean that you've memorized how these work. On the contrary, focus on thinking about the inputs and the outputs of each method.

### Arrays

1.  `_.uniq` - uniq should take an array and return a duplicate-free version

### Collections

1.  `_.map` - similar to `_.each`, but returns an array capturing all results returned by passing the iteratee the value, key (or index), and collection. The iteratee should return the resulting value that is to be stored in the array eventually returned by map. Use `each` in your solution.

1.  `_.reject` - return all elements of an array that DON'T pass a truth test. Use `filter` in your solution.

1.  `_.reduce` - reduces a collection to a single value by repetitively calling the `iterator(accumulator, item)` for each item. The accumulator should be the return value of the previous iterator call.

If no starting value is passed, the first element in the collection should be used as the accumulator.

```js
const numbers = [1, 2, 3];
const accumulate = (result, int) => {
  return result + int;
};
const sum = _.reduce(numbers, accumulate(total, number), 0); // ---> 6
```

4.  `_.every` - determines if all the elements pass the given truth test. Returns a boolean, takes in a callback (the test). It should use `_.reduce`.

### Objects

1.  `_.extend` - extends a main object with the properties of another object. The first argument should be the main object and subsequent arguments should be objects to add to the main object. Please use `_.each` if you can. It makes shallow copies only.

### Functions

These are function decorators. Function decorators take a function and return a new version of that function that works just a little bit differently.

1.  `_.once` - returns a function that can be called at most one time. Any subsequent calls should return the previously returned value. You'll need to use closures for this.

1.  `_.memoize` - takes a function as an input. It takes the input function's results and stores them (a cache). It should return a function that, when called, will check if it has already computed a result for the given argument. It should return the cached value if possible. You may want to think about using `JSON.stringify`. Assume the input function only takes primitives as arguments.

1.  `_.invoke` - calls the method named by `methodOrKey` on each value in the list. Assume there are no extra arguments.

Besides being a string, `methodOrKey` can also be a function passed in. If it is a function, then we can apply the values directly onto it. You may want to use [`apply`](http://lmgtfy.com/?q=apply+avascript) here, or at least learn about it.

```js
_.invoke([[5, 1, 7], [3, 2, 1]], "sort");
// => [[1, 5, 7], [1, 2, 3]]
```

## Advanced Requirements

Do these only if you have done the above. **You will also need to write tests for these.** Advanced requirements are not required, but attempts are highly encouraged. These methods can be found in the Underscore library. Please check out the Underscore documentation for more information or examples!

As always, remember to commit.

1.  `_.sortBy` - returns a sorted copy of a collection (first input) and ranks them by ascending order based on the results of each value passed through the iteratee (second input). The iteratee may also be the string name of the property to sort (e.g. length).

1.  `_.zip` - zips together two or more arrays with elements of the same index going together.

1.  `_.delay` - delays a function for a given number of milliseconds, then calls it with the given arguments.

1.  `_.defaults` - very similar to `_.extend`, but it doesn't overwrite a key that already exists.

1.  `_.throttle` - returns a function that, when invoked, can only be triggered once during a given window of time.

1.  Create a solutions slide deck for one of the advanced requirements methods.
