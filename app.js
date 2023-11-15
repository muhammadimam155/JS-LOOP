//Q1 , Q2
document.write("<h1> Q1 , Q2 satrt</h1>")
var arr = [ 
           ["<h3>" + '0' , '1' , '2' , '3'  + "</h3>" ],
           [  "<h3>" + '1', '0' ,  '1' , '2' + "</h3>"   ],
           [ "<h3>" + '2' , '1' , '0' ,'1'+ "</h3>"  ]
        ]
document.write(arr)
document.write("<h1> Q1 , Q2  end</h1> <br>")
//Q1 , Q2 end




//Q3
document.write("<h1> Q3  start</h1>")
for (var i = 0 ; i < 10 ; i++){
    document.write(i +"<br>")
}
document.write("<h1> Q3  end</h1> <br>")
//Q3 end


//Q4
document.write("<h1> Q4  start</h1>")
var tableNum = prompt ("ENTER A NUM TO SHOW ITS MULPICATION TABLE")
var tableLen = prompt ("ENTER LENGHT MULTICATION TABLE")
for (var i = 1 ; i <= tableLen ; i++ ){
    document.write (tableNum +  "  " + "  *"  + "  " + i  + "  " + "=" + "  " + tableNum * i + "<br>" )
} 
document.write("<h1> Q4  end  </h1>  <br>")
//Q4 end

//Q5
document.write("<h1> Q5  start</h1>")
var fruit = ["apple" , "banana" , "mango" , "orange" , "strawberry"]
for (var i = 0 ; i <= fruit.length ; i++ ){
    i = fruit  
    document.write( i + "<br>")
}
document.write("<h1> Q5  end</h1> <br> ")
//Q5 end


//Q6
document.write("<h1> Q6 start</h1>")
document.write("<h3> sec A</h3>")
document.write("counting <br>")
for(var i = 1 ; i <= 15 ; i++){
    document.write( i + "<br>" )
}
document.write("<h3> sec C</h3>")
document.write("even <br>")
for (var i = 0 ; i<=20 ; i+=2){
    document.write(i + "<br>")
}
document.write("<h3> sec D</h3>")
document.write("odd <br>")
for (var i = 1 ; i<=19 ; i+=2){
    document.write(i + "<br>")
}
document.write("<h3> sec E</h3>")
document.write("series <br>")
for (var i = 2 ; i<=20 ; i+=2){
    document.write(i + "k" + "<br>")
}
document.write("<h1> Q6  end</h1> <br>")

//Q7
 document.write("<h1> Q7  start</h1>")
var bakery = ["cookie" , "applepie" , "chips" , "patties" , "cake"]
 var A = prompt ("WELCOME TO MY BAKKERY , WHAT DO YOU WANT TO ORDER SIR/MAAM ")
var flag = "no" 
for (var i = A  ; i <= bakery ;i++ ){

        flag = "yes"
        
}
if (flag == "yes"){
    document.write( A + " " + "is available at index" + " " + A.length + " " + "in our bakery"  )
} else{
    document.write( "we are sorry" + " "  + A + " " + "is not available in our bakery"  )
}
document.write("<h1> Q7  end <br> </h1>")





//Q10 
document.write("<h1> Q10  start</h1>")
for ( i = 5 ; i <= 100 ; i+=5 ){
    document.write(i + "<br>")
}
document.write("<h1> Q10  end</h1>")



document.write("<h1>MUHAMMAD IMAM </h1>")
document.write("<h1>CCO 117033</h1>")


