# vuejs-domain-app-scalingo
This is a VueJS application to manage your applications on [scalingo](https://scalingo.com).

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

## How to use

Once you run the application, [open it.](http://localhost:8080)

Default local url : **htto://localhost:8080/**

###  Connection
**htto://localhost:8080/Login**

To connect to yourself to  the application, you have to provide a token that you can generate on your [profile.](https://my.scalingo.com/profile)

![Domains exemple](/src/images/app3.png)

### Applications
**htto://localhost:8080/**

In the application page, you will find every application available on  your account and their informations.

![Application exemple](/src/images/app1.png)

### Domains 
**htto://localhost:8080/[:app]**

By clicking on the settings button of an application, you will access to the applications' settings page.
Here, you will be able to manage, add or delete a domain.

![Domains exemple](/src/images/app2.png)

## Resources

* [Scalingo API Documentation](http://developers.scalingo.com/).
* Scalingo.JS library [documentation](https://doc.esdoc.org/github.com/Scalingo/scalingo.js/) and [code](https://github.com/Scalingo/scalingo.js).
* Website [scalingo.com](https://scalingo.com).