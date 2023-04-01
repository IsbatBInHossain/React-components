## Introduction

Welcome to my component library! This library includes reusable UI components designed to help you quickly build beautiful and responsive web applications.

Currently, the library includes four components: Button, Dropdown, Accordion, and Modal. I plan to add more components in the future to provide you with a comprehensive toolkit for building your web applications.

In addition to the components, I also provide a custom routing system and sidebar component to help you create navigation between pages in your web application.

This library is designed to be easy to use, flexible, and customizable to fit your specific needs. I hope you find it useful in your web development projects.

## Components

The following components are available in this library:

## Button Component

The Button component is a customizable button element that you can use in your web applications. You can customize the button's text, color, size, and style. The Button component is accessible and supports keyboard navigation.

### Usage

To use the Button component in your application, import the component from your component library and render it with any desired props. Here is an example:

```jsx
import Button from "path/to/Button";

function MyButton() {
  return (
    <Button
      primary // set this prop to use primary color
      rounded // set this prop to make button rounded
      onClick={() => console.log("Button clicked!")}
    >
      Click Me!
    </Button>
  );
}
```

### Props

The following props are available for the Button component:

children: (required) The content of the button element.
rounded: (optional) Set this prop to true to make the button rounded.
outline: (optional) Set this prop to true to make the button outlined.
primary: (optional) Set this prop to true to use primary color for the button.
secondary: (optional) Set this prop to true to use secondary color for the button.
success: (optional) Set this prop to true to use success color for the button.
warning: (optional) Set this prop to true to use warning color for the button.
danger: (optional) Set this prop to true to use danger color for the button.
...rest: (optional) Any additional props will be passed to the underlying button element.

### Styling

The Button component uses the classnames library to dynamically apply classes to the underlying button element based on the props passed to it. You can customize the button's color, size, and style by passing the appropriate props.

## Dropdown Component

The Dropdown component is a reusable React component that renders a dropdown menu with options that the user can select. The component takes in three props:

options: an array of options that the user can select from. Each option is an object with a label and a value.
onChange: a function that is called whenever the user selects an option from the dropdown menu. The function is passed the selected option as an argument.
value: the currently selected option, if any.

### Usage

To use the Dropdown component in your React project, you first need to import it:

```jsx
import Dropdown from "path/to/Dropdown";
```

Then, you can use it in your JSX code like this:

```jsx
<Dropdown
  options={[
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ]}
  onChange={(option) => console.log(option)}
  value={{ label: "Option 2", value: "option2" }}
/>
```

In this example, the Dropdown component is passed an array of three options, an onChange function that logs the selected option to the console, and an initial value of the second option.

### Props

options: an array of objects with label and value properties that represent the available options in the dropdown menu.
onChange: a function that is called whenever the user selects an option from the dropdown menu. The selected option is passed as an argument to this function.
value: the currently selected option, if any.
Styling
The Dropdown component uses the Panel component to render the dropdown menu. You can style the dropdown menu by modifying the Panel component's CSS styles.

Additionally, you can apply custom CSS styles to the Dropdown component itself by adding a className prop to it. For example:

```jsx
<Dropdown
  options={[
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ]}
  onChange={(option) => console.log(option)}
  value={{ label: "Option 2", value: "option2" }}
  className="my-dropdown"
/>
```

Then, you can define the CSS styles for the my-dropdown class in your CSS file:

```css
.my-dropdown {
  /* Your custom styles here */
}
```

## Accordion Component

The Accordion component is a user interface element that allows users to expand and collapse content sections. It can be used to organize information and to make it easier to find and navigate.

### Usage

To use the Accordion component, you need to import it into your React project and then pass an array of objects as a prop. Each object represents an accordion item and contains an id, label, and content.

```jsx
import Accordion from "./Accordion";

const items = [
  {
    id: 1,
    label: "Item 1",
    content: "This is the content for Item 1",
  },
  {
    id: 2,
    label: "Item 2",
    content: "This is the content for Item 2",
  },
  {
    id: 3,
    label: "Item 3",
    content: "This is the content for Item 3",
  },
];

function MyComponent() {
  return <Accordion items={items} />;
}
```

