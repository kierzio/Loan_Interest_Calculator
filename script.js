function compute() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = (principal*years*rate/100);
    var year = new Date().getFullYear()+parseInt(years);

    document.getElementById("result").innerHTML="If you deposit \<b>\ £"+principal+"\</b>\ at an interest rate of \<b>\ "+rate+"% \</b>\ for \<b>\ "+years+" years,\</b>\ you will receive \<b>\ £"+interest+"\</b>\ in the year \<b>\ "+year+".\</b>\ 💰";
    // I have used the backslash escape to add bold emphasis to variables, as I prefer how it looks compared to highlighted text.
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}

function validateForm() {
    let x = document.getElementById("principal").value;
    if (x < 1) {
        alert("Enter a positive number");
    }
}