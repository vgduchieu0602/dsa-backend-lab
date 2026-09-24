# 02 — Output

## 1. Problem

Given a list of backend response times:

```js
const responseTimes = [120, 80, 450, 200];
```

Requirement:

> Count the number of requests with a response time greater than 150ms.

Before writing code, we need to determine:

> What result does the problem expect?

This is the **Output** of the problem.

---

## 2. Mental Model

A simple programming problem can be viewed as:

```text
                PROBLEM
                   │
                   ▼
              Requirement
                   │
                   ▼
        ┌─────────────────────┐
        │                     │
        ▼                     ▼
      INPUT                 OUTPUT
        │                     ▲
        │                     │
        └────── PROCESS ──────┘
```

For the current problem:

```text
Input
  │
  ▼
[120, 80, 450, 200]
  │
  ▼
Find values > 150
  │
  ▼
450, 200
  │
  ▼
Count them
  │
  ▼
2
```

Therefore:

```text
Output value = 2
Output type  = number
```

---

## 3. What Is Output?

Output is the result that a problem requires a program or function to produce after processing its input.

Example:

```js
function double(number) {
  return number * 2;
}

double(5);
```

Mental model:

```text
Input
  │
  ▼
  5
  │
  ▼
double()
  │
  ▼
 10
  │
  ▼
Output
```

Therefore:

```text
Input  = 5
Output = 10
```

---

## 4. Requirement Determines Output

Consider the same input:

```js
const prices = [100, 250, 80, 400];
```

Different requirements can produce different outputs.

### Requirement A

> Find the largest price.

Output:

```text
400
```

Type:

```text
number
```

---

### Requirement B

> Count how many prices are greater than 100.

The matching values are:

```text
250
400
```

But the requirement asks for their **count**.

Therefore:

```text
Output = 2
```

Type:

```text
number
```

---

### Requirement C

> Get all prices greater than 100.

Now the requirement asks for the actual values.

Therefore:

```js
[250, 400]
```

Type:

```text
array of numbers
```

---

## 5. Same Input Does Not Mean Same Output

The input can remain exactly the same:

```text
[100, 250, 80, 400]
```

while the required output changes.

```text
                    SAME INPUT
                        │
                        ▼
             [100, 250, 80, 400]
                        │
          ┌─────────────┼─────────────┐
          │             │             │
          ▼             ▼             ▼

      Find max       Count > 100    Get > 100
          │             │             │
          ▼             ▼             ▼

         400            2         [250, 400]

       number         number      array<number>
```

Therefore:

```text
Input alone
    │
    ▼
is not enough to determine Output

Requirement
    │
    ▼
determines what result is expected
```

---

## 6. Output Value vs Output Type

When identifying output, ask two questions:

```text
What value should be returned?

              +

What type/shape should be returned?
```

Example:

```text
Requirement:
"Check whether any price is greater than 1000."
```

With:

```js
const prices = [100, 250, 80, 400];
```

Output:

```text
false
```

Output type:

```text
boolean
```

Another requirement:

```text
"Get all prices greater than 100."
```

Output:

```js
[250, 400]
```

Output type:

```text
array of numbers
```

So:

```text
Expected Output
      │
      ├── Value
      │
      └── Type / Shape
```

Both matter.

---

## 7. Read the Requirement Carefully

Small differences in requirement wording can completely change the output.

Consider:

```text
Count active users
```

versus:

```text
Get active users
```

They may use the same condition:

```text
active === true
```

but their outputs are different.

Example input:

```js
const users = [
  { name: "An", active: true },
  { name: "Binh", active: false },
  { name: "Hieu", active: true }
];
```

### Count active users

Expected output:

```text
2
```

### Get active users

Expected output:

```js
[
  { name: "An", active: true },
  { name: "Hieu", active: true }
]
```

Mental model:

```text
Same Input
    +
Same Condition
      │
      ▼
Different Requirement
      │
      ▼
Different Output
```

---

## 8. Common Output Types

At this stage, some simple outputs we may encounter are:

```text
number
boolean
string
array
object
```

Examples:

```text
Count users
    │
    ▼
number


Does user exist?
    │
    ▼
boolean


Get username
    │
    ▼
string


Get active users
    │
    ▼
array


Get user profile
    │
    ▼
object
```

The important point is not to memorize this list.

The important question is:

> What output does this specific requirement expect?

---

## 9. Backend Connection

Output is especially important in Backend Engineering because APIs have expected response contracts.

Example requirement:

```text
GET /users/:id
```

Expected response:

