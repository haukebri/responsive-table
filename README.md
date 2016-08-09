Table responsive maker for jQuery
=================================

Displaying tables responsive is no fun. They either get messed up or they mess up your layout. There are some approaches which let you scroll through the table but it does not feel good on a phone.

I've found a css way to make responsive Tables at css-tricks.com (https://css-tricks.com/responsive-data-tables/) but in that solution you need to know the content of the table beforehand. Which isn't the case in most cases.

How to use
-----------
You will need a table with <thead> and <tbody> to make it work.
Take a look at the demo.

**JS:** This is just a function. Call it once the dom is ready. 

**CSS:** On a defined screensize the <td>'s will expand to 100% width and <thead> will disappear. You might want to change styles here and there. 