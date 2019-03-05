/******************************************
Treehouse Techdegree:
FSJS project 3 - Interactive Form
By: Patrick  Leroux
Treehouse profile name: patleroux 
Wed Feb 13 2019
******************************************/

/***************************************************************************************/
/*** Append div section for better positionning error message                        ***/
/***************************************************************************************/
$(".container").find("label[for=name]").append('<div id="nameErr"></div>');
$('#nameErr').css('color', 'red').text('Valid Name is required').hide();

$(".container").find("label[for=mail]").append('<div id="mailErr"></div>');
$('#mailErr').css('color', 'red').text('Valid eMail is required').hide();

$(".activities").children().append('<div id="activErr"></div>');
$('#activErr').css('color', 'red').css('font-size', '17px').css('font-weight', '200').text('Actvity required').hide();

/***************************************************************************************/
/*** Set focus to the name field to "Meets Expectations"                             ***/
/***    On page load, the cursor appears in the "Name" field, ready for a user to    ***/
/***    type.                                                                        ***/
/***************************************************************************************/
$('#name').focus();

/***************************************************************************************/
/*** Name event handler for "Meets Expectations" :                                   ***/
/*** Handle the change and blur event in order to validate that the name is          ***/
/*** not empty.                                                                      ***/
/***************************************************************************************/
$('#name').change(e => {
    const name = $('#name').val();
    validateNameField(name, e);
});
$('#name').blur(e => {
    const name = $('#name').val();
    validateNameField(name, e);

});

/***************************************************************************************/
/*** eMail event handler for the "Exceeds Expectations" :                            ***/
/*** Handle the keyup, change and blur event that will validate:                     ***/
/***    - If the latest character typed is valid in an eMail adresse (Error msg #1)  ***/
/***    - Check if it is a valide email adresse (Error msg #2)                       ***/
/***************************************************************************************/
$('#mail').keyup(e => {
    console.log("KeyUp");
    const email = $('#mail').val();
    validateChar(email.slice(-1), e);
});

$('#mail').change(e => {
    console.log("Change");
    const email = $('#mail').val();
    validateEmailField(email, e);

});

$('#mail').blur(e => {
    console.log("Blur");

    const email = $('#mail').val();
    validateEmailField(email, e);

});

/***************************************************************************************/
/*** Function validateChar                                                           ***/
/*** Handle the keyup event that will validate:                                      ***/
/*** Use a regexp to see if a character is valid in an eMail adresse (Error msg #1  ***/
/***************************************************************************************/
function validateChar(char, e) {
    const regex = /[^a-zA-Z0-9_\-@.]/g;
    const testRes = regex.test(char);

    if (testRes) {
        $('#mailErr').text('Invalid character in eMail').show();
        e.preventDefault();
        return false;
    } else {
        $('#mailErr').hide();
        return true;
    }
}

/***************************************************************************************/
/*** Title section                                                                   ***/
/*** Event listener to "Meets Expectations" :                                        ***/
/***    - Your job role" text field appears when user selects "Other" from the Job   ***/
/***      Role menu.                                                                 ***/
/***************************************************************************************/
$('#other-title').hide();
$('#title').change(e => {
    if (e.target.value === "other") {
        $('#other-title').show();
    } else {
        $('#other-title').hide();
    }
});

/***************************************************************************************/
/*** Shirt section                                                                   ***/
/*** Event handler for the "Exceeds Expectations" :                                  ***/
/***    - Color” drop down menu is hidden until a T-Shirt design is selected.        ***/
/***************************************************************************************/
$('#colors-js-puns').hide();
$('#design').change(e => {
    if (e.target.value === 'js puns') {
        selectPuns();
    } else if (e.target.value === 'heart js') {
        selectHeart();
    } else {
        $('#colors-js-puns').hide();
    }
});

function selectPuns() {
    $('#color').val('cornflowerblue');
    $("#color option[value='cornflowerblue']").show();
    $("#color option[value='darkslategrey']").show();
    $("#color option[value='gold']").show();
    $("#color option[value='tomato']").hide();
    $("#color option[value='steelblue']").hide();
    $("#color option[value='dimgrey']").hide();
    $('#colors-js-puns').show();
}

