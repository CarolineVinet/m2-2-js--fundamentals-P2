// You are not allowed to for or while loops.
// Instead focus on the array methods (filter, map, forEach, etc)

// You will also need to verify that your functions work as expected. Be sure to test them. :)

// Q10
// Returns true if every element of lst is of length at least 5.
// Otherwise returns false.

function allLong(lst) {
  const goodLength = lst.filter(function (num) {
    return num.length >= 5;
  });
  if (goodLength.length === lst.length) {
    return true;
  } else {
    return false;
  }
}

// -------------------------------------------------------------------------
console.log(allLong(["Scott", "Bob", "Ric", "Jim"]));
console.log(
  allLong(["Cyborg", "Robin", "Batman", "Superman", "Aquaman", "Flash"])
);
