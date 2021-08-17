var imgdata = { //add 9 image URLs and a title in the end, you may do up to 6 slides
  firstimgURL: [
    "http://outdoornebraska.gov/wp-content/uploads/2020/09/Lizard_RGB.jpg",
    "https://animals.sandiegozoo.org/sites/default/files/2016-11/animals_hero_lizards.jpg",
    "https://i.guim.co.uk/img/media/e0d077790054d39d7df2a19f5699b18521ec86fe/0_83_2447_1468/master/2447.jpg?width=1200&quality=85&auto=format&fit=max&s=d5e18081111c654a1ce18a7e19da337b",
    "https://www.eekwi.org/sites/default/files/styles/original/public/2019-12/lizard-on-a-rock_0.jpg?itok=hquKPEJb",
    "https://ichef.bbci.co.uk/news/976/cpsprodpb/125B3/production/_107178157_178151.jpg",
    "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/wedtialwx2jivstt_1623721815.jpeg",
    "https://www.gannett-cdn.com/presto/2021/05/15/PSAT/d90bb36f-08f1-4d0a-9325-833c0d174e52-Blue_Spiny_Lizard-1.JPG?crop=1362,1022,x55,y2&quality=50&width=640",
    "https://live.staticflickr.com/7794/18120850868_fe91d26b65_b.jpg",
    "https://variety.com/wp-content/uploads/2021/07/Rick-Astley-Never-Gonna-Give-You-Up.png?w=1024",
    "humans" //title goes last
  ],
  secondimgURL: [
    "https://cdn.stocksnap.io/img-thumbs/960w/computer-laptop_RP7FCYXZMO.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRB_S4i1VqoLP2x0RMGNYL5tirT_8Q1rJHog&usqp=CAU",
    "https://p0.piqsels.com/preview/972/874/481/analysis-business-chart-computer.jpg",
    "https://www.thespruce.com/thmb/tClzdZVdo_baMV7YA_9HjggPk9k=/4169x2778/filters:fill(auto,1)/the-difference-between-trees-and-shrubs-3269804-hero-a4000090f0714f59a8ec6201ad250d90.jpg",
    "https://p0.piqsels.com/preview/646/108/836/turned-on-laptop-computer.jpg",
    "https://arbordayblog.org/wp-content/uploads/2017/09/japanese-maple-shade-tree-iStock-180454493.jpg",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2019/2/7/3/BP_HHMTN310_Bolden_home-exterior_AFTER_0132.jpg.rend.hgtvcom.966.644.suffix/1549585070420.jpeg",
    "https://www.extremetech.com/wp-content/uploads/2011/09/Eniac.jpg",
    "computers" //title goes last
  ],
  thirdimgURL: [
    "http://cdn.cnn.com/cnnnext/dam/assets/190430171751-mona-lisa.jpg",
    "https://www.publicdomainpictures.net/pictures/140000/nahled/-1448706366QwN.jpg",
    "https://i.pinimg.com/originals/f7/e4/ce/f7e4ce56bc7bf80502b47f154cdac832.jpg",
    "https://www.publicdomainpictures.net/pictures/180000/nahled/dinosaur-3-1464225334MLv.jpg",
    "https://p0.piqsels.com/preview/646/108/836/turned-on-laptop-computer.jpg",
    "https://www.maxpixel.net/static/photo/1x/Grasses-Play-Grass-Minecraft-Meadow-Flowers-Biom-1006433.jpg",
    "https://p1.pxfuel.com/preview/514/868/999/dinosaur-dino-giant-lizard-prehistoric-times.jpg",
    "https://images.crazygames.com/games/chrome-dino/thumb-1584433985643.png?auto=format,compress&q=75&cs=strip&ch=DPR&w=1200&h=630&fit=crop",
    "https://news.artnet.com/app/news-upload/2019/12/maurizio-cattelan-banana.jpg",
    "artwork" //title goes last
  ],
  fourthimgURL: [
    "https://www.maxpixel.net/static/photo/1x/Crowd-Crowds-Demo-People-Group-Of-People-Mass-1518843.jpg",
    "https://cdn.pixabay.com/photo/2017/09/20/13/38/crowds-2768571_1280.jpg",
    "https://www.maxpixel.net/static/photo/1x/Human-Crowds-People-Ulm-Collection-Group-592734.jpg",
    "https://p1.pxfuel.com/preview/145/185/216/cathedral-square-ulm-human-crowds.jpg",
    "https://i0.hippopx.com/photos/645/97/220/crowd-crowded-event-festival-preview.jpg",
    "https://i2.wp.com/www.dailycal.org/assets/uploads/2018/11/Music_daspunkt_flicker.CC-copy.jpg?ssl=1",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXqxJIvIYkTVA-PUVb5mdQSj_oyoO9gcRRFQ&usqp=CAU",
    "https://p0.piqsels.com/preview/909/335/578/stadium-audience-crowd-seats.jpg",
    "https://live.staticflickr.com/61/195907512_2b145da4a0_b.jpg",
    "COVID-19" //title goes last
  ],
  /*fifthimgURL: [ //add your new slide here
  
  ] */
};

