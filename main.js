
var  newBox = document.getElementById("firstDayBox").innerHTML
var  newBox2 = document.getElementById("firstDayBox").innerText
console.log(newBox2)

var mydate= new Date();
var year = mydate.getYear();
if(year< 1000)
{
    year +=1900;
}
var getDaysInMonth = function(month,year) {
    // Here January is 1 based
    //Day 0 is the last day in the previous month
   return new Date(year,month, 0).getDate();
  // Here January is 0 based
  // return new Date(year, month+1, 0).getDate();
  };
  

  
var day = mydate.getDay();
var month = mydate.getMonth();
var dayM = mydate.getDate();
var dayArray = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
var monthArray = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug","Sep","Oct","Nov","Dec");
var DAT = dayArray[day] + " " + dayM+  " " + monthArray[month] + " " + year  ;


var dayArrayB = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
  var monthArrayB = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug","Sep","Oct","Nov","Dec");
  
 

  var curDate;
  var curMonth;
  var curDay;
  var curYear;
  var lastYearDigit;


  function dateSet()
  { curDate = document.getElementById("Datesa").value;
  curMonth =parseInt(curDate.slice(5,7));
  curDay = curDate.slice (8,10)
  curYear =curDate.slice (0,4)
  lastYearDigit = curDate.slice (3,4)

  var mydate2= new Date(curMonth + " " + curDay + " " + curYear);
  var day2 = mydate2.getDay();

e =0
 for (var i =0; i<28; i++)
 {
     e+=1




     //new function
if (curDay==getDaysInMonth(curMonth,curYear)) 
{
    newE= e -1;
    if (newE ==0)
    {
        newDay = parseInt(getDaysInMonth(curMonth,curYear))
        newMonth = curMonth
        newYear = curYear

        var myNewDate= new Date(newMonth + " " + newDay + " " + newYear);
        var newDayInWords= myNewDate.getDay();

        document.getElementById("2100" + e).value = dayArrayB[newDayInWords] + " " + newDay + " " + monthArrayB[(newMonth) - 1] + " " + newYear; 
    }
     else
     {
        newDay= newE
        newMonth = newMonth = parseInt(curMonth)+ 1
        newYear= curYear
        var myNewDate= new Date(newMonth + " " + newDay + " " + newYear);
        var newDayInWords= myNewDate.getDay();
        
        document.getElementById("2100" + e).value = dayArrayB[newDayInWords] + " " + newDay + " " + monthArrayB[(newMonth) - 1] + " " + newYear; // not 2029 but still last month of year and last day of month
     } 

}

if (curDay==getDaysInMonth(curMonth,curYear)) 
{   
    
  if (curMonth==12)
{  
     if (lastYearDigit==9)
     { 
       
        var p = parseInt(curYear.slice(2,3));
      curYear1= curYear.slice(0,2) + (p+1) + 0
      newE=e -1;
         if (newE ==0)
               {
                   newDay = parseInt(getDaysInMonth(curMonth,curYear))
                   newMonth = curMonth
                   newYear = curYear
           
                   var myNewDate= new Date(newMonth + " " + newDay + " " + newYear);
                   var newDayInWords= myNewDate.getDay();
           
                   document.getElementById("2100" + e).value = dayArrayB[newDayInWords] + " " + newDay + " " + monthArrayB[parseInt(newMonth)-1] + " " + newYear;
               }
                else
                {
                   newDay= newE
                   newMonth = newMonth = parseInt(1)
                   newYear= curYear1
                   var myNewDate= new Date(newMonth + " " + newDay + " " + newYear);
                   var newDayInWords= myNewDate.getDay();
                   
                   document.getElementById("2100" + e).value = dayArrayB[newDayInWords] + " " + newDay + " " + monthArrayB[parseInt(newMonth)-1] + " " + newYear; // is 2029 and still last month of year and last day of month
                } 
    }

   else
   {
    var p = parseInt(curYear.slice(3,4));
    
    curYear2= curYear.slice(0,3) +  (p + 1)

   

    newE=e -1 ;
    if (newE ==0)
    {
        newDay = parseInt(getDaysInMonth(curMonth,curYear))
        newMonth = curMonth
        newYear = curYear

        var myNewDate= new Date(newMonth + " " + newDay + " " + newYear);
        var newDayInWords= myNewDate.getDay();

        document.getElementById("2100" + e).value =dayArrayB[newDayInWords] + " " + newDay + " " + monthArrayB[parseInt(newMonth)-1] + " " + newYear;
    }
     else
     {
        newDay= newE
        newMonth = parseInt(1)
        newYear= curYear2
        var myNewDate= new Date(newMonth + " " + newDay + " " + newYear);
        var newDayInWords= myNewDate.getDay();
        
        document.getElementById("2100" + e).value = dayArrayB[newDayInWords] + " " + newDay + " " + monthArrayB[parseInt(newMonth)-1] + " " + newYear; // not 2029 but still last month of year and last day of month
     } 
   
   }
  }
}

else // not last day of the month
{
    


    if (curMonth==12)
    {  
         if (lastYearDigit==9) // year ends with 9 
         { 
            var p = parseInt(curYear.slice(2,3));
            curYear1= curYear.slice(0,2) + (p+1) + 0

           daysLeftInCurMonth= parseInt(getDaysInMonth(curMonth,curYear)) - curDay
           newE = e - daysLeftInCurMonth -1
           if(newE>0)
           {
               newDay= newE
               newMonth = "01"
               newYear= curYear1

               var myNewDate= new Date(newMonth + " " + newDay + " " + newYear);
               var newDayInWords= myNewDate.getDay();


            document.getElementById("2100" + e).value =dayArrayB[newDayInWords] + " " + newDay + " " + monthArrayB[0] + " " + newYear;
           }

           else
           {
            newDay= parseInt(getDaysInMonth(curMonth,curYear)) + newE
            newMonth = curMonth
            newYear= curYear

            var myNewDate= new Date(newMonth + " " + newDay + " " + newYear);
            var newDayInWords= myNewDate.getDay();

           console.log(newE, e)
         document.getElementById("2100" + e).value = dayArrayB[newDayInWords] + " " + newDay + " " + monthArrayB[(newMonth) - 1] + " " + newYear;
        }
           

           
         // document.getElementById("100" + e).value = "df"+ " " +dayArrayB[day2] + " " + "01" + " " + monthArrayB[0] + " " + curYear1;// is 2029 and still last month of year and last day of month
         }
    
       else // year does not end with 9 
       {
        
        daysLeftInCurMonth= parseInt(getDaysInMonth(curMonth,curYear)) - curDay
           newE = e - daysLeftInCurMonth -1
           if(newE>0)
           {

            var p = parseInt(curYear.slice(3,4));
            curYear2= curYear.slice(0,3) +  (p + 1)

           daysLeftInCurMonth= parseInt(getDaysInMonth(curMonth,curYear)) - curDay

               newDay= newE
               newMonth = "01"
               newYear= curYear2

               var myNewDate= new Date(newMonth + " " + newDay + " " + newYear);
               var newDayInWords= myNewDate.getDay();


            document.getElementById("2100" + e).value = dayArrayB[newDayInWords] + " " + newDay + " " + monthArrayB[(newMonth) - 1] + " " + newYear;
            
           }

           else
           {
            newDay= parseInt(getDaysInMonth(curMonth,curYear)) + newE
            newMonth = curMonth
            newYear= curYear

            var myNewDate= new Date(newMonth + " " + newDay + " " + newYear);
            var newDayInWords= myNewDate.getDay();


         document.getElementById("2100" + e).value = dayArrayB[newDayInWords] + " " + newDay + " " + monthArrayB[(newMonth) - 1] + " " + newYear;
        
        }
           
       } // year does not end with 9 
    }

    else // current month is not 12 
    {
        
       daysLeftInCurMonth= parseInt(getDaysInMonth(curMonth,curYear)) - curDay
       newE = e - daysLeftInCurMonth -1
       if(newE>0)
       {
           newDay= newE
           newMonth = parseInt(curMonth) +1
           newYear= curYear

           var myNewDate= new Date(newMonth + " " + newDay + " " + newYear);
           var newDayInWords= myNewDate.getDay();


        document.getElementById("2100" + e).value = dayArrayB[newDayInWords] + " " + newDay + " " + monthArrayB[(newMonth)-1] + " " + newYear;
        
       }

       else
       {
        newDay= parseInt(getDaysInMonth(curMonth,curYear)) + newE
        newMonth = curMonth
        newYear= curYear

        var myNewDate= new Date(newMonth + " " + newDay + " " + newYear);
        var newDayInWords= myNewDate.getDay();


     document.getElementById("2100" + e).value = dayArrayB[newDayInWords] + " " + newDay + " " + monthArrayB[(newMonth) - 1] + " " + newYear;
    console.log(newDayInWords,newDay, newE, daysLeftInCurMonth, e)  }
    }
}

key = "#"+ "2100" + e
keyValue = document.getElementById("2100" + e).value
localStorage.setItem(key, keyValue)

 }
 
}



