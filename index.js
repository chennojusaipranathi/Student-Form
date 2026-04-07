/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function getRecord() {
    let roll = document.getElementById("rollNo").value;
    if (roll === '')
    {
        alert("enter your roll no");
        return;
    }
    let jsonStr = {
        "rollNo": parseInt(roll)
    };
    let req = createGETRequest(
            "90934806|-31949238795443328|90958223",
            "STUDENT-DB",
            "Student-Table",
            JSON.stringify(jsonStr)
            );
    jQuery.ajaxSetup({async: false});
    let result = executeCommandAtGivenBaseUrl(
            req,
            "http://api.login2explore.com:5577",
            "/api/irl"
            );
    jQuery.ajaxSetup({async: true});
    if (result.status === 200)
    {
        return result;
    }
    return '';
}

function removeVal() {
    $("#fname").val('');
    $("#class").val('');
    $("#dob").val('');
    $("#address").val('');
    $("#enroll").val('');
    return;
}

function checkRoll() {

    removeVal();
    disableAll();
    $("#reset").prop("disabled", false);
    let result = getRecord();
    if (result === '' || result.data === '') {
        enableAll();
        $("#save").prop("disabled", false);
        $("#rollNo").prop("disabled", false);
        $("#fname").focus();
        return;
    }
    let data = JSON.parse(result.data);
    if (data.record)
    {
        $("#rollNo").prop("disabled", true);
        if (data.record)
        {
            $("#fname").val(data.record.fname);
            $("#class").val(data.record.class);
            $("#dob").val(data.record.dob);
            $("#address").val(data.record.address);
            $("#enroll").val(data.record.enroll);
            $("#update").prop("disabled", false);

            enableAll();

            return;
        }
    } else
    {
        enableAll();
        $("#save").prop("disabled", false);
        $("#rollNo").prop("disabled", false);
        $("#fname").focus();
    }
    return;
}
function enableAll() {
    $("#fname").prop("disabled", false);
    $("#class").prop("disabled", false);
    $("#dob").prop("disabled", false);
    $("#address").prop("disabled", false);
    $("#enroll").prop("disabled", false);
    return;
}
function disableAll()
{
    $("#reset").prop("disabled", true);
    $("#fname").prop("disabled", true);
    $("#class").prop("disabled", true);
    $("#dob").prop("disabled", true);
    $("#address").prop("disabled", true);
    $("#enroll").prop("disabled", true);
    $("#update").prop("disabled", true);
    $("#save").prop("disabled", true);
    return;
}
function resetForm() {
    $("#rollNo").val('');
    $("#rollNo").prop("disabled", false);
    removeVal();

    disableAll();
    $("#rollNo").focus();
    return;
}

function isValidate() {
    if ($("#rollNo").val() === '')
    {
        alert("rollNo is required!");
        return false;
    }
    if ($("#fname").val() === '')
    {
        alert("Fullname is required!");
        return false;
    }
    if ($("#class").val() === '')
    {
        alert("Class is required!");
        return false;
    }
    if ($("#dob").val() === '')
    {
        alert("Date of Birth is required!");
        return false;
    }
    if ($("#address").val() === '')
    {
        alert("Address is required!");
        return false;
    }
    if ($("#enroll").val() === '')
    {
        alert("Enrollment Date is required!");
        return false;
    }
    return true;
}


function saveForm()
{
    if (isValidate())
    {
        let roll = $("#rollNo").val();
        let fname = $("#fname").val();
        let c = $("#class").val();
        let dob = $("#dob").val();
        let address = $("#address").val();
        let enroll = $("#enroll").val();
        let token = "90934806|-31949238795443328|90958223";
        let jsonStr = {
            "rollNo": parseInt(roll),
            "fname": fname,
            "class": parseInt(c),
            "dob": dob,
            "address": address,
            "enroll": enroll
        };
        let data = JSON.stringify(jsonStr);
        let dbName = "STUDENT-DB";
        let rel = "Student-Table";
        let req = createPUTRequest(token, data, dbName, rel);
        jQuery.ajaxSetup({async: false});
        let result = executeCommandAtGivenBaseUrl(
                req,
                "http://api.login2explore.com:5577",
                "/api/iml"
                );
        jQuery.ajaxSetup({async: true});
        alert("record added successfully");
        resetForm();
        return;
    }
}

function updateForm()
{
    if (isValidate())
    {
        let roll = document.getElementById("rollNo").value;
        let fname = document.getElementById("fname").value;
        let c = document.getElementById("class").value;
        let dob = document.getElementById("dob").value;
        let address = document.getElementById("address").value;
        let enroll = document.getElementById("enroll").value;
        let token = "90934806|-31949238795443328|90958223";
        let jsonStr = {
            "rollNo": parseInt(roll),
            "fname": fname,
            "class": parseInt(c),
            "dob": dob,
            "address": address,
            "enroll": enroll
        };
        let data = JSON.stringify(jsonStr);
        let record = getRecord();
        if (record === '') {
            alert("Cannot find record to update!");
            return;
        }
        let data2 = JSON.parse(record.data);
        let reqId = data2.rec_no;
        let req = createUPDATERecordRequest(
                token,
                data,
                "STUDENT-DB",
                "Student-Table",
                reqId
                );

        jQuery.ajaxSetup({async: false});
        let result = executeCommandAtGivenBaseUrl(
                req,
                "http://api.login2explore.com:5577",
                "/api/iml"
                );
        jQuery.ajaxSetup({async: true});
        alert("record updated successfully");
        resetForm();
        return;
    }
    return;
}

