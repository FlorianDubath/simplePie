function $$(selector, context) {
        context = context || document;
        var elements = context.querySelectorAll(selector);
        return Array.prototype.slice.call(elements);
    }
    
function computePie(){
        $$('.pie').forEach(function(pie) {
          width=parseFloat(pie.parentNode.style.width);
          length=3.141596*width;
          
          pie.style.width=pie.parentNode.style.width;
          var p = parseFloat(pie.textContent);
          
          var NS = "http://www.w3.org/2000/svg";
          var svg = document.createElementNS(NS, "svg");
          var circle = document.createElementNS(NS, "circle");
          circle.setAttribute("r", width/2);
          circle.setAttribute("cx", width);
          circle.setAttribute("cy",width);
          circle.setAttribute("fill-opacity",0);
          circle.setAttribute("stroke",pie.style.color);
          circle.setAttribute("stroke-width",width);
          circle.setAttribute("stroke-dasharray", p*length/100 + " "+length);
          svg.setAttribute("viewBox", "0 0 "+width*2+" "+width*2);
          
          
          pie.textContent = '';
          svg.appendChild(circle);
          pie.appendChild(svg);
        });
    }

computePie();
