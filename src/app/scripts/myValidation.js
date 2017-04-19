var myExtObject = (function() {

  return {
    createUserSuccess: function() {
      alert('User registered successfully.');
      document.getElementById('First Name').value='';
      document.getElementById('Last Name').value='';
      document.getElementById('User Name').value='';
      document.getElementById('Password').value='';
      document.getElementById('Confirm Password').value='';
      document.getElementById('Role').value='admin';
    },

    validateUser: function(users) {    
      console.log(document.getElementById("User Name").value + users);  
      if (users.find(function(e) { return e.username == document.getElementById("User Name").value; })) {
        alert("User already exists");  
        return false;
      }
      if(document.getElementById("First Name").value=='')
      {
        document.getElementById("First Name").focus=true;
        alert("First Name required");  
        return false;      
      }
      if(document.getElementById("Last Name").value=='')
      {
        document.getElementById("Last Name").focus=true;
        alert("Last Name required");  
        return false;      
      }
      if(document.getElementById("User Name").value=='')
      {
        document.getElementById("User Name").focus=true;
        alert("User Name required");  
        return false;      
      }
      if(document.getElementById("Password").value=='')
      {
        document.getElementById("Password").focus=true;
        alert("Password required");  
        return false;      
      }
      if(document.getElementById("Confirm Password").value=='')
      {
        document.getElementById("Confirm Password").focus=true;
        alert("Confirm Password required");  
        return false;      
      }
      if((document.getElementById("Confirm Password").value)!=(document.getElementById("Password").value))
      {
        document.getElementById("Confirm Password").focus=true;
        alert("Confirm Password mismatch");  
        return false;      
      }
      return true;
    },

    validateUserName(newUser,users)
    {
      var uname;
      if (users.find(function(e) { uname=e.username;return e.username == newUser; })) {
        alert("User already exists");         
        return false;
      }
      return true;
    },

    takeStatus()
    {
      var status = prompt("Please enter status", "1 for Active, 2 for Deactive");
      if(status == "1")
        return true;
      else if(status == "2")
        return false;
      else
        return myExtObject.takeStatus();
    },

    takeRole()
    {
      var status = prompt("Please enter role,", "1 for Admin, 2 for Trainer, 3 for Trainee");
      alert(status);
      if(status == "1")
        return 'admin';
      else if(status == "2")
        return 'trainer';
      else if(status == "3")
        return 'trainee';  
      else
        return myExtObject.takeRole();
    }

  }

})(myExtObject||{})



var myExtObjectForTraining = (function() {

  return {
    createTrainingSuccess: function() {
      alert('Trainig scheduled successfully.');

      document.getElementById('trainingtitle').value='';
      document.getElementById('department').value='';
      document.getElementById('audience').value='';
      document.getElementById('trainer').value='';
      document.getElementById('tdate').value='';
      document.getElementById('startTime').value='';
      document.getElementById('endTime').value='';
      document.getElementById('location').value='';
    },

    validateTraining: function() {    
      
      if(document.getElementById("trainingtitle").value=='')
      {
        document.getElementById("trainingtitle").focus=true;
        alert("Training Title required");  
        return false;      
      }
      if(document.getElementById("department").value=='')
      {
        document.getElementById("department").focus=true;
        alert("Department required");  
        return false;      
      }
      if(document.getElementById("audience").value=='')
      {
        document.getElementById("audience").focus=true;
        alert("Target Audience required");  
        return false;      
      }
      if(document.getElementById("trainer").value=='')
      {
        document.getElementById("trainer").focus=true;
        alert("Trainer required");  
        return false;      
      }
      if(document.getElementById("tdate").value=='')
      {
        document.getElementById("tdate").focus=true;
        alert("Training Date required");  
        return false;      
      }
      if((document.getElementById("startTime").value)=='')
      {
        document.getElementById("startTime").focus=true;
        alert("Start Time required");  
        return false;      
      }
      if((document.getElementById("endTime").value)=='')
      {
        document.getElementById("endTime").focus=true;
        alert("End Time required");  
        return false;      
      }
      if((document.getElementById("location").value)=='')
      {
        document.getElementById("location").focus=true;
        alert("Location required");  
        return false;      
      }
      return true;
    }

  }

})(myExtObject||{})


