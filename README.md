# HotelProject

There’s a smarter way to Hotelwala.com around
Sign up with your phone number and get exclusive access to discounts and savings on Hotelwala.com
 stays and with our many travel partners.

for image background
body{
  background-image: url("/assets/HotelProjectImages/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;}

  for image upload by property or string interpollation

   =>make property in .ts
   img:any="/assets/HotelProjectImages/background.jpg"

   =>interpollateby string interpollation in .html file
        <img src={{img}} alt="">

        for this project give patj to image as========>   "/assets/HotelProjectImages/imagename.jpg"


        colour on background image==========>
        html {
      min-height:100%;
      background:linear-gradient(0deg, rgba(255, 0, 150, 0.3), rgba(255, 0, 150, 0.3)), url(https://picsum.photos/id/1043/800/600);
      background-size:cover;
    }
