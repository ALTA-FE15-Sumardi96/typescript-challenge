function playWithAsterik(n: number): void {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }
    for (let z = 1; z <= i; z++) {
      row += "* ";
    }
    console.log(row);
  }
}

playWithAsterik(10);
