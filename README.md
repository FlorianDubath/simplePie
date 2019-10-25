simplePie
---------

This project is a quick and dirty way of creating (svg) pie chart in a web page. 

To do so: 
 - add the stylesheet to your page 
     <link rel="stylesheet" type="text/css" href="css/pie.css" >


 - declare an element which will act as a container. The width of this element will be use as the diameter of the pie. 
 

 - add in this element one or many div following this template: 
    <div class="pie" style="color:#3366ff;">20</div>
   The <em>text</em> into the div will be parsed and converted ino the size of the pie part. 
   The color will be set to the pie element. 

   Note that the elements will be stacked (last one on top) each one strating from the top and running clock-wise. 
   So if you want a 20% part followed by a 30% part you need to add a first div with 50% (=20%+30%) then another with 20% (see examples below)

   Note also that the pie will not set the height of its parent: if you use variable width you have to ensure that the height is also set to (at least) the same value.

 - add the js file after the body element:
    <script src="js/pie.js ">
   you can also add the script in the header and call the function computePie() once the page is loaded