//DATE Div 1
var number1 = new Array(7);
var id1 = document.querySelector("#container");
for(var i=0;i<number1.length;i++){
        
number1[i]= newBox2;

} 

var e =0;
for( var i=0; i<number1.length; i++)
{

e+=1;
    dafunct1a(number1[i]);
}


function dafunct1a (i) {
  

    var newDiv = document.createElement('input');
    
newDiv.className="dates";
newDiv.id= "2100" + e;
newDiv.innerHTML =i;
id1.appendChild(newDiv);
}

//INPUT DIV 1

var number = new Array(7);
var id = document.querySelector("#container");
for(var i=0;i<number.length;i++){
        
number[i]= newBox2;

} 

var e =9;
for( var i=0; i<number.length; i++)
{

e+=1;
    dafuncta(number[i]);
}


function dafuncta (i) {
  

    var newDiv = document.createElement('div');
newDiv.className="lists";
newDiv.id= Math.random();

newDiv.innerHTML =i;
id.appendChild(newDiv);

var list = document.getElementById('li1').innerText
var no = new Array (10);
var newId =  newDiv;
console.log(newId)

for(var i=0;i<no.length;i++)
{
    no[i]= list;
}
 var d= -1;

for( var i=0; i<no.length; i++)
{

d+=1;
    newDafuncta(no[i]);
}


function newDafuncta (i) {
 
  
    var newDiv2 = document.createElement('input');
newDiv2.className="list";

newDiv2.id= e + "" + d;
console.log(newDiv2.id)
newDiv2.setAttribute('oninput','save(event)');
newDiv2.setAttribute('onkeydown','strike(event)');
newDiv2.setAttribute('spellcheck','false');
newDiv2.setAttribute('onclick','track(event)'); 

newDiv2.innerHTML =i;
newId.appendChild(newDiv2);
var text= document.getElementsByTagName(newDiv2).value
console.log(text)


}
}


