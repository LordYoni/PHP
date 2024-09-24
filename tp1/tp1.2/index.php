<?php
$contientLesDonneeDuFichier = file_get_contents(__DIR__ . "/data/eleves.json");
$toutLesEleves = json_decode($contientLesDonneeDuFichier, true);
$nbrEleves = sizeof($toutLesEleves);
$contientLesDonneeDuFichierFrance = file_get_contents(__DIR__ . "/data/france.json");
$toutLesCommunes = json_decode($contientLesDonneeDuFichierFrance, true);
$nbrCommunes = sizeof($toutLesCommunes);
?>
<table border="1">

    <?php

    for ($i = 0; $i < $nbrEleves; $i = $i + 1) {
        print "<tr><td>";
        print $toutLesEleves[$i]["nom"];
        print "</td><td>";
        for ($j = 0; $j < $nbrCommunes; $j = $j + 1) {
            if ($toutLesCommunes[$j]["Code_commune_INSEE"] == $toutLesEleves[$i]["ville"]) {
                print $toutLesCommunes[$j]["coordonnees_gps"];
                break;
            }
        }
        print "</td></tr>";
    }
    ?>
</table>