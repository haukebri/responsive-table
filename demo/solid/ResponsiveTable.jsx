/**
 * ResponsiveTable — A Solid.js component that makes HTML tables responsive.
 *
 * On mobile viewports, each <td> gets a label injected from its column header,
 * allowing the table to stack vertically while remaining readable.
 *
 * Uses the same CSS approach as the jQuery version (responsive-table.css).
 *
 * Props:
 *   headers  — Array of column header strings, e.g. ["Name", "Age", "Email"]
 *   rows     — Array of arrays, each inner array is one row of cell values
 *   className — Optional additional class name (default: "content-table")
 */
function ResponsiveTable(props) {
  const className = () => props.className || "content-table";

  return (
    <table class={className()}>
      <thead>
        <tr>
          <For each={props.headers}>
            {(header) => <th>{header}</th>}
          </For>
        </tr>
      </thead>
      <tbody>
        <For each={props.rows}>
          {(row) => (
            <tr>
              <For each={row}>
                {(cell, colIndex) => (
                  <td>
                    <span class="mobile-th">{props.headers[colIndex()]}</span>
                    {cell}
                  </td>
                )}
              </For>
            </tr>
          )}
        </For>
      </tbody>
    </table>
  );
}
