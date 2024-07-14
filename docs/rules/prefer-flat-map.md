# Prefer [`R.flatMap`] over consecutive [`R.map`] and [`R.flat`]

When using [`R.map`] and [`R.flat`], it can be more concise to use [`R.flatMap`] instead.

## Rule Details

This rule takes no arguments.

The following patterns are considered warnings:

```js
t = R.flat(R.map(a, f));
```

The following patterns are not considered warnings:

```js
t = R.map(a, f);

t = R.flatMap(a, f);
```

## When Not To Use It

If you do not want to enforce using [`R.flatMap`], and prefer [`R.map`] and [`R.flat`] instead, you should not use this rule.
