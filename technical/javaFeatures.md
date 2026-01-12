---
title: Java Language Features
nav_order: 3
layout: home
parent: Technical
---

# Java Language Features
{: .no_toc }
Java provides certain functions, classes and algorithms by default which oftentimes aren't available in other languages. This page explains how they work, alongside relatively generic, language-agnostic implementations (in this case, C++).

1. TOC
{:toc}

## Casting
Java's casting is vital to properly replicate certain mathematical edge cases, such as the [Farlands](../worlds/quirks). Many languages do not have a defined behavior for casting values that're larger than the casted-to value such as [C++](https://www.open-std.org/jtc1/sc22/wg21/docs/papers/2017/n4713.pdf), which says that performing a narrowing cast is undefined behavior.

Java clearly defines casting behavior in its specs. Casting behavior is defined in Chapter 5 of the [Java Language Specification](https://docs.oracle.com/javase/specs/jls/se8/jls8.pdf).

To cover the case most relevant for the Farlands (`double` to `int`):
1. If the floating-point number is a `NaN`, return `0`.
2. The floating-point number is rounded towards `0`.
3. If the value is smaller than the smallest possible value, the smallest possible value is returned (e.g. `INT32_MIN`)
4. If the value is larger than the largest possible value, the largest possible value is returned (e.g. `INT32_MAX`)

## hashCode
HashCode is for turning a string into an integer. It's used in Minecraft to transform text-based seeds into a number.

A basic implementation looks like this:
```cpp
int h = 0;
// Hash is 0 if text is empty or invalid
for (int i = 0; i < text.size(); i++) {
    h = 31 * h + text[i];
}
// Returns a 32-Bit Integer
return h;
```

## Random
This section will explain how the Random Number Generator for Beta Minecraft/Java 8 worked, as that is what Minecrafts old generator was largely utilizing for its data.

### Initilization
The Random class always starts with an initial seed, consisting of a signed 64-Bit Integer. If nothing is provided, the current timestamp is used instead. The actual seed is calculated from there via combining it with a few other numbers.

Our final seed value can be calculated as follows.

```c
seed = (inputSeed ^ 0x5DEECE66D) & 0xffffffffffff;
```

In other words, our input seed, for example `3257840388504953787` is XOR'd with 0x5DEECE66D, then limited to 48-Bits.

Our initial seed would become `0x2C974D2EC5D6`/`49028346594774`.

### Next
Whenever a new random number is needed, the next functon is utilized, which generates a new random number based on the seed. It takes in the number of bits that need to be generated and limits the result to that number of bits, capping out at 32.

```c
seed = (seed * 0x5DEECE66D + 11) & 0xffffffffffff;
return int(seed >> (48 - bits));
```

Our seed, after being initialized, would now become `0x7F9FD7F08029`/`140324499390505`.

{: .missing }
> How the next function is used to generate other numers

## Further Reading
- [Random.java (JDK8 Source Code)](https://github.com/openjdk/jdk8u-dev/blob/master/jdk/src/share/classes/java/util/Random.java)