//DATE Div 2
var number2 = new Array(7);
var id2 = document.querySelector("#container");
for(var i=0;i<number2.length;i++){
        
number2[i]= newBox2;

} 

var e =7;
for( var i=0; i<number2.length; i++)
{

e+=1;
    dafunct1b(number2[i]);
}


function dafunct1b (i) {
  

    var newDiv = document.createElement('input');
newDiv.className="dates";
newDiv.id= "2100" + e;
newDiv.innerHTML =i;
id2.appendChild(newDiv);
}


//INPUT DIV 2

var numberA = new Array(7);
var idA = document.querySelector("#container");
for(var i=0;i<numberA.length;i++){
        
numberA[i]= newBox2;

} 

var e =16;
for( var i=0; i<numberA.length; i++)
{

e+=1;
    dafunctb(numberA[i]);
}


function dafunctb (i) {
  

    var newDiv = document.createElement('div');
newDiv.className="lists";
newDiv.id= Math.random();
newDiv.innerHTML =i;
idA.appendChild(newDiv);

var list = document.getElementById('li1').innerText
var no = new Array (10);
var newId =  newDiv;
console.log(newId)

for(var i=0;i<no.length;i++)
{
    no[i]= list;
}
 var d=-1;

for( var i=0; i<no.length; i++)
{

d+=1;
    newDafunctb(no[i]);
}


function newDafunctb (i) {
 
  
    var newDiv2 = document.createElement('input');
newDiv2.className="list";

newDiv2.id= e + "" + d;
console.log(newDiv2.id)
newDiv2.setAttribute('oninput','save(event)');
newDiv2.setAttribute('onkeydown','strike(event)');
newDiv2.setAttribute('spellcheck','false');
newDiv2.setAttribute('onclick','track(event)'); 

newDiv2.innerHTML =i;
newId.appendChild(newDiv2);
var text= document.getElementsByTagName(newDiv2).value
console.log(text)


}
}

