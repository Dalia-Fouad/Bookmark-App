

// * global variables
var siteName= document.getElementById("SiteName");
var siteURL= document.getElementById("SiteURL");
var siteList=[];
var storageKey="sitesKey";

// * display stored inputs if existed
if(localStorage.getItem(storageKey) != null){
   siteList=JSON.parse(localStorage.getItem(storageKey) );
   display(siteList);

}

// & addSite function to add row in html table
function addSite() {
   var site={
      sName:siteName.value,
      sURL:siteURL.value
   };
   siteList.push(site);
   localStorage.setItem(storageKey,JSON.stringify(siteList));
   display(siteList) ;
   clearForm();
}

// & clearForm function to clear inputs
function clearForm( ){
   siteName.value=null;
   siteURL.value=null;
  
}


// & display function to display inputs in html table
function display(sList) {
   var tableRow="";
   var current=1;
   for (var i = 0; i < sList.length; i++) {
      tableRow +=
   ` <tr>
      <th scope="row">${i+1}</th>
      <td>${sList[i].sName}</td>
      <td>
         <button class="btn btn-avocado" onclick="visitSite(${i})">
            <i class="fa-solid fa-eye me-2"></i> Visit
         </button>
      </td>
      <td>
         <i class="fa-solid fa-delete"></i>
         <button class="btn btn-rose-madder" onclick="deleteSite(${i})">
            <i class="fa-solid fa-trash-can me-2"></i>
            Delete
         </button>
      </td>
   </tr>`
   
   }
   document.getElementById("tableContent").innerHTML=tableRow;
}

// & deleteSite function to delete row from html table
function deleteSite(index){
   siteList.splice(index,1);
   localStorage.setItem(storageKey,JSON.stringify(siteList));
   display(siteList) ;
}

// & visitSite function to open the site that user entered in new window
function visitSite(index) {
   window.open(`https://`+siteList[index].sURL);
}

//? incase we need to update form later
// function updateForm( siteobj){
//    siteName.value=siteobj?siteobj.sName:null;
//    siteURL.value=siteobj?siteobj.sURL:null;
  
// }


