<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hourglass triangle star pattern - javascript</title>
</head>
<body>
  <h1>Hourglass triangle star pattern in javascript</h1>

  <script>
    let n = 5; // you can take input from prompt or change the value
    let string = "";
    // Reversed pyramid pattern
    for (let i = 0; i < n; i++) {
      // printing spaces
      for (let j = 0; j < i; j++) {
        string += " ";
      }
      // printing star
      for (let k = 0; k < (n - i) * 2 - 1; k++) {
        string += "*";
      }
      string += "\n";
    }
    // pyramid pattern
    for (let i = 2; i <= n; i++) {
      // printing spaces
      for (let j = n; j > i; j--) {
        string += " ";
      }
      // printing star
      for (let k = 0; k < i * 2 - 1; k++) {
        string += "*";
      }
      string += "\n";
    }
    document.write(`<pre>${string}</pre>`);
  </script>
</body>
</html>
