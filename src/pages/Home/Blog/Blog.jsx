import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header> <strong>1. Tell us the differences between uncontrolled and controlled components.</strong> </Accordion.Header>
                    <Accordion.Body>
                        React have two approaches for handelling form data which are 1. Uncontrolled Components and 2. Controlled Components. Here is the difference: <br />
                        <strong>Uncontrolled Components: </strong>Uncontrolled components are easier to setup. Uncontrolled components are components where the form data is handled by the DOM itself.The form data is managed by the HTML elements and not by the React component.
                        When the user interacts with the form, the DOM updates the state and not the React component.Uncontrolled components are easier to setup. <br />
                        <strong>Controlled Components: </strong>Controlled components are components where the form data is handled by the React component.  Controlled components require more code to set up and manage the state, but they are generally easier to debug and validate.Controlled components provide more flexibility as the form data can be modified and validated before it is submitted.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header> <strong>2. How to validate React props using PropTypes</strong> </Accordion.Header>
                    <Accordion.Body>
                        PropTypes is a useful tool for validating the props passed to a component in React. It allows you to specify the type and shape of props that a component should receive and throws a warning if a prop does not match the expected type or shape. This can help to catch errors early and improve the reliability of your application.
                        React provides a library called PropTypes that allows you to validate the props passed to a component. PropTypes can be used to specify the type and shape of the props that a component should receive, and it will throw a warning in the console if a prop does not match the expected type or shape.Once you have installed the prop-types package, you can import it into your component file and use it to validate the props.

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header> <strong>3. Tell us the difference between nodejs and express js.</strong> </Accordion.Header>
                    <Accordion.Body>
                        Node  and express js both are js technologies.They are commnly used in javascript web development.Node.js is a JavaScript runtime built on the Chrome V8 JavaScript engine & Express.js is a web application framework for Node.js. <br />
                        Here is some difference between node and express js: <br />
                        Node.js is a JavaScript runtime environment that allows you to run JavaScript code outside of a web browser, on the server-side.
                        Express.js is built on top of Node.js and provides a higher-level, more streamlined API for building web applications. <br />
                        Node.js is a lower-level technology that gives you more control over the details of your application. Express.js, on the other hand, provides a set of pre-built middleware functions that handle many of these tasks for you, making it easier to build web applications quickly and efficiently. <br />
                        Express.js is designed to be modular and extensible, with a wide range of third-party middleware modules available to add functionality to your application. Node.js, on the other hand, provides a lower-level API that requires you to write more code to achieve the same functionality.

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header> <strong>4. What is a custom hook, and why will you create a custom hook?</strong> </Accordion.Header>
                    <Accordion.Body>
                        A Custom hook is a javascript function that uses in a react hook.Custom hook allow you to reuse logic. Something happen to be change or not but when it change then we use custom hook.
                        <br />
                        There are many custom hooks are available in react. Such as useState, usetoggle, useref etc.
                        <br />
                        You might create a custom hook in React to: <br />

                        Abstract away complex or repetitive logic in a reusable way.
                        Share stateful logic between components, without the need for prop drilling or lifting state up.
                        Create a simpler and more concise interface for a complex or non-React API.
                        Isolate side effects or lifecycle methods to a single location for improved maintainability.
                        Improve the readability and organization of your code.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default Blog;