//DATE Div 3
var number3 = new Array(7);
var id3 = document.querySelector("#container");
for(var i=0;i<number3.length;i++){
        
number3[i]= newBox2;

} 

var e =14;
for( var i=0; i<number3.length; i++)
{

e+=1;
    dafunct1c(number3[i]);
}


function dafunct1c (i) {
  

    var newDiv = document.createElement('input');
newDiv.className="dates";
newDiv.id= "2100" + e;
newDiv.innerHTML =i;
id3.appendChild(newDiv);
}

//INPUT DIV 3

var numberB = new Array(7);
var idB = document.querySelector("#container");
for(var i=0;i<numberB.length;i++){
        
numberB[i]= newBox2;

} 

var e =23;
for( var i=0; i<numberB.length; i++)
{

e+=1;
    dafunctc(numberB[i]);
}


function dafunctc (i) {
  

    var newDiv = document.createElement('div');
newDiv.className="lists";
newDiv.id= Math.random();
newDiv.innerHTML =i;
idB.appendChild(newDiv);

var list = document.getElementById('li1').innerText
var no = new Array (10);
var newId =  newDiv;
console.log(newId)

for(var i=0;i<no.length;i++)
{
    no[i]= list;
}
 var d=-1;

for( var i=0; i<no.length; i++)
{

d+=1;
    newDafunctc(no[i]);
}


function newDafunctc (i) {
 
  
    var newDiv2 = document.createElement('input');
newDiv2.className="list";

newDiv2.id= e + "" + d;
console.log(newDiv2.id)
newDiv2.setAttribute('oninput','save(event)');
newDiv2.setAttribute('onkeydown','strike(event)');
newDiv2.setAttribute('spellcheck','false');
newDiv2.setAttribute('onclick','track(event)'); 

newDiv2.innerHTML =i;
newId.appendChild(newDiv2);
var text= document.getElementsByTagName(newDiv2).value
console.log(text)


}
}



//DATE Div 4
var number4 = new Array(7);
var id4 = document.querySelector("#container");
for(var i=0;i<number4.length;i++){
        
number4[i]= newBox2;

} 

var e =21;
for( var i=0; i<number4.length; i++)
{

e+=1;
    dafunct1d(number4[i]);
}


function dafunct1d (i) {
  

    var newDiv = document.createElement('input');
newDiv.className="dates";
newDiv.id= "2100" + e;
newDiv.innerHTML =i;
id4.appendChild(newDiv);
}


//INPUT DIV 4

var numberC = new Array(7);
var idC = document.querySelector("#container");
for(var i=0;i<numberC.length;i++){
        
numberC[i]= newBox2;

} 

var e =30;
for( var i=0; i<numberC.length; i++)
{

e+=1;
    dafunctd(numberC[i]);
}


function dafunctd (i) {
  

    var newDiv = document.createElement('div');
newDiv.className="lists";
newDiv.id= Math.random();
newDiv.innerHTML =i;
idC.appendChild(newDiv);

var list = document.getElementById('li1').innerText
var no = new Array (10);
var newId =  newDiv;
console.log(newId)

for(var i=0;i<no.length;i++)
{
    no[i]= list;
}
 var d=-1;

for( var i=0; i<no.length; i++)
{

d+=1;
    newDafunctd(no[i]);
}


function newDafunctd (i) {
 
  
    var newDiv2 = document.createElement('input');
newDiv2.className="list";

newDiv2.id= e + "" + d;
console.log(newDiv2.id)

newDiv2.setAttribute('oninput','save(event)');
newDiv2.setAttribute('onkeydown','strike(event)');
newDiv2.setAttribute('spellcheck','false');
newDiv2.setAttribute('onclick','track(event)'); 

newDiv2.innerHTML =i;
newId.appendChild(newDiv2);


}
}



// drags and drops boxes

function drag(y)
{
    y.dataTransfer.setData(" ", y.target.id);
}
function drop(y)
{

    y.preventDefault();
    var id = y.dataTransfer.getData(" ");
    var droppable = y.target.classList.contains("lists")
    var liimit = document.getElementById("firstDayBox").childNodes.length;
    
    if (droppable)
    {
      
        if (y.target.childNodes.length<=8)
        {y.target.appendChild(document.getElementById(id));}

}

}


// saves input permanently

