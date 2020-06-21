// =========================================================================================================================
// Preloader
// =========================================================================================================================

window.addEventListener('load', () => document.querySelector('.preloader').classList.add('hidePreloader'))


// =========================================================================================================================
// Navbar Search Box
// =========================================================================================================================

$(".js-searchBtn").click(function() {
   
    var input = $("input:text").val();
    var inputUpper = input.toUpperCase();

    console.log("inputUpper: ", inputUpper);

    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    var tblRowCount = document.getElementById("myTable").rows.length; 

    

    var tblRowText = []

    for ( var i = 1; i < tblRowCount; i++) {
        
        var tblRowText = $(myTable).find('tr').eq(i).text().toUpperCase();

        var res = tblRowText.indexOf(inputUpper);

        console.log("tblRowText: ", tblRowText);
        console.log("res: ", res);

        if(res === -1) {
            tr[i].style.display = "none";
        }

    }

});



// =========================================================================================================================
// Moview/Shows Table Filtering
// =========================================================================================================================

var sels = document.getElementsByTagName('select');

console.log("sels: ", sels);

for(var i = 0; i < sels.length; i++) {



    sels[i].addEventListener('change', function() {

        selectionID = this.id;


        // -------------------------------------------------------------------------------------------------------------------------
        // Provider Dropdown Box
        // -------------------------------------------------------------------------------------------------------------------------

        // function providerVal() {

        if(selectionID === "provider") {
        
            var input = document.getElementById("provider").value;
            console.log("input: ", input);



            table = document.getElementById("myTable");
            tr = table.getElementsByTagName("tr");
            var tblRowCount = document.getElementById("myTable").rows.length; 

            var tblRowText = []

            for ( var i = 1; i < tblRowCount; i++) {
                
                var tblRowText = $(myTable).find('tr').eq(i).text();
                var res = tblRowText.indexOf(input);

                console.log("tblRowText: ", tblRowText);
                console.log("res: ", res);
                
                tr[i].style.display = "";

                if(input === "All"){
                    tr[i].style.display = "";
                
                } else if(res === -1) {
                    tr[i].style.display = "none";
                }

            }
        };


        // -------------------------------------------------------------------------------------------------------------------------
        // Type Dropdown Box
        // -------------------------------------------------------------------------------------------------------------------------

        // function typeVal() {

        if(selectionID === "type") {
        
            var input = document.getElementById("type").value;
            console.log("input: ", input);

            table = document.getElementById("myTable");
            tr = table.getElementsByTagName("tr");
            var tblRowCount = document.getElementById("myTable").rows.length; 

            var tblRowText = []

            for ( var i = 1; i < tblRowCount; i++) {
                
                var tblRowText = $(myTable).find('tr').eq(i).text();
                var res = tblRowText.indexOf(input);

                console.log("tblRowText: ", tblRowText);
                console.log("res: ", res);
                
                tr[i].style.display = "";

                if(input === "All"){
                    tr[i].style.display = "";
                
                } else if(res === -1) {
                    tr[i].style.display = "none";
                }

            }
        };

        // -------------------------------------------------------------------------------------------------------------------------
        // Genre Dropdown Box
        // -------------------------------------------------------------------------------------------------------------------------

        // function genreVal() {

        if(selectionID === "genre") {
        
            var input = document.getElementById("genre").value;
            console.log("input: ", input);

            table = document.getElementById("myTable");
            tr = table.getElementsByTagName("tr");
            var tblRowCount = document.getElementById("myTable").rows.length; 

            var tblRowText = []

            for ( var i = 1; i < tblRowCount; i++) {
                
                var tblRowText = $(myTable).find('tr').eq(i).text();
                var res = tblRowText.indexOf(input);

                console.log("tblRowText: ", tblRowText);
                console.log("res: ", res);
                
                tr[i].style.display = "";

                if(input === "All"){
                    tr[i].style.display = "";
                
                } else if(res === -1) {
                    tr[i].style.display = "none";
                }

            }
        };


        // -------------------------------------------------------------------------------------------------------------------------
        // Actor Dropdown Box
        // -------------------------------------------------------------------------------------------------------------------------

        // function actorVal() {

        if(selectionID === "actor") {
        
            var input = document.getElementById("actor").value;
            console.log("input: ", input);

            table = document.getElementById("myTable");
            tr = table.getElementsByTagName("tr");
            var tblRowCount = document.getElementById("myTable").rows.length; 

            var tblRowText = []

            for ( var i = 1; i < tblRowCount; i++) {
                
                var tblRowText = $(myTable).find('tr').eq(i).text();
                var res = tblRowText.indexOf(input);

                console.log("tblRowText: ", tblRowText);
                console.log("res: ", res);
                
                tr[i].style.display = "";

                if(input === "All"){
                    tr[i].style.display = "";
                
                } else if(res === -1) {
                    tr[i].style.display = "none";
                }

            }
        };

    }, false);

};


// =========================================================================================================================
// Toggle Watch List Slider State
// =========================================================================================================================


var switchStatus = false;

$(".watch-list").on('change', function() {
    if ($(this).is(':checked')) {
        switchStatus = $(this).is(':checked');
        console.log("switchStatus1: ", switchStatus);
    }
    else {
       switchStatus = $(this).is(':checked');
       console.log("switchStatus2: ", switchStatus);
    }
});





