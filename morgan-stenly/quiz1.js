// This is a separate JavaScript coding exercise with no UI interaction.
// 1. Given values for acctData and balances below, write a function that returns only an array of account
// numbers, and accepts the following optional parameters:
// - user
// - sortBy (accepts "acctNum" or "balance")
// - sortDirection (accepts "asc" or "desc"; default to asc)
// 2. Execute your function and output the results as an array in console log for the following scenarios:
// a) filtered by Bob
// b) filtered by Charlie
// c) sorted by acctNum
// d) filtered by Alice; sorted by balance ascending

acctData = [
    {
    "acctNum": "AAA - 1234",
    "user": "Alice"
    },
    {
    "acctNum": "AAA - 5231",
    "user": "Bob"
    },
    {
    "acctNum": "AAA - 9921",
    "user": "Alice"
    },
    {
    "acctNum": "AAA - 8191",
    "user": "Alice"
    }
    ];
    balance = {
    "AAA - 1234": 4593.22,
    "AAA - 9921": 0,
    "AAA - 5231": 232142.5,
    "AAA - 8191": 4344
    };


    const func = () => {
      let result =  acctData.map(x => x.acctNum);
      console.log(result);
    }

    func();