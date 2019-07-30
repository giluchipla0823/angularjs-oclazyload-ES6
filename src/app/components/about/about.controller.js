class AboutController{
    constructor(SweetAlert){        
        this.title = 'About page';
        this.description = 'This example is a quick exercise to illustrate how the default, static and fixed to top navbar work. It includes the responsive CSS and HTML, so it also adapts to your viewport and device.';

        this.sweetAlert = SweetAlert;
        this.sweetAlert.alert('Hola');


        this.form = {
        	loading: true
        };
    }
}

// $('ng-view > home').children().scope().vm.title

AboutController.$inject = ['SweetAlert']

export default AboutController;