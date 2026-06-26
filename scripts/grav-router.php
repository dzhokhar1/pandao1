<?php
// Dev shim: run Grav's built-in-server router with the correct working directory.
// Must propagate router.php's `return false` so php -S serves static files itself.
chdir('/tmp/gravwork/grav-admin');
return require '/tmp/gravwork/grav-admin/system/router.php';
