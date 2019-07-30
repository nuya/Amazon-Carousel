$(document).ready(function() {
  // get data via JSON
  $.getJSON("https://d3jlxzdxc80cmp.cloudfront.net/adt/hiring/exercise2/echo_products.json", function(data) {
    console.log(data);// intialize product items
    $("#products").html('');
    var output = "";
    // loop through the JSON, parse out products in HTML
    for (var i in data.asins) {
        output += "<div class='amazonSlides fade'>";
        output += "<a class='amazon-logo' href='https://amazon.com' target='_blank'></a>";
        // Product Image
        output += "<div class='product-img-container'>";
        output += "<span class='center-img'></span>";
        output += "<img id='productImg' class='slide' src = '" + data.asins[i].imageHires + "'/>";
        output += "</div>";
        // Product Content
        output += "<div class='content-container'>";
        // Product Title
        output += "<div class='title'>" + data.asins[i].title + "<span class='byline'> " + data.asins[i].byLine + "</span></div>";
        // Product Reviews
        output += "<a class='reviews' href = 'https://amazon.com" + data.asins[i].reviewLink + "'target='_blank'>Reviews</a>";
        // Product Ratings
        output += "<meter class='ratings' value=" + data.asins[i].ratingExact + " min='0' max='5' low='1' high='5' optimum='5'></meter>";
        // Product Prime Eligible
        output += "<div class='prime-eligible' value=" + data.asins[i].isPrimeEligible + "><i class='prime-icon'/></div>";
        // Product Price
        output += "<div class='price'>" + data.asins[i].price + "</div>";
        // Product Shipping
        output += "<span class='shipping' value=" + data.asins[i].shipping+ ">" + data.asins[i].shipping + "</span>";
        output += "</div>";
        // Add to Cart Button
        output += "<a class='button' href = 'https://amazon.com" + data.asins[i].detailPageUrl + "'target='_blank'><i class='cart-icon'/>Add to Cart</a>";
        output += "</div>";
    }
    $("#products").append(output);
    $("#products").append('');
  });
});

// Carousel

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("amazonSlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
