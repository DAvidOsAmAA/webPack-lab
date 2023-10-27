import generateJoke from "./generatejoke"
import { v4 as uuidv4 } from "uuid"
import laugh from './assets/person5.jpg'
import './style/main.scss';

let laughing =document.getElementById("laugh");
laughing.src = laugh;
const jokeByn = document.getElementById("joke");
jokeByn.addEventListener("click",generateJoke)






console.log("hello")
console.log(uuidv4())
console.log(generateJoke)