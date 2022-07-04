//https://www.glassdoor.com/Interview/Apple-Senior-Front-End-Developer-Interview-Questions-EI_IE1138.0,5_KO6,32.htm
//Serialise IDs from a nested tree of items
const data = [
    { id: 1, items: [{ id: 4, items: [{ id: 5 }, { id: 6, items: [{ id: 8 }] }] }] },
     { id: 2, items: [{ id: 7}]},  { id: 3 }, { id: 9, items: [{id: 10, items: [{id: 12}]}, {id: 11}] }];
    // Should return [1, 2, 3, 9, 4, 7, 10, 11, 5, 6, 12, 8]        