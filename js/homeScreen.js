
import data from './data.js'
import { constructor } from './utils.js';


    // variables
const nav_content = document.querySelector('.nav_content')
    const navBox = document.querySelector('.nav-box')
    let searchList = [];
      const {items} = data;
      let Search = []
    
    
    // add to search list
const addToSearchList = (value)=>{
      searchList.push(value);
}

// open nav box
const openNavBox = ()=>{
  navBox.classList.remove('deactive')
  navBox.classList.add('active')
}

// render
const styleComponent = (input)=>{
  
  let list = document.createElement('li')
  let spanOne = document.createElement('span')
  let imgBtn = document.createElement('button')
  let btnImg = document.createElement('img')
  list.classList.add('option')
  imgBtn.setAttribute('data-item', input)
  spanOne.classList.add('option-text')
  imgBtn.classList.add('option-btn')
  btnImg.src = './images/icon-remove.svg'

  // create item

  imgBtn.appendChild(btnImg)

  list.append(spanOne, imgBtn)

   list.firstElementChild.textContent = input;

  
        nav_content.appendChild(list)
      
}

// search
const search = (value) => {

  // first we take a value in the params
  // we create a search empty list
  // for each of the value, we will destructure the items and filter the items(char) that includes our value(val) and then push it to the Search list
  // then we can return or do what ever we want with the returned value

    value.forEach(item => {
      Search.push(...items.filter(val => val.languages.includes(item)))
      console.log(item);
      document.querySelector('#main-container').innerHTML = constructor(Search)
    })
    
  


}






const homeScreen = {
  afterRender:()=>{
    const skillbtns = document.querySelectorAll('.skill-btn')
    const optionBtns = document.querySelectorAll('.option-btn');
    const clearBtn = document.querySelector('.clear')
    const options = document.querySelectorAll('.option')
    
    document.addEventListener('click', e =>{
      if(e.target.classList.contains('option-btn')){
    
       const value = e.target.getAttribute('data-item')
       
       
       const index = searchList.indexOf(value)
       
       searchList = [...searchList.slice(0, index), ...searchList.slice(index + 1)]

      search(searchList)      
      nav_content.removeChild(e.target.parentElement)
                
               if (searchList.length === 0) {
                    navBox.classList.remove('active')
                    navBox.classList.add('deactive')
                 document.querySelector('#main-container').innerHTML = homeScreen.render()
              
               }
           
      }
    })


  document.addEventListener('click', e =>{
    const target = e.target.textContent
if(e.target.classList.contains('skill-btn')){
  openNavBox()
  addToSearchList(target)
  search(searchList)
  styleComponent(target)
}
// console.log(target);

  

  })



// cancel btn



// clear btn
                
                clearBtn.addEventListener('click', ()=>{
                    searchList.splice(0,searchList.length)
                    navBox.classList.remove('active')
                    document.querySelectorAll('.option').forEach(option => option.remove())
                     document.querySelector('#main-container').innerHTML = homeScreen.render()
                     homeScreen.afterRender()
                })

  },
    render: ()=>{
    
        
const btns = document.querySelectorAll('.btn')

           const {items} = data        
           // sorting out array
              return  constructor(items)
},


            
   

}

export default homeScreen