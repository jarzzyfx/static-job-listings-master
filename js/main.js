// imports
import homeScreen from "./homeScreen.js"



const container = document.querySelector('#container')


// load data


const router = ()=>{
    const main = document.querySelector('#main-container')
    main.innerHTML = homeScreen.render();
    homeScreen.afterRender()
 
}
// rendering to page

window.addEventListener('DOMContentLoaded', router)






















       