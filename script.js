var organization={};
// read local JSON file in javascript
fetch("./data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    addOrganization(data);
 })

 function addOrganization(data){
    let str=``;
    for(let value in data)
    {
        str += `
        <div>
            <a href="`+data[value].url+`"><label>`+data[value].name+`</label></a>
        </div>
        `;
    }

    document.getElementById("divorganization").innerHTML = str;

 }