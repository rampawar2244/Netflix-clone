document.querySelector("#submit").addEventListener("click", (e) => {
  e.preventDefault();

  const text = document.querySelector("#text").value;
  const api_key = `114d77d06fcdce8cc7dcb383cabb48bc`;
  const url = ` https://api.themoviedb.org/3/search/movie?query=${text}&api_key=${api_key}`;
  console.log(text);
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);

  // xhr.setRequestHeader('X-RapidAPI-Host', 'ott-details.p.rapidapi.com')
  // xhr.setRequestHeader('X-RapidAPI-Key', '8bed13442fmsh211452638842c5bp105e4cjsn1c25ee6fd8de')

  xhr.onreadystatechange = () => {
    if (xhr.status === 200 && xhr.readyState === 4) {
      const res = JSON.parse(xhr.responseText);
      console.log(res);
      let output = "";
      //  res.results.forEach(item =>{}
      output += `
              
              <div class="row">
              <div class="col">
               <img class="count-item-img" src="https://image.tmdb.org/t/p/w500/${res.results[0].poster_path}"   
               </div>
              <div class="col">
              <p>Movie Name: ${res.results[0].title}</p>
              <small>Release Date: ${res.results[0].release_date}</small>          
              <p>Overview: ${res.results[0].overview}</p>  
              </div>
              </div>
            </div>`;

      document.querySelector("#my-div").innerHTML += output;
    }
  };
  xhr.send();
});

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
