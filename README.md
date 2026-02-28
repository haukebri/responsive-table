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

Alternatives
------------
Since this project is no longer maintained, here are some actively developed or widely used alternatives:

- [Tablesaw](https://github.com/filamentgroup/tablesaw) — A group of plugins for responsive tables with stack, swipe, and column toggle modes. Vanilla JS (jQuery optional).
- [FooTable](https://github.com/fooplugins/FooTable) — jQuery plugin that hides columns on small screens and reveals them in expandable detail rows.
- [Stacktable.js](https://github.com/johnpolacek/stacktable.js) — Lightweight jQuery plugin that creates a stacked copy of a wide table for small screens.
- [RWD-Table-Patterns](https://github.com/nadangergeo/RWD-Table-Patterns) — Implements several responsive table patterns including scrollable, flip-scroll, and stacked layouts. jQuery + CSS.
- [Responsive Tables](https://github.com/zurb/responsive-tables) — CSS + jQuery approach from the Zurb team that adds horizontal scrolling with a sticky first column.