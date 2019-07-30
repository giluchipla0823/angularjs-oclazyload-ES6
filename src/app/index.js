import angular from 'angular';
import angularSanitize from 'angular-sanitize';

// Styles
import '../public/assets/css/styles.css';


// Config
import AppRoutes from './app.routes';
import AppRun from './app.run';

// Directives
import AppDirectives from './directives';

// Components
import FooterComponent from './components/footer/footer.component';
import NavbarComponent from './components/navbar/navbar.component';
import HomeComponent from './components/home/home.component';
import AboutComponent from './components/about/about.component';


const MODULE_NAME = 'BookstoreApp';

angular.module(MODULE_NAME, [
    angularSanitize,
    AppRoutes,
    AppRun,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    AppDirectives,
])

