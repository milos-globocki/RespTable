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
The function dynamically creates a responsive HTML table based on the provided data. It ensures proper structure and styling while adding interactive features like sortable headers.

### createTable()
Depending on which patterns are enabled, the corresponding functions are called. When new patterns are implemented, make sure to call the needed functions.

### Using Pattern Functions
To apply the already implemented patterns stacking and flipping, the functions `ApplyStacking()` and `ApplyFlipping()` can be called, after a table is created.
The functions for responsive and good practice patterns like *Sorting* or *Filtering* are enabled by default.
All functions for the patterns can be found in `Table.js`. This file is used to apply functions to the desired table. Therefore, you can add or adapt the functions in this file.