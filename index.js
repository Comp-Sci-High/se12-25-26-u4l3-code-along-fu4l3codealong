const express = require("express");
const app = express();

// Task 0: Create the public and views folders and move the correct files into place
// Task 1: Set up the static files middleware

app.use(express.static(__dirname + '/public'))


// Task 3: Set the view engine to EJS. 

app.set('view engine', 'ejs')


// Task 4: Set up a route handler for /student/1 that...

  // ...creates an object called student with the following properties
  // "name" (string)
  // "advisory" (string)
  // "imageUrl" (string)
  // "funFact" (string)

  app.get('/student/1', (req, res) => {
    const student = {
      name: 'Derquan', 
      advisory: 'Diamond nasty', 
      imageUrl: 'https://www.ncsasports.org/_next/image?url=https%3A%2F%2Fs3.amazonaws.com%2Frms-rmfiles-production%2Fclient_photos%2Fathlete_528630_profile.jpg&w=384&q=75', 
      funFact: 'the shiniest diamond is the one who polishes himself'
    }
    res.render('student.ejs', student)
  })
  // <%= name %>

  // ...and sends back student.ejs with the data object


// Task 5: Set up a route handler for /student/2 that serves a DIFFERENT student using the same template


// EXTRA CREDIT
// Task 6: Try to write your own teacher.ejs template that sends back a slightly different info for a teacher (e.g. classes, department)
// Task 7: Set up a route handlers for /teacher/1 and /teacher/2 that use your new template!


app.listen(3000, ()=>{
  console.log("Server is running")
});