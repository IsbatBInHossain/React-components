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

The Table component is a flexible and customizable component for displaying tabular data. It takes in data as an array of objects and configuration options for rendering each column of the table.

### Usage

To use the Table component, import it into your React component and pass in the required props:

```jsx
import Table from "./Table";

const data = [
  { id: 1, name: "John Doe", age: 32, email: "johndoe@example.com" },
  { id: 2, name: "Jane Doe", age: 28, email: "janedoe@example.com" },
  { id: 3, name: "Bob Smith", age: 45, email: "bobsmith@example.com" },
];

const config = [
  { label: "Name", render: (item) => item.name },
  { label: "Age", render: (item) => item.age },
  { label: "Email", render: (item) => item.email },
];

function MyComponent() {
  return <Table data={data} config={config} />;
}
```

### Props

The Table component accepts the following props:

| Prop Name | Type     | Required | Description                                                                                                                                                                                                                                                   |
| --------- | -------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| data      | Array    | Yes      | An array of objects representing the rows of the table. Each object should contain key-value pairs representing the cells of the row.                                                                                                                         |
| config    | Array    | Yes      | An array of objects representing the columns of the table. Each object should contain a label property representing the column header and a render property which is a function that takes in a row object and returns the value to be displayed in the cell. |
| keyFn     | Function | No       | A function that takes in a row object and returns a unique key for the row. If not provided, the component will attempt to use the id property of the row object as the key.                                                                                  |

## SortableTable Component

The SortableTable component is a customizable table component that allows sorting by clicking on column headers. It is built on top of the Table component and extends its functionality with sorting capability.

### Props

The SortableTable component accepts the following props:

#### data

Type: Array
Required: Yes
Description: An array of objects representing the rows of the table. Each object should contain key-value pairs representing the cells of the row.

#### config

Type: Array
Required: Yes
Description: An array of objects representing the columns of the table. Each object should contain a label property representing the column header and a render property which is a function that takes in a row object and returns the value to be displayed in the cell. Additionally, a sortValue property can be added to the column object which is a function that takes in a row object and returns the value to be used for sorting.

#### keyFn

Type: Function
Required: No
Description: A function that takes in a row object and returns a unique key for the row. If not provided, the component will attempt to use the id property of the row object as the key.
Usage
Here's an example of how to use the SortableTable component:

```jsx
import SortableTable from "./SortableTable";

const data = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 20 },
];

const config = [
  { label: "Name", render: (row) => row.name, sortValue: (row) => row.name },
  { label: "Age", render: (row) => row.age, sortValue: (row) => row.age },
];

const ExampleSortableTable = () => {
  return <SortableTable data={data} config={config} keyFn={(row) => row.id} />;
};
```

In this example, the SortableTable component is used to display a table with two columns: Name and Age. The data prop contains an array of objects representing the rows of the table, while the config prop specifies the column headers and the functions to render and sort the columns. The keyFn prop is used to provide a unique key for each row.

### Sorting

To enable sorting, the config prop should include a sortValue property for each column. The sortValue function takes in a row object and returns the value to be used for sorting. When the user clicks on a column header, the table will be sorted by that column in ascending order. Subsequent clicks on the same column header will toggle the sorting between ascending and descending order. Clicking on a different column header will reset the sorting to the initial state.

### Example

Here's an example of the SortableTable component in action:

```jsx
import React from "react";
import SortableTable from "./SortableTable";

const movieData = [
  { id: 1, title: "The Shawshank Redemption", year: 1994 },
  { id: 2, title: "The Godfather", year: 1972 },
  { id: 3, title: "The Dark Knight", year: 2008 },
  { id: 4, title: "12 Angry Men", year: 1957 },
  { id: 5, title: "Schindler's List", year: 1993 },
];

const movieConfig = [
  { label: "Title", sortValue: (movie) => movie.title },
  { label: "Year", sortValue: (movie) => movie.year },
];

const MovieTable = () => {
  return <SortableTable data={movieData} config={movieConfig} />;
};

export default MovieTable;
```

In this example, the SortableTable component is used to display a table of movies. The table can be sorted by clicking on the "Title" or "Year" column headers. The data prop is an array of objects representing the rows of the table, while the config prop is an array of objects representing the columns of the table. The sortValue property in each object specifies the value to be used for sorting the column.

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
