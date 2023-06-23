(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();
// Function to load the CSV file
function loadCSVFile(callback) {
    var xmlhttp = new XMLHttpRequest();
    var url = "Joyo_Kanji - Sheet1.csv";
  
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        callback(xmlhttp.responseText);
      }
    };
  
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  }
  
  // Function to process the CSV data
  function processCSVData(data) {
    // Split the data into rows
    var rows = data.split("\n");
  
    // Process each row
    for (var i = 0; i < rows.length; i++) {
      var columns = rows[i].split(",");
  
      // Access the data in each column
      var frontText = columns[0];
      var backText = columns[1];
  
      // Create a new flash card element
      var flashCard = document.createElement("div");
      flashCard.classList.add("flash-card");
  
      var frontElement = document.createElement("div");
      frontElement.classList.add("front");
      frontElement.textContent = frontText;
      flashCard.appendChild(frontElement);
  
      var backElement = document.createElement("div");
      backElement.classList.add("back");
      backElement.textContent = backText;
      flashCard.appendChild(backElement);
  
      // Add the flash card to the container
      flashCardContainer.appendChild(flashCard);
    }
  }
  
  // Load the CSV file and process the data
  loadCSVFile(processCSVData);
  