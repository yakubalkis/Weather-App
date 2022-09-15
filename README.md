# Weather-App
This project has been made by using React, pure CSS, HTML and Redux. It presents the weather forecasts of the cities selected by the user to the user.  </br>
<b>Live Link:</b> https://weather-app-yakubalks.netlify.app/
# Overview
##  Requirements
• By default, gives the current weather forecast of Berlin. </br>
• When user wants to add city, the 'save' button will not be active until user choose the city and country in popup. </br>
• When user clicks menu icon on cart, will see two options 'view weather' and 'remove city'. When 'view  weather' option is clicked, page will be redirected to another page that includes weather forecasts for other days about the city. When 'remove' city is  clicked, confirmation popup will be showed and the city will be removed.  </br>
• When the user clicks on the cards on the redirected page, the card with the current weather information for that day is displayed. </br>
• Dark-Light Mode </br>
• Responsive Design </br>
## How Is It Working ? 
First, I take latitude and longitude of selected city by using <b>Geocoding API</b>. Then, I take the current weather forecast data from <b>OpenWeather API</b> by using these latitude and longitude of city. I display this data on Cart component. </br>
Second, when user clicks 'view weather' option on Cart component, I take the ID of city and take the Data containing the weather information of next days of city at 3 hour intervals from <b>OpenWeather API</b> by using that ID of city. </br>
Finally, I filter the data to get max,min temps of days by using custom function <b>getMaxMinTemp</b>. After that, I display it on small carts. In addition, I take popup data by using another custom function <b>getCurrentDescription</b> and display it on Popup component when user clicks cart at redirected page. Beside all these, I use another custom functions for basic operations. </br>

##  Used
• Redux </br>
• React Router  </br>
• Swiper JS (for small carts at redirected page) </br>
• Axios </br>

## Project View

![homepageLaptop](https://user-images.githubusercontent.com/97192201/190512023-3da8884a-0a64-4e24-a693-28cc78f094f5.jpg)

![homepageAddCity](https://user-images.githubusercontent.com/97192201/190512213-0daa3207-2578-439e-bcca-b20e86b655a2.jpg)

![detailPageLaptop](https://user-images.githubusercontent.com/97192201/190512157-b95d432d-bd7c-48d5-8648-7aaf6bf015ac.jpg)

![detailPageDeleteCity](https://user-images.githubusercontent.com/97192201/190512267-892d21dc-3ec8-4715-a3f2-25f985245e33.jpg)

![popup](https://user-images.githubusercontent.com/97192201/190512336-3cface7c-872e-4afb-9203-f5bc03d8c6ce.jpg)

![mobilHome](https://user-images.githubusercontent.com/97192201/190512352-90f03045-963d-491e-90d4-50f5b252ae50.jpg)

![mobilDetail](https://user-images.githubusercontent.com/97192201/190512374-7c737768-9a0e-4b84-8c99-ecfd9c487412.jpg)


