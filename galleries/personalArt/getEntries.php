<?php

    $docRoot = $_SERVER['DOCUMENT_ROOT'];

    $entriesJSON = file_get_contents($docRoot . '/galleries/personalArt/entries.json', FILE_USE_INCLUDE_PATH);

    echo($entriesJSON);
    
?>