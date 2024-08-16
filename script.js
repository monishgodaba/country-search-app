let country = document.querySelector(".country-name")
let info = document.querySelector(".country-info")
let img = document.querySelector(".img-div")
let bgColor = document.querySelector('.flex-div')
  async function fetchData()
  {

    let inputValue = document.getElementById("input")
    let lower = String(inputValue.value).toLocaleLowerCase()
    let response = await(fetch(`https://restcountries.com/v3.1/all`))
    let json = await(response.json());
    let found = false;
    for(let i=0;i<json.length;i++)
   {
    if(String(json[i].name.common).toLocaleLowerCase() === lower)
   {
    found = true;
    let languages = json[i].languages;
    let get = ''
    for(let k in languages)
   {
     get += languages[k]+' ';
   }
   let details = json[i]
   country.innerHTML=`Name : ${lower.toUpperCase()}`
   info.innerHTML = `
   Capital : ${details.capital}<br> 
   Continent : ${details.continents} <br>
   Languages : ${get.trim().split(' ').join()} <br>
   Population : <span>${details.population}</span> <br>
   Region : ${details.region} <br>
   Timezone : <span class="utc">${details.timezones}</span>
   `;
   img.innerHTML = `<img src="${details.flags.png}" alt='img not found'> <br>
   <img class="cloatofarms" src = "${details.coatOfArms.png}" alt="coatOfArms">
   ` ;
   bgColor.style.backgroundColor = "rgb(224, 219, 219)"
   break;
   }
   
   }
   if (!found && lower!=='') {
      country.innerHTML = 'Not found';
      info.innerHTML = '';
      img.innerHTML = '';
      document.querySelector('.flex-div').style.backgroundColor = "transparent"
    }
   
  }