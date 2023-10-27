import axios from "axios"


function generateJoke (){
  let config = {
    headers:{
      Accept:"application/json"
    }
  }
  axios.get("https://icanhazdadjoke.com/",config).then((res)=>{
    console.log(res);
    document.getElementById("joke").innerHTML =res.data.joke;
    if (res.data && res.data.joke) {
      document.getElementById("joke").innerHTML = res.data.joke;
    } else {
      document.getElementById("joke").innerHTML = "Failed to fetch a joke.";
    }
  });
}

export default generateJoke