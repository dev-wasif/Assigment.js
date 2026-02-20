
    var tableNumber = prompt(" Enter table number")
    tableNumber = Number(tableNumber)

    var limit = prompt( "Enter limit")
    limit = Number(limit)

    for (var i=limit; i>=0; i-- )  {
        console.log(tableNumber + " x " + i + " = " + (tableNumber * i));
    }
