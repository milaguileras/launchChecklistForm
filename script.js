// Write your JavaScript code here!

   window.addEventListener("load", function () {

      fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
         response.json().then(function(json){
            const div = document.getElementById("missionTarget");
            const destination = Math.round(Math.random()*5)

            div.innerHTML =`
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[destination].name}</li>
               <li>Diameter: ${json[destination].diameter}</li>
               <li>Star: ${json[destination].star}</li>
               <li>Distance from Earth: ${json[destination].distance}</li>
               <li>Number of Moons: ${json[destination].moons}</li>
            </ol>
            <img src="${json[destination].image}"></img>
            `;
         });
      })

      let form = document.getElementById("launchForm");

      form.addEventListener("submit", function(event){
         let pilotInput = document.querySelector("input[name=pilotName]");
         let copilotInput = document.querySelector("input[name=copilotName]");
         let fuelLevelInput = document.querySelector("input[name=fuelLevel");
         let cargoMassInput = document.querySelector("input[name=cargoMass]");
         let isPilotValid = true;
         let isCopilotValid = true;
         let isFuellevelValid = true;
         let isCargoMassValid = true;

         
         if(pilotInput.value === "" | copilotInput.value === "" |fuelLevelInput.value === "" |  cargoMassInput.value === ""){
            alert("Enter all information before submitting");
         
         }
         if(isNaN(pilotInput.value) === false){
            alert("Please enter a valid name for Pilot");
            isPilotValid = false;
         }
         if (isNaN(copilotInput.value) === false){
            alert("Please enter a valid name for Co-Pilot");
            isCopilotValid = false;
         }
         if(isNaN(fuelLevelInput.value) === true){
            alert("Please enter a valid number for Fuel Level");
            isFuellevelValid = false;
         }
         if(isNaN(cargoMassInput.value)=== true){
            alert("Please enter a valid number for Cargo Mass");
            isCargoMassValid = false;
         }
      
         if (isPilotValid && isCopilotValid && isFuellevelValid && isCargoMassValid) {
            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotInput.value} Ready`;
            document.getElementById("copilotStatus").innerHTML = `Pilot ${copilotInput.value} Ready`

            if(fuelLevelInput.value <= 10000){            
               document.getElementById("faultyItems").style.visibility = "visible";
               document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for    Launch";
               document.getElementById("launchStatus").style.color = "red"
               document.getElementById('fuelStatus').innerHTML = "Fuel is too low!"
            }
            if(cargoMassInput.value >= 10000){
               document.getElementById("faultyItems").style.visibility = "visible"
               document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
               document.getElementById("launchStatus").style.color = "red"
               document.getElementById('cargoStatus').innerHTML = "Cargo is too heavy!"
            }
            if(fuelLevelInput.value > 10000 && cargoMassInput.value < 10000) {
               document.getElementById("launchStatus").innerHTML = "Shuttle Is Ready for  Launch!";
               document.getElementById("launchStatus").style.color = "green"
            }
            event.preventDefault()
         }

      })
})

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
