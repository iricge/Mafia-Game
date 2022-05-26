
//declearing html elements
let $ = document;
const imgDiv = $.querySelector('.userprofile-details');
const profilePicture = $.querySelector('.profile-picture');
const pfpSelector = $.querySelector('.profilepicture-fileinput');
const uploadBtn = $.querySelector('.profilepicture-uploadBtn');

//if user hover on img div 

imgDiv.addEventListener('mouseover', function(){
    uploadBtn.style.display = "block";
});

//if we hover out from img div

imgDiv.addEventListener('mouseleave', function(){
    uploadBtn.style.display = "none";
});

//when we choose a photo to upload

pfpSelector.addEventListener('change', function(){
    //this refers to file
    const choosedFile = this.files[0];

    if (choosedFile) {

        const reader = new FileReader(); //FileReader is a predefined function of JS

        reader.addEventListener('load', function(){
            localStorage.setItem("Recent-profile-picture", reader.result)
        });

        reader.readAsDataURL(choosedFile);
    }
    location.reload();
});

document.addEventListener("DOMContentLoaded", ()=>{
    let profilePictureUrl = localStorage.getItem("Recent-profile-picture")
    
    if (profilePictureUrl){
        profilePicture.setAttribute('src', profilePictureUrl);
    }

})

