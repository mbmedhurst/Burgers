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
- Displaying the new (or not devoured) burgers is working
- Displaying the devoured burgers at the same time is not working - I don't know if it's an asynch issue or maybe you can't do two GET requests simultaneously
- If you comment out the GET request for new burgers (isDevoured = false) then the GET request for devoured burgers will work and that data will populate on the screen. But I can't populate both at the same time.
