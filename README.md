Table responsive maker for jQuery (Discontinued)
==================================================

> **This project is discontinued and no longer maintained.**

Displaying tables responsive is no fun. They either get messed up or they mess up your layout. There are some approaches which let you scroll through the table but it does not feel good on a phone.

I've found a css way to make responsive Tables at css-tricks.com (https://css-tricks.com/responsive-data-tables/) but in that solution you need to know the content of the table beforehand. Which isn't the case in most cases.

How to use
-----------
You will need a table with <thead> and <tbody> to make it work.
Take a look at the demo.

**JS:** This is just a function. Call it once the dom is ready.

**CSS:** On a defined screensize the <td>'s will expand to 100% width and <thead> will disappear. You might want to change styles here and there.

## How the CSS Works

The responsive behavior is split across two CSS files:

- **`responsive-table.css`** — the responsive layout logic (breakpoint, thead hiding, block layout, `.mobile-th` toggling).
- **`main.css`** — base table styling and color theming (padding, centering, alternating row colors).

### Desktop (above 760px)

Above the **760px breakpoint**, the table renders as a normal HTML table:

- `<thead>` is visible and displays column headers.
- `.mobile-th` spans (injected into each `<td>` by the JavaScript) are hidden with `display: none`.
- Alternating **rows** get a background color (`#e1e1e1`) via `tbody tr:nth-of-type(odd)`.

### Mobile (760px and below)

At **760px and below**, a `@media` query switches the table to a stacked card layout:

- **Block layout:** `<tr>` and `<td>` elements become `display: block; width: 100%`, stacking cells vertically so each row reads like a card.
- **`<thead>` hiding:** The `<thead>` is moved off-screen with `position: fixed; top: -9999px` rather than `display: none`. This keeps header content available to screen readers while removing it visually. (This is an older accessibility pattern — modern approaches may differ.)
- **`.mobile-th` labels:** The JavaScript reads each `<th>` text and prepends a `<span class="mobile-th">` into every corresponding `<td>`. On mobile, these spans become visible as `display: inline-block` with `width: 50%` and `font-weight: bold`, acting as inline labels so each cell is self-describing.
- **Float and clearfix:** `<tbody>` is floated left at full width. A clearfix (`:after` pseudo-element with `clear: both`) is applied to the table to contain the float.
- **Alternating-color shift:** Since rows now display as single-column stacks, the zebra-striping pivots from odd **rows** (`tr:nth-of-type(odd)`) to odd **cells** (`td:nth-of-type(odd)`) and the row background is reset to `none`.