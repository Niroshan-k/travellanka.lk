fetch('dowc.json')
.then(Response => Response.json())
.then(data => {

 document.getElementById("head-word").textContent = data.headword;
 document.getElementById("headtext").textContent = data.headtext;
 document.getElementById("head1").textContent = data.head1;
 document.getElementById("head2").textContent = data.head2;
 document.getElementById("head3").textContent = data.head3;
 document.getElementById("p1").textContent = data.p1;
 document.getElementById("p2").textContent = data.p2;
 document.getElementById("p3").textContent = data.p3;
 document.getElementById("p4").textContent = data.p4;
 document.getElementById("p5").textContent = data.p5;
 document.getElementById("p6").textContent = data.p6;
 document.getElementById("p7").textContent = data.p7;
 document.getElementById("p8").textContent = data.p8;
 document.getElementById("p9").textContent = data.p9;
 document.getElementById("p10").textContent = data.p10;
 document.getElementById("footer1").textContent = data.footer1;
 document.getElementById("footer2").textContent = data.footer2;
 document.getElementById("footer3").textContent = data.footer3;
 document.getElementById("footer4").textContent = data.footer4;
 document.getElementById("footer5").textContent = data.footer5;

 const protectlist = document.getElementById("protect");
    data.protect.forEach(parks => {
      const listitem = document.createElement("li");
      listitem.textContent = parks;
      protectlist.appendChild(listitem);
    });

})