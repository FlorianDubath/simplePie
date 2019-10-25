simplePie
---------
<h4>
This project is a quick and dirty way of creating (svg) pie chart in a web page. 
</h4>

To do so: 
 - add the stylesheet to your page 
     <link rel="stylesheet" type="text/css" href="css/pie.css" >


 - declare an element which will act as a container. The width of this element will be use as the diameter of the pie. 
 

 - add in this element one or many div following this template: 
    <div class="pie" style="color:#3366ff;">20</div>
   The <em>text</em> into the div will be parsed and converted ino the size of the pie part. 
   The <em>color</em> will be set to the pie element. 

   Note that the elements will be stacked (last one on top) each one strating from the top and running clock-wise. 
   So if you want a 20% part followed by a 30% part you need to add a first div with 50% (=20%+30%) then another with 20% (see examples)

   Note also that the pie will not set the height of its parent: if you use variable width you have to ensure that the height is also set to (at least) the same value.

 - add the js file after the <em>body</em> element:
    <script src="js/pie.js ">
   you can also add the script in the header and call the function <em>computePie()</em> once the page is loaded

<h4>Exemples</h4>

One element:


![20%, 40%, 60%, 80% and 100% single element chart](https://github.com/FlorianDubath/simplePie/blob/test/images/singleElement.jpg)


Multiple (stacked) elements:

![40%, 25%, 20% and 15% stacked elements chart](https://github.com/FlorianDubath/simplePie/blob/test/images/stackedElements.jpg)


Code for this exemple:  

<pre>
&lt;div style="display:inline-block; width:200px;height:200px;"&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="pie" style="color:#669900;"&gt;100%&lt;/div&gt; &lt;!-- 15% + (40% + 25% + 20%)--&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="pie" style="color:#ff6600;"&gt;85%&lt;/div&gt;  &lt;!-- 20% + (25% + 40,%)--&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="pie" style="color:#cc00cc;"&gt;65%&lt;/div&gt;  &lt;!-- 25% + (40%)--&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="pie" style="color:#3366ff;"&gt;40%&lt;/div&gt;  &lt;!-- 40% (top-most)--&gt;
&lt;/div&gt;
</pre>