function selectHeart() {
    $('#color').val('tomato');
    $("#color option[value='cornflowerblue']").hide();
    $("#color option[value='darkslategrey']").hide();
    $("#color option[value='gold']").hide();
    $("#color option[value='tomato']").show();
    $("#color option[value='steelblue']").show();
    $("#color option[value='dimgrey']").show();
    $('#colors-js-puns').show();
}


/***************************************************************************************/
/*** Activities section                                                              ***/
/*** Event handler for the "Meets Expectations" :                                    ***/
/***    User cannot select two activities that are at the same time.                 ***/
/***    Total cost of selected activities is calculated and displayed below the list ***/
/***    of activities.                                                               ***/
/***************************************************************************************/
$('.activities').change(e => {
    checkForJSFrame();
    // Express Workshop selected, JS Frameworks Workshop unavailable
    checkForExpress();
    // Javascript Libraries Workshop selected, Node.js Workshop unavailable
    checkForJavascriptLib();
    // Node.js Workshop selected, Javascript Libraries Workshop unavailable
    checkForNode();

    validateRegistrationSection(e);
});

function checkForJSFrame() {
    if ($('input[name="js-frameworks"]').prop('checked')) {
        $('input[name="express"]').attr('disabled', true);
        $('input[name="express"]').parent().css('color', 'grey');
    } else {
        $('input[name="express"]').removeAttr('disabled')
        $('input[name="express"]').parent().css('color', '#000')
    }
}

function checkForExpress() {
    if ($('input[name="express"]').prop('checked')) {
        $('input[name="js-frameworks"]').attr('disabled', true)
        $('input[name="js-frameworks"]').parent().css('color', 'grey')
    } else {
        $('input[name="js-frameworks"]').removeAttr('disabled')
        $('input[name="js-frameworks"]').parent().css('color', '#000')
    }
}

function checkForJavascriptLib() {
    if ($('input[name="js-libs"]').prop('checked')) {
        $('input[name="node"]').attr('disabled', true)
        $('input[name="node"]').parent().css('color', 'grey')
    } else {
        $('input[name="node"]').removeAttr('disabled')
        $('input[name="node"]').parent().css('color', '#000')
    }
}

function checkForNode() {
    if ($('input[name="node"]').prop('checked')) {
        $('input[name="js-libs"]').attr('disabled', true)
        $('input[name="js-libs"]').parent().css('color', 'grey')
    } else {
        $('input[name="js-libs"]').removeAttr('disabled')
        $('input[name="js-libs"]').parent().css('color', '#000')
    }
}

/***************************************************************************************/
/*** Activities cost section                                                         ***/
/***************************************************************************************/
let cost = 0;
$('.activities').append("<p>Total: $<span id='cost'>" + cost + "</span></p>");

$('.activities').on('click', () => {
    cost = 0;

    //    if ($('input[name="all"]').prop('checked')) {
    if ($('input[name="all"]').is(':checked')) {
        cost += 200;
    }
    if ($('input[name="js-frameworks"]').is(':checked')) {
        cost += 100;
    }
    if ($('input[name="js-libs"]').is(':checked')) {
        cost += 100;
    }
    if ($('input[name="express"]').is(':checked')) {
        cost += 100;
    }
    if ($('input[name="node"]').is(':checked')) {
        cost += 100;
    }
    if ($('input[name="build-tools"]').is(':checked')) {
        cost += 100;
    }
    if ($('input[name="npm"]').is(':checked')) {
        cost += 100;
    }
    $('#cost').html(cost);
});



/***************************************************************************************/
/*** Payment section event listener on change                                        ***/
/***************************************************************************************/
let paymentMethod = "credit card";
$('#bitcoin').hide();
$('#paypal').hide();
$('#payment option[value="credit card"]').attr('selected', true);
$('#payment option[value="select_method"]').attr('disabled', true)

$('#payment').change(e => {

    if (e.target.value === 'credit card') {
        $('#bitcoin').hide();
        $('#paypal').hide();
        $('#credit-card').show();
        $('#payment option[value="credit card"]').attr('selected', true);
        $('#payment option[value="paypal"]').attr('selected', false);
        $('#payment option[value="bitcoin"]').attr('selected', false);
    } else if (e.target.value === 'paypal') {
        $('#bitcoin').hide();
        $('#paypal').show();
        $('#credit-card').hide();
        $('#payment option[value="credit card"]').attr('selected', false);
        $('#payment option[value="paypal"]').attr('selected', true);
        $('#payment option[value="bitcoin"]').attr('selected', false);

    } else if (e.target.value === 'bitcoin') {
        $('#bitcoin').show();
        $('#paypal').hide();
        $('#credit-card').hide();
        $('#payment option[value="credit card"]').attr('selected', false);
        $('#payment option[value="paypal"]').attr('selected', false);
        $('#payment option[value="bitcoin"]').attr('selected', true);

    } else {
        $('#bitcoin').hide();
        $('#paypal').hide();
        $('#credit-card').hide();
    }
});

