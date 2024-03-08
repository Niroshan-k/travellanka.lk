fetch('introduction.json')
  .then(Response => Response.json())
  .then(data => {

   document.getElementById("intro-head").textContent = data.introhead;
   document.getElementById("intro-head1").textContent = data.introhead1;
   document.getElementById("intro-head2").textContent = data.introhead2;
   document.getElementById("intro-head3").textContent = data.introhead3;
   document.getElementById("intro-p").textContent = data.introp;
   document.getElementById("intro-p1").textContent = data.introp1;
   document.getElementById("intro-p2").textContent = data.introp2;
   document.getElementById("intro-p3").textContent = data.introp3;
   document.getElementById("intro-p4").textContent = data.introp4;

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

   const trlist = document.getElementById("table-head");
    data.tablehead.forEach(head => {
      const listitem = document.createElement("th");
      listitem.textContent = head;
      trlist.appendChild(listitem);
    });

  })