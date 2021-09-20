//JS code to make the collapsible for FAQ section work properly.
var coll = document.getElementsByClassName("collapsible-button");
var i;

for (i = 0; i < coll.length; i++) { //iterate through the collapsible buttons and add an event listener 
  coll[i].addEventListener("click", function() {
    var content = this.nextElementSibling;
    if (content.style.display === "block") { //make the  collapsible open up when clicked on
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


