var arr = [];
var next_node;
var arr1 = [];
var g = new Graph();


makeGraph = function() {
//after taking user i/p as .. count=num of nodes , edges and their weights and the source edge .. we get here
   var count = document.getElementById("count").value;
   var src_node = document.getElementById("source").value;
   console.log(src_node);
   console.log(count);
    var myTableDiv = document.getElementById("myTable");
    //creating 2D array 
    //this 2D array is for the edges info .. in order to draw graph from it ... 
    for (var i=0;i<count;i++) {
     arr[i] = [];
    }

var m,n,k;
//populating it with stuff from the mytablediv
for(var i=0;i<count;i++)
 {
  for(var j=0;j<count;j++)
  {

    arr[i][j]=100;
  }
}
//mytablediv is.. indeed the whole table .. now only haveto do fetching from here .. .
var objCells ;
var node1;
var node2;
var weight ;
    for (i = 1; i < myTableDiv.rows.length; i++) {

        // GET THE CELLS COLLECTION OF THE CURRENT ROW.
        var objCells = myTableDiv.rows.item(i).cells;

        // LOOP THROUGH EACH CELL OF THE CURENT ROW TO READ CELL VALUES.
        for (var j = 0; j < objCells.length; j++) {
          if(j==0)
            node1=objCells.item(j).innerHTML;
          else
            if(j==1)
              node2=objCells.item(j).innerHTML;
          else
            if(j==2)
              weight=objCells.item(j).innerHTML;

        }
        //OK , NOW .. I DONT KNOW THE LOGIC BEHIND THIS <=3 ..
        //BUT IN THE LOG FOR 2 TIMES .. IT WAS SHOWIN G UNDEFINED(X)3 SOO LIKE THIS IS WORKING .. OS WHY NOT LOL 
        if(i>=3){
                            console.log(node1+" "+node2+" "+weight);
                            //just remove the second one for a uni driectional thingy
                            arr[node1][node2]=weight ; 
                            //arr[node2][node1]=weight ; 

}
                }


draw(arr,count,src_node);

}



function addTable() {
//now , myTableDiv is the table that has all the info aboutt the edges,thiernodes and their weights 
var myTableDiv = document.getElementById("edgeTable");
myTableDiv.innerHTML +='<p>    </p>' ;
myTableDiv.innerHTML +='<p>Edges and Weights :</p>';
myTableDiv.innerHTML +='<input type="text" id="node1" placeholder="Enter first node of edge">';
myTableDiv.innerHTML +='<input type="text" id="node2" placeholder="Enter second node of edge">';
myTableDiv.innerHTML +='<input type="text" id="weight" placeholder="Enter edge weight">';

myTableDiv.innerHTML +='<input type="button" id="add" value="Add" onclick="addMoreTuples()">';

var newdiv = document.getElementById("main");
newdiv.innerHTML +='<p>Click here after you are done adding edges</p>';
newdiv.innerHTML +='<input type="button" id="add" value="Create Graph" onclick="makeGraph()">';
newdiv.innerHTML +='<input type="button" id="add" value="Start Simulation" onclick="letsStart()">';

myTableDiv.innerHTML += '<p><b>Current List ...</b></p>';

var x = document.createElement("TABLE");
x.border='1';
x.cellpadding='2';
x.setAttribute("id", "myTable");
document.body.appendChild(x);
var y,t,z;
for(var i=0;i<3;i++){
y = document.createElement("TR");
y.setAttribute("id", "myTr");
document.getElementById("myTable").appendChild(y);

 z = document.createElement("TD");

document.getElementById("myTr").appendChild(z);
if(i==2) { 
t=document.createTextNode("Weight");
z.appendChild(t);
// table id :myTab
}
}
myTableDiv.appendChild(x);
}

function addMoreTuples(){

var node1= document.getElementById("node1");
var node2= document.getElementById("node2");
var weight = document.getElementById("weight");

var table = document.getElementById("myTable");
var rowCount = table.rows.length;
var row = table.insertRow(rowCount);
row.insertCell(0).innerHTML= node1.value;
row.insertCell(1).innerHTML= node2.value;
row.insertCell(2).innerHTML= weight.value;  

document.getElementById("node1").value = "";
document.getElementById("node2").value = "";
document.getElementById("weight").value = "";

}


//for now , im assuming that the taable is getting created and .. update ... and values are getting added to array arr

