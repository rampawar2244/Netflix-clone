document.querySelector("#submit").addEventListener("click", (e) => {
  e.preventDefault();

  const text = document.querySelector("#text").value;
  const api_key = `114d77d06fcdce8cc7dcb383cabb48bc`;

  const url = [ 
    ` https://api.themoviedb.org/4/search/movie?query=${text}&api_key=${api_key}`

   ];
  console.log(text);
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);

  xhr.onreadystatechange = () => {
    if (xhr.status === 200 && xhr.readyState === 4) {
      const res = JSON.parse(xhr.responseText);
      console.log(res);
      let output = "";
      //  res.results.forEach(item =>{}
      output += ` 
      <div class="info-container">
        <div class="row">
       <div class="col-4">
           <img class="poster-img" src="https://image.tmdb.org/t/p/w500/${res.results[0].poster_path}" /> 
       </div>
       
      
       <div class="col-8">
       <div class="col-info">
           <p>Language : <span class="title">${res.results[0].original_language}</span></p>
           <p>Movie Name : <span class="title">${res.results[0].original_title}</span></p>
           <p>Release : <span class="date">${res.results[0].release_date}</span></p>
            <p>Popularity: <button class="btn btn-light">${res.results[0].popularity}</button></p>
           <p>Description : ${res.results[0].overview}</p>
           </div>
         </div>
       </div>
      </div>
      `;
      let movieId = `${res.results[0].id}`
      getvideo(movieId)
      document.querySelector("#my-div").innerHTML += output;
    }
  
  };
  xhr.send();
});

// **********YouTube Video*******************
var video = document.getElementById("video")
function getvideo(movieId) {
    console.log(movieId)
    let xhr4 = new XMLHttpRequest()
    let url4 = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=abdca3eea1b7fb0c1f10423e2fc33135`
    xhr4.open("GET", url4)
    xhr4.onreadystatechange = function () {
        if (xhr4.status == 200 && xhr4.readyState == 4) {
            var data4 = JSON.parse(xhr4.responseText)
            console.log(data4)
            data4.results.forEach(item => {
                video.setAttribute(
                    "src",
                    "https://www.youtube.com/embed/" + item.key + "?autoplay=1&controls=0"
                )
            })
        }
        else{
          console.log('error');
        }
        
    }

    xhr4.send()
}

// let user = document.querySelector('.youtube-video')
// function videoBtn(){
//   user.classList.toggle('hide');
//   console.log(videoBtn);
// }
/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
