- we will create the html and css template page

       ========HTML AND CSS GUIDE=======

- in the html page, we will create the page nav element , the article structure, and also page layouts for the articles on the site
- in the article, we will first use a display of flex t0 create the two row layout
  -after we will use the gap element to create that space bettween the picture and the texts content
- on the text-content, we will use a display of flex and a flex-direction of column to make dem from top to bottom on the page
  -in the second section of the article, we will place our buttons and center the in the section
- after doing this, we can now add hover, click and active states to the bottons

  - then create the div at the top of the navbar which shows the buttons/ skills that u have selected, also create the clear button or action that can enable the user clear the whole search result

  - then create buttons and how they will appear on the select div and also their close button.
  - also create active and hover state in this buttons and especially for the close button

        =========== JAVASCRIPT GUIDE =========

- first of all we will try to load all the documents using our javascript to dynamically add the pages to the screen

- we will first create a data file and put all the data/information in an object format in that file

-then we create a screens folder that wiil basically contain our change in screen pages, which wil hold our change in screen functions

=we will create a home screen page and create a render home screen function which will get the data from our data.js and render it to our screen if called

- then we will create an app.js file, this file will be responsible for talking directy with our index.html file

- we wi;ll create a render function that will render our screens either once they are called and once the domcontent is loaded

- in this render functuion we will call in our home screen and also call the render function in its body and we wil put the home screen render function in the app.js render fuvtion to load our page dynamically

====SELECTING SKILLS===

- From the languages array in the product, create a buttons that will show the skiils in the programmers tab

return `<div class="nav-box"> <ul class="selected-jobs"> ${newjob} </ul> <div class="clear"> <h3>clear</h3> </div> </div>`

                return ` <ul class="selected-jobs">
          <li class="option">
            <span class="option-text">html</span>
            <span class="option-btn">
              <img src="./images/icon-remove.svg" alt="">
            </span>
          </li>

        </ul>



     skillList.push(target)

for (let i = 0; i < skillList.length; i++) {  
 ulLinks = skillList[i]

    newSkill  = ` <li class="option">
            <span class="option-text">${skillList}</span>
            <span class="option-btn">
              <img src="./images/icon-remove.svg" class="option-btn"> alt="">
            </span>
          </li>`

        }
        navBox.innerHTML = ` <ul class="selected-jobs">${newSkill} <div class="clear"> <h3>clear</h3> </div></ul>`

console.log(skillList);
