/**
 * ResponsiveTable — A Vue component that makes HTML tables responsive.
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
const ResponsiveTable = {
  props: {
    headers: { type: Array, required: true },
    rows: { type: Array, required: true },
    className: { type: String, default: "content-table" },
  },
  template: `
    <table :class="className">
      <thead>
        <tr>
          <th v-for="(header, i) in headers" :key="i">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
          <td v-for="(cell, colIndex) in row" :key="colIndex">
            <span class="mobile-th">{{ headers[colIndex] }}</span>
            {{ cell }}
          </td>
        </tr>
      </tbody>
    </table>
  `,
};
