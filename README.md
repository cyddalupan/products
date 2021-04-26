# Products

List of products in a checkbox tree.

## Disclaimer

- I only have 2 days of development for this project
- I didnt know how to use slimframework I used half of my time learning the basics.

### Prerequisites

- Angular Cli
- Composer
- Mysql
- PHP7

### Local Development Setup

* After cloning repository you will see 2 folders backend and frontend
* Go to backend folder
  * Run `composer update`
  * import products.sql to mysql Database
  * Update Database config on app/api/dbconnect.php
  * Run local backend server go to folder public and run `php -S localhost:8888` --keep running
* Go to frontend folder
  * Run `npm install`
  * Update src/app/settings.ts for the api address
  * Run `ng serve --open`
* When a problem occurs. Please contact me  @ [CYD](mailto:cydmdalupan@gmail.com)

## Running the tests

The test is not yet set up. I usually do test driven development, but it won't fit the time I have.

## Deployment

- Upload files on a apache server.
- Build angular and upload dist files.
- Setup database

## Built With

* [SlimFramework](slimframework.com) - Backend micro framework
* [Angular](https://angular.io/) - Frontend framework
* [NgRx](https://ngrx.io/) - Frontend State management
* [Material Design](https://material.angular.io/) - Design 
* [MySQL](https://dev.mysql.com/doc/refman/8.0/en/) - Database

## Authors

* **Cleddrence yuandenn Magsadia Dalupan** - *Initial work*
