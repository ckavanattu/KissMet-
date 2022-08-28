// import React from 'react'
// import { useState } from 'react';
// const Profile = () => {
//     const [base64String, setBase64String] = useState('');
  
//         function imageUploaded() {
//         var imgString = '';
//         var file = document.querySelector(
//             'input[type=file]')['files'][0];
      
//         var reader = new FileReader();

          
//         reader.onload = function () {
            
//             imgString = 'data:image/png;base64,' + reader.result.replace("data:", "")
//                 .replace(/^.+,/, "");
//             setBase64String(imgString)
//             // console.log(base64String);
//         }
//         reader.readAsDataURL(file);

//     }

 
//   return (
//         <div>
//         <input type="file" name="" id="fileId" 
//         onChange={imageUploaded}>      
//         </input>
       
//         <img src={base64String} alt="string of image" />

//         </div>
//   )
// }
//  export default Profile;