#!/usr/bin/env python3

def findFactorialRecursive(number):
    if number == 1:
        return number
    return number * findFactorialRecursive(number - 1)



print(findFactorialRecursive(5))

def findFactorialIterative(number):
    factorial = 1
    while number > 1:
        factorial *= number
        number -= 1
    return factorial


print(findFactorialIterative(5))