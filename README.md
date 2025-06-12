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

- A class with reusable logic or data.

- Services help keep components simple and focused.

- A TypeScript class with methods that provide specific functionality. For example, services are commonly used to:

  - Fetch data from an API,

  - Share data between components,

  - Perform calculations,

  - Handle authentication.

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
