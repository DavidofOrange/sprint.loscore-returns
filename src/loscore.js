class LoScore {
  identity(val) {
    return val;
  }

  /**
  | ARRAYS
  |~~~~~~~~~~
  * */
  uniq(array) {
    const result = [];
    const lookUp = {};
    for (let num of array) {
      lookUp[num] = true;
    }
    for (let num of array) {
      if (lookUp[num] === true) {
        result.push(num);
        lookUp[num] = false;
      }
    }
    return result;
  }

  /**
  | COLLECTIONS
  |~~~~~~~~~~
  * */
  each(collection, iterator) {
    if (collection instanceof Array) {
      for (let i = 0; i < collection.length; i += 1) {
        iterator(collection[i], i, collection);
      }
    } else {
      const keys = Object.keys(collection);
      for (let i = 0; i < keys.length; i += 1) {
        iterator(collection[keys[i]], keys[i], collection);
      }
    }
  }

  map(collection, iteratee) {
    let result = [];
    this.each(collection, (value, index, collection) => {
      result.push(iteratee(value));
    });
    return result;
  }

  filter(collection, test) {
    const result = [];
    this.each(collection, (val) => test(val) && result.push(val));
    return result;
  }

  reject(collection, test) {
    let result = [];
    this.filter(collection, (value) => {
      if (test(value) === false) {
        result.push(value);
      }
    });
    return result;
  }

  reduce(collection, iterator, accumulator) {
    if (typeof accumulator === "undefined") {
      accumulator = collection[0];
      let newColl = [];
      for (let i = 1; i < collection.length; i++) {
        newColl.push(collection[i]);
      }

      this.each(newColl, (value) => {
        accumulator = iterator(accumulator, value);
      });
    } else {
      this.each(collection, (value) => {
        accumulator = iterator(accumulator, value);
      });
    }
    return accumulator;
  }

  every(collection, test) {
    if (collection.length === 0) {
      return true;
    }
    return this.reduce(collection, (value) => {
      if (value === true) {
        return true;
      }
      for (let i = 0; i < collection.length; i++) {
        if (!test(collection[i])) {
          return false;
        }
      }
      return true;
    });
  }

  /**
  | OBJECTS
  |~~~~~~~~~~
  * */
  extend(obj) {
    let shallowCopy;
    this.each(arguments, (value) => {
      shallowCopy = Object.assign(obj, value);
    });
    return shallowCopy;
  }

/**
  | FUNCTIONS
  |~~~~~~~~~~
  * */

  once(func) {
    let test = false;
    let myFunction;
    return function (value) {
      if (test === false) {
        test = true;
        myFunction = func(value);
        return myFunction;
      }
      if (test === true) {
        return myFunction;
      }
    };
  }

  memoize(func) {
    const storedObject = {};
    const storeResult;
    return function (value) {
      JSON.stringify(value);
      if (storedObject[value] !== undefined) {
        return storedObject[value];
      } 
        storeResult = func(value);
        storedObject[value] = storeResult;
        return storeResult;
    };
  }

  invoke(collection, functionOrKey) {
    if(typeof functionOrKey === "string"){
        return this.map(collection, (value) => {
         return value[functionOrKey].apply(value);
        })
        }
    if(functionOrKey instanceof function) {
      return this.map(collection, (value) => {
        return functionOrKey.apply(value);
      })
    }}
module.exports = new LoScore();