var correctanswers = { //0 is wrong, 1 is right
  firstimgURL: [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1
  ],
  secondimgURL: [
    1,
    1,
    1,
    0,
    1,
    0,
    0,
    0,
    1
  ],
  thirdimgURL: [
    1,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    1
  ],
   /*fourthimgURL: [ //add your answers for slide #4 here
  
  ], */
   /*fifthimgURL: [ //add your answers for slide #5 here
  
  ] */
};

var answerdb = [];

function insertimages(slidenum) {
  var arrayToGet = slidenum + "imgURL";
  window.currentimgset = arrayToGet;
  for(let i = 1; i < 10; i++) { //indexing at 1 bc I don't feel like going back and renumbering everything
    var atimage = i.toString();
    document.getElementById(atimage).src = imgdata[arrayToGet][i-1]; //big brain moment right there by storing arrays in an array so I can call them by name
  }
  document.getElementById("target-img-name").innerText = imgdata[arrayToGet][9];
}

function resetcaptcha() {
    answerdb = [];
    for(let i = 1; i < 10; i++) {
      if(document.getElementById(i).className === "selected") {
        answerdb.push(1); //selected
      } else {
        answerdb.push(0); //unselected
      }
    }

    if(arrayEquals(answerdb, correctanswers[currentimgset]) == false) { //check if answers are correct
      //incorrect
      for(let i = 1; i < 10; i++) {
        if(document.getElementById(i).className === "selected") {
          document.getElementById(i).className = "selected wrong";
        }
      }
      document.getElementsByClassName("try-again")[0].style.display = "block";
    } else {
      for(let i = 1; i < 10; i++) {
        if(document.getElementById(i).className === "selected") {
          document.getElementById(i).className = "selected correct";
        }
      }
      setTimeout(function() {nextimg()}, 2000); //for some reason this seems to work
    }
}

function nextimg() {
  for(let i = 1; i < 10; i++) {
    if(document.getElementById(i).className === "selected" || document.getElementById(i).className === "selected correct") {
      document.getElementById(i).className = "unselected";
    }
  }
  initimg()
}

function captchaclick(num) {
  if(document.getElementById(num).className !== "selected" && document.getElementById(num).className !== "selected wrong" ) {
    document.getElementById(num).className = "selected";
  } else {
    document.getElementById(num).className = "unselected";
  }
}

var place = "none";
function initimg() {
  switch(place) {
    case "none":
      insertimages("first");
      place = "first";
      break;
    case "first":
      insertimages("second");
      place = "second";
      break;
    case "second":
      insertimages("third");
      place = "third";
      break;
    case "third":
      insertimages("fourth");
      place = "fourth";
      break;
    case "fourth":
      insertimages("fifth");
      place = "fifth";
      break;
    case "fifth":
      insertimages("sixth");
      place = "sixth";
      break;
    default:
      insertimages("first");
      place = "first";
  }

}

function arrayEquals(a, b) {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
}
