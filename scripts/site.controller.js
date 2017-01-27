angular.module('personal').controller('SiteController', SiteController);

function SiteController() {

  const site = this;

  //  Projects: array of objects
    //  {name, description, github, live, tech?}
    //  live property is either set to false or is a link to live app (ng-if)
  site.projects = [
    //  Flashcard app
    {
      name: 'Learn Today',
      description: 'Learn Today is a flashcard application allowing users' +
        ' to create sets of flashcards that they may use to study.  Once' +
        ' logged in, a user may create sets of flashcards using text and' +
        ' images, as well as manage their existing sets.  All users are' +
        ' able to use sets created by other users, and comment on these sets.' +
        '  The user is also provided with a calendar that tracks their' +
        ' performance, and recommends future study dates based on' +
        ' past performance.',
      github: 'https://github.com/bamsrud01/flashcard-app',
      live: 'https://murmuring-temple-79939.herokuapp.com/home',
      tech: []
    },
    //  Chef Marshall O'Brien
    {
      name: 'The Chef Marshall O\'Brien Group',
      description: 'The Chef Marshall O\'Brien Group strives to make it easy' +
        ' for people to make healthy choices in their lives.  They requested' +
        ' an application that allows them to enter food nutrition data as a' +
        ' numerical score, which is then displayed to users as a letter grade.' +
        '  Each food is customizable, allowing users to modify foods by' +
        ' adding condiments, toppings, and other options, all of which would' +
        ' adjust the score of the food.  Users are able to provide feedback' +
        ' and make requests, which the Chef Marshall O\'Brien Group is able' +
        ' to address on the administrative side.',
      github: 'https://github.com/ImJustVon/groupProject',
      live: 'https://gentle-cliffs-66016.herokuapp.com/landing',
      tech: []
    },
    //  Giphy Finder
    {
      name: 'Giphy Keeper',
      description: 'Giphy Keeper is an application that uses Giphy\'s API to ' +
        'search Giphy for gifs.  The user is able to get random gifs, or ' +
        'search for gifs by entering a search term.  Users are able to save' +
        ' gifs as favorites, and add comments to these gifs.  The user is ' +
        'also able to update comments and remove favorited gifs.',
      github: 'https://github.com/bamsrud01/Weekend-Challenge-05-Giphy-App',
      live: false,
      tech: []
    },
    //  Full-Stack Calculator
    {
      name: 'Full-Stack Calculator',
      description: 'This calculator handles simple addition, subtraction,' +
        ' multiplication, and division.  The application utilizes Express to' +
        ' send the numbers to the appropriate server route, where they are' +
        ' evaluated, and the result is sent back to the client,' +
        ' and displayed to the user.',
      github: 'https://github.com/bamsrud01/rho-weekend-03-calculator',
      live: false,
      tech: []
    }
  ]

  //  Tech: array of objects
    //  give credit to image site
  site.techs = [
    { name: 'AngularJS', link: 'devicon-angularjs-plain colored' },
    { name: 'Bootstrap', link: 'devicon-bootstrap-plain colored' },
    { name: 'CSS3', link: 'devicon-css3-plain colored' },
    { name: 'Git', link: 'devicon-git-plain colored' },
    { name: 'GitHub', link: 'devicon-github-plain colored' },
    { name: 'Heroku', link: 'devicon-heroku-plain colored' },
    { name: 'HTML5', link: 'devicon-html5-plain colored' },
    { name: 'JavaScript', link: 'devicon-javascript-plain colored' },
    { name: 'jQuery', link: 'devicon-jquery-plain colored' },
    { name: 'MongoDB', link: 'devicon-mongodb-plain colored' },
    { name: 'Node.js', link: 'devicon-nodejs-plain colored' },
    { name: 'PostgreSQL', link: 'devicon-postgresql-plain colored' },
    { name: 'React', link: 'devicon-react-original colored' }
  ];
}