/***************************************************************************************/
/*** Validations section                                                              ***/
/***************************************************************************************/
function isCCNumValid(creditCard) {
    const regex = /^(\d){13,16}/;
    return regex.test(creditCard);
}

function isZipValid(zipCode) {
    const regex = /^(\d){5}/;
    return regex.test(zipCode);
}

function isCvvValid(cvv) {
    const regex = /^(\d){3}/;
    return regex.test(cvv);
}

function isValidEmail(email) {
    const regex = /^[\w\._]+[@]\w+\.(\w){2,4}$/;
    //    if (email === '') {
    //        return false;
    //    }
    return regex.test(email);
}

function isValidName(name) {
    const regex2 = /^\s+$/;
    const r2 = regex2.test(name);
    if (r2) { return false }

    const regex = /^[a-zA-Z\s]+$/;
    const r = regex.test(name);
    //    if (name === '') {
    //        return false;
    //    }
    return regex.test(name);
}

function isRegistrationValid() {
    return cost > 0;
}

function isPaiementValid() {
    if ($('#payment option[value="credit card"]').attr('selected')) {
        const creditCardValid = isCCNumValid($('#cc-num').val());
        const zipCodeValid = isZipValid($('#zip').val());
        const cvvValid = isCvvValid($('#cvv').val());
        if (!creditCardValid || !zipCodeValid || !cvvValid) {
            return false;
        } else {
            return true;
        }
    } else {
        return true;
    }
}

function validatePaiementMethode(event) {
    if ($('#payment option[value="credit card"]').attr('selected')) {
        const creditCardValid = isCCNumValid($('#cc-num').val());
        const zipCodeValid = isZipValid($('#zip').val());
        const cvvValid = isCvvValid($('#cvv').val());

        if (!creditCardValid) {
            $('#cc-num').css('border-color', 'red');
            $('#cc-num').prev().css('color', 'red');
            $('#cc-num').prev().text('Card Number - required').show();
            event.preventDefault();
        } else {
            $('#cc-num').css('border-color', '#c1deeb');
            $('#cc-num').prev().css('color', '#000');
            $('#cc-num').prev().text('Card Number:').show();
        }
        if (!zipCodeValid) {
            $('#zip').css('border-color', 'red');
            $('#zip').prev().css('color', 'red');
            $('#zip').prev().text('Zip Code - required').show();
            event.preventDefault();
        } else {
            $('#zip').css('border-color', '#c1deeb');
            $('#zip').prev().css('color', '#000');
            $('#zip').prev().text('Zip Code:').show();

        }
        if (!cvvValid) {
            $('#cvv').css('border-color', 'red');
            $('#cvv').prev().css('color', 'red');
            $('#cvv').prev().text('CVV - required').show();
            event.preventDefault();
        } else {
            $('#cvv').prev().text('CVV:').show();
            $('#cvv').css('border-color', '#c1deeb');
            $('#cvv').prev().css('color', '#000');
        }
    }
}

function validateRegistrationSection(event) {
    if (!isRegistrationValid()) {
        $('#activErr').show();
        event.preventDefault();
    } else {
        $('#activErr').hide();
    }
}

function validateNameField(name, event) {
    if (!isValidName(name)) {
        $('#nameErr').show();
        event.preventDefault();
    } else {
        $('#nameErr').hide();
    }
}

function validateEmailField(email, event) {
    if (!isValidEmail(email)) {
        $('#mailErr').text("Valid Email is required").show();
        event.preventDefault();
    } else {
        $('mailErr').hide();
    }
}

/***************************************************************************************/
/*** Submit section                                                                  ***/
/***************************************************************************************/

$('form').on('submit', (e) => {
    const name = $('#name').val();
    validateNameField(name, e);

    const email = $('#mail').val();
    validateEmailField(email, e);

    validateRegistrationSection(e)

    validatePaiementMethode(e);
});