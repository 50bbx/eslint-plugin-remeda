# remeda/prefer-constant

💼 This rule is enabled in the ✅ `recommended` config.

<!-- end auto-generated rule header -->

When you want a function that always returns the same value, it can be more concise to use `R.constant`.

## Rule Details

This rule takes two arguments:

- whether or not to check arrow functions
- whether or not to check function declarations (named functions)

## Options

## Examples

The following patterns are considered warnings:

```js
var three = function () {
  return 3;
};
//Including arrow functions:
/*eslint remeda/prefer-constant: [2, true]*/
var pi = () => 3.1415;

//Including function declarations
/*eslint remeda/prefer-constant: [2, true, true]*/
function one() {
  return 1;
}
```

The following patterns are not considered warnings:

```js
var identity = function (x) {
  return x;
};

var getObj = function () {
  return { a: 1 };
};
```

The last example is not a warning because it is not equivalent to `R.constant({a:1})`, which always returns the same instance.
Consider:

```js
var getObj = R.constant({ a: 1 });
x = getObj();
x.a = 2;
console.log(getObj()); // ==> {a:2}
```

## When Not To Use It

If you do not want to enforce using `R.constant`, you should not use this rule.
