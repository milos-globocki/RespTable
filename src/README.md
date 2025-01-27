# Developer Workflow

This file explains where and how existing and new patterns are implemented.

## Library Structure
- **`src/`**
  - **`components/`**
    - **`table.js`**
  - **`styles/`**
    - **`squishing.css`**
    - **`stacking.css`**
    - **`table.css`**
  - **`index.js/`**

In the `components/` folder, JS code for newly implemented responsive patterns can be added or existing ones can be modified.

In the `styles/` folder, CSS files for patterns can be added or modified.

The `index.js` exports all JS functions for every implemented pattern.

## Functions
In this section a short explanation of existion functions is provided.


### initializeTable()
The  function dynamically creates a responsive HTML table based on the provided data. It ensures proper structure and styling while adding interactive features like sortable headers.

### createTable()
Depending on which patterns are enabled, the corresponding functions are called. When new patterns are implemented, make sure to call the needed functions.

## Usage