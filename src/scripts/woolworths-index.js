////////////////////////////////////////////////////////////////////////////////

var EmailRE = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/i;
var NonEmptyRE = /[^\s]+/i;

////////////////////////////////////////////////////////////////////////////////

$(document).ready(function () {
    onInput($("[name='main_form']"), onInput_MainForm);
    onInput_MainForm();

    var isPreFilled = false; // change to true to enable or to false to disable

    if (isPreFilled) {
        $("[name='first_name']").val("Alexander");
        $("[name='last_name']").val("Iurovetski");
        $("[name='email']").val("alexi@openpay.com.au");
        $("[name='company_name']").val("Openpay");
    }
});

///////////////////////////////////////////////////////////////////////////////

function onInput(jqElem, handler) {
    var jqAllElems = jqElem.find("input, textarea, select"); // don't worry about excluding hidden or disabled
    jqAllElems.push(jqElem[0]);

    jqAllElems.on("input blur", handler);
}

///////////////////////////////////////////////////////////////////////////////

function onInput_MainForm() {
    var isValid = true;

    $(".errormsg").html("&nbsp;");

    if (!$("[name='accept_tnc']").prop("checked")) {
        isValid = false;
    }

    $("[type='submit']").prop("disabled", !isValid);
}

////////////////////////////////////////////////////////////////////////////////

function onSubmit() {
    var isValid = true;

    if (!validateByRegExp("first_name", NonEmptyRE, "First name required")) {
        isValid = false;
    }

    if (!validateByRegExp("last_name", NonEmptyRE, "Last name required")) {
        isValid = false;
    }

    if (!validateByRegExp("email", EmailRE, "Invalid email address")) {
        isValid = false;
    }

    if (!validateByRegExp("company_name", NonEmptyRE, "Company name required")) {
        isValid = false;
    }

    return isValid;
}

////////////////////////////////////////////////////////////////////////////////

function validateByRegExp(name, re, msg) {
    var value = $("[name='" + name + "']").val();

    var isValid = re.test(value);
    var jqErr = $("[name='error_" + name + "']");

    if (!isValid && msg) {
        jqErr.text(msg);
    }
    else {
        jqErr.html("&nbsp;");
    }

    return isValid;
}

////////////////////////////////////////////////////////////////////////////////