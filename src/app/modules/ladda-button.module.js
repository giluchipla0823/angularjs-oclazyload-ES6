import angular from 'angular';

// Ladda 
import 'ladda/dist/ladda-themeless.min.css';
import 'ladda/js/ladda.js';
import angularLadda from 'angular-ladda';


export default 
 angular.module('app.ladda-button.module', [angularLadda]).name;

 console.log('app.ladda-button.module');