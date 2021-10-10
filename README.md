<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/felmez/user-listing">
    <!-- <img src="https://i.giphy.com/media/7NJlWDt3lh5dGdXrS3/giphy.gif" width="450" height="350"/> -->
  </a>

  <h3 align="center">MERN and GraphQL based user listing app</h3>

  <p align="center">
    <br />
    <a href="#getting-started"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://naughty-varahamihira-bbde39.netlify.app/" target="_blank">View Demo</a>
    ·
    <a href="https://www.youtube.com/watch?v=QSWg1JPAXUI" target="_blank">Demonstration Video</a>
    ·
    <a href="https://github.com/felmez/user-listing/issues">Report Bug</a>
    ·
    <a href="https://github.com/felmez/user-listing/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#demo">Demo Links</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This is a basic user listing app where you can create new users using GraphQL Mutation (See: <a href="https://graphql.org/learn/queries/" target="_blank">GraphQL Mutations and Queries</a>
) and fetch them using Query but also having the server-side form and input validations like empty fields, wrong user role, not matching passwords, format validation, and already used email check and. 
There is also custom rate limiting (See: <a href="https://en.wikipedia.org/wiki/Rate_limiting" target="_blank">Rate Limiting</a>
) configure so users can not create too many users in a limited time which may prevent or limit the server costs and also enhance security.


<p align="center">
    <img src="https://github.com/felmez/user-listing/blob/main/readme_assets/000.gif" />
    <br />
    <img src="https://github.com/felmez/user-listing/blob/main/readme_assets/111.gif" />
    <br />
    <img src="https://github.com/felmez/user-listing/blob/main/readme_assets/222.gif" />
    <br />
</p>


### Built With

* [![mongodb-shield]][mongodb-url]
* [![express-shield]][express-url]
* [![react-shield]][react-url]
* [![nodejs-shield]][nodejs-url]
* [![graphql-shield]][graphql-url]
* [![apollo-shield]][apollo-url]
* [![html-shield]][html-url]
* [![css-shield]][css-url]

### Demo

* Client (frontend) link: [![netlify-shield]](https://naughty-varahamihira-bbde39.netlify.app/)
* Server (backend) link: [![heroku-shield]](https://userlistinga.herokuapp.com/)

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* git
  ```sh
  if (you have brew installed ) {
    use this command => 'brew install git'
  } else {
    download the installer from the official website => https://git-scm.com/downloads
  }
  ```

* node
  ```sh
  if (you have brew installed) {
    use this command => 'brew install node'
  } else {
    download the installer from the official website => https://nodejs.org/en/
  }
  ```
What is brew ?? (See: <a href="https://en.wikipedia.org/wiki/Homebrew_(package_manager)" target="_blank">Homebrew Package Manager</a>)

### Installation

This repo/project has two different branches/directories for different use 
```
main/server branch (root directory) for server side (graphql)
client branch (client directory) for client side (react)
```
1. Clone the repo
   ```sh
   git clone https://github.com/felmez/user-listing.git
   ```
2. Install npm packages on both branches 
   ```sh
   cd user-listing
   ```
   ```sh
   on main branch/directory
   npm install

   on client branch/directory
   git checkout client (* optional for separation of concerns)
   npm install
   ```
3. Create environment variables
  ```sh
  if (you will serve on localhost) {
    3.1 - on main branch/directory create config.js file 

    3.2 - paste the follow code 

    ```
        module.exports = {
        MONGODB: 'mongodb+srv://<username>:<password>@<clustername>.<linkprefix>.mongodb.net/<dbname>?retryWrites=true&w=majority'
        } 
    ```

    3.3 - change the URI to your own MongoDB string

  } else if (you will use some SaaS hosting services like heroku, netlify etc){
    use process.ENV configurations depending on your service type
  }
  ```
4. You are good to go
  ```sh
  on main branch/directory => 
  if (you need to watch changes) {
    'nodemon index'
  } else {
    'node index'
  }
  on client branch/directory => 
  'npm start'
  ```



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License
[![license-shield]][license-url]

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Souhaib Felmez
* Email: sofelmez {at} gmail {dot} com
* [![linkedin-shield]][linkedin-url]



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [![google-shield]][google-url]
* [![stackoverflow-shield]][stackoverflow-url]





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[license-shield]: https://img.shields.io/github/license/felmez/user-listings.svg?style=flat-square
[license-url]: https://github.com/felmez/user-listing/blob/main/LICENSE
[freecodecamp-shield]: https://img.shields.io/badge/-freecodecamp-black?style=flat-square&logo=freecodecamp
[freecodecamp-url]: https://www.freecodecamp.org/
[google-shield]: https://img.shields.io/badge/google-4285F4?style=for-the-badge&logo=google&logoColor=white
[google-url]: https://www.google.com/
[stackoverflow-shield]: https://img.shields.io/badge/-stackoverflow-E34F26?style=for-the-badge&logo=stackoverflow&logoColor=white
[stackoverflow-url]: https://www.stackoverflow.com/
[html-shield]: https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white
[html-url]: https://en.wikipedia.org/wiki/HTML
[css-shield]: https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3
[css-url]: https://en.wikipedia.org/wiki/CSS
[nodejs-shield]: https://img.shields.io/badge/-Nodejs-black?style=flat-square&logo=Node.js
[nodejs-url]: https://nodejs.org/en/
[react-shield]: https://img.shields.io/badge/-React-black?style=flat-square&logo=react
[react-url]: https://reactjs.org/
[mongodb-shield]: https://img.shields.io/badge/-MongoDB-black?style=flat-square&logo=mongodb
[mongodb-url]: https://www.mongodb.com/
[express-shield]: https://img.shields.io/badge/-express-black.svg?style=flat-square&logo=express
[express-url]: https://expressjs.com/
[graphql-shield]: https://img.shields.io/badge/-GraphQL-E10098?style=flat-square&logo=graphql
[graphql-url]: https://graphql.org/
[apollo-shield]: https://img.shields.io/badge/-Apollo%20GraphQL-311C87?style=flat-square&logo=apollo-graphql
[apollo-url]: https://www.apollographql.com/
[heroku-shield]: https://img.shields.io/badge/-Heroku-430098?style=flat-square&logo=heroku
[heroku-url]: https://dashboard.heroku.com/
[netlify-shield]: https://img.shields.io/badge/-netlify-black?style=flat-square&logo=netlify
[netlify-url]: https://www.netlify.com/
[git-shield]: https://img.shields.io/badge/-Git-black?style=flat-square&logo=git
[git-url]: https://git-scm.com/
[github-shield]: https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github
[github-url]: https://github.com/
[linkedin-shield]: https://img.shields.io/badge/-felmez-blue?style=flat-square&logo=Linkedin&logoColor=white
[linkedin-url]: https://linkedin.com/in/felmez
