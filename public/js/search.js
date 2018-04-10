function showSearch() {
    //console.log(document.getElementById("advancedSearch").style.display) ;
    //console.log(document.getElementById("advancedSearch").style.display) ;
    if (document.getElementById("advancedSearch").style.display == "none") {
        document.getElementById("searchButton").innerHTML = "Απόκρυψη Αναζήτησης" ;
        document.getElementById("advancedSearch").style.display = "initial" ;
        document.getElementById("resultsMap").style.display = "none" ;
    }
    else {
        document.getElementById("searchButton").innerHTML = "Εμφάνιση αναζήτησης" ;
        document.getElementById("advancedSearch").style.display = "none" ;
        document.getElementById("resultsMap").style.display = "initial" ;
    }
    /*if (document.getElementById("searchButton").innerHTML == "Εμφάνιση αναζήτησης") {
        document.getElementById("searchButton").innerHTML = "Απόκρυψη Αναζήτησης" ;
        document.getElementById("advancedSearch").style.display = "initial" ;
    }
    else {
        document.getElementById("searchButton").innerHTML = "Εμφάνιση αναζήτησης" ;
        document.getElementById("advancedSearch").style.display = "none" ;
    }*/
}