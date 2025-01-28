# RespTable

RespTable is a lightweight, responsive table library for HTML that ensures tables look great on all devices. It is designed to integrate seamlessly with other libraries or frameworks and open-source for collaboration, contribution, and adoption.

## Repository Structure

Here's an overview of the folder structure and purpose of each directory:

- **`dist/`**: Contains the built library files:
  - **`cjs/`**: The `cjs` files.
  - **`esm/`**: The `esm` files.
- **`examples/`**: Includes three example projects demonstrating how to use the library:
  - **`html/`**: A plain HTML and CSS example.
  - **`html-csv/`**: A plain HTML example that dynamically loads a CSV file (dependent on JS).
  - **`react/`**: A React example showing how to integrate the library into a React project.
- **`node_modules/`**: Contains all the dependencies installed via npm that are required to run and build the project.
- **`src/`**: Contains the library's source code. Developers looking to modify or extend the library can find the code here.

- **Other files**:
  - **`gulpfile.js`**: Defines tasks for installing dependencies, building the library, the whole (html, html-csv, react) example workflow, and starting the examples.
  - **`LICENSE`**: Specifies the legal terms and conditions under which the library can be used, modified, and distributed.
  - **`package.json`**: Defines dependencies, scripts, and metadata for the library.
  - **`rollup.config.js`**: Configuration for the Rollup bundler used to build the library.

## Getting Started
Make sure you have `gulp` installed:

```
npm install --global gulp-cli
```

Install all dependencies:
```
npm install
```

Now follwowing gulp commands can be used:
- Install/building:
    - `gulp install`: Install all missing npm dependencies.
    - `gulp build-lib`: Build the library.
- Whole pipeline for html / html-csv / react:
    - `gulp html`: Install, build, and start the HTML example.
    - `gulp html-csv`: Install, build, and start the HTML example with CSV.
    - `gulp react`: Install, build, and start the React example.
- Start an example (if library already built):
    - `gulp start-html-example`: Only start the HTML example.
    - `gulp start-html-csv-example`: Only start the HTML example with CSV.
    - `gulp start-react-example`: Only start the React example.

## Library Usage Workflow and Demos
See [`examples/README.md`](https://github.com/milos-globocki/RespTable/blob/main/examples/README.md).


## Developer Workflow
See [`src/README.md`](https://github.com/milos-globocki/RespTable/blob/main/src/README.md).


