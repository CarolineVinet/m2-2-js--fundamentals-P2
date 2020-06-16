// You are not allowed to for or while loops.
// Instead focus on the array methods (filter, map, forEach, etc)

// You will also need to verify that your functions work as expected. Be sure to test them. :)

// Q9
// Only greet people who's names have length at least 4.
// Otherwise ignore them completely.
// For example: greeLong(["bob", "daniel"]) returns ["Hello daniel"]

/*
-goes through array and looks for length of items (>4)
-items that meet requirement get placed in new var
-items in new var get greeting added
-new variable + greetings is returned
*/


function greetLong(lst) {
  const newSet = lst.filter(function(item) {
    return item.length >= 4;
  })

  const brandNewArray = newSet.map(function(newItem){
  return "Hello " + newItem;
  })

  return brandNewArray;
}

// -------------------------------------------------------------------------
console.log(greetLong(['Scott', 'Bob', 'Ric', 'Jim']));
