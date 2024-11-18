var obj=[

    {name:"One",val:55},
    
    {name:"Two",val:48},
    
    {name:"Three",val:2},
    
    {name:"Four",val:105},
    
     {name:"Five",val:65},
    
    ];
// to find even number values in above array
    obj.forEach(function(item){
        if(item.val%2==0){
            console.log("Even Number value items are:",item);
        }
    });

    //filter method to create new array of objects having value greater than 50 and print the new array

    let ObjFilter = obj.filter(function(item){
        return item.val > 50;
    });
    console.log(ObjFilter);

    //use the map method to create a new array of objects having val as the square of its innitial val and print the new array
    
    let objMap = obj.map(function(item){
        return (item.val*item.val);
    })
    console.log(objMap);
    
