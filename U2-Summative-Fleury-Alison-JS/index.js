
//creating the original component piece 
class MovieComponent { 
    constructor(studio) { 
        this.studio= studio; 
        this.template = `<p> ${this.studio} </p>`

    }
}
//component one: the movies' list 
class MovieListComponent { 
        MovieList = [
            {"title": "Inception", "Plot": "Dom Cobb (Leonardo DiCaprio) is a thief with the rare ability to enter people's dreams and steal their secrets from their subconscious. His skill has made him a hot commodity in the world of corporate espionage but has also cost him everything he loves. Cobb gets a chance at redemption when he is offered a seemingly impossible task: Plant an idea in someone's mind. If he succeeds, it will be the perfect crime, but a dangerous enemy anticipates Cobb's every move.", "id": 1},
            {"title": "Kid Gorgeous", "Plot": "John Mulaney: Kid Gorgeous at Radio City is a 2018 stand-up comedy film written by and starring John Mulaney. The special was recorded live in February 2018 at the Radio City Music Hall in New York City, and released by Netflix on May 1, 2018.", "id": 2},
            {"title": "Someone Great", "Plot":"Dumped by her long-term boyfriend, a music journalist recruits her two best friends for one last outrageous adventure in New York City before she moves to San Francisco.", "id": 3},
            {"title": "Easy A", "Plot": "Prompted by her popular best friend to spill details of her boring weekend, Olive (Emma Stone), a clean-cut teen, decides to spice things up by telling a little lie. When the high-school busybody (Amanda Bynes) overhears the conversation and spreads it all over campus, Olive is suddenly notorious but for the wrong reasons.", "id": 4},
            {"title": "Hidden Figures", "Plot": "The story of a team of female African-American mathematicians who served a vital role in NASA during the early years of the U.S. space program.", "id": 5}
        ]

        //filtering out via maps and templates by value "id" to add each movie into its own card 

        inception = this.MovieList.filter(movie => movie.id == 1);

        template1 = ` 
            <div>
                ${this.inception.map(movie => new MovieComponent(movie.title).template).join(``)}
                </div>`
        
        kidGorgeous = this.MovieList.filter(movie => movie.id == 2);

        template2 = ` 
         <div>
            ${this.kidGorgeous.map(movie => new MovieComponent(movie.title).template).join(``)}
                        </div>`
        
        someoneGreat = this.MovieList.filter(movie => movie.id == 3);

        template3 = ` 
            <div>
            ${this.someoneGreat.map(movie => new MovieComponent(movie.title).template).join(``)}
            </div>`
        
        easyA = this.MovieList.filter(movie => movie.id == 4);

            template4 = ` 
                <div>
                ${this.easyA.map(movie => new MovieComponent(movie.title).template).join(``)}
                </div>`

        hiddenFigures = this.MovieList.filter(movie => movie.id == 5);

                template5 = ` 
                    <div>
                    ${this.hiddenFigures.map(movie => new MovieComponent(movie.title).template).join(``)}
                    </div>`
}

//dynamically entering each card as CardComponent 

