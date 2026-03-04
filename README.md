<!-- This file is managed by claude-kanban-flow -->
Table responsive maker for jQuery
=================================

> **This project is discontinued and no longer maintained.**

Displaying tables responsive is no fun. They either get messed up or they mess up your layout. There are some approaches which let you scroll through the table but it does not feel good on a phone.

I've found a css way to make responsive Tables at css-tricks.com (https://css-tricks.com/responsive-data-tables/) but in that solution you need to know the content of the table beforehand. Which isn't the case in most cases.

How to use
-----------
You will need a table with <thead> and <tbody> to make it work.
Take a look at the demo.

**jQuery:** This is just a function. Call it once the dom is ready.

**React:** A `<ResponsiveTable>` component that accepts `headers` and `rows` props. Each cell automatically gets a mobile label from its column header — no DOM manipulation needed. See `demo/react/`.

**Vue:** A `<responsive-table>` component with the same `headers` and `rows` props. Uses Vue 3 with no build step required. See `demo/vue/`.

**Alpine.js:** A lightweight `x-data` component using Alpine.js directives (`x-for`, `x-text`) to render the table declaratively in HTML. No build step required. See `demo/alpine/`.

**CSS:** On a defined screensize the <td>'s will expand to 100% width and <thead> will disappear. You might want to change styles here and there.