function save(y)
{
   key= "#" + y.target.id
localStorage.setItem(key,y.target.value)
}
$(window).on('load', function(){
   
 for( var [key,value] of Object.entries(localStorage))
 {

 
    if(key.length ==5 )
    {
        a= key.slice(0,4)
        $(a).attr('style',value)
    }
    $(key).val(value);
   
 }

});


 
function strike(event)
{

    if (event.keyCode == 124)
    { if(event.target.hasAttribute("style"))
    {
       event.target.removeAttribute("style")
    }
    else{
        event.target.setAttribute('style','text-decoration: line-through;')
}
} 
strikeKey= "#" + ""+ event.target.id +2
localStorage.setItem(strikeKey,event.target.getAttribute('style'))
console.log(localStorage)
}


// Reset Date after UP-Shift

function dateUp(y)
{var baDay;
var baMonth;
var baYear;
var monthNo;
console.log(y)
var ba= localStorage.getItem(y)
console.log(ba)
if (ba.length<15)
{
    baMonth=ba.slice(6,9)
baDay = ba.slice(4,5)
baYear = ba.slice(10,14)
}
if (ba.length>14)
{
    baMonth=ba.slice(7,10)
baDay = ba.slice(4,6)
baYear = ba.slice(11,15)
}

if (baDay.length<2)
{
    baDay="0"+ baDay;
}


console.log(ba, baDay,baMonth,baYear,"yess");
for(var i=0; i<12;i++)
{
   
    if( monthArray[i]==baMonth)
    {
        monthNoInt = i+1;
        console.log(monthNoInt)
        monthNo=monthNoInt.toString();
       

        if (monthNo.length<2)
        {
            monthNo="0"+""+monthNo;
        }
    }
     
}

document.getElementById("Datesa").value = baYear+"-"+monthNo +"-"+baDay;
    var yass = document.getElementById("Datesa").value
    console.log("omg",ba,yass, "abs",baDay.length,monthNo.length);

dateSet()
}



//end of  Reset Date after UP-Shift


//UP-SHIFT OF ROWS


function upShift(event)

{ if (event.target.id == "R2")
   { for(var i= 170; i<240;i++)
    {   
        nowString= i.toString()
        sliced = parseInt(nowString.slice(0,2)) - 7
       newId = "#" +""+sliced +""+parseInt(nowString.slice(2,3))
       newStrikeId = newId +"2";
       var striked =localStorage.getItem("#" + i +"2")
       
        var shift= localStorage.getItem("#" + i)
        if(shift== null)
        {shift=" ";
        console.log(shift)
         } 
        localStorage.setItem(newId, shift)
        localStorage.setItem(newStrikeId, striked)
    
        localStorage.setItem("#" +""+i, "")
        localStorage.setItem("#" +""+i+"2", "")
    
    }
}

if (event.target.id == "R2" || event.target.id == "R3")
   {
    for(var i= 240; i<310;i++)
    {   
 MinusBy=0;
    if (event.target.id == "R2")
{ MinusBy= 7;
 
}
if (event.target.id == "R3")
{ MinusBy= 14;
}

        nowString= i.toString()
        sliced = parseInt(nowString.slice(0,2)) - MinusBy
       newId = "#" +""+sliced +""+parseInt(nowString.slice(2,3))
       newStrikeId = newId +"2";
       var striked =localStorage.getItem("#" + i +"2")
       
        var shift= localStorage.getItem("#" + i)
        if(shift== null)
        {shift=" ";
        console.log(shift)
         } 
        localStorage.setItem(newId, shift)
        localStorage.setItem(newStrikeId, striked)
    
        localStorage.setItem("#" +""+i, "")
        localStorage.setItem("#" +""+i+"2", "")
    
    
}
   }

if (event.target.id == "R2" || event.target.id == "R3" || event.target.id == "R4")
   {
for(var i= 310; i<380;i++)
{  
    MinusBy =0;
    if (event.target.id == "R2")
{ MinusBy= 7;
    
    
 
}
if (event.target.id == "R3")
{ MinusBy= 14;
 
}
if (event.target.id == "R4")
{ MinusBy= 21;

}
    nowString= i.toString()
    sliced = parseInt(nowString.slice(0,2)) - MinusBy
   newId = "#" +""+sliced +""+parseInt(nowString.slice(2,3))
   newStrikeId = newId +"2";
   var striked =localStorage.getItem("#" + i +"2")
   
    var shift= localStorage.getItem("#" + i)
    if(shift== null)
    {shift=" ";
    console.log(shift)
     } 
    localStorage.setItem(newId, shift)
    localStorage.setItem(newStrikeId, striked)

    localStorage.setItem("#" +""+i, "")
    localStorage.setItem("#" +""+i+"2", "")
}


if (event.target.id == "R4")
{
    //erases row 2
for(var i= 181; i<249;i++)
{   
    localStorage.setItem("#" +""+i, "")
    localStorage.setItem("#" +""+i+"2", "")

}//end of erases row 2


//erases row 3
    for(var i= 251; i<319;i++)
    {   
  localStorage.setItem("#" +""+i, "")
        localStorage.setItem("#" +""+i+"2", "")
  
} //end of erases row 3
}


 }

 // Calls dateup function dependign on the button clicked
 if (event.target.id == "R2")
{
    dateUp("#21008");
}
if (event.target.id == "R3")
{
    dateUp("#210015");
}
if (event.target.id == "R4")
{
    dateUp("#210022");
}

// End of Calls dateup function deoendign on the button clicked


location.reload();
console.log("yea")
}