class CardComponent { 
    template = `
<div class="card" style="width: 18rem;">
        <div class="card-body">
        <img class="card-img-top" src="assets/p7825626_v_v8_ad.jpg"></img>
          <h5 class="card-title">  ${new MovieListComponent().template1}</h5>
          <div class="space"> 
        <div id="buttonspotInception">
            <button id="buttonOne" type="button" class="btn btn-primary">Show Plot</button>
       </div>
        </div>
        </div>
      </div>

      <div class="card" style="width: 18rem;">
        <div class="card-body">
        <img class="card-img-top" src="assets/kidgorgeousimage.jpg"></img>
          <h5 class="card-title"> ${new MovieListComponent().template2}</h5>
          <div class="space"> 
                <div id="buttonspotKid">
            <button id="buttonKid" type="button" class="btn btn-primary">Show Plot</button>
        </div>
        </div>
        </div>
      </div>

      <div class="card" style="width: 18rem;">
      <div class="card-body">
      <img class="card-img-top" src="assets/someonegreatimage.jpg"></img>
        <h5 class="card-title">${new MovieListComponent().template3}</h5>
        <div class="space"> 
              <div id="buttonspotGreat">
          <button id="buttonGreat" type="button" class="btn btn-primary">Show Plot</button>
          </div>
      </div>
  
  </div>
    </div>

    </div>
      </div>
      <div class="card" style="width: 18rem;">
        <div class="card-body">
        <img class="card-img-top" src="assets/easyaimage.jpg"></img>
          <h5 class="card-title">${new MovieListComponent().template4}</h5>
          <div class="space"> 
              <div id="buttonspotA">
            <button id="buttonA" type="button" class="btn btn-primary">Show Plot</button>
        </div>
        </div>
        </div>
      </div>

     <div class="card" style="width: 18rem;">
      <div class="card-body">
      <img class="card-img-top" src="assets/hiddenfiguresimage.jpg"></img>
        <h5 class="card-title">${new MovieListComponent().template5}</h5>
        <div class="space"> 
              <div id="buttonspotHidden">
          <button id="buttonHidden" type="button" class="btn btn-primary">Show Plot</button>
     </div>
      </div>
      </div>
    </div>`
}
//the actual entering of the bootstrap cards into the main segement of the page 
document.getElementById("root").innerHTML = new CardComponent().template; 

//using another component for the descriptions (I know I have the plot both here and in MovieList--I decided to do a separate component after testing and realizing I could do it pulling from either one)
class DescriptionListComponent { 
    DescriptionList = [
        {"plot": "Dom Cobb (Leonardo DiCaprio) is a thief with the rare ability to enter people's dreams and steal their secrets from their subconscious. His skill has made him a hot commodity in the world of corporate espionage but has also cost him everything he loves. Cobb gets a chance at redemption when he is offered a seemingly impossible task: Plant an idea in someone's mind. If he succeeds, it will be the perfect crime, but a dangerous enemy anticipates Cobb's every move.", "id": 1},
        {"plot": "John Mulaney: Kid Gorgeous at Radio City is a 2018 stand-up comedy film written by and starring John Mulaney. The special was recorded live in February 2018 at the Radio City Music Hall in New York City, and released by Netflix on May 1, 2018.", "id": 2},
        {"plot":"Dumped by her long-term boyfriend, a music journalist recruits her two best friends for one last outrageous adventure in New York City before she moves to San Francisco.", "id": 3},
        {"plot": "Prompted by her popular best friend to spill details of her boring weekend, Olive (Emma Stone), a clean-cut teen, decides to spice things up by telling a little lie. When the high-school busybody (Amanda Bynes) overhears the conversation and spreads it all over campus, Olive is suddenly notorious but for the wrong reasons.", "id": 4},
        {"plot": "The story of a team of female African-American mathematicians who served a vital role in NASA during the early years of the U.S. space program.", "id": 5}
    ]

    //filtering into templates for each description by ID into a list that can be dynamically entered for each description

    inceptionPlot = this.DescriptionList.filter(description => description.id == 1);

    template11 = ` 
    <div>
        ${this.inceptionPlot.map(description => new MovieComponent(description.plot).template).join(``)}
        </div>`

    kidGorgeousPlot = this.DescriptionList.filter(description => description.id == 2);

    template12 = ` 
        <div>
            ${this.kidGorgeousPlot.map(description => new MovieComponent(description.plot).template).join(``)}
            </div>`
    
    someoneGreatPlot = this.DescriptionList.filter(description => description.id == 3);

    template13 = ` 
                <div>
                    ${this.someoneGreatPlot.map(description => new MovieComponent(description.plot).template).join(``)}
                    </div>`

    easyAPlot = this.DescriptionList.filter(description => description.id == 4);

    template14 = ` 
        <div>
            ${this.easyAPlot.map(description => new MovieComponent(description.plot).template).join(``)}
            </div>`

     hiddenFiguresPlot = this.DescriptionList.filter(description => description.id == 5);

     template15 = ` 
                <div>
                    ${this.hiddenFiguresPlot.map(description => new MovieComponent(description.plot).template).join(``)}
                    </div>`
}


/*the first one here listens for a click on the "Show Plot", and then dynamically enters the title "description" and the 
appropriate item from the description. Then, it replaces the button with a Hide Plot Danger Type Button
*/ 

