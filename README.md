# Angular Notes

## Creating project by using Traditional Angular

- ng new my-angular-learning --no-standalone --routing --ssr=false

## What is Angular?

- A framework and development platform.

- Developed and maintained by Google.

- Built on TypeScript.

- Used for creating single-page web applications.

## Framework Type

- Front-end (client-side).

## Language

- Mainly written in TypeScript.

## Main Use

- Building modern web applications, especially Single Page Applications (SPAs).

## Module

- A class decorated with **@NgModule**.

- A core concept helps organize your application.

- **@NgModule** tells Angular how to assemble the application, and defines a module.

- Has at least one module called the root module, and can have many feature modules.

- Root module (App Module) is the main entry point of the app.

- Feature modules help you scale large apps.

- Shared and Core modules organize reusable and singleton functionality.

## Component

- A TypeScript class decorated with **@Component** which connects it to:

  - An HTML template (UI),

  - A CSS file (styling),

  - Logic in TypeScript (behavior).

- Components define parts of your app's UI.

- Each component has a template (HTML), style (CSS), and logic (TypeScript).

- They communicate using @Input() and @Output().

- Use **ng generate component** to easily create one.

## Service

- A TypeScript class with reusable logic or data and provide specific functionality. For example, services are commonly used to:

  - Fetch data from an API,

  - Share data between components,

  - Perform calculations,

  - Handle authentication.

- Services help keep components simple and focused.

- Use **ng generate service** to quickly create one.

## Architecture

- Angular app - one or more modules.

- Module - One or more components and services.

- Components - HTML + Class.

- Services - Business logic.

- Modules interact and ultimately render the view in the browser.

## Class

- For creating objects with properties and methods.

- Used to define the structure and behavior of components, services, directives, modules, models, and more.

## Data Binding

- Connecting your HTML (view) with your TypeScript code (component) so they can share data.

- It helps your app show data and react to user actions.

### Types of Data Binding

![Alt text](/public/TypesofDatabiding.png)

#### Note

- Syntax of Two-Way Binding

  - **[(ngModel)]="propertyName"**

- Need to import **FormsModule** in **app.module.ts** to use **ngModel**.

- Useful

  - For forms

  - For live preview

  - For real-time updates

- Reminder

  - [(ngModel)] = two-way binding

  - Works only when import FormsModule.

## Template Reference Variable

- A variable declared in the HTML template that directly accesses a DOM element, Angular component, or directive.

### Example

- Syntax

  - <input **#myInput** type="text">

- **#myInput** is the template reference variable.

- You can use it elsewhere in the template to refer to this input element.

### When to Use Template Reference Variables

- Getting values from inputs without using two-way binding

- Calling methods from child components

- Accessing form elements

- Working with ViewChild in component code (optional)

### Remember

- Template reference variables are only available within the template, not in the component .ts file unless you pass them using @ViewChild.

## Structural Directives

- Change the structure of the DOM, they add or remove elements based on certain conditions.

### Common Structural Directives

![Alt text](/public/StructuralDirectives.png)

### How Structural Directives Work

- Use the asterisk \* as a short-hand for modifying the DOM.

- Behind the scenes, \*directive is translated into **ng-template** with logic to insert or remove content.

- You can create custom structural directives using the @Directive decorator and TemplateRef + ViewContainerRef.

## \*ngIf

- if else (conditional)

- Used to conditionally include or exclude an element from the DOM based on a boolean expression.

### Syntax

![Alt text](/public/Syntaxforngif.png)

### How it works

- If the condition is true, Angular adds the element to the DOM.

- If the condition is false, Angular removes the element from the DOM.

### Use cases

- Show/hide login/logout buttons

- Display messages based on user roles or states

- Render components only when necessary

## \*ngSwitch

- Switch case

- Use to conditionally display one out of many elements, depending on a value.

- It works like a switch-case statement in programming.

### Basic Syntax

![Alt text](/public/ngSwitch.png)

### How It Works

- Use [ngSwitch] to bind to a variable.

- Use \*ngSwitchCase for each possible value.

- Use \*ngSwitchDefault for the default (fallback) case.

## \*ngFor

- Looping

- Use to loop through a list or array and repeat an HTML element for each item.

### Basic Syntax of \*ngFor

![Alt text](/public/SyntaxofngFor.png)

- **items** is an array from your component.

- **item** is a local variable that holds the current value in each loop.

### Use for

- Dynamic — updates automatically if the array changes.

- Clean — avoids manually writing the same element multiple times.

- Powerful — you can get index, first, last, even, odd, etc.

## Component Interaction

- The ways in which components communicate and share data with each other.

![Alt text](/public/ComponentInteraction.png)

## Difference between Component Interaction and Data Binding

![Alt text](/public//DataBidingVsComponentInter.png)

## What is $event?

- A special Angular variable that holds the data sent from an event.

## Pipes

- A pipe in Angular is used to transform data before displaying it in the template.

### Syntax of Pipes

{{ value | pipeName }}

### Built-in Pipes (Most Common)

![Alt text](</public//Built-in%20Pipes%20(Most%20Common).png>)

## What is an Observable?

- An Observable is like a stream of data that you can subscribe to and react to changes over time.

### Why Use Observables in Angular?

- To get data from a backend (HTTP requests)

- To react to user input (clicks, typing)

- To listen for form changes

- To handle real-time updates (like chat or notifications)

### Key Terms

![Alt text](/public/Observables.png)

## RxJS - Reactive Extensions for JavaScript

- A JavaScript library for working with Observables, used heavily in Angular to handle asynchronous or event-based programs.

### What Does RxJS Do?

- Listen to events or data streams

- Transform, filter, and combine those streams

- Handle async data (like API calls, timers, user input) easily

### RxJS Core Concepts

![Alt text](/public/RxJS%20Core%20Concepts.png)

### Popular RxJS Operators

![Alt text](/public/Popular%20RxJS%20Operators.png)