//Fuction for Delete,Copy input tracking


var trackA=1;
var trackB=1;

function track(y)
{   

  

    if(trackA==trackB)
    {
        var start =y.target.id;

        localStorage.setItem("one", start);
       

        trackA +=1;
    }
    else
    {
        var end =y.target.id;

        localStorage.setItem("two", end);
        

        trackB +=1;
    }

    //Fuction for Paste input tracking
    var from =y.target.id;

    localStorage.setItem("pFrom", from);
 //end of Fuction for Paste input tracking
    var getOne = localStorage.getItem("one");
    var getTwo = localStorage.getItem("two");
    var getFrom = localStorage.getItem("pFrom");
   

 console.log(getOne,"|", getTwo);

 console.log(trackA,"|",trackB);
 console.log(getFrom);

 var getOne = localStorage.getItem("one");
    var getTwo = localStorage.getItem("two");
    maxLocation=Math.max(getOne,getTwo)
    minLocation=Math.min(getOne,getTwo)
    console.log(maxLocation, minLocation)
    minString= minLocation.toString();
    maxString= maxLocation.toString();

    minPart1 = minString.slice(0,2);
    minPart2 = minString.slice(2,3);
    maxPart1 = maxString.slice(0,2);
    maxPart2 = maxString.slice(2,3);

    intMinPart1 = parseInt(minPart1);
    intMinPart2 = parseInt(minPart2);
    intMaxPart1 = parseInt(maxPart1);
    intMaxPart2 = parseInt(maxPart2);

    
   // console.log(minPart1,part2);
    if(minLocation<maxLocation)
    { if(intMinPart2<9)
        {
            intMinPart2 +=1;
        }
    }
    console.log(intMinPart2);


}



function inputDelete()
{
    var getOne = localStorage.getItem("one");
    var getTwo = localStorage.getItem("two");
    maxLocation=Math.max(getOne,getTwo)
    minLocation=Math.min(getOne,getTwo)
    console.log(maxLocation, minLocation)
    minString= minLocation.toString();
    maxString= maxLocation.toString();



    var inputAmount = (maxLocation + 1) -(minLocation)

    localStorage.setItem("locationStart",minLocation);
    localStorage.setItem("locationEnd",maxLocation);
    

    if(minLocation<maxLocation)
    { 
        for(var i=0; i<inputAmount;i++)
        {  
             var data =localStorage.getItem("#" + minLocation);
             var data1 =localStorage.getItem("#" + minLocation+"2");
        if(data==null)
    {
        data="";
        data1="";
    }
            localStorage.setItem(minLocation+"undo",data)
            localStorage.setItem(minLocation+"undo"+"2",data1)
            document.getElementById(minLocation).value="";
            localStorage.setItem("#" +minLocation,"");
            localStorage.setItem("#" +minLocation+"2","");
            console.log(localStorage)
            minLocation +=1;
            
        }



    }
    
    for( var [key,value] of Object.entries(localStorage))
    {
   
    
       if(key.length ==5 )
       {
           a= key.slice(0,4)
           $(a).attr('style',value)
       }
       $(key).val(value);
      
    }

}

