function createcard(title, cname, views, monthsold, duration, thumbnail) {
  let viewstr;
  if (views < 1000000) {
    viewstr = views / 1000 + "K";
  } else if (views > 1000000) {
    viewstr = views / 1000000 + "M";
  } else {
    viewstr = views;
  }

  let html = `<div class="card">
    <div class="img">
        <img  src="$(thumbnail)" alt="img">
        <div class="capsule">$(duration)</div>
    </div>
    <div class="text">
        <h1>$(title)</h1>
        <p>$(cname) . $(viewstr) views . $(monthsold) months ago</p>
    </div>
</div>`

document.querySelector(".container").innerHTML =document.querySelector(".container").innerHTML + html;

console.log('document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;')
}

// createcard("Youtube Video Design","CodeWithSarthak",560000,7,"31:22","wbpg/829012.jpg");




// const f = (title, cname, views, monthsold, duration,thumbnail) => {
//   let viewstr;
//   if (views < 1000000) {
//     viewstr = views / 1000 + "K";
//   } else if (views > 1000000) {
//     viewstr = views / 1000000 + "M";
//   } else {
//     viewstr = views;
//   }

//   let html = `<div class="card">
//     <div class="img">
//         <img  src="$(thumbnail)" alt="img">
//         <div class="capsule">$(duration)</div>
//     </div>
//     <div class="text">
//         <h1>$(title)</h1>
//         <p>$(cname) . $(viewstr) views . $(monthsold) months ago</p>
//     </div>
// </div>`;

//   document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
// };

// createcard(
//   "Youtube Video Design",
//   "CodeWithSarthak",
//   560000,
//   7,
//   "31:22",
//   "829012.jpg"
// );
