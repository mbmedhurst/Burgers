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
- I couldn't get the heroku deployment to work. I did the whole Jaws thing and changed the connection info but it still didn't work so I just submitted the git repo.