<?php
  define("host","127.0.0.1");
  define("user","contactform");
  define("password","contactform");
  define("bbdd","contactform");
  function getMatch($field, $value, $table)
  {
    $match=true;
    $mysqli = new mysqli(host, user, password, bbdd);
    if (!$mysqli->connect_errno)
    {
      $select = "SELECT $field FROM $table WHERE $field = '$value'";
      $result = $mysqli->query($select);
      if ($result->num_rows === 0)
      {
        $match=false;
      }
      return $match;
    }
  }

?>