### Props

The Accordion component accepts one prop:

items: An array of objects representing the accordion items. Each object should have an id (a unique identifier), a label (the text that will be displayed as the header for the item), and a content (the text that will be displayed when the item is expanded).

### Customization

The Accordion component can be customized by modifying its styles with CSS. You can also customize the icons used to indicate whether an item is expanded or collapsed by importing and using different React icons.

## Modal Component

The Modal component is used to create a popup window that displays content on top of the current page. This component can be used to show important information or to get user input. The Modal component is implemented using the React framework and provides several props to customize its behavior and appearance.

### Props

onDismiss: a function that will be called when the user clicks outside of the modal, or when the user presses the escape key. This prop is optional.
children: the content to be displayed inside the modal. This prop is required.
actionBar: a component that will be displayed at the bottom of the modal. This prop is optional.
Example usage

```jsx
import Modal from "./Modal";

function App() {
  const handleDismiss = () => {
    console.log("Modal dismissed");
  };

  const handleSubmit = () => {
    console.log("Modal submitted");
  };

  const actionBar = (
    <>
      <button onClick={handleDismiss}>Cancel</button>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      {isModalOpen && (
        <Modal onDismiss={handleDismiss} actionBar={actionBar}>
          <h1>Modal Title</h1>
          <p>Modal Content</p>
        </Modal>
      )}
    </div>
  );
}
```

In the above example, clicking the "Open Modal" button will open a modal with a title and some content. The modal also has a cancel and submit button, which are specified in the actionBar prop. The onDismiss prop is used to log a message to the console when the user dismisses the modal.

## Table Component

The Table component is a reusable component that renders a table based on the configuration and data passed in. It is designed to be highly customizable and supports sorting of the data.

### Props

data (required): An array of objects representing the rows in the table.
config (required): An array of objects representing the columns in the table. Each object should contain a label and a render function that accepts a row object and returns the data to be displayed in that cell.
keyFn: A function that returns a unique identifier for each row. If not provided, it defaults to the id property of each row object.

## Panel Component

The Panel component is a simple container with a border, rounded corners, and a drop shadow. It can be used to group together related content and provide a visual separation from other content on the page.

### Usage

To use the Panel component, import it into your React component and use it like any other React component:

```jsx
import Panel from "./Panel";

function MyComponent() {
  return (
    <Panel>
      <h2>Panel Title</h2>
      <p>Some content goes here...</p>
    </Panel>
  );
}
```

## Props

The Panel component accepts the following props:

children (required): The content to be displayed inside the panel.
className (optional): Additional CSS classes to be applied to the panel.
...rest (optional): Any additional props to be passed to the panel's container div.
Example:

```jsx
import Panel from "./Panel";

function App() {
  const data = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    { id: 3, name: "Bob", age: 20 },
  ];

  const config = [
    { label: "Name", render: (item) => item.name },
    { label: "Age", render: (item) => item.age },
  ];

  const sortedData = [...data].sort((a, b) => a.age - b.age);

  return (
    <Panel>
      <h2>Table Example</h2>
      <Table data={sortedData} config={config} keyFn={(item) => item.id} />
    </Panel>
  );
}
```

In this example, the Panel component is used to contain a table generated using the Table component. The table data is sorted by age before being displayed.

### Sidebar Component

In addition to the components, this library also includes a Sidebar component that you can use to navigate to the different pages for each component. The Sidebar component is customizable, and you can customize the color, size, and style to match the look and feel of your application.

## Custom Navigation

This library uses a custom routing system to handle navigation between pages. The Sidebar component includes links to the different pages for each component, and clicking on a link will take you to the corresponding page. The routing system is simple and easy to use, and you can customize it to fit your needs.

## Conclusion

Thank you for using my component library! I hope these components will help you build great web applications. If you have any questions or feedback, please feel free to contact me.
