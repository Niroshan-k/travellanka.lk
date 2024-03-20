const head = {
  headword : "",
  headp : ""
};
const main = {
  galleryhead : "",
  fliphead1 : "",
  flip1 : "",
  link1 : "",
  fliphead2 : "",
  flip2 : "",
  link2 : "",
  fliphead3 : "",
  flip3 : "",
  link3 : "",
  fliphead4 : "",
  flip4 : "",
  link4 : "",
  fliphead5 : "",
  flip5 : "",
  link5 : "",
  fliphead6 : "",
  flip6 : "",
  link6 : "",
  gallerylink : "",
  heading1 : "",
  heading2 : "",
  subhead1 : "",
  subsec1 : "",
  subhead2 : "",
  subsec2 : "",
  subhead3 : "",
  subsec3 : "",
  animal1 : "",
  animal2 : "",
  subheadI : "",
  subheadII : "",
  subheadIII : "",
  subheadIV : "",
  sebsecI : "",
  sebsecII : "",
  sebsecIII : "",
  sebsecIV : "",
  parks : "",
  li1 : "",
  li2 : "",
  li3 : "",
  li4 : "",
  li5 : "",
  li6 : "",
  li7 : "",
  li8 : "",
  li9 : "",
  li10 : "",
  li11 : "",
  li12 : "",
  li13 : "",
  li14 : "",
  li15 : "",
  li16 : "",
  li17 : "",
  animals7 : "",
  animallist : []
}

fetch('home.json')
  .then(Response => Response.json())
  .then(data => {
    head.headword = data.headword;
    head.headp = data.headp;
    main.galleryhead = data.galleryhead;
    main.fliphead1 = data.fliphead1;
    main.flip1 = data.flip1;
    main.link1 = data.link;
    main.fliphead2 = data.fliphead2;
    main.flip2 = data.flip2;
    main.link2 = data.link;
    main.fliphead3 = data.fliphead3;
    main.flip3 = data.flip3;
    main.link3 = data.link;
    main.fliphead4 = data.fliphead4;
    main.flip4 = data.flip4;
    main.link4 = data.link;
    main.fliphead5 = data.fliphead5;
    main.flip5 = data.flip5;
    main.link5 = data.link;
    main.fliphead6 = data.fliphead6;
    main.flip6 = data.flip6;
    main.link6 = data.link;
    main.gallerylink = data.gallerylink;
    main.heading1 = data.heading1;
    main.heading2 = data.heading2;
    main.subhead1 = data.subhead1;
    main.subhead2 = data.subhead2;
    main.subhead3 = data.subhead3;
    main.subsec1 = data.subsec1;
    main.subsec2 = data.subsec2;
    main.subsec3 = data.subsec3;
    main.animal1 = data.animal1;
    main.animal2 = data.animal2;
    main.subheadI = data.subheadI;
    main.subheadII = data.subheadII;
    main.subheadIII = data.subheadIII;
    main.subheadIV = data.subheadIV;
    main.subsecI = data.subsecI;
    main.subsecII = data.subsecII;
    main.subsecIII = data.subsecIII;
    main.subsecIV = data.subsecIV;
    main.parks = data.parks;
    main.li1 = data.li1;
    main.li2 = data.li2;
    main.li3 = data.li3;
    main.li4 = data.li4;
    main.li5 = data.li5;
    main.li6 = data.li6;
    main.li7 = data.li7;
    main.li8 = data.li8;
    main.li9 = data.li9;
    main.li10 = data.li10;
    main.li11 = data.li11;
    main.li12 = data.li12;
    main.li13 = data.li13;
    main.li14 = data.li14;
    main.li15 = data.li15;
    main.li16 = data.li16;
    main.li17 = data.li17;
    main.animals7 = data.animals7;
    main.animallist = data.animallist;

    /*localStorage.setItem('home-parks',data.parks);
    localStorage.setItem('home-headword',data.headword);
    localStorage.setItem('home-headp',data.headp);
    localStorage.setItem("home-galleryhead",data.galleryhead);
    localStorage.setItem("home-fliphead1",data.fliphead1);
    localStorage.setItem("home-fliphead2",data.fliphead2);
    localStorage.setItem("home-fliphead3",data.fliphead3);
    localStorage.setItem("home-fliphead4",data.fliphead4);
    localStorage.setItem("home-fliphead5",data.fliphead5);
    localStorage.setItem("home-fliphead6",data.fliphead6);
    localStorage.setItem("home-flip1",data.flip1);
    localStorage.setItem("home-flip2",data.flip2);
    localStorage.setItem("home-flip3",data.flip3);
    localStorage.setItem("home-flip4",data.flip4);
    localStorage.setItem("home-flip5",data.flip5);
    localStorage.setItem("home-flip6",data.flip6);
    localStorage.setItem("home-link1",data.link);
    localStorage.setItem("home-link2",data.link);
    localStorage.setItem("home-link3",data.link);
    localStorage.setItem("home-link4",data.link);
    localStorage.setItem("home-link5",data.link);
    localStorage.setItem("home-link6",data.link);
    localStorage.setItem("home-gallerylink",data.gallerylink);
    localStorage.setItem("home-heading1",data.heading1);
    localStorage.setItem("home-heading2",data.heading2);
    localStorage.setItem("home-subhead1",data.subhead1);
    localStorage.setItem("home-subhead2",data.subhead2);
    localStorage.setItem("home-subhead3",data.subhead3);
    localStorage.setItem("home-animal1",data.animal1);
    localStorage.setItem("home-animal2",data.animal2);
    localStorage.setItem("home-subheadI",data.subheadI);
    localStorage.setItem("home-subheadII",data.subheadII);
    localStorage.setItem("home-subheadIII",data.subheadIII);
    localStorage.setItem("home-subheadIV",data.subheadIV);
    localStorage.setItem("home-subsecI",data.subsecI);
    localStorage.setItem("home-subsecII",data.subsecII);
    localStorage.setItem("home-subsecIII",data.subsecIII);
    localStorage.setItem("home-subsecIV",data.subsecIV);
    localStorage.setItem("home-li1",data.li1);
    localStorage.setItem("home-li2",data.li2);
    localStorage.setItem("home-li3",data.li3);
    localStorage.setItem("home-li4",data.li4);
    localStorage.setItem("home-li5",data.li5);
    localStorage.setItem("home-li6",data.li6);
    localStorage.setItem("home-li7",data.li7);
    localStorage.setItem("home-li8",data.li8);
    localStorage.setItem("home-li9",data.li9);
    localStorage.setItem("home-li10",data.li10);
    localStorage.setItem("home-li11",data.li11);
    localStorage.setItem("home-li12",data.li12);
    localStorage.setItem("home-li13",data.li13);
    localStorage.setItem("home-li14",data.li14);
    localStorage.setItem("home-li15",data.li15);
    localStorage.setItem("home-li16",data.li16);
    localStorage.setItem("home-li17",data.li17);
    localStorage.setItem("home-animal7",data.animals7);
    localStorage.setItem("home-animallist",data.animallist);
    //localStorage.setItem("",data.); */
  })
