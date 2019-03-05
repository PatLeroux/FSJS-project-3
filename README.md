# Interactive Form
In this project, you'll use JavaScript to enhance an interactive registration form for a fictional conference called "FullStack Conf."

Using the supplied HTML and CSS files, you'll add your own JavaScript to make the form more user-friendly by:

    adding customized and conditional behavior and interactivity
    validating user input and providing helpful error messages when the user enters invalid information into the form fields.

Instead of plain "vanilla" JavaScript, you'll use the popular jQuery library to complete this project. While it's important for a developer to have a solid understanding and familiarity of plain vanilla JavaScript, it's also important to be able to understand and work with jQuery since it is so common and prevalent on the web.

The benefits of using jQuery are:

    Shorter and simplified syntax
    Help with cross-browser compatibility since jQuery deals with a lot of that stuff under the hood
    A strong familiarity with jQuery will only make you a better developer since it enjoys a strong market share on the web

After completing this project, you'll have a solid foundational knowledge of using forms in your projects. This is tremendously valuable since forms are a major aspect of most web sites and web applications, which makes this project a key addition to your portfolio, and a crucial step on your journey to becoming a professional full stack web developer.


To get a passing grade you'll need to submit a project that meets the following requirements. If your project receives a "Needs Work" rating on any of these tasks, then you'll need to edit your project and re-submit it until it "Meets" or "Exceeds" each task requirement.

jQuery 	
   Project includes jQuery and utilizes it in at least some aspect of the form.

Focus on the first field 	
   On page load, the cursor appears in the "Name" field, ready for a user to type.

Job Role Section 	
   "Your job role" text field appears when user selects "Other" from the Job Role menu.

T-Shirt Section 	
   “Color” drop down menu is hidden until a T-Shirt design is selected.

Activity Registration 	
   User cannot select two activities that are at the same time.
   Total cost of selected activities is calculated and displayed below the list of activities.


Displaying payment sections 	
   The "Credit Card" payment option is selected by default.
   Payment option in the select menu matches the payment option displayed on the page.
   When a user chooses a payment option, the chosen payment section is revealed and the other payment sections are hidden.

Form Validation 	

   Form cannot be submitted (the page does not refresh when the submit button is clicked) until the following requirements have been met:
       Name field isn’t blank.
       Email field contains validly formatted e-mail address: (doesn’t have to check that it's a real e-mail address, just that it's formatted like one: dave@teamtreehouse.com, for example).
       At least one checkbox under "Register for Activities" section must be selected.
       If "Credit Card" is the selected payment option, the three fields accept only numbers: a 13 to 16-digit credit card number, a 5-digit zip code, and 3-number CVV value.

Form Validation Messages 	
   On submission, the form provides an error indication or message for each field that requires validation:
       Name field
       Email field
       “Register for Activities” checkboxes
       Credit Card number, Zip code, and CVV, only if the credit card payment method is selected.

   Form provides at least one error message in real time, before the form is submitted. For example, the error message appears near the email field when the user begins to type, and disappears as soon as the user has entered a complete and correctly formatted email address.

   Form provides at least one error message that changes depending on the error. For example, the email field displays a different error message when the email field is empty than it does when the email address is formatted incorrectly. This is accomplished without the use of HTML5's built-in field validation.

Form Works Without JavaScript 	
   When JavaScript is disabled, all form fields and payment information is displayed, including the "Other" field under the "Job Role" section.
****************************************************************************************************

Elements that Met Expectations

    No snippets, plugins or libraries
        Project contains only plain "vanilla" JavaScript and doesn't rely on jQuery, some other library, or any code snippets or plugins.
    Reviewer Comments:

    Project uses only vanilla javascript.

    Code Comments
        Code comments have been added explaining how the functions work.
    Reviewer Comments:

    Best code comments I've seen yet, super easy to read, nicely explained, awesome job!

Elements that Exceeded Expectations

    Progressive enhancement & unobtrusive JavaScript
        Use unobtrusive JavaScript to append HTML for a search bar.
    Reviewer Comments:

    Nicely done, the search bar is appended dynamically using JS.

    Pagination Links
        Pagination links display based on how many search results are returned. For example: if 10 or fewer results are returned, 0 or 1 pagination links are displayed. If 22 search results are returned, 3 pagination links are displayed.
    Reviewer Comments:

    Awesome ! Pagination links display based on the search result. Also, pagination links are created according to the number of students.

    Paging
        When a search yields 0 results, a message is displayed on the page, informing the user that no results have been found.
    Reviewer Comments:

    This is awesome. As soon as I click the button on something that doesn't exist, a message pops up with a message that no student is found, and also displays what I searched for. Very cool!

Overall Comments

Well done! Your Pagination & Content Filter project is great. Your JS is nicely unobtrusive. Your pagination buttons number correctly and work well. Your code and directory look clean and well organized. Great code comments. Search implantation and functionality is on point. And nice work hitting some exceeds here. That’s great to see. All in all, excellent work here!

As you move on to your next project, keep up the great work! And keep shooting for those exceeds grades! The time spent attempting to hit those exceeds criteria will strengthen your skills, add to your experience and give you cooler projects to show off at the end of this Techdegree.

Your next project focuses on interactive forms. It is a fun project with a ton of learning opportunities, but it is very detail oriented. Forms are all about the details. But if you take your time and give it your all, I'm sure you'll do great!

Best of luck and happy coding as you move forward! You rock!
