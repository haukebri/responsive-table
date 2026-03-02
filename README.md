Table responsive maker for jQuery
=================================

> **This project is discontinued and no longer maintained.**

Displaying tables responsive is no fun. They either get messed up or they mess up your layout. There are some approaches which let you scroll through the table but it does not feel good on a phone.

I've found a css way to make responsive Tables at css-tricks.com (https://css-tricks.com/responsive-data-tables/) but in that solution you need to know the content of the table beforehand. Which isn't the case in most cases.

How to use
-----------
You will need a table with <thead> and <tbody> to make it work.
Take a look at the demo.

**JS:** This is just a function. Call it once the dom is ready.

**CSS:** On a defined screensize the <td>'s will expand to 100% width and <thead> will disappear. You might want to change styles here and there.

Still relevant?
---------------
The core problem hasn't gone away — tables are inherently two-dimensional and narrow screens are still narrow. But CSS has largely caught up since this plugin was written, and JavaScript/jQuery solutions for basic responsive table layout are no longer necessary in 2026.

**What changed:**

- **`overflow-x: auto`** on a wrapper div is the simplest fix. The table scrolls horizontally, nothing breaks, no JS needed. For many use cases this is enough.
- **CSS-only stacking** — the exact technique this plugin automates (inject header text, stack cells vertically) can now be done in pure CSS. Add `data-label` attributes to your `<td>` elements, then use `td::before { content: attr(data-label); }` combined with a media query to switch to a stacked layout. No JavaScript required.
- **CSS Container Queries** (`@container`) are the biggest game-changer. Supported in all major browsers since early 2023 (~96% global support), they let a table component respond to its own container width rather than the viewport — something JS plugins always had to work around.
- **`position: sticky`** for pinning a first column or header row is well-supported (~98%) and pairs nicely with the scroll approach.

jQuery itself is also no longer a standard dependency in modern projects, which makes a jQuery plugin a harder sell.

**When JS still makes sense:** if you need sorting, filtering, virtual scrolling, column resizing, or other interactive data-grid features, a dedicated library like [Tanstack Table](https://tanstack.com/table) or [AG Grid](https://www.ag-grid.com/) is the right tool. But for the basic "make this HTML table not break on mobile" problem — use CSS.

Alternatives
------------
Since this project is no longer maintained, here are some alternatives. Note that most of these are also from the jQuery era and may be unmaintained themselves — for new projects, a CSS-only approach (see above) is usually the better choice.

- [Tablesaw](https://github.com/filamentgroup/tablesaw) — A group of plugins for responsive tables with stack, swipe, and column toggle modes. Vanilla JS (jQuery optional).
- [FooTable](https://github.com/fooplugins/FooTable) — jQuery plugin that hides columns on small screens and reveals them in expandable detail rows.
- [Stacktable.js](https://github.com/johnpolacek/stacktable.js) — Lightweight jQuery plugin that creates a stacked copy of a wide table for small screens.
- [RWD-Table-Patterns](https://github.com/nadangergeo/RWD-Table-Patterns) — Implements several responsive table patterns including scrollable, flip-scroll, and stacked layouts. jQuery + CSS.
- [Responsive Tables](https://github.com/zurb/responsive-tables) — CSS + jQuery approach from the Zurb team that adds horizontal scrolling with a sticky first column.