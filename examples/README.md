# Launch an example

Use one of the following commands to launch an example:

- `gulp html`: Install, build, and start the HTML example.
- `gulp html-csv`: Install, build, and start the HTML example with CSV.
- `gulp react`: Install, build, and start the React example.

## Example: HTML - CSS-only
This example shows a default implementation without any JS code.
If you want to adapt this example, you have to hard-code you table entries.
By default the patterns `Stacking` and `Squishing` are enabled.

A demo can be found on: [https://milos-globocki.github.io/RespTable/examples/html/](https://milos-globocki.github.io/RespTable/examples/html/).
## Example: HTML with CSV loading
This example shows a default implementation with JS code and CSV loading.
You can use the function `LoadCSV` to load your CSV file and `CreateTable(csvData)` to create a table with your data.
To enable a responsive pattern, use one of the pattern functions to apply the pattern to your table (e.g. `ApplyStacking()`).
The good practice patterns: *Sorting*, *Filtering*, *Fixed Header* and *Zebra Stripes* are enabled by default.

A demo can be found on: [https://milos-globocki.github.io/RespTable/examples/html-with-csv/](https://milos-globocki.github.io/RespTable/examples/html-with-csv/).


## Example: React
The react example shows a implementation in React. It shows how to use *RespTable* with other frameworks and it's full functionality.
For a detailed description go to the [README](https://github.com/milos-globocki/RespTable/blob/main/examples/react/README.md) in the example.