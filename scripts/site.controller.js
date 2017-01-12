angular.module('personal').controller('SiteController', SiteController);

function SiteController() {

  const site = this;

  //  Projects: array of objects
    //  {name, description, github, live, tech?}
    //  live property is either set to false or is a link to live app (ng-if)
  site.projects = [
    //  Flashcard app
    //  Chef Marshall O'Brien
    //  Giphy Finder
    //  Full-Stack Calculator
    //  Sketchpad
    //  Memory
  ]

  //  Tech: array of objects
    //  {name, link, info(?)}
    //  give credit to image site
  site.techs = [
    {name: 'AngularJS', link: 'devicon-angularjs-plain colored'},
    {name: 'Bootstrap', link: 'devicon-bootstrap-plain colored'},
    {name: 'CSS3', link: 'devicon-css3-plain colored'},
    {name: 'Git', link: 'devicon-git-plain colored'},
    {name: 'GitHub', link: 'devicon-github-plain colored'},
    {name: 'Heroku', link: 'devicon-heroku-plain colored'},
    {name: 'HTML5', link: 'devicon-html5-plain colored'},
    {name: 'JavaScript', link: 'devicon-javascript-plain colored'},
    {name: 'jQuery', link: 'devicon-jquery-plain colored'},
    {name: 'MongoDB', link: 'devicon-mongodb-plain colored'},
    {name: 'Node.js', link: 'devicon-nodejs-plain colored'},
    {name: 'PostgreSQL', link: 'devicon-postgresql-plain colored'},
    {name: 'React', link: 'devicon-react-original colored'}
  ];
}
