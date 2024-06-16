import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  sampleFaqData = [
    {
      question: 'What is Lorem Ipsum?',
      answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
      question: 'Why do we use it?',
      answer: 'It is a long established fact that a reader will be distracted by the readable content.'
    },
    {
      question: 'Is Angular a programming language?',
      answer: 'No, Angular is a platform and framework for building client-side applications with HTML, CSS, and JavaScript/TypeScript.'
    },
    {
      question: 'How to install Node.js?',
      answer: 'You can download and install Node.js from the official website: https://nodejs.org/'
    },
    {
      question: 'What is the difference between Java and JavaScript?',
      answer: 'Java is a programming language, while JavaScript is a scripting language used for web development.'
    },
    {
      question: 'What is responsive design?',
      answer: 'Responsive design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes.'
    },
    {
      question: 'How to center an element in CSS?',
      answer: 'You can use the "margin: auto;" property along with a specified width to horizontally center a block-level element.'
    },
    {
      question: 'What is the purpose of the alt attribute in HTML?',
      answer: 'The alt attribute in HTML is used to provide alternative text for an image if the image cannot be displayed.'
    },
    {
      question: 'How to create a Git repository?',
      answer: 'You can create a Git repository using the "git init" command in your project directory.'
    },
    {
      question: 'What is the difference between margin and padding?',
      answer: 'Margin is the space outside the border of an element, while padding is the space inside the border of an element.'
    },
    {
      question: 'What is the purpose of the "use strict" statement in JavaScript?',
      answer: '"use strict" is a statement in JavaScript that enables strict mode, catching common coding errors and preventing the use of certain features.'
    },
    {
      question: 'How to loop through an array in JavaScript?',
      answer: 'You can use a for loop, forEach(), or other looping constructs to iterate through elements in an array in JavaScript.'
    },
    {
      question: 'What is the meaning of API?',
      answer: 'API stands for Application Programming Interface. It defines a set of rules and tools for building software and applications.'
    },
    {
      question: 'What is the role of a constructor in OOP?',
      answer: 'A constructor is a special method in object-oriented programming (OOP) that is used to initialize objects. It is called when an object is created.'
    },
    {
      question: 'How to handle errors in Angular applications?',
      answer: 'In Angular, you can use try-catch blocks, error handlers, and observables with error handling to manage and handle errors.'
    },
    {
      question: 'What is the difference between let and var in JavaScript?',
      answer: '"let" is block-scoped, while "var" is function-scoped. "let" also does not hoist its declaration to the top of the block.'
    },
    {
      question: 'How to make an HTTP request in Angular?',
      answer: 'You can use the HttpClient module in Angular to make HTTP requests. Import HttpClientModule and inject HttpClient into your component or service.'
    },
    {
      question: 'What is the purpose of the meta viewport tag?',
      answer: 'The meta viewport tag in HTML is used to control the width and scaling of the viewport on mobile devices.'
    },
    {
      question: 'How to add a class to an element with JavaScript?',
      answer: 'You can use the "classList" property or the "className" property to add a class to an element in JavaScript.'
    },
    {
      question: 'What is a closure in JavaScript?',
      answer: 'A closure is a function that has access to variables from its outer (enclosing) function, even after the outer function has finished executing.'
    },
    {
      question: 'What is the purpose of the ngFor directive in Angular?',
      answer: 'The ngFor directive in Angular is used for rendering a list of items. It repeats a template for each item in a collection.'
    },
    {
      question: 'How to deploy a website to GitHub Pages?',
      answer: 'You can deploy a website to GitHub Pages by creating a branch named "gh-pages" and pushing your static files to that branch.'
    },
    {
      question: 'What is the difference between null and undefined in JavaScript?',
      answer: 'Null represents the intentional absence of any object value, while undefined is a variable that has been declared but not assigned a value.'
    },
    {
      question: 'What is the purpose of the async and await keywords in JavaScript?',
      answer: 'Async and await are used for handling asynchronous operations in JavaScript. They make asynchronous code look and behave more like synchronous code.'
    },
    {
      question: 'How to create a responsive navigation menu with CSS?',
      answer: 'You can use CSS media queries and flexbox or grid layout to create a responsive navigation menu that adjusts based on screen size.'
    },
    {
      question: 'What is the difference between localStorage and sessionStorage in JavaScript?',
      answer: 'localStorage and sessionStorage are web storage objects in JavaScript. The main difference is the scope of data storage and session-based persistence.'
    },
    {
      question: 'How to format a date in JavaScript?',
      answer: 'You can use the Intl.DateTimeFormat object or libraries like Moment.js to format dates in JavaScript based on your preferred locale and formatting options.'
    },
    {
      question: 'What is the role of the router outlet in Angular?',
      answer: 'The router outlet is a directive in Angular used to mark the location where the router should display the routed components.'
    },
    {
      question: 'How to implement two-way data binding in Angular?',
      answer: 'Two-way data binding in Angular is achieved using the [(ngModel)] directive. It combines property binding and event binding for a seamless update of the model.'
    },
    {
      question: 'What is the purpose of the HostListener decorator in Angular?',
      answer: 'The HostListener decorator in Angular is used to listen for events on the host element and execute a method when the event occurs.'
    },
    {
      question: 'How to create a custom pipe in Angular?',
      answer: 'You can create a custom pipe in Angular by implementing the PipeTransform interface and defining the transformation logic in the transform method.'
    },
    {
      question: 'What is the role of the ngIf directive in Angular?',
      answer: 'The ngIf directive in Angular is used for conditionally rendering or removing an element based on a boolean expression.'
    },
    {
      question: 'How to handle form submissions in Angular?',
      answer: 'In Angular, you can use ngSubmit event binding and Reactive Forms or Template-Driven Forms to handle form submissions.'
    },
    {
      question: 'What is the purpose of the ngOnDestroy lifecycle hook in Angular?',
      answer: 'The ngOnDestroy lifecycle hook in Angular is called just before the component is destroyed. It is used for cleanup tasks and unsubscribing from observables.'
    },
    {
      question: 'How to use ngClass in Angular?',
      answer: 'The ngClass directive in Angular is used for conditionally applying CSS classes to an element based on the evaluation of expressions.'
    },
    {
      question: 'What is the role of the ngSwitch directive in Angular?',
      answer: 'The ngSwitch directive in Angular is used for conditionally rendering content based on multiple conditions. It is an alternative to multiple ngIf statements.'
    },
  ];
}
