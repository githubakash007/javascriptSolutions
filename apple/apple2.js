//https://www.glassdoor.com/Interview/Apple-Senior-Front-End-Developer-Interview-Questions-EI_IE1138.0,5_KO6,32.htm


//   Should create the following joined array

//   [{ id: 1, name: 'David', position: null},
//   { id: 2, name: 'John', position: 'Leader' },
//   { id: 3, name: 'Matt', position: 'Captain' },
//   { id: 4, name: 'Greg', position: 'VP' },
//   { id: 5, position: 'Pawn', name: null }
//   { id: 6, position: 'Rogue', name: null },
//   { id: 7, position: 'Outlier', name: null } ] 

const a = [
    { id: 3, name: 'Matt' },
    { id: 4, name: 'Greg' },
    { id: 1, name: 'David' },
  { id: 2, name: 'John' }
]
  const b = [
    { id: 7, position: 'Outlier' },
    { id: 2, position: 'Leader' },
    { id: 3, position: 'Captain' },
    { id: 6, position: 'Rogue' },
    { id: 4, position: 'VP' } ,
  { id: 5, position: 'Pawn'}
  ]
 

  const arrOuterJoin = (arr1,arr2) => {
    const defaultOptions = {id:0,name:null,position:null};
    const result = [];
        let mergedArr = [...arr1,...arr2];
     const uniqueId = new Set(mergedArr.map(x => x.id));
    
     for(let i of uniqueId){
        
        let items = mergedArr.filter(x => x.id === i);
      //  console.log({items});
        
       let obj =  items.reduce((a ,item,i) => {
             
        //  a =  Object.assign(a ,defaultOptions,item);
           a = {...a,...item};
         // console.log({a});
            return a;
            },{});

            result.push(Object.assign({},defaultOptions,obj));
    }
    return result.sort((a,b) => a.id - b.id || a.name.localeCompare(b.name));
} 

 console.log(arrOuterJoin(a,b));

 const r = a.filter(({ id: idv }) => b.every(({ id: idc }) => idv !== idc));
 //console.log(r);
 
 //console.log(a.filter(x => b.every(ii => ii.id !== x.id)));

const newArr = b.concat(r).map((v) => v.position ? v : { ...v, position: null });

//console.log(newArr);