```js
{
  id: 1,
  name: "Hieu",
  email: "hieu@example.com"
}
```

Imagine the backend returns:

```js
"Hieu"
```

The value `"Hieu"` may be correct information.

But the output is still incorrect because the API requirement expected an object with:

```text
id
name
email
```

Mental model:

```text
API Requirement
      │
      ▼
Expected Output Contract
      │
      ▼
Implementation
      │
      ▼
Actual Output
      │
      ▼
Compare with expected output
```

Therefore, backend code is not correct simply because it returns some correct data.

It must return the result required by the contract.

---

## 10. Correct Code Can Still Solve the Wrong Problem

Suppose the requirement is:

> Count active users.

Expected:

```text
2
```

But the developer implements logic that returns:

```js
[
  { name: "An", active: true },
  { name: "Hieu", active: true }
]
```

The filtering logic may work perfectly.

There may be no runtime error.

The returned users may even be correct.

But:

```text
Requirement
    │
    ▼
Count users
    │
    ▼
Expected: number


Implementation
    │
    ▼
Get users
    │
    ▼
Actual: array
```

The program solved a different problem.

Therefore:

```text
Code runs
    ≠
Problem solved correctly
```

---

## 11. Problem-Solving Flow So Far

After learning Input and Output, the current mental model is:

```text
                 PROBLEM
                    │
                    ▼
              Read Requirement
                    │
          ┌─────────┴─────────┐
          ▼                   ▼
        INPUT               OUTPUT
          │                   │
          ▼                   ▼
What data is given?    What result is expected?
          │                   │
          ▼                   ▼
What is its size?      What value?
What does n mean?      What type/shape?
```

We are still **not solving the algorithm yet**.

Before asking:

```text
How do I solve this?
```

we first establish:

```text
What do I receive?

and

What must I produce?
```

---

## 12. Example Code

```js
const responseTimes = [120, 80, 450, 200];

function countSlowRequests(times) {
  let count = 0;

  for (const time of times) {
    if (time > 150) {
      count++;
    }
  }

  return count;
}

const result = countSlowRequests(responseTimes);

console.log(result);
```

Output:

```text
2
```

Mental model:

```text
responseTimes
     │
     ▼
   Input
     │
     ▼
countSlowRequests()
     │
     ▼
     2
     │
     ▼
   Output
```

For this problem:

```text
Input:
[120, 80, 450, 200]

Output:
2

Output type:
number
```

The algorithm itself is not the focus of this lesson.

The important point is understanding what the function is expected to return.

---

## 13. Common Mistakes

### Mistake 1 — Returning matching values instead of their count

Requirement:

```text
Count values > 100
```

Wrong output:

```js
[250, 400]
```

Correct output:

```text
2
```

---

### Mistake 2 — Correct type but wrong value

Requirement:

```text
Is there any value > 1000?
```

Input:

```js
[100, 250, 80, 400]
```

Correct type:

```text
boolean
```

But the correct value is:

```text
false
```

We need both:

```text
Correct Value
      +
Correct Type / Shape
```

---

### Mistake 3 — Solving a similar but different problem

```text
Count active users
```

is not the same problem as:

```text
Get active users
```

Always read the action requested by the requirement.

---

## 14. Feynman Summary

Output is the result that a problem requires a program or function to produce after processing its input.

When identifying output, I should determine both:

```text
Output Value

and

Output Type / Shape
```

The same input can produce different outputs because the requirement can ask for different things.

For example:

```text
Count values > 150
→ 2

Get values > 150
→ [450, 200]
```

Even though both use the same input and condition, one requirement asks for the number of matching values while the other asks for the actual matching values.

For Backend Engineering, identifying the expected output is important because the implementation needs to follow the required API or business contract.

A program can run correctly but still solve the wrong problem if it produces the wrong output.

---

## 15. Self Check

Before moving on, I should be able to answer:

1. What is Output?
2. What output value does the problem expect?
3. What is the type or shape of that output?
4. Can the same input have different outputs?
5. Why can the same condition produce different outputs?
6. What is the difference between "count" and "get"?
7. Why can working code still solve the wrong problem?
8. Why does Output matter in Backend Engineering?

---

## 16. Checkpoint

**Feynman Score:** 8.5/10

**Status:** PASS

Core mental model:

```text
Problem
   │
   ▼
Requirement
   │
   ▼
Expected Output
   │
   ├── Value
   │
   └── Type / Shape
```

And:

```text
Same Input
    +
Same Condition
      │
      ▼
Different Requirement
      │
      ▼
Different Output
```

---

