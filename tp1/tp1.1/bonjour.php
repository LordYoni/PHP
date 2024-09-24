<?php
$contientLesDonneeDuFichier = file_get_contents(__DIR__ . "/data/client.json");
$toutMesClients = json_decode($contientLesDonneeDuFichier, true);
$nbrClients = sizeof($toutMesClients);
?>
<table border="1">

    <?php

    for ($i = 0; $i < $nbrClients; $i = $i + 1) {
        print "<tr><td>";
        print $toutMesClients[$i]["nom"];
        print "</td></tr>";
    }
    ?>
</table>