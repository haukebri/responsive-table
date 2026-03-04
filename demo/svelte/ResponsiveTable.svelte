<!--
  ResponsiveTable — A Svelte component that makes HTML tables responsive.

  On mobile viewports, each <td> gets a label injected from its column header,
  allowing the table to stack vertically while remaining readable.

  Uses the same CSS approach as the jQuery version (responsive-table.css).

  Props:
    headers  — Array of column header strings, e.g. ["Name", "Age", "Email"]
    rows     — Array of arrays, each inner array is one row of cell values
    className — Optional additional class name (default: "content-table")
-->
<script>
  export let headers;
  export let rows;
  export let className = "content-table";
</script>

<table class={className}>
  <thead>
    <tr>
      {#each headers as header, i}
        <th>{header}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each rows as row, rowIndex}
      <tr>
        {#each row as cell, colIndex}
          <td>
            <span class="mobile-th">{headers[colIndex]}</span>
            {cell}
          </td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>