document.addEventListener("click", function(e1) { 
    if(e1.target && e1.target.id == "buttonOne") {
       
        document.getElementById("description").innerHTML = `
            <h3> Description </h3>
            <p id="small"> ${new DescriptionListComponent().template11} </p>`
        document.getElementById("buttonspotInception").innerHTML = `
        <button id="button2" type="button" class="btn btn-danger">Hide Plot</button>`
        }
   } 
  )
  
  /* This second part listens for a click on the Hide Plot button, and when clicked it will remove the description by entering a blank string 
  in the space where the description previously went, and then will replace the Hide Plot button with the Show Plot button from earlier
  ensuring that you can click as many times as you like and you'll still be able to access the descriptions as needed!*/ 

  document.addEventListener("click", function(e2) { 
    if(e2.target && e2.target.id == "button2") {
      document.getElementById("description").innerHTML = "";
      document.getElementById("buttonspotInception").innerHTML = `<button id="buttonOne" type="button" class="btn btn-primary">Show Plot</button>`
    }} )
  
  //from here on out these just repeat the same functions from above (the functional Hide/Show buttons)

  document.addEventListener("click", function(e3) { 
    if(e3.target && e3.target.id == "buttonKid") {
        
  
        document.getElementById("description").innerHTML = `
            <h3> Description </h3>
            <p>${new DescriptionListComponent().template12}</p>`
        document.getElementById("buttonspotKid").innerHTML = `
            <button id="button3" type="button" class="btn btn-danger">Hide Plot</button>`
            }
   } 
  )
  document.addEventListener("click", function(e4) { 
    if(e4.target && e4.target.id == "button3") {
      document.getElementById("description").innerHTML = "";
      document.getElementById("buttonspotKid").innerHTML = `<button id="buttonKid" type="button" class="btn btn-primary">Show Plot</button>`
    }} )
  
  
  document.addEventListener("click", function(e5) { 
    if(e5.target && e5.target.id == "buttonGreat") {
       
  
        document.getElementById("description").innerHTML = `
            <h3> Description </h3>
            <p>${new DescriptionListComponent().template13}</p>`
        document.getElementById("buttonspotGreat").innerHTML = `
            <button id="button4" type="button" class="btn btn-danger">Hide Plot</button>`
            }
   } 
  )
  
  document.addEventListener("click", function(e6) { 
    if(e6.target && e6.target.id == "button4") {
      document.getElementById("description").innerHTML = "";
      document.getElementById("buttonspotGreat").innerHTML = `<button id="buttonGreat" type="button" class="btn btn-primary">Show Plot</button>`
    }} )
  
  
  document.addEventListener("click", function(e7) { 
    if(e7.target && e7.target.id == "buttonA") {
    
        document.getElementById("description").innerHTML = `
        <h3> Description </h3>
            <p>${new DescriptionListComponent().template14}</p>`
  
      document.getElementById("buttonspotA").innerHTML = `
            <button id="button5" type="button" class="btn btn-danger">Hide Plot</button>`
            }
   } 
  )
  
  document.addEventListener("click", function(e8) { 
    if(e8.target && e8.target.id == "button5") {
      document.getElementById("description").innerHTML = "";
      document.getElementById("buttonspotA").innerHTML = `<button id="buttonA" type="button" class="btn btn-primary">Show Plot</button>`
    }} )

    document.addEventListener("click", function(e9) { 
  if(e9.target && e9.target.id == "buttonHidden") {
    
      document.getElementById("description").innerHTML = `
          <h3> Description </h3>
          <p>${new DescriptionListComponent().template15}</p>`

      document.getElementById("buttonspotHidden").innerHTML = `
          <button id="button6" type="button" class="btn btn-danger">Hide Plot</button>`
          }
 } 
)

document.addEventListener("click", function(e10) { 
  if(e10.target && e10.target.id == "button6") {
    document.getElementById("description").innerHTML = "";
    document.getElementById("buttonspotHidden").innerHTML = `<button id="buttonHidden" type="button" class="btn btn-primary">Show Plot</button>`
  }} )

