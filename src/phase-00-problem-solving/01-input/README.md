# 01 — Input

## 1. Problem

Given a list of product prices:

```js
const prices = [120, 50, 300, 80, 200, 150];
```

Problem:

> Find the highest price.

Before thinking about how to solve the problem, we first need to understand:

> What data does the program receive?

This is the **Input** of the problem.

---

## 2. Mental Model

A simple programming problem can be viewed as:

```text
Input
  │
  ▼
┌─────────────┐
│   Program   │
│     /       │
│ Algorithm   │
└──────┬──────┘
       │
       ▼
     Result
```

Before thinking about the algorithm, we should understand the data entering the program.

For example:

```js
function double(number) {
  return number * 2;
}

double(5);
```

The function receives:

```text
5
```

Therefore:

```text
Input = 5
```

The core idea is:

> Input is the data received by a program or function for processing.

---

## 3. Input Is Not Just One Example

Suppose we call:

```js
double(5);
```

The input for this specific execution is:

```text
5
```

But the function should not only work with `5`.

Other valid inputs might be:

```js
double(10);
double(20);
double(100);
```

Therefore, when solving a programming problem, we should not think only about the example given to us.

We need to think about the general problem.

```text
Specific Example
      │
      ▼
double(5)
      │
      ▼
Does it only work with 5?
      │
      ▼
     No
      │
      ▼
It should work with other valid inputs
```

---

## 4. Input Size

Consider:

```js
const prices = [120, 50, 300, 80, 200, 150];
```

The input contains six prices.

Therefore:

```text
n = 6
```

We commonly use `n` to represent the **size of the input**.

However, we should not simply memorize:

```text
n = input size
```

We should ask:

> What does `n` represent in this specific problem?

For the `prices` problem:

```text
prices
  │
  ├── 120
  ├── 50
  ├── 300
  ├── 80
  ├── 200
  └── 150

n = 6
```

So here:

```text
n = number of product prices
```

---

## 5. Why Input Size Matters

A program might receive:

```text
n = 6
```

or:

```text
n = 1,000
```

or:

```text
n = 1,000,000
```

The problem may remain the same, but the amount of data is very different.

For example:

```text
Find the maximum value

6 values
   │
   ▼
small amount of data


1,000,000 values
   │
   ▼
much larger amount of data
```

When the amount of data increases, the amount of work performed by the program **may also increase**.

This is one reason input size is important when studying Data Structures & Algorithms.

---

## 6. Important Distinction

A large input does **not** automatically mean the program must process every element.

It depends on the problem.

Consider:

```js
const numbers = [10, 20, 30, 40];
```

### Problem A — Get the first element

We only need:

```text
10
```

Conceptually:

```text
[10, 20, 30, 40]
 ↑
 only this value is needed
```

Even if the input contains:

```text
1,000,000 elements
```

the problem still only asks for the first element.

---

### Problem B — Find the maximum value

Now suppose the problem is:

> Find the largest number.

Conceptually:

```text
[10, 20, 30, 40]
 │   │   │   │
 └───┴───┴───┴── candidates
```

We cannot simply look at the first value and conclude that it is the maximum.

We need enough information to make sure another value is not larger.

Therefore:

```text
Large Input
    │
    ▼
Does the program need to process everything?
    │
    ▼
Depends on the problem
```

This distinction will become important later when studying **Time Complexity**.

---

## 7. Backend Application

This concept is directly related to Backend Engineering.

During development, a system might process:

```text
10 records
```

But in production it might process:

```text
100,000 records
```

or:

```text
10,000,000 records
```

For example:

```text
Database
   │
   ▼
10 records
   │
   ▼
Backend
```

Later:

```text
Database
   │
   ▼
1,000,000 records
   │
   ▼
Backend
```

A solution that works correctly with a small input may behave very differently when the input becomes much larger.

Therefore, a Backend Engineer should eventually be able to reason about both:

```text
Is the solution correct?
          +
How does it behave when the input grows?
```

At this stage, we are **not yet analyzing Big O**.

The important idea is simply:

> Input size can affect how much work a program needs to perform.

---

## 8. Example Code

```js
const prices = [120, 50, 300, 80, 200, 150];

const inputSize = prices.length;

console.log("Input:", prices);
console.log("Input size:", inputSize);
```

Mental model:

```text
prices
  │
  ▼
Input

prices.length
  │
  ▼
Number of elements
  │
  ▼
Input Size
  │
  ▼
n
```

For this example:

```text
n = 6
```

---

## 9. Common Mistakes

### Mistake 1 — Only thinking about the example

Wrong mental model:

```text
My code works with this example
              ↓
           Finished
```

Better mental model:

```text
Example
   │
   ▼
Understand the problem
   │
   ▼
Consider other valid inputs
```

---

### Mistake 2 — Memorizing `n = input size`

`n` does not have a universal business meaning.

Its meaning depends on the problem.

For example:

```text
Problem: product prices

n = number of prices
```

Another problem might use:

```text
n = number of users
```

or:

```text
n = number of requests
```

or:

```text
n = number of database records
```

Always ask:

> What does `n` represent in this problem?

---

### Mistake 3 — Assuming large input means processing everything

This is not always true.

```text
Large Input
    │
    ├── Get first element
    │       └── may only need one value
    │
    └── Find maximum
            └── needs information from all candidates
```

The amount of work depends on what the problem requires.

---

## 10. Feynman Summary

Input is the data given to a program or function for processing.

`n` commonly represents the size of that input.

For a list, `n` can represent the number of elements in the list.

When `n` becomes larger, the amount of work required by the program may increase.

However, a large input does not automatically mean every element must be processed.

The amount of work depends on the problem and how the data needs to be processed.

---

## 11. Self Check

Before considering this concept understood, I should be able to answer:

1. What is an input?
2. What is the input of the current problem?
3. What does `n` mean?
4. What does `n` specifically represent in the current problem?
5. Why should we care about input size?
6. Does a large input always mean every element must be processed?
7. Why can the same solution behave differently when the input grows?

---

## 12. Checkpoint

**Feynman Score:** 8.5/10

**Status:** PASS

Main understanding:

```text
Input
  │
  ▼
Data received by the program
  │
  ▼
Input has a size
  │
  ▼
n
  │
  ▼
When n grows
  │
  ▼
The amount of work MAY change
  │
  ▼
Depends on the problem
```

---
