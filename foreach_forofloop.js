// Declare variables
const head_clicks = document.querySelectorAll('.accordian-box h3');
const para_contains = document.querySelectorAll('.contain-para');

// Loop through each h3 element and attach click event listeners
head_clicks.forEach(function(h3Element, index) {
    h3Element.addEventListener("click", function() {    
        // Toggle the 'custom_icon' class on the clicked h3 element
        h3Element.classList.toggle('custom_icon');

        // Toggle the 'custom-para' class on the corresponding .contain-para element
        para_contains[index].classList.toggle('custom-para');

        // Close other open paragraphs
        para_contains.forEach(function(para, paraIndex) {
            if (paraIndex !== index) {
                para.classList.remove('custom-para');
            }
        });

        // Reset styling on other headers
        head_clicks.forEach(function(otherH3, otherIndex) {
            if (otherIndex !== index) {
                otherH3.classList.remove('custom_icon');
            }
        });
    });
});

