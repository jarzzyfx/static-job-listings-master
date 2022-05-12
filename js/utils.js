

// const btn = {
//   renderBtns : ()=>{
        
// // creating jobs

// const nav = document.querySelector('.nav')
// const navBox = document.querySelector('.nav-box')
// const nav_content = document.querySelector('.nav_content')
// const skillbtns = document.querySelectorAll('.skill-btn')


// let skillList = [];
// let newSkill = null;
// let ulLinks = null;





// skillbtns.forEach(btn=>{
//     btn.addEventListener('click', (e)=>{
//         let list = document.createElement('li')
//         let spanOne = document.createElement('span')
//         let imgDiv = document.createElement('div')
//         let btnImg = document.createElement('img')
//         const target = e.target.textContent
        
//         // creating the array
//         skillList.push(target)



//         let profile =  e.target.parentElement.parentElement.parentElement;

        

        
        

//          // search functionality
//        let SKlist = skillList.map(skillItem => {
//            return skillItem
//        })
      
       

       
//        let new_sk_list = [...new Set(SKlist)];
//        console.log(new_sk_list);

//     new_sk_list.forEach(item => {
//         new_sk_list.includes(item) ? console.log(profile) : null;
//     })


//        // search functionality
        
//         for (let i = 0; i < new_sk_list.length; i++) {
//             spanOne.textContent = target
            
//         }
//         //  create the jobs
//         btnImg.src = './images/icon-remove.svg'
//         // creating element
//         imgDiv.classList.add('option-btn')
//         list.classList.add('option')
//         spanOne.classList.add('option-text')
        
//         imgDiv.appendChild(btnImg)
        
//          list.appendChild(spanOne)
//          list.appendChild(imgDiv)
//          nav_content.append(list)
         
//          // box
//          navBox.classList.add('active')
//          navBox.classList.remove('deactive')
         
         
        //  imgDiv.addEventListener('click', (e)=>{
        //      nav_content.removeChild(e.currentTarget.parentElement)  
        //     new_sk_list.splice(e.currentTarget.parentElement,1)                
        //     if (new_sk_list.length === 0) {
        //          navBox.classList.remove('active')
        //          navBox.classList.add('deactive')
        
        //     }
        // })
//                 // delet btns
//                 const clearBtn = document.querySelector('.clear')
                
                
                // clearBtn.addEventListener('click', ()=>{
                //     new_sk_list.splice(0,new_sk_list.length)
                //     navBox.classList.remove('active')
                //     list.remove()
                // })
//             })
//         })

       
        
//     }
// }       
// export default btn


export const constructor = (value) => {
   return     `
  <section id="container">

            ${value.map(item =>{
                return `
                <div class="profile">
        <div class="dev-details">
          <img src= "${item.logo}" alt="logo">
          <div class="dev-info">
            <!-- top writing -->
            <div class="info-span">
              <h5>${item.company}</h5>
              <ul class="btns">
               <span>${item.new ? `  <li class= 'btn'>new</li>`: ""}</span>
               <span> ${item.featured ? `  <li class= 'btn ftd'>featured</li>`: ""}</span>
               
              </ul>
              
            </div>
        <!-- middle writing -->
        <h1>${item.position}</h1>
        
        <!-- third writing -->
        <div class="time-span">
        <h6>${item.postedAt} </h6>
        <ul class="time">
        <li class="">${item.contract}</li>
        <li class="">${item.location}</li>
        </ul>
        </div>
          </div>
        </div>
        
        <!-- skills -->
          <ul class="buttons">
          ${item.languages.map(lang=>{
          return `<li><button class="skill-btn">${lang}</button></li>`
        }).join('')}
          </ul>
          
          </div>
          `
        }).join('')}

            </section>
  `
}