document.addEventListener("DOMContentLoaded", function () {
    var navMenu = document.getElementById("nav-menu");  
    var navbar = document.getElementById('navigation-bar');
    var footer = document.querySelector('footer');
    var squareBox = document.getElementById("trigger-box");
    var userIcon = document.getElementById("userIcon");
    var userDropdown = document.getElementById("user-dropdown");

    function toggleNav() {
        var navMenu = document.getElementById("nav-menu");
    
        // Get the current value of the left property
        var currentLeft = parseInt(window.getComputedStyle(navMenu).getPropertyValue('left'));
    
        // Calculate the new left position based on its current state
        var newLeft = (currentLeft === 0) ? -navMenu.clientWidth : 0;
    
        // Apply the new left position
        navMenu.style.left = newLeft + 'px';
    }
    
    function showUserDropDown() {
        var userDropdown = document.getElementById("user-dropdown");
        userDropdown.style.top = '70px';
    }
    
    function hideUserDropDown() {
        var userDropdown = document.getElementById("user-dropdown");
        userDropdown.style.top = '-35px';
    }
    
    function setNavMenuHeight() {
        var navbarBottom = navbar.getBoundingClientRect().bottom;
        var footerTop = footer.getBoundingClientRect().top;
        var navMenuHeight = footerTop - navbarBottom;
    
        navMenu.style.height = navMenuHeight + 'px';
    }

    setNavMenuHeight();
    window.addEventListener('resize', setNavMenuHeight);

    // Event listener for white box click
    squareBox.addEventListener("click", function (event) {
        event.stopPropagation(); // Stop the event propagation to prevent document click

        // Toggle the nav-menu visibility
        toggleNav();
    });

    // Event listener for document click to close nav-menu
    document.addEventListener("click", function (event) {
        // Check if the clicked element is inside nav-menu or trigger-box
        if (!navMenu.contains(event.target) && !squareBox.contains(event.target)) {
            // Close the nav-menu if it's open
            if (parseInt(navMenu.style.left) === 0) {
                toggleNav();
            }
        }
    });

    // Event listener for mouseover on user icon
    userIcon.addEventListener("click", function (event) {
        showUserDropDown();
    }); 

    // Event listener for mouseout on user icon
    userIcon.addEventListener("mouseleave", function () {
        dropdownHideTimeout = setTimeout(function () {
            hideUserDropDown();
        }, 300);
    }); 

    // Event listener for mouseover on user dropdown
        userDropdown.addEventListener("mouseenter", function () {
        clearTimeout(dropdownHideTimeout);
        showUserDropDown();
    });

    // Event listener for mouseout on user dropdown
    userDropdown.addEventListener("mouseleave", function () {
        hideUserDropDown();
    });



});    
    

