var rIndex,
                table = document.getElementById("table");
            
            function checkEmptyInput(inputtxt)
            {
               
                var isEmpty = false,
                    fname = document.getElementById("fname").value,
                    phonenumber = document.getElementById("numbr").value,
                 filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;

                if(fname === ""){
                    alert("First Name Connot Be Empty");
                    isEmpty = true;
                }
                else if(phonenumber === "" || phonenumber.length<11 || filter.test(phonenumber)==false){
                    alert("PhoneNumber Connot Be Empty or less or invalid");
                    isEmpty = true;
                }
              
                return isEmpty;
            }
            
            // add Row
            function addHtmlTableRow()
            {
                
                if(!checkEmptyInput()){
                var newRow = table.insertRow(table.length),
                    cell1 = newRow.insertCell(0),
                    cell2 = newRow.insertCell(1),
            
                    fname = document.getElementById("fname").value,
                    phonenumber = document.getElementById("numbr").value;
                    
            
                cell1.innerHTML = fname;
                cell2.innerHTML = phonenumber;
        
                // call the function to set the event
                selectedRowToInput();
            }
            }
            
            function selectedRowToInput()
            {
                
                for(var i = 1; i < table.rows.length; i++)
                {
                    table.rows[i].onclick = function()
                    {
                      // get the seected row index
                      rIndex = this.rowIndex;
                      document.getElementById("fname").value = this.cells[0].innerHTML;
                      document.getElementById("numbr").value = this.cells[1].innerHTML;
                      
                    };
                }
            }
            selectedRowToInput();
            
            function editHtmlTbleSelectedRow()
            {
                var fname = document.getElementById("fname").value,
                phonenumber = document.getElementById("numbr").value;
                
               if(!checkEmptyInput()){
                table.rows[rIndex].cells[0].innerHTML = fname;
                table.rows[rIndex].cells[1].innerHTML = phonenumber;
        
              }
            }
            
            function removeSelectedRow()
            {
                table.deleteRow(rIndex);
                document.getElementById("fname").value = "";
                document.getElementById("numbr").value = "";

            }
    
        