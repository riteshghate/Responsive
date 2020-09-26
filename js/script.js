

var BASE_URL = "https://earbrain-7ace2.firebaseio.com/"
var zooom1 = 8;
var zooom2 = 15;
var zooom3 = 20;
var isClickEnable = false;
var zipCode = "";
var stateCode = "";


// $("#searchZipCode").keyup(function() {
//   resetClickSubmit();
//   var zipCodeTxt = $("#searchZipCode").val();
//   var length = zipCodeTxt.length;
//   if (length >= 5) {
//     $.ajax({
//       url : BASE_URL+"usZipCodeLatitudeAndLongitude.json?orderBy=\"zipText\"&equalTo=\""+ zipCodeTxt+  "\"&print=pretty",
//       type: "GET",
//       success: function(data, textStatus, jqXHR)
//       {
//         console.log("data........"+ isEmpty(data));
//         if(isEmpty(data)){
//           resetClickSubmit();
//           alert("Please enter valid zipcode");
//         }else{
//           for (var key in data) {
//             if (data.hasOwnProperty(key)) {    
//               isClickEnable = true;       
//                 console.log(data[key]);
//                 zipCode = data[key].zipText;
//                 stateCode = data[key].stateProvince;
//                 //$("#stateCode").val(data[key].stateProvince);
//                 return;
//             }
//           }
//         }
//       },
//       error: function (jqXHR, textStatus, errorThrown)
//       {
//         resetClickSubmit();
//         var myJSON = JSON.parse(jqXHR.responseText);
//         alert(myJSON.error.message);
//         console.log("data","data......."+myJSON.error.message);
//       }
//   });
//   }
// });

function ClickSubmit() {
  console.log(navigator.onLine);
  var zipCodeTxt = $("#searchZipCode").val();
  var length = zipCodeTxt.length;
  if(navigator.onLine){
    var name = $('#name').val();
    var emailId = $("#email_id").val()
    if(name == ""){
      alert("Please select name");
      return;
    }else if(emailId == ""){
      alert("Please enter email");
      return;
    }else if(length<5){
      alert("Please enter valid zipcode");
      return;
    }else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId)){
      var s_a = document.getElementById("mylink");
            s_a.href = "map.html?zipcode=" + zipCodeTxt+"&emailId="+emailId+"&name="+name;
      // if(!isClickEnable){
      //   alert("Please enter valid zipcode");
      //   return false;
      //   }else{
      //       var s_a = document.getElementById("mylink");
      //       s_a.href = "map.html?zipcode=" + zipCode+"&stateCode=" + stateCode;
      //   }
      }else{
      alert("You have entered an invalid email address!")
     return false;
    }
    

  }else{
    alert("Please check internet connection");
  }
  
}

function isEmpty(obj) {
  for(var prop in obj) {
      if(obj.hasOwnProperty(prop))
          return false;
  }

  return true;
}
function resetClickSubmit() {
  isClickEnable = false;
  zipCode = "";
  stateCode =""
}

function alert(message){
  swal({
    title: "Alert",
    text: message
  });
}