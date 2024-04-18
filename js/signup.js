let userType = true


// function userTypeChanger(){
//   if (userType) {
//     console.log('alumni ');
//     document.querySelector('.yearChanger').innerHTML="";
//     document.querySelector('.yearChanger').innerHTML = '<tr><td><p>Passout Year</p></td></tr><tr><td><select id="year" name="year"></select></td></tr>';
//   }
//   else {
//     document.querySelector('.yearChanger').innerHTML;
//     document.querySelector('.yearChanger').innerHTML = ' <tr><td><p>Year</p></td></tr><tr><td><select id="course" name="course"><option value="first_year">First Year </option><option value="second_year">Second Year</option><option value="third_year">third_year</option></select></td></tr>'
//   }
//   userType = !userType
// }

function userTypeChanger(){
  if (userType) {
    
    document.querySelector('#yearText').innerText = 'Passout Year'
    document.querySelector('#year').innerHTML = '<select id="year1" name="passout_year"></select>';

    let dateDropdown = document.getElementById('year1');

let currentYear = new Date().getFullYear();
let earliestYear = 1970;
while (currentYear >= earliestYear) {
  let dateOption = document.createElement('option');
  dateOption.text = currentYear;
  dateOption.value = currentYear;
  dateDropdown.add(dateOption);
  currentYear -= 1;
}
  }
  else {
    document.querySelector('#yearText').innerText = 'Year';
    document.querySelector('#year').innerHTML = '<select name="year"><option value="first_year">First Year </option><option value="second_year">Second Year</option><option value="third_year">third_year</option></select></td>';


    }
  userType = !userType
}







