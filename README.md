# StringBuilder
A StringBuilder.

## Table Of Contents
* [General Info](#general-info)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Contact](#contact)

## General Info
I wrote this to make the manipulation of strings more efficient and simpler.

## Technologies Used
I'm only using plain, vanilla Typescript with no libraries or other packages.

## Features
* Stores a string.
* Build a string as a chain of *append* operations.
* Once the string is completed, *build* the entire string.
* Can *clear* the built string to remove all the joined strings from the underlying array. 

## Setup
Just import the StringBuilder class into your project.

## Usage
Instantiate a StringBuilder object:
```
    StringBuild sb = new StringBuilder();
```
Check whether *sb* is empty.
```
   sb.isEmpty()
```
Chain together any number of strings to build a complete string.
```
   sb.append("h").append("e").append("l").append("l").append("o");
```
Then, build the completed string. So that *sb* now contains *"hello"*.
```
    const string = sb.build();
```
We can now *clear* the underlying *string* by
```
   sb.clear();
```
And, build the string again, which gives and empty string, *""*..
```
    const string = sb.build();
```

## Project Status
This project is essentially completed. 

## Room for Improvement
The areas where there may be some room for improvement are those where some properties may be better suited to be public and thereby a couple functions should be removed.

## Contact
Feel free to contact me @michaelrjamesjr on twitter.
