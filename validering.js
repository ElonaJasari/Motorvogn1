function register(){
    let personnr = $("#personnr").val();
    let navn = $("#navn").val();
    let adresse = $("#adresse").val();
    let kjennetegn = $("#kjennetegn").val();
    let bilmerke = $("#bilmerke").val();
    let biltype = $("#biltype").val();

    const motorvogn = {
        personnr : personnr,
        navn : navn,
        adresse : adresse,
        kjennetegn : kjennetegn,
        bilmerke : bilmerke,
        biltype : biltype
};
    $.post("/lagremotorvogn", motorvogn, function (){
        hentAlleBiler();
    });
    $("#personnr").val("");
    $("#navn").val("");
    $("#adresse").val("");
    $("#kjennetegn").val("");
    $("#bilmerke").val("");
    $("#biltype").val("");
}
function hentAlleBiler() {
    $.get("/hentAlleBiler",function(biler){
        formaterData(biler);
    });
}
function formaterData(biler){
    let ut = "<table class='table table-striped'>" +
        "<tr>" +
        "<th>Personnr</th><th>Navn</th><th>Adresse</th><th>" +
        "Kjennetegn</th><th>Merke</th><th>" +
        "Type</th>" +
        "</tr>";
    for (const bil of biler) {
        ut += "<tr>";
        ut += "<td>" + bil.personnr + "</td><td>" + bil.navn + "</td><td>" + bil.adresse +
            "</td><td>" + bil.kjennetegn + "</td><td>" + bil.bilmerke + "</td><td>" + bil.biltype + "</td>";
    }
    ut += "</table>";
    $("#alleBiler").html(ut);
}
function slettAlleBiler(){
    $.get("/slettAlleBiler", function(){
        hentAlleBiler()
    });
}
