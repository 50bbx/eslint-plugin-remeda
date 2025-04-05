# remeda/prefer-filter

💼 This rule is enabled in the ✅ `recommended` config.

<!-- end auto-generated rule header -->

When using R.forEach with a single `if` statement, you should probably use `R.filter` or `R.some` instead.

## Rule Details

This rule takes one argument, maximum path length (default is 3).

## Options

## Examples

The following patterns are considered warnings:

```js
R.forEach(users, function (user) {
  if (user.name.givenName === "Bob") {
    // ...
  }
});
```

The following patterns are not considered warnings:

```js
const x = R.filter(users, function (user) {
  return !user.active && user.name.givenName === "Bob";
});
```
