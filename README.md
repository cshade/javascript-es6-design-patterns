# Design Pattern Examples

A collection of design patterns in Javascript ES6 for reference, and for continually improving and expanding. So far, included are: Factory Method.

## Factory Method

In this pattern, an object we refer to as the factory encapsulates the creation of a specific implementation of an object of certain type, given the context. The specific implementation is a subclass — a common example is Rabbit as a subclass of a parent class Animal. In this example from the business domain of publishing, we are dealing with Publications instead of Animals. Here, a PubFactory's createPub method provides an appropriate implementation of a Publication object (a subclass of Publication).

The value: The user of the Publication object does not need to know, first of all, how to create the specific implementation in the given context (i.e., whether it's a novel or a journal). But the user needs the specific implementation in order to have the specific behavior. In other words, when printing catalog entries, the user is able to create a "novel" object and assume that it may be treated as a general Publication. This allows the user to render a catalog entry for this novel with printCatalogEntry() which is a method common to all subclasses of Publication, or any other behavior common to Publications.

Diagram: TK

### Run

Factory demo output to console (UI output is TK):
``` bash
node factory.js
```

## Built With
- Vanilla Javascript ES6 (no framework or utility libraries)
- [Node.js](https://nodejs.org/en/): JavaScript runtime
