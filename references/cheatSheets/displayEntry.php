<html lang="en-uk">
    <head>
        <?php include $_SERVER['DOCUMENT_ROOT'] . "/includes/header.php"; ?>
        <script type="text/javascript" src="/references/cheatSheets/getEntries.js"></script>
    </head>

    <body>
        <?php include $_SERVER['DOCUMENT_ROOT'] . "/includes/nav.php"; ?>

        <div class="contentWrapper">
            <?php include $_SERVER['DOCUMENT_ROOT'] . "/includes/sidebar.php"; ?>

            <article>
                <?php
                    
                    $entry = $_GET["entry"];

                    $docRoot = $_SERVER['DOCUMENT_ROOT'];

                    $entryHTML = file_get_contents($docRoot . "/references/cheatSheets/entries/" . $entry . ".html", FILE_USE_INCLUDE_PATH);
                
                    echo($entryHTML);

                ?>
            </article>
        </div>
    </body>
    
    <?php include $_SERVER['DOCUMENT_ROOT'] . "/includes/footer.php"; ?>
</html>