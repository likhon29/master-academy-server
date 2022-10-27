// const express = require("express");
// const cors = require("cors");
// const app = express();
// app.use(cors());

// const allCourses = require("./data/fakedata.json")
// const port = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//   res.send("Hello form master academy server!");
// });
// app.get('/allCourses', (req, res) => {
//   res.send(allCourses);
// })
// // app.get('courses/allCourses', (req, res) => {
// //   res.send(allCourses);
// // })
// app.get('/courses/category/:category', (req, res) => {
//   const category = req.params.category;
//   const categoryCourses = allCourses.filter(course => (course.category_name === category));
//   res.send(categoryCourses);

// })
// app.get('/courses/:id', (req, res) => {
//   const id = req.params.id;
//   console.log(id);
//   const course = allCourses.find((course) => course.id === id);
//   res.send(course);
// })
// // app.get('/courses/:id', (req, res) => {
// //   const id = req.params.id;
// //   console.log(id);
// //   const category = allCourses.filter((cat) => cat.id === id);
// //   res.send(category);
// // })
// app.listen(port, () => {
//   console.log("Master academy server listening on port", port);
// });








// app.get('/courses/:id', (req, res) => {
//   const id = req.params.id;
//   console.log(id);
//   const category = allCourses.filter((cat) => cat.id === id);
//   res.send(category);
// })







app.get('/courses/category/:category', (req, res) => {
    const category = req.params.category;
    const categoryCourses = allCourses.filter(course => (course.category_name === category));
    res.send(categoryCourses);
  
  })
  app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const course = allCourses.find((course) => course.id === id);
    res.send(course);
  })