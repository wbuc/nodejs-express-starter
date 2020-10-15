# nodejs-express-starter
Starter example for an Express.js API with general examples of creating a basic API.

## Express API 101

1. create new folder
2. npm init
	- give init values.
3. add service.js to root of project
    - add console.log('hello'), 'nodemon service.js' to show it works.
4. npm install express
5. add the require, add app.listen
6. create basic api function templates for all methods GET POST PUT DELETE
7. start developing each function.
8. create router-fileroom.js and move functions there.


## Common Response Types
```javascript
 res.status(200).json({data})
 res.send('Done!');
 res.redirect("/fileroom");
```

https://expressjs.com/en/api.html#express
