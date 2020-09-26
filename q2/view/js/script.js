
 var toggle = 0;

 var contactsList = [{
    name: 'Admin',
    mobile: '9999999999',
    email: 'admin@xyzcompany.com'
  }];

  var exampleList = [{
    name: 'Admin',
    mobile: '9999999999',
    email: 'admin@xyzcompany.com'
  },
  {
    name: 'Bdmin',
    mobile: '9999999999',
    email: 'admin@xyzcompany.com'
  },
  {
    name: 'Cdmin',
    mobile: '9999999999',
    email: 'admin@xyzcompany.com'
  },
  {
    name: 'Ddmin',
    mobile: '9999999999',
    email: 'admin@xyzcompany.com'
  },]

function dummy(){
   var name = document.getElementById("name").value;
   var mobile = document.getElementById("mobile").value;
   var email = document.getElementById("email").value;
   var wholeString = "";

   var nameResult = /^[a-zA-Z ]+$/.test(name);
   var mobileResult = /^[0-9]+$/.test(mobile);
   var countName =0;
   var countMobile =0;
   var countEmail =0;
   if(!nameResult){
       countName ++;
     // alert("Name should only contain Alphabets and Space.");
   }
   if(name.length>20){
       countName++;
   //  alert("Name should be less than or equal to 20 characters.");
   }
   
   if(!mobileResult){
    countMobile++;
      // alert("Mobile should only contain numbers.");
   }
   if(mobile.length!=10){
    countMobile++;
  //    alert("Mobile should have 10 characters.");
   }

   var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if(!emailRegex.test(email)){
     countEmail++;
     //alert("Email format invalid.");
   };
   if(email.length>=40){
      countEmail++;
   // alert("Email should be less than 40 characters.");
  };
  if(countEmail !=0 || countMobile !=0 || countName!=0){
      
      document.getElementById("error").style.display = "block";
  }
   if(countEmail ==0&& countMobile ==0 && countName==0){
    document.getElementById("name").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("email").value = "";
    document.getElementById("error").style.display = "none";
       var newObject ={
        "name": name,
        "mobile": mobile,
        "email": email
       }
       console.log("Insert success!, ",newObject.name);
       contactsList.push(newObject);     

       console.log(contactsList);    
       appendTable();
   }  
 
}

function changeColor(){
    var tableBody = document.getElementById("summaryTable");
    var btn =  document.createElement("tr");
    btn.textContent = "gegeeg";
    btn.style.backgroundColor = "red";
    tableBody.appendChild(btn);
}

function appendTable(){
    var tableBody = document.getElementById("summaryTable"),
    newRow, newCellName, newCellMobile, newCellEmail;

var rowTitle = tableBody.rows[0];
tableBody.innerHTML = "";
tableBody.appendChild(rowTitle); 

// Build the new table
for (var i=0; i < contactsList.length; i++) {
    newRow = document.createElement("tr");   
   
            var tempObj = contactsList[i];
            var name = tempObj.name;
            var mobile = tempObj.mobile;
            var email = tempObj.email;

            newCellName = document.createElement("td");
            newCellName.textContent = name;
            //newCellName.style.backgroundColor="red";
            
            newRow.appendChild(newCellName);

            newCellMobile = document.createElement("td");
            newCellMobile.textContent = mobile;
            //newCellMobile.style.backgroundColor="red";
            
            newRow.appendChild(newCellMobile);

            newCellEmail = document.createElement("td");
            newCellEmail.textContent = email;
            //newCellEmail.style.backgroundColor="red";
         
            newRow.appendChild(newCellEmail);   
            if(i%2==0){
                newRow.style.backgroundColor ="#f2f2f2";
            }            
            tableBody.appendChild(newRow);              
      
}
}

function toggleOrder(){
    if(toggle ==0){
        contactsList.sort((a,b)=>a.name>b.name?1:-1);
        toggle =1;
        sortTable();
        return 0;
    }
    if(toggle==1){
        contactsList.sort((a,b)=>a.name<b.name?1:-1);
        toggle =0;
        sortTable();
        return 0;
    }
    
}
function sortTable() {
    
    var tableBody = document.getElementById("summaryTable"),
        newRow, newCellName, newCellMobile, newCellEmail;

    var rowTitle = tableBody.rows[0];
    tableBody.innerHTML = "";
    tableBody.appendChild(rowTitle);     


    // Build the new table
    for (var i=0; i < contactsList.length; i++) {
        
        newRow = document.createElement("tr"); 
        newRow.style.backgroundColor="#red";      
       // if (myArray[i] instanceof Array) { 
           
                var tempObj = contactsList[i];
                var name = tempObj.name;
                var mobile = tempObj.mobile;
                var email = tempObj.email;

                newCellName = document.createElement("td");              
                newCellName.textContent = name;                
                newRow.appendChild(newCellName);

                newCellMobile = document.createElement("td");               
                newCellMobile.textContent = mobile;                
                newRow.appendChild(newCellMobile);

                newCellEmail = document.createElement("td");              
                newCellEmail.textContent = email;
                newRow.appendChild(newCellEmail);   
                if(i%2==0){
                    newRow.style.backgroundColor ="#f2f2f2";
                }                     
                tableBody.appendChild(newRow);     
    }
}

document.getElementById("submit").addEventListener("click", dummy);
document.getElementById("nameColumn").addEventListener("click",toggleOrder);