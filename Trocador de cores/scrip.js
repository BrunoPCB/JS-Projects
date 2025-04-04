const button = document.getElementById("click-me");
const colorHex = document.getElementById("color-code");
const background = document.getElementById("background");
const simpleBtn = document.querySelector(".nav-links li:nth-child(1) a");
const hexBtn = document.querySelector(".nav-links li:nth-child(2) a");

var useHexColors;

namedColors = [
    "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure",
    "beige", "bisque", "black", "blanchedalmond", "blue",
    "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse",
    "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson",
    "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray",
    "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange",
    "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue",
    "darkslategray", "darkturquoise", "darkviolet", "deeppink", "deepskyblue",
    "dimgray", "dodgerblue", "firebrick", "floralwhite", "forestgreen",
    "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod",
    "gray", "green", "greenyellow", "honeydew", "hotpink",
    "indianred", "indigo", "ivory", "khaki", "lavender",
    "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral",
    "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightpink",
    "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightsteelblue",
    "lightyellow", "lime", "limegreen", "linen", "magenta",
    "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple",
    "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred",
    "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite",
    "navy", "oldlace", "olive", "olivedrab", "orange",
    "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise",
    "palevioletred", "papayawhip", "peachpuff", "peru", "pink",
    "plum", "powderblue", "purple", "rebeccapurple", "red",
    "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown",
    "seagreen", "seashell", "sienna", "silver", "skyblue",
    "slateblue", "slategray", "snow", "springgreen", "steelblue",
    "tan", "teal", "thistle", "tomato", "turquoise",
    "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"
  ];

simpleBtn.addEventListener('click', (e) => {
  e.preventDefault()
  useHexColors = true;
});

hexBtn.addEventListener('click', (e) => {
  e.preventDefault()
  useHexColors = false;
});
 
function getRandomInt(max){
  return Math.floor(Math.random() * max);
}

button.addEventListener("click", (event) => {
  let randomColor = '';

  if(!useHexColors) {
    randomColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');    
    colorHex.innerText = randomColor;        
  } else {
    let randomIndex = getRandomInt(namedColors.length);
    randomColor = namedColors[randomIndex]
    colorHex.innerText = randomColor;  
  }

  console.log('Color: ' + randomColor)

  background.style.backgroundColor = randomColor;
});
