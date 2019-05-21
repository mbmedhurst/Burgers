# Eat-Da-Burger

## How it Works
- Enter a type  of burger into the field and click the 'submit' button. 
- The burger you entered should be displayed on the left hand side of the page.
- It will also be added to the database with an 'isDevoured' status of 'false'.

- If you like the look of one of the burgers, just click on the 'Devour It' button to virtually eat it.
- This will update the 'isDevoured' status to 'true'
- Devoured burgers are displayed on the right hand side of the page

## Handlebars
- Handlebars are utilized here to render the data in the 'new' and 'devoured' sections of the page.
- The text input field and submit button are created using regular html.

## What Works, What Doesn't
- Displaying the new (or not devoured) burgers is working, although for some reason it is holding the place of the devoured burgers, so when you add a new burger, it leaves space where there used to be burgers that have been since been devoured
- Displaying the devoured burgers at the same time is not working - something with my {{#if}} condition in my handlebars index file. I looked at a lot of git repos for this assignment and they all seem to use this format so not sure why mine isn't working
- If you comment out the GET request for new burgers (isDevoured = false) then the GET request for devoured burgers will work and that data will populate on the screen. But I can't populate both at the same time.