function inputCopy()
{
    var getOne = localStorage.getItem("one");
    var getTwo = localStorage.getItem("two");
    maxLocation=Math.max(getOne,getTwo)
    minLocation=Math.min(getOne,getTwo)
    console.log(maxLocation, minLocation)
    minString= minLocation.toString();
    maxString= maxLocation.toString();



    var inputAmount = (maxLocation + 1) -(minLocation)

    localStorage.setItem("locationStartCopy",minLocation);
    localStorage.setItem("locationEndCopy",maxLocation);
    

    if(minLocation<maxLocation)
    { 
        for(var i=0; i<inputAmount;i++)
        {  
             var data =localStorage.getItem("#" + minLocation);
             var data1 =localStorage.getItem("#" + minLocation+"2");
        if(data==null)
    {
        data="";
        data1="";
    }
            localStorage.setItem(minLocation+"copy",data)
            localStorage.setItem(minLocation+"copy"+"2",data1)

            minLocation +=1;
            
        }



    }
}

function inputPaste()
{
    var pFrom =localStorage.getItem("pFrom");
    var locationStartCopy = localStorage.getItem("locationStartCopy");
 var locationEndCopy = localStorage.getItem("locationEndCopy");
 var intLocationStartCopy = parseInt(locationStartCopy);
 var intLocationEndCopy = parseInt(locationEndCopy);
 var intpFrom = parseInt(pFrom);

 var inputAmountCopy= (intLocationEndCopy +1) - intLocationStartCopy;
 for(var i=100; i<380;i++)
 {
    var datar= localStorage.getItem("#"+i);
    var datar1= localStorage.getItem("#"+i+"2");
    if(datar==null)
    {
        datar="";
        datar1="";
    }
    localStorage.setItem(i+"unpaste",datar)
    localStorage.setItem(i+"unpaste"+"2",datar1)
 }
 
 for(var i=0; i<inputAmountCopy;i++)
 {
    var data = localStorage.getItem(intLocationStartCopy +i+"copy");
    var data1 = localStorage.getItem(intLocationStartCopy +i+"copy"+"2");
    var inputKey = intpFrom+i
    
   document.getElementById(intpFrom+i).value=data;
    localStorage.setItem("#"+inputKey,data)
    localStorage.setItem("#"+inputKey+"2",data1)
    console.log("queen",inputKey)

 }
 for( var [key,value] of Object.entries(localStorage))
 {

 
    if(key.length ==5 )
    {
        a= key.slice(0,4)
        $(a).attr('style',value)
    }
    $(key).val(value);
   
 }

}




function undoDelete()
{ 
 var locationStart = localStorage.getItem("locationStart");
 var locationEnd = localStorage.getItem("locationEnd");
 var intLocationStart = parseInt(locationStart);
 var intLocationEnd = parseInt(locationEnd);

 var inputAmount= (intLocationEnd +1) - intLocationStart;


 for(var i=100; i<380;i++)
 {
    var datar= localStorage.getItem("#"+i);
    var datar1= localStorage.getItem("#"+i+"2");
    if(datar==null)
    {
        datar="";
        datar1="";
    }
    localStorage.setItem(i+"unpaste",datar)
    localStorage.setItem(i+"unpaste"+"2",datar1)
 }
 for(var i=0; i<inputAmount;i++)
 {

    var retrive= localStorage.getItem(intLocationStart+"undo");
    var retrive1= localStorage.getItem(intLocationStart+"undo"+"2");
   

    localStorage.setItem("#" + intLocationStart,retrive)
    localStorage.setItem("#" + intLocationStart+"2",retrive1)
    document.getElementById(intLocationStart).value=retrive;
    intLocationStart +=1;


 }
 for( var [key,value] of Object.entries(localStorage))
 {

 
    if(key.length ==5 )
    {
        a= key.slice(0,4)
        $(a).attr('style',value)
    }
    $(key).val(value);
   
 }

}


function unPaste()
{
    for(var i=100; i<380;i++)
    {
        var datar= localStorage.getItem(i+"unpaste");
        var datar1= localStorage.getItem(i+"unpaste"+"2");
        localStorage.setItem("#"+i,datar)
        localStorage.setItem("#"+i+"2",datar1)
        document.getElementById(i).value=datar;


    }
    for( var [key,value] of Object.entries(localStorage))
    {
   
    
       if(key.length ==5 )
       {
           a= key.slice(0,4)
           $(a).attr('style',value)
       }
       $(key).val(value);
      
    }

}