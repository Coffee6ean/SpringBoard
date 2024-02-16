# React Testing

## Testing in React:

- React can use any testing framework
- ***create-react-app*** ships with ***jest*** and ***react-testing-library***
- ***npm test*** is set up to find & run jest tests
    - Files like *.test*, *.spec*, or in ***__tests__*** folder
    - At Rithm, we prefer `.test.js` in same folder as component
- ***npm test*** runs all tests; can optionally specify a file

## React Testing Library:

- [React Testing Library](https://github.com/testing-library/react-testing-library) is a popular testing add-on for React
- Guiding principle: “The more your tests resemble the way your software is used, the more confidence they can give you.”
- Tests focus on mimicking how people interact with your site, not implementation details

### Types of Tests
**Smoke Tests**
- Does the component render, or does it blow up (like a smoking box)?

**Snapshot Tests**
- Does the component’s rendered HTML render in the way you expect?
