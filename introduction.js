const main = {
  introhead : "",
  tablehead : ""
};

fetch('introduction.json')
  .then(Response => Response.json())
  .then(data => {

    main.introhead = data.introhead;
    main.introhead1 = data.introhead1;
    main.introhead2 = data.introhead2;
    main.introhead3 = data.introhead3;
    main.introp = data.introp;
    main.introp1 = data.introp1;
    main.introp2 = data.introp2;
    main.introp3 = data.introp3;
    main.introp4 = data.introp4;
    main.heading1 = data.heading1;
    main.p1 = data.p1;
    main.p2 = data.p2;
    main.p3 = data.p3;
    main.p4 = data.p4;
    main.p5 = data.p5;
    main.p6 = data.p6;
    main.p7 = data.p7;
    main.p8 = data.p8;
    main.p9 = data.p9;
    main.p10 = data.p10;
    main.subhead = data.subhead;
    main.tablehead = data.tablehead;
    main.hthree1 = data.hthree1;
    main.hthree2 = data.hthree2;
    main.hthree3 = data.hthree3;
    main.hthree4 = data.hthree4;
    main.hthree5 = data.hthree5;
    main.hthree6 = data.hthree6;
    main.hthree7 = data.hthree7;
    main.hthree8 = data.hthree8;
    main.hthree9 = data.hthree9;
    main.hthree10 = data.hthree10;

    /*localStorage.setItem("intro-head",data.introhead);
    localStorage.setItem("intro-head1",data.introhead1);
    localStorage.setItem("intro-head2",data.introhead2);
    localStorage.setItem("intro-head3",data.introhead3);
    localStorage.setItem("intro_p",data.introp);
    localStorage.setItem("intro_p1",data.introp1);
    localStorage.setItem("intro_p2",data.introp2);
    localStorage.setItem("intro_p3",data.introp3);
    localStorage.setItem("intro_p4",data.introp4);
    localStorage.setItem("intro-heading",data.heading1);
    localStorage.setItem("intro-p1",data.p1);
    localStorage.setItem("intro-p2",data.p2);
    localStorage.setItem("intro-p3",data.p3);
    localStorage.setItem("intro-p4",data.p4);
    localStorage.setItem("intro-p5",data.p5);
    localStorage.setItem("intro-p6",data.p6);
    localStorage.setItem("intro-p7",data.p7);
    localStorage.setItem("intro-p8",data.p8);
    localStorage.setItem("intro-p9",data.p9);
    localStorage.setItem("intro-p10",data.p10);
    localStorage.setItem("subhead-intro",data.subhead);
    localStorage.setItem("table-head",data.tablehead);
    localStorage.setItem("subheading-intro1",data.hthree1);
    localStorage.setItem("subheading-intro2",data.hthree2);
    localStorage.setItem("subheading-intro3",data.hthree3);
    localStorage.setItem("subheading-intro4",data.hthree4);
    localStorage.setItem("subheading-intro5",data.hthree5);
    localStorage.setItem("subheading-intro6",data.hthree6);
    localStorage.setItem("subheading-intro7",data.hthree7);
    localStorage.setItem("subheading-intro8",data.hthree8);
    localStorage.setItem("subheading-intro9",data.hthree9);
    localStorage.setItem("subheading-intro10",data.hthree10);
    //localStorage.setItem("",data.); */

  })