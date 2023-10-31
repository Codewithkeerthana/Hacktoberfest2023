<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pyramid triangle star pattern - javascript</title>
</head>
<body>
  <h2>Pyramid triangle star pattern in javascript</h2>
  <script>
    let n = 5; // you can take input from prompt or change the value
    let string = "";
    // External loop
    for (let i = 1; i <= n; i++) {
      // printing spaces
      for (let j = n; j > i; j--) {
        string += " ";
      }
      // printing star
      for (let k = 0; k < i * 2 - 1; k++) {
        string += "*";
      }
      string += "<br>";
    }
    document.write(`<pre>${string}</pre>`);
  </script>
</body>
</html>
