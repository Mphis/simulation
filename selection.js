// function sleep(milliseconds) {
//     var start = new Date().getTime();
//     for (var i = 0; i < 1e7; i++) {
//       if ((new Date().getTime() - start) > milliseconds){
//         break;
//       }
//     }
// }
async function Selection_Sort(arr, compare_Function) {

    function compare(a, b) {
     return b - a;
     } 
    var min = 0;
    var index = 0;
    var temp = 0;

    // let promise = new Promise((resolve, reject) => {
    //     setTimeout(() => resolve("done!"), 4000)
    // });
  

    

   //{Function} compare_Function Compare function
    compare_Function = compare_Function || compare;
  
    for (var i = 0; i < arr.length; i += 1) {

        fin = Number(arr.length-1);
        j_val = Number(i);
  
        await sleep(time);
        //sleep(1);
    
        var a = locations[i] ; 
        var bb = locations[i].elem ;
        var bb1 = locations[i].text ;
        
        bb.attr({
            fill : "red",
            });
    
        await sleep(time);
        //sleep(1);
    
    
        //this , is just like .. going through every position .. and trying to find the correct element for there 
        //this is achieved by finding the i th max or i th min element dep on whether the sort is asc or desc :)
    
        index = i;
        min = arr[i];
        document.getElementById('l2').innerHTML = '      for j = '+j_val+' to '+fin;
        document.getElementById('l21').innerHTML = '      if (list[j] > minimum ) <br> mimimum = list[j]';
        console.log("temp"+arr[i]);

        for (var j = i + 1; j < arr.length; j += 1) {
        console.log("well hello"+i);
        if (compare_Function(min, arr[j]) > 0) {

            //for desc , use > 
            //for asc order , use < 

            document.getElementById("l21").className = "highl";
            min = arr[j];
            index = j;
        }
        }
        console.log("tempww"+arr[index]);
    
        var b = locations[index] ;
        
        var t = locations[index].elem ;
        var t1 = locations[index].text ;
    
        t.attr({
            fill : "green",
            });
        await sleep(time);
        //sleep(1);
    
        bb.animate({ 'width': 50, 'height': 50, 'fill': 'white', 'x': 50*index, 'y': 30 }, 4000, "easeInOut" );
        bb1.animate({ 'width': 50, 'height': 50,'x': 50*index + 28, 'y': 58  , 'title' : min  }, 4000, "easeInOut" );
    
        t.animate({ 'width': 50, 'height': 50, 'fill': 'white', 'x': 50*i , 'y': 30 }, 4000, "easeInOut" );
        t1.animate({ 'width': 50, 'height': 50,  'x': 50*i + 28, 'y': 58 , 'title' : arr[i]}, 4000, "easeInOut" );
    
        await sleep(time);
        await sleep(time);
        //sleep(2000);

        document.getElementById("l21").className = "unhighl";
    
        temp = arr[i];
        arr[i] = min;
        arr[index] = temp;
    
        locations[i] = b ; 
        locations[index] = a ; 
        
    
        bb.attr({
            fill : "white",
            });
    
        t.attr({
            fill : "white",
            });
    
        await sleep(time);
        //sleep(1);
  
  
    }
  
    //return sorted arr
    return arr;
}
  
  

function ss(list){
//const list = [2,4,7,8] ;

    paper = Raphael("sim", window.innerWidth , window.innerHeight);

    var location = paper.set();

    function Item(elem, text) {
        this.elem = elem;
        this.text = text;
    }

    var item ; 

    for(i=0;i<list.length;i++){
        //making blocks for the very first time...
        
        item = new Item(
                    paper.rect(50*i,30, 50,50),
                    //adding text separately ... coz theres no parent child relation in raphael ///
                    paper.text(50*i+28, 30+28 , list[i]).attr({
            "font-weight": "bold" , 
            'font-size': '35px'
        
        })  );
                
        locations[i] = item;

    }

    location = paper.set();

    //user can select time 

    console.log(Selection_Sort(list, function(a, b) { return b - a; }));

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var time = 1000; 
var paper; 
var rect; 
var locations = []; 

  
  