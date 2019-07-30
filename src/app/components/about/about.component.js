import angular from 'angular';

import AboutController from './about.controller.js';
import AboutTemplate from './about.template.html';

const MODULE_NAME = 'about.component';

const AboutComponent = {
    template: AboutTemplate,
    controller: AboutController,
    controllerAs: 'vm'
};

angular.module(MODULE_NAME, [])
    .component('about', AboutComponent);

export default MODULE_NAME;