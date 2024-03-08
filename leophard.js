fetch('leophard.json')
.then(Response => Response.json())
.then(data => {

 document.getElementById("head1").textContent = data.head1;
 document.getElementById("p1").textContent = data.p1;
 document.getElementById("head2").textContent = data.head2;
 document.getElementById("p2").textContent = data.p2;
 document.getElementById("l1").textContent = data.l1;
 document.getElementById("l2").textContent = data.l2;
 document.getElementById("l3").textContent = data.l3;

 const yalalist = document.getElementById("yala");
    data.yala.forEach(details => {
      const listitem = document.createElement("li");
      listitem.textContent = details;
      yalalist.appendChild(listitem);
    });
 
 const wilpattulist = document.getElementById("wilpattu");
 data.wilpattu.forEach(details => {
   const listitem = document.createElement("li");
   listitem.textContent = details;
   wilpattulist.appendChild(listitem);
    });

 const hortonlist = document.getElementById("horton");
 data.horton.forEach(details => {
   const listitem = document.createElement("li");
   listitem.textContent = details;
   hortonlist.appendChild(listitem);
    });
 const threatslist = document.getElementById("threats");
 data.threats.forEach(details => {
   const listitem = document.createElement("li");
   listitem.textContent = details;
   threatslist.appendChild(listitem);
    });

 document.getElementById("head3").textContent = data.head3;
 document.getElementById("head4").textContent = data.head4;
 document.getElementById("head5").textContent = data.head5;
 document.getElementById("head6").textContent = data.head6;
 document.getElementById("head7").textContent = data.head7;
 document.getElementById("head8").textContent = data.head8;
 document.getElementById("head8").textContent = data.head8;
 document.getElementById("head9").textContent = data.head9;
 document.getElementById("head10").textContent = data.head10;
 document.getElementById("head11").textContent = data.head11;
 document.getElementById("head12").textContent = data.head12;
 document.getElementById("p3").textContent = data.p3;
 document.getElementById("p4").textContent = data.p4;
 document.getElementById("p5").textContent = data.p5;
 document.getElementById("p6").textContent = data.p6;
 document.getElementById("p7").textContent = data.p7;
 document.getElementById("p8").textContent = data.p8;
 document.getElementById("p9").textContent = data.p9;
 document.getElementById("p10").textContent = data.p10;
 document.getElementById("p11").textContent = data.p11;
 document.getElementById("p12").textContent = data.p12;
 document.getElementById("p13").textContent = data.p13;
 document.getElementById("p14").textContent = data.p14;
 document.getElementById("p15").textContent = data.p15;
 document.getElementById("p16").textContent = data.p16;
 document.getElementById("b1").textContent = data.b1;
 document.getElementById("b2").textContent = data.b2;
 document.getElementById("b3").textContent = data.b3;
 document.getElementById("b4").textContent = data.b4;
 document.getElementById("b5").textContent = data.b5;
 document.getElementById("b6").textContent = data.b6;
 document.getElementById("b7").textContent = data.b7;
 document.getElementById("b8").textContent = data.b8;



 const threats2list = document.getElementById("threats2");
 data.threats2.forEach(details => {
   const listitem = document.createElement("li");
   listitem.textContent = details;
   threats2list.appendChild(listitem);
    });


})