draw = function(arr,count) {

var div = document.getElementById('canvas');
while(div.firstChild){
  div.removeChild(div.firstChild);
}


var g = new Graph();

 for(var i=0;i<count;i++)
 {
  for(var j=0;j<count;j++)
  {
    if(arr[i][j]!=100&&i!=j)
    {
                          g.addEdge(i,j,{ label: arr[i][j] },{fill: 'white' } );
    }
  }
 }   
            /* layout the graph using the Spring layout implementation */
            var layouter = new Graph.Layout.Spring(g);
            layouter.layout();

            /* draw the graph using the RaphaelJS draw implementation */
            var renderer = new Graph.Renderer.Raphael('canvas', g, 600, 400);
            renderer.draw();

//                 redraw = function() {
//                     layouter.layout();
//                     renderer.draw();
//                 };
 
 // now , for every row demo in the djskrtas algo , we'll be putting a "Next Step Button "

};

function letsStart(){
var count = document.getElementById("count").value;
var dijTable = document.getElementById("dijTable");
var algorithm = document.getElementById("algo");

//clearing previous
while(dijTable.firstChild){
  dijTable.removeChild(dijTable.firstChild);
}
while(algorithm.firstChild){
  algorithm.removeChild(algorithm.firstChild);
}

console.log("wasup ?");
//       here, the entire code snippet for Dijsktra's algo will be displayed and the current one being exec will be highlghted 
//       also the values of i & j will be displayed .. 
algorithm.innerHTML += '<p>The algo is displayed here </p>' ; 
algorithm.innerHTML += '<p>end of algorithm </p>';
//dijTable.innerHTML += '<p><b>Current List ...</b></p>';

var x = document.createElement("TABLE");
x.border='1';
x.cellpadding='2';
x.setAttribute("id", "dijsktraTable");
document.body.appendChild(x);
var y,t,z;
for(var i=0;i<=count;i++){
y = document.createElement("TR");
y.setAttribute("id", "myTr1");
document.getElementById("dijsktraTable").appendChild(y);

 z = document.createElement("TD");

document.getElementById("myTr1").appendChild(z);
  for(i=0;i<=count;i++)
  {
    if(i==0)
       t=document.createTextNode("ShortestPathSet");
    else
        t=document.createTextNode("Node"+i);
    z.appendChild(t);
  }
}
dijTable.appendChild(x);


    
var status = [] ; 
 for(var x = 0;x<count;x++)
    status[x]=0;

//for(var x = 0;x<count;x++)
//   console.log("what us lfie"+status[x]);


  for(var x = 0;x<count;x++)
    {
     // console.log("calling");
          addDijTuples(status);

   //document.getElementById("algo").innerHTML +="The current node processed (i) is : " + x;
   // document.getElementById("algo").innerHTML +='<input type="button" id="add" value="Add Next Row" onclick="addDijTuples(status)">';
//create tuple for this current node

    }
}


function addDijTuples(status){

console.log("i got called again sighs {hi pranavi :P}"); //the things we put in our codes XD

status[src_node]=1;
var src_node = document.getElementById("source").value;
var count = document.getElementById("count").value;
var table = document.getElementById("dijsktraTable");
var rowCount = table.rows.length;

var row = table.insertRow(rowCount);
var c=0;               
  for(var i=0;i<=count;i++)
    {
      
      //now here , if there is a direct path .. put the value and all .. if there isn't .. put infinity 
      //also , at the same time 
      // when you;re using (calculaitng from ) .... highlight the same node in the graph ... 
      // no idea how to access the graph .. but yeah sure
      //console.log(rowCount); 
      //thisi is for the first , soruce node ka table ...
      if(rowCount==1){
      if(i==0){
        row.insertCell(i).innerHTML= src_node;
}

        else{
        arr1[c]=arr[src_node][i-1];
        c++;
       row.insertCell(i).innerHTML= arr[src_node][i-1];
        if(arr[src_node][i-1]!=100)
           {
           	 g.addEdge(src_node,i-1,{ label: arr[src_node][i-1] },{
  style: {
    stroke: 'red',
    fill: 'red',  
  }
});
           }
     }
    }
      

     else
     {
      
      if(i==0){        
         row.insertCell(i).innerHTML= next_node;
         console.log("here1");

}
else
{
      console.log("here2");

      //in this step, we slect min between prev entry and the entry from arr
      //so , to store the prev entry at every point .. for comparision .. we  1D array  
      //so , nxy node is the min one from that iteration and not already in the list .. 
      //we aslo need an array to check whatever is alredy in the list 
      
      //ugh, do something to avoid loops or youll die lol , ok .. lopps for only src node  !
      var bleh = Number(arr[src_node][next_node])+ Number(arr[next_node][i-1]) ; 

       var num = Math.min(arr1[i-1],bleh);
       row.insertCell(i).innerHTML = num ; 
        arr1[c]=num;
        c++;

}

     }
    }   

next_val = 100;
for(var m=0;m<count;m++){
                if(arr1[m]<next_val&&status[m]==0)
                  next_val=arr1[m];
              }

               console.log(next_val);
               for(var m=0;m<count;m++){
                if(arr1[m]==next_val)
                  break;
              }
              console.log(m);
              next_node=m ; 
              status[next_node]=1;
     }
