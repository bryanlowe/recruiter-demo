define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function findDefaultRoute(router) {
        return router.navigation[0].relativeHref;
    }
    var App = (function () {
        function App() {
            this.year = (new Date()).getFullYear();
        }
        App.prototype.configureRouter = function (config, router) {
            this.router = router;
            config.map([
                { route: '', redirect: findDefaultRoute(router) }
            ]);
            config.mapUnknownRoutes('not-found');
        };
        return App;
    }());
    exports.App = App;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true,
        accountsUrl: 'http://127.0.0.1:8000/',
    };
});

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Promise.config({
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .plugin('aurelia-animator-css')
            .feature('resources')
            .feature('pages');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

define('not-found',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NotFound = (function () {
        function NotFound() {
        }
        return NotFound;
    }());
    exports.NotFound = NotFound;
});

define('pages/index',["require", "exports", "aurelia-router"], function (require, exports, aurelia_router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
        var router = config.container.get(aurelia_router_1.Router);
        router.addRoute({ route: 'home', name: 'home', moduleId: 'pages/home/main', nav: true });
        router.addRoute({ route: 'register', name: 'register', moduleId: 'pages/register/main', nav: true });
    }
    exports.configure = configure;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
        config.globalResources([
            './value-converters/capitalize-format',
            './elements/form-components/check-list',
            './elements/form-components/radio-list',
            './elements/form-components/job-seeker/job-exp-select-list',
            './elements/form-components/job-seeker/work-zip-pref'
        ]);
    }
    exports.configure = configure;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('pages/home/main',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Home = (function () {
        function Home() {
        }
        Home.prototype.configureRouter = function (config) {
            config.map([
                { route: '', name: 'welcome', moduleId: './components/welcome', title: 'Gighub - Welcome' }
            ]);
        };
        return Home;
    }());
    Home = __decorate([
        aurelia_framework_1.inlineView('<template><router-view></router-view></template>')
    ], Home);
    exports.Home = Home;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('pages/register/main',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Register = (function () {
        function Register() {
        }
        Register.prototype.configureRouter = function (config) {
            config.map([
                { route: '', name: 'start-registration', moduleId: './components/index', title: 'Gighub - Register' },
                { route: 'job-provider', name: 'job-provider', moduleId: './components/job-provider/index', title: 'Gighub - Job Provider Registration' },
                { route: 'job-seeker', name: 'job-seeker', moduleId: './components/job-seeker/index', title: 'Gighub - Job Seeker Registration' }
            ]);
        };
        return Register;
    }());
    Register = __decorate([
        aurelia_framework_1.inlineView('<template><router-view></router-view></template>')
    ], Register);
    exports.Register = Register;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('resources/value-converters/capitalize-format',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CapitalizeFormat = (function () {
        function CapitalizeFormat() {
        }
        CapitalizeFormat.prototype.toView = function (value) {
            value = (value) ? value.toString() : "";
            return value.replace(/(\b\w)/gi, function (m) { return m.toUpperCase(); });
        };
        return CapitalizeFormat;
    }());
    CapitalizeFormat = __decorate([
        aurelia_framework_1.valueConverter('capitalize-format')
    ], CapitalizeFormat);
    exports.CapitalizeFormat = CapitalizeFormat;
});

define('pages/home/components/welcome',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Welcome = (function () {
        function Welcome() {
        }
        return Welcome;
    }());
    exports.Welcome = Welcome;
});

define('pages/register/components/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StartRegistration = (function () {
        function StartRegistration() {
        }
        return StartRegistration;
    }());
    exports.StartRegistration = StartRegistration;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/form-components/check-list',["require", "exports", "aurelia-framework", "aurelia-framework", "aurelia-event-aggregator", "jquery"], function (require, exports, aurelia_framework_1, aurelia_framework_2, aurelia_event_aggregator_1, $) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CheckList = (function () {
        function CheckList(events) {
            this.elementsSelected = 0;
            this.events = events;
        }
        CheckList.prototype.checkListClicked = function (event) {
            var elementName = event.target['htmlFor'];
            if (this.selectLimit) {
                if ($('#' + elementName).is(':checked')) {
                    if (this.elementsSelected < this.selectLimit) {
                        this.elementsSelected++;
                        this.publish('check-list:' + this.inputId + ':checked', { elementName: elementName, elementValue: $('#' + elementName).val() });
                    }
                    else {
                        $('#' + elementName).prop('checked', false);
                        $('label[for="' + elementName + '"]').removeClass('active');
                    }
                }
                else {
                    if (this.elementsSelected > 0) {
                        this.elementsSelected--;
                        this.publish('check-list:' + this.inputId + ':unchecked', { elementName: elementName });
                    }
                }
            }
            else {
                this.publish('check-list:' + this.inputId + ':clicked', { elementName: elementName, elementValue: $('#' + elementName).val() });
            }
        };
        CheckList.prototype.publish = function (channel, info) {
            this.events.publish(channel, info);
        };
        return CheckList;
    }());
    __decorate([
        aurelia_framework_2.bindable,
        __metadata("design:type", String)
    ], CheckList.prototype, "inputId", void 0);
    __decorate([
        aurelia_framework_2.bindable,
        __metadata("design:type", Number)
    ], CheckList.prototype, "selectLimit", void 0);
    __decorate([
        aurelia_framework_2.bindable,
        __metadata("design:type", Array)
    ], CheckList.prototype, "options", void 0);
    CheckList = __decorate([
        aurelia_framework_1.customElement('check-list'),
        aurelia_framework_2.inject(aurelia_event_aggregator_1.EventAggregator),
        aurelia_framework_2.useView('./check-list.html'),
        __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator])
    ], CheckList);
    exports.CheckList = CheckList;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/form-components/radio-list',["require", "exports", "aurelia-framework", "aurelia-framework", "aurelia-event-aggregator", "jquery"], function (require, exports, aurelia_framework_1, aurelia_framework_2, aurelia_event_aggregator_1, $) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RadioList = (function () {
        function RadioList(events) {
            this.events = events;
        }
        RadioList.prototype.radioListClicked = function (event) {
            var elementName = event.target['htmlFor'];
            this.publish('radio-list:' + this.inputId + ':clicked', { elementName: elementName, elementValue: $('#' + elementName).val() });
        };
        RadioList.prototype.publish = function (channel, info) {
            this.events.publish(channel, info);
        };
        return RadioList;
    }());
    __decorate([
        aurelia_framework_2.bindable,
        __metadata("design:type", String)
    ], RadioList.prototype, "inputId", void 0);
    __decorate([
        aurelia_framework_2.bindable,
        __metadata("design:type", Array)
    ], RadioList.prototype, "options", void 0);
    RadioList = __decorate([
        aurelia_framework_1.customElement('radio-list'),
        aurelia_framework_2.inject(aurelia_event_aggregator_1.EventAggregator),
        aurelia_framework_2.useView('./radio-list.html'),
        __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator])
    ], RadioList);
    exports.RadioList = RadioList;
});

define('pages/register/components/job-provider/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var JobProvider = (function () {
        function JobProvider() {
        }
        return JobProvider;
    }());
    exports.JobProvider = JobProvider;
});

define('pages/register/components/job-seeker/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var JobSeeker = (function () {
        function JobSeeker() {
            this.jobCategories = [
                'Business Analyst',
                'Manager',
                'Developer',
                'QA/Tester',
                'Data Scientist/Analyst',
                'Systems Analyst',
                'Director',
                'Database Admin',
                'Trainer',
                'Network Admin',
                'Software Architect',
                'Security Admin'
            ];
            this.jobSkills = [
                'MySQL',
                'MSSQL',
                'MongoDB',
                'AngularJS',
                'Angular2',
                'ReactJS',
                'EmberJS',
                'Aurelia',
                'NodeJS'
            ];
            this.workSchedulePrefs = [
                'Full time fixed/salary',
                'Full time contract/hourly/flex',
                'Part time fixed/salary',
                'Part time contract/hourly/flex',
                'Internship'
            ];
            this.workEnvPrefs = [
                'Top tier pay',
                'Excellent health benefits',
                'High bonus, commiss, or 401k',
                'Flexible schedule',
                'Startup culture',
                'Laid-back culture',
                'Extensive job training',
                'A dedicated mentor / guide',
                'Truly rewarding work',
                'A job that helps people/world',
                'High people interaction',
                'Low people interaction',
                'Plenty of Travel',
                'Job Security / stable work'
            ];
            this.workPersonalities = [
                'I get in, do my work, then go out and enjoy my life',
                'I\'m a people person',
                'Mellow, easy going, doesn\'t stress easily',
                'I take on everything I can',
                'My job is my life (practically)',
                'I prefer numbers over words',
                'Supernerd right here',
                'Jack of all trades'
            ];
            this.stateZipList = [
                { name: 'Alaska', value: 'AK', zip_min: '99501', zip_max: '99950' },
                { name: 'Alabama', value: 'AL', zip_min: '35004', zip_max: '36925' },
                { name: 'Arkansas', value: 'AR_1', zip_min: '71601', zip_max: '72959' },
                { name: 'Arkansas (Texarkana)', value: 'AR_2', zip_min: '75502', zip_max: '75502' },
                { name: 'Arizona', value: 'AZ', zip_min: '85001', zip_max: '86556' },
                { name: 'California', value: 'CA', zip_min: '90001', zip_max: '96162' },
                { name: 'Colorado', value: 'CO', zip_min: '80001', zip_max: '81658' },
                { name: 'Connecticut', value: 'CT_1', zip_min: '6001', zip_max: '6389' },
                { name: 'Connecticut', value: 'CT_2', zip_min: '6401', zip_max: '6928' },
                { name: 'Dist of Columbia', value: 'DC_1', zip_min: '20001', zip_max: '20039' },
                { name: 'Dist of Columbia', value: 'DC_2', zip_min: '20042', zip_max: '20599' },
                { name: 'Dist of Columbia', value: 'DC_3', zip_min: '20799', zip_max: '20799' },
                { name: 'Delaware', value: 'DE', zip_min: '19701', zip_max: '19980' },
                { name: 'Florida', value: 'FL', zip_min: '32004', zip_max: '34997' },
                { name: 'Georgia', value: 'GA_1', zip_min: '30001', zip_max: '31999' },
                { name: 'Georgia (Atlanta)', value: 'GA_2', zip_min: '39901', zip_max: '39901' },
                { name: 'Hawaii', value: 'HI', zip_min: '96701', zip_max: '96898' },
                { name: 'Iowa', value: 'IA_1', zip_min: '50001', zip_max: '52809' },
                { name: 'Iowa (OMAHA)', value: 'IA_2', zip_min: '68119', zip_max: '68120' },
                { name: 'Idaho', value: 'ID', zip_min: '83201', zip_max: '83876' },
                { name: 'Illinois', value: 'IL', zip_min: '60001', zip_max: '62999' },
                { name: 'Indiana', value: 'IN', zip_min: '46001', zip_max: '47997' },
                { name: 'Kansas', value: 'KS', zip_min: '66002', zip_max: '67954' },
                { name: 'Kentucky', value: 'KY', zip_min: '40003', zip_max: '42788' },
                { name: 'Louisiana', value: 'LA_1', zip_min: '70001', zip_max: '71232' },
                { name: 'Louisiana', value: 'LA_2', zip_min: '71234', zip_max: '71497' },
                { name: 'Massachusetts', value: 'MA', zip_min: '1001', zip_max: '2791' },
                { name: 'Massachusetts (Andover)', value: 'MA', zip_min: '5501', zip_max: '5544' },
                { name: 'Maryland', value: 'MD_1', zip_min: '20331', zip_max: '20331' },
                { name: 'Maryland', value: 'MD_2', zip_min: '20335', zip_max: '20797' },
                { name: 'Maryland', value: 'MD_3', zip_min: '20812', zip_max: '21930' },
                { name: 'Maine', value: 'ME', zip_min: '3901', zip_max: '4992' },
                { name: 'Michigan', value: 'MI', zip_min: '48001', zip_max: '49971' },
                { name: 'Minnesota', value: 'MN', zip_min: '55001', zip_max: '56763' },
                { name: 'Missouri', value: 'MO', zip_min: '63001', zip_max: '65899' },
                { name: 'Mississippi', value: 'MS_1', zip_min: '38601', zip_max: '39776' },
                { name: 'Mississippi(Warren)', value: 'MS_2', zip_min: '71233', zip_max: '71233' },
                { name: 'Montana', value: 'MT', zip_min: '59001', zip_max: '59937' },
                { name: 'North Carolina', value: 'NC', zip_min: '27006', zip_max: '28909' },
                { name: 'North Dakota', value: 'ND', zip_min: '58001', zip_max: '58856' },
                { name: 'Nebraska', value: 'NE_1', zip_min: '68001', zip_max: '68118' },
                { name: 'Nebraska', value: 'NE_2', zip_min: '68122', zip_max: '69367' },
                { name: 'New Hampshire', value: 'NH', zip_min: '3031', zip_max: '3897' },
                { name: 'New Jersey', value: 'NJ', zip_min: '7001', zip_max: '8989' },
                { name: 'New Mexico', value: 'NM', zip_min: '87001', zip_max: '88441' },
                { name: 'Nevada', value: 'NV', zip_min: '88901', zip_max: '89883' },
                { name: 'New York (Fishers Is)', value: 'NY_1', zip_min: '6390', zip_max: '6390' },
                { name: 'New York', value: 'NY_2', zip_min: '10001', zip_max: '14975' },
                { name: 'Ohio', value: 'OH', zip_min: '43001', zip_max: '45999' },
                { name: 'Oklahoma', value: 'OK_1', zip_min: '73001', zip_max: '73199' },
                { name: 'Oklahoma', value: 'OK_2', zip_min: '73401', zip_max: '74966' },
                { name: 'Oregon', value: 'OR', zip_min: '97001', zip_max: '97920' },
                { name: 'Pennsylvania', value: 'PA', zip_min: '15001', zip_max: '19640' },
                { name: 'Puerto Rico', value: 'PR', zip_min: '0', zip_max: '0' },
                { name: 'Rhode Island', value: 'RI', zip_min: '2801', zip_max: '2940' },
                { name: 'South Carolina', value: 'SC', zip_min: '29001', zip_max: '29948' },
                { name: 'South Dakota', value: 'SD', zip_min: '57001', zip_max: '57799' },
                { name: 'Tennessee', value: 'TN', zip_min: '37010', zip_max: '38589' },
                { name: 'Texas (Austin)', value: 'TX_1', zip_min: '73301', zip_max: '73301' },
                { name: 'Texas', value: 'TX_2', zip_min: '75001', zip_max: '75501' },
                { name: 'Texas', value: 'TX_3', zip_min: '75503', zip_max: '79999' },
                { name: 'Texas (El Paso)', value: 'TX_4', zip_min: '88510', zip_max: '88589' },
                { name: 'Utah', value: 'UT', zip_min: '84001', zip_max: '84784' },
                { name: 'Virginia', value: 'VA_1', zip_min: '20040', zip_max: '20041' },
                { name: 'Virginia', value: 'VA_2', zip_min: '20040', zip_max: '20167' },
                { name: 'Virginia', value: 'VA_3', zip_min: '20042', zip_max: '20042' },
                { name: 'Virginia', value: 'VA_4', zip_min: '22001', zip_max: '24658' },
                { name: 'Vermont', value: 'VT_1', zip_min: '5001', zip_max: '5495' },
                { name: 'Vermont', value: 'VT_2', zip_min: '5601', zip_max: '5907' },
                { name: 'Washington', value: 'WA', zip_min: '98001', zip_max: '99403' },
                { name: 'Wisconsin', value: 'WI', zip_min: '53001', zip_max: '54990' },
                { name: 'West Virginia', value: 'WV', zip_min: '24701', zip_max: '26886' },
                { name: 'Wyoming', value: 'WY', zip_min: '82001', zip_max: '83128' }
            ];
        }
        return JobSeeker;
    }());
    exports.JobSeeker = JobSeeker;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/form-components/job-seeker/job-exp-select-list',["require", "exports", "aurelia-framework", "aurelia-framework", "aurelia-event-aggregator"], function (require, exports, aurelia_framework_1, aurelia_framework_2, aurelia_event_aggregator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var JobExpSelectList = (function () {
        function JobExpSelectList(events) {
            this.skillSet = new Map();
            this.skillLevelList = [
                { name: '0-2 Years', value: 'L1' },
                { name: '2-5 Years', value: 'L2' },
                { name: '5-7 Years', value: 'L3' },
                { name: '7-10 Years', value: 'L4' },
                { name: '10+ Years', value: 'L5' }
            ];
            this.subscriptionList = [];
            this.events = events;
        }
        JobExpSelectList.prototype.addSkillSet = function (jobSkillObj) {
            var result = false;
            if (jobSkillObj.elementName && jobSkillObj.elementValue) {
                if (!this.skillSet.has(jobSkillObj.elementName)) {
                    this.skillSet.set(jobSkillObj.elementName, jobSkillObj.elementValue);
                }
                result = this.skillSet.has(jobSkillObj.elementName);
            }
            return result;
        };
        JobExpSelectList.prototype.removeSkillSet = function (jobSkillObj) {
            var result = false;
            if (jobSkillObj.elementName) {
                if (this.skillSet.has(jobSkillObj.elementName)) {
                    this.skillSet.delete(jobSkillObj.elementName);
                }
                result = !this.skillSet.has(jobSkillObj.elementName);
            }
            return result;
        };
        JobExpSelectList.prototype.attached = function () {
            var _this = this;
            this.subscriptionList.push(this.events.subscribe('check-list:job_skills:checked', function (e) { _this.addSkillSet(e); }));
            this.subscriptionList.push(this.events.subscribe('check-list:job_skills:unchecked', function (e) { _this.removeSkillSet(e); }));
        };
        JobExpSelectList.prototype.detached = function () {
            for (var i = 0, ii = this.subscriptionList.length; i < ii; i++) {
                this.subscriptionList[i].dispose();
            }
        };
        return JobExpSelectList;
    }());
    JobExpSelectList = __decorate([
        aurelia_framework_1.customElement('job-exp-select-list'),
        aurelia_framework_2.inject(aurelia_event_aggregator_1.EventAggregator),
        aurelia_framework_2.useView('./job-exp-select-list.html'),
        __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator])
    ], JobExpSelectList);
    exports.JobExpSelectList = JobExpSelectList;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/form-components/job-seeker/work-zip-pref',["require", "exports", "aurelia-framework", "aurelia-framework", "aurelia-event-aggregator"], function (require, exports, aurelia_framework_1, aurelia_framework_2, aurelia_event_aggregator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var WorkZipPref = (function () {
        function WorkZipPref(events) {
            this.zip_min = 0;
            this.zip_max = 0;
            this.zipCodeList = new Map();
            this.subscriptionList = [];
            this.events = events;
        }
        WorkZipPref.prototype.updateZipCodes = function (stateObj) {
            if (stateObj.elementValue && this.zipCodeList.has(stateObj.elementValue)) {
                var zipObj = this.zipCodeList.get(stateObj.elementValue);
                this.zip_min = zipObj.zip_min;
                this.zip_max = zipObj.zip_max;
            }
            else {
                this.zip_min = 0;
                this.zip_max = 0;
            }
        };
        WorkZipPref.prototype.attached = function () {
            var _this = this;
            this.subscriptionList.push(this.events.subscribe('radio-list:work_state_pref:clicked', function (e) { _this.updateZipCodes(e); }));
            for (var i = 0, ii = this.stateZipList.length; i < ii; i++) {
                this.zipCodeList.set(this.stateZipList[i].value, { zip_min: this.stateZipList[i].zip_min, zip_max: this.stateZipList[i].zip_max });
            }
        };
        WorkZipPref.prototype.detached = function () {
            for (var i = 0, ii = this.subscriptionList.length; i < ii; i++) {
                this.subscriptionList[i].dispose();
            }
            this.zipCodeList.clear();
        };
        return WorkZipPref;
    }());
    __decorate([
        aurelia_framework_2.bindable,
        __metadata("design:type", Array)
    ], WorkZipPref.prototype, "stateZipList", void 0);
    WorkZipPref = __decorate([
        aurelia_framework_1.customElement('work-zip-pref'),
        aurelia_framework_2.inject(aurelia_event_aggregator_1.EventAggregator),
        aurelia_framework_2.useView('./work-zip-pref.html'),
        __metadata("design:paramtypes", [aurelia_event_aggregator_1.EventAggregator])
    ], WorkZipPref);
    exports.WorkZipPref = WorkZipPref;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template><nav id=mainNav class=\"navbar navbar-default navbar-fixed-top navbar-custom\"><div class=container><div class=\"navbar-header page-scroll\"><button type=button class=navbar-toggle data-toggle=collapse data-target=#bs-example-navbar-collapse-1><span class=sr-only>Toggle navigation</span>Menu<i class=\"fa fa-bars\"></i></button></div><div class=\"collapse navbar-collapse\" id=bs-example-navbar-collapse-1><ul class=\"nav navbar-nav navbar-right\"><li repeat.for=\"row of router.navigation\"><a href.bind=row.href>${row.config.name}</a></li></ul></div></div></nav><div class=page-host><router-view></router-view></div><footer class=text-center><div class=footer-below><div class=container><div class=row><div class=col-lg-12>Copyright &copy; Gighub ${year}</div></div></div></div></footer></template>"; });
define('text!not-found.html', ['module'], function(module) { module.exports = "<template><header><div class=\"container sub-header\"><div class=row><div class=col-lg-12><div class=intro-text><span class=name>Whoops, nothing here!</span></div></div></div></div></header><section class=\"container text-center\"><h1>Something is broken…</h1><p>The page cannot be found.</p></section></template>"; });
define('text!pages/home/components/welcome.html', ['module'], function(module) { module.exports = "<template><div class=au-animate><header><div class=container><div class=row><div class=col-lg-12><div class=intro-text><span class=name>Welcome to Gighub!</span><hr class=hs-light><span class=skills>Your primary access hub toward new opportunities!</span></div></div></div></div></header><section id=mission><div class=container><div class=row><div class=\"col-lg-12 text-center\"><h2>Our Mission</h2><hr></div></div><div class=row><div class=\"col-lg-8 col-lg-offset-2\"><p>Our primary goal is to match your personal qualities to a potential employer. We focus on what makes you unique as a person in order to create better options for career placement. Your skills are still important but your personal needs are equally as important! Register and become a member of your ideal team today!</p></div></div><div class=row><div class=\"col-lg-8 col-lg-offset-2 text-center\"><a route-href=\"route: register\" class=\"btn btn-lg btn-primary\"><i class=\"fa fa-pencil-square-o\"></i>Sign Up Now</a></div></div></div></section></div></template>"; });
define('text!less/freelancer.css', ['module'], function(module) { module.exports = "body {\n  font-family: 'Lato', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  overflow-x: hidden;\n}\np {\n  font-size: 20px;\n}\np.small {\n  font-size: 16px;\n}\na,\na:hover,\na:focus,\na:active,\na.active {\n  color: #18BC9C;\n  outline: none;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: \"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  text-transform: uppercase;\n  font-weight: 700;\n}\n/************Handshake Dividers************/\nhr.hs-light,\nhr.hs-primary {\n  padding: 0;\n  border: none;\n  border-top: solid 5px;\n  text-align: center;\n  max-width: 250px;\n  margin: 25px auto 30px;\n}\nhr.hs-light:after,\nhr.hs-primary:after {\n  content: \"\\f2b5\";\n  font-family: FontAwesome;\n  display: inline-block;\n  position: relative;\n  top: -0.8em;\n  font-size: 2em;\n  padding: 0 0.25em;\n}\nhr.hs-light {\n  border-color: white;\n}\nhr.hs-light:after {\n  background-color: #18BC9C;\n  color: white;\n}\nhr.hs-primary {\n  border-color: #2C3E50;\n}\nhr.hs-primary:after {\n  background-color: white;\n  color: #2C3E50;\n}\n/************Handshake Dividers************/\n/************Star Dividers************/\nhr.star-light,\nhr.star-primary {\n  padding: 0;\n  border: none;\n  border-top: solid 5px;\n  text-align: center;\n  max-width: 250px;\n  margin: 25px auto 30px;\n}\nhr.star-light:after,\nhr.star-primary:after {\n  content: \"\\f005\";\n  font-family: FontAwesome;\n  display: inline-block;\n  position: relative;\n  top: -0.8em;\n  font-size: 2em;\n  padding: 0 0.25em;\n}\nhr.star-light {\n  border-color: white;\n}\nhr.star-light:after {\n  background-color: #18BC9C;\n  color: white;\n}\nhr.star-primary {\n  border-color: #2C3E50;\n}\nhr.star-primary:after {\n  background-color: white;\n  color: #2C3E50;\n}\n/************Star Dividers************/\n.img-centered {\n  margin: 0 auto;\n}\nheader {\n  text-align: center;\n  background: #18BC9C;\n  color: white;\n}\nheader .container {\n  padding-top: 100px;\n  padding-bottom: 50px;\n}\nheader .container.sub-header {\n  padding-top: 125px;\n  padding-bottom: 25px;\n}\nheader img {\n  display: block;\n  margin: 0 auto 20px;\n}\nheader .intro-text .name {\n  display: block;\n  font-family: \"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  text-transform: uppercase;\n  font-weight: 700;\n  font-size: 2em;\n}\nheader .intro-text .skills {\n  font-size: 1.25em;\n  font-weight: 300;\n}\n@media (min-width: 768px) {\n  header .container {\n    padding-top: 200px;\n    padding-bottom: 100px;\n  }\n  header .intro-text .name {\n    font-size: 4.75em;\n  }\n  header .intro-text .skills {\n    font-size: 1.75em;\n  }\n}\n.navbar-custom {\n  background: #2C3E50;\n  font-family: \"Montserrat\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  text-transform: uppercase;\n  font-weight: 700;\n  border: none;\n}\n.navbar-custom a:focus {\n  outline: none;\n}\n.navbar-custom .navbar-brand {\n  color: white;\n}\n.navbar-custom .navbar-brand:hover,\n.navbar-custom .navbar-brand:focus,\n.navbar-custom .navbar-brand:active,\n.navbar-custom .navbar-brand.active {\n  color: white;\n}\n.navbar-custom .navbar-nav {\n  letter-spacing: 1px;\n}\n.navbar-custom .navbar-nav li a {\n  color: white;\n}\n.navbar-custom .navbar-nav li a:hover {\n  color: #18BC9C;\n  outline: none;\n}\n.navbar-custom .navbar-nav li a:focus,\n.navbar-custom .navbar-nav li a:active {\n  color: white;\n}\n.navbar-custom .navbar-nav li.active a {\n  color: white;\n  background: #18BC9C;\n}\n.navbar-custom .navbar-nav li.active a:hover,\n.navbar-custom .navbar-nav li.active a:focus,\n.navbar-custom .navbar-nav li.active a:active {\n  color: white;\n  background: #18BC9C;\n}\n.navbar-custom .navbar-toggle {\n  color: white;\n  text-transform: uppercase;\n  font-size: 10px;\n  border-color: white;\n}\n.navbar-custom .navbar-toggle:hover,\n.navbar-custom .navbar-toggle:focus {\n  background-color: #18BC9C;\n  color: white;\n  border-color: #18BC9C;\n}\n@media (min-width: 768px) {\n  .navbar-custom {\n    padding: 25px 0;\n    -webkit-transition: padding 0.3s;\n    -moz-transition: padding 0.3s;\n    transition: padding 0.3s;\n  }\n  .navbar-custom .navbar-brand {\n    font-size: 2em;\n    -webkit-transition: all 0.3s;\n    -moz-transition: all 0.3s;\n    transition: all 0.3s;\n  }\n  .navbar-custom.affix {\n    padding: 10px 0;\n  }\n  .navbar-custom.affix .navbar-brand {\n    font-size: 1.5em;\n  }\n}\nsection {\n  padding: 100px 0;\n}\nsection h2 {\n  margin: 0;\n  font-size: 3em;\n}\nsection.success {\n  background: #18BC9C;\n  color: white;\n}\n@media (max-width: 767px) {\n  section {\n    padding: 75px 0;\n  }\n  section.first {\n    padding-top: 75px;\n  }\n}\n#portfolio .portfolio-item {\n  margin: 0 0 15px;\n  right: 0;\n  padding-bottom: 25px;\n}\n#portfolio .portfolio-item .portfolio-link {\n  display: block;\n  position: relative;\n  max-width: 400px;\n  margin: 0 auto;\n}\n#portfolio .portfolio-item .portfolio-link .caption {\n  background: rgba(24, 188, 156, 0.9);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  transition: all ease 0.5s;\n  -webkit-transition: all ease 0.5s;\n  -moz-transition: all ease 0.5s;\n}\n#portfolio .portfolio-item .portfolio-link .caption:hover {\n  opacity: 1;\n}\n#portfolio .portfolio-item .portfolio-link .caption .caption-content {\n  position: absolute;\n  width: 100%;\n  height: 20px;\n  font-size: 20px;\n  text-align: center;\n  top: 50%;\n  margin-top: -12px;\n  color: white;\n}\n#portfolio .portfolio-item .portfolio-link .caption .caption-content i {\n  margin-top: -12px;\n}\n#portfolio .portfolio-item .portfolio-link .caption .caption-content h3,\n#portfolio .portfolio-item .portfolio-link .caption .caption-content h4 {\n  margin: 0;\n}\n#portfolio * {\n  z-index: 2;\n}\n@media (min-width: 767px) {\n  #portfolio .portfolio-item {\n    margin: 0 0 30px;\n  }\n}\n.floating-label-form-group {\n  position: relative;\n  margin-bottom: 0;\n  padding-bottom: 0.5em;\n  border-bottom: 1px solid #eeeeee;\n}\n.floating-label-form-group input,\n.floating-label-form-group textarea {\n  z-index: 1;\n  position: relative;\n  padding-right: 0;\n  padding-left: 0;\n  border: none;\n  border-radius: 0;\n  font-size: 1.5em;\n  background: none;\n  box-shadow: none !important;\n  resize: none;\n}\n.floating-label-form-group label {\n  display: block;\n  z-index: 0;\n  position: relative;\n  top: 2em;\n  margin: 0;\n  font-size: 0.85em;\n  line-height: 1.764705882em;\n  vertical-align: middle;\n  vertical-align: baseline;\n  opacity: 0;\n  -webkit-transition: top 0.3s ease,opacity 0.3s ease;\n  -moz-transition: top 0.3s ease,opacity 0.3s ease;\n  -ms-transition: top 0.3s ease,opacity 0.3s ease;\n  transition: top 0.3s ease,opacity 0.3s ease;\n}\n.floating-label-form-group:not(:first-child) {\n  padding-left: 14px;\n  border-left: 1px solid #eeeeee;\n}\n.floating-label-form-group-with-value label {\n  top: 0;\n  opacity: 1;\n}\n.floating-label-form-group-with-focus label {\n  color: #18BC9C;\n}\nlabel.label-lg {\n  font-size: 1.5em;\n  line-height: 1.764705882em;\n}\nform .row:first-child .floating-label-form-group {\n  border-top: 1px solid #eeeeee;\n}\nfooter {\n  color: white;\n}\nfooter h3 {\n  margin-bottom: 30px;\n}\nfooter .footer-above {\n  padding-top: 50px;\n  background-color: #2C3E50;\n}\nfooter .footer-col {\n  margin-bottom: 50px;\n}\nfooter .footer-below {\n  padding: 25px 0;\n  background-color: #233140;\n}\n.btn-outline {\n  color: white;\n  font-size: 20px;\n  border: solid 2px white;\n  background: transparent;\n  transition: all 0.3s ease-in-out;\n  margin-top: 15px;\n}\n.btn-outline:hover,\n.btn-outline:focus,\n.btn-outline:active,\n.btn-outline.active {\n  color: #18BC9C;\n  background: white;\n  border: solid 2px white;\n}\n.btn-primary {\n  color: white;\n  background-color: #2C3E50;\n  border-color: #2C3E50;\n  font-weight: 700;\n}\n.btn-primary:hover,\n.btn-primary:focus,\n.btn-primary:active,\n.btn-primary.active,\n.open .dropdown-toggle.btn-primary {\n  color: white;\n  background-color: #1a242f;\n  border-color: #161f29;\n}\n.btn-primary:active,\n.btn-primary.active,\n.open .dropdown-toggle.btn-primary {\n  background-image: none;\n}\n.btn-primary.disabled,\n.btn-primary[disabled],\nfieldset[disabled] .btn-primary,\n.btn-primary.disabled:hover,\n.btn-primary[disabled]:hover,\nfieldset[disabled] .btn-primary:hover,\n.btn-primary.disabled:focus,\n.btn-primary[disabled]:focus,\nfieldset[disabled] .btn-primary:focus,\n.btn-primary.disabled:active,\n.btn-primary[disabled]:active,\nfieldset[disabled] .btn-primary:active,\n.btn-primary.disabled.active,\n.btn-primary[disabled].active,\nfieldset[disabled] .btn-primary.active {\n  background-color: #2C3E50;\n  border-color: #2C3E50;\n}\n.btn-primary .badge {\n  color: #2C3E50;\n  background-color: white;\n}\n.btn-success {\n  color: white;\n  background-color: #18BC9C;\n  border-color: #18BC9C;\n  font-weight: 700;\n}\n.btn-success:hover,\n.btn-success:focus,\n.btn-success:active,\n.btn-success.active,\n.open .dropdown-toggle.btn-success {\n  color: white;\n  background-color: #128f76;\n  border-color: #11866f;\n}\n.btn-success:active,\n.btn-success.active,\n.open .dropdown-toggle.btn-success {\n  background-image: none;\n}\n.btn-success.disabled,\n.btn-success[disabled],\nfieldset[disabled] .btn-success,\n.btn-success.disabled:hover,\n.btn-success[disabled]:hover,\nfieldset[disabled] .btn-success:hover,\n.btn-success.disabled:focus,\n.btn-success[disabled]:focus,\nfieldset[disabled] .btn-success:focus,\n.btn-success.disabled:active,\n.btn-success[disabled]:active,\nfieldset[disabled] .btn-success:active,\n.btn-success.disabled.active,\n.btn-success[disabled].active,\nfieldset[disabled] .btn-success.active {\n  background-color: #18BC9C;\n  border-color: #18BC9C;\n}\n.btn-success .badge {\n  color: #18BC9C;\n  background-color: white;\n}\n.btn-social {\n  display: inline-block;\n  height: 50px;\n  width: 50px;\n  border: 2px solid white;\n  border-radius: 100%;\n  text-align: center;\n  font-size: 20px;\n  line-height: 45px;\n}\n.btn:focus,\n.btn:active,\n.btn.active {\n  outline: none;\n}\n.scroll-top {\n  position: fixed;\n  right: 2%;\n  bottom: 2%;\n  width: 50px;\n  height: 50px;\n  z-index: 1049;\n}\n.scroll-top .btn {\n  font-size: 20px;\n  width: 50px;\n  height: 50px;\n  border-radius: 100%;\n  line-height: 28px;\n}\n.scroll-top .btn:focus {\n  outline: none;\n}\n.portfolio-modal .modal-content {\n  border-radius: 0;\n  background-clip: border-box;\n  -webkit-box-shadow: none;\n  box-shadow: none;\n  border: none;\n  min-height: 100%;\n  padding: 100px 0;\n  text-align: center;\n}\n.portfolio-modal .modal-content h2 {\n  margin: 0;\n  font-size: 3em;\n}\n.portfolio-modal .modal-content img {\n  margin-bottom: 30px;\n}\n.portfolio-modal .modal-content .item-details {\n  margin: 30px 0;\n}\n.portfolio-modal .close-modal {\n  position: absolute;\n  width: 75px;\n  height: 75px;\n  background-color: transparent;\n  top: 25px;\n  right: 25px;\n  cursor: pointer;\n}\n.portfolio-modal .close-modal:hover {\n  opacity: 0.3;\n}\n.portfolio-modal .close-modal .lr {\n  height: 75px;\n  width: 1px;\n  margin-left: 35px;\n  background-color: #2C3E50;\n  transform: rotate(45deg);\n  -ms-transform: rotate(45deg);\n  /* IE 9 */\n  -webkit-transform: rotate(45deg);\n  /* Safari and Chrome */\n  z-index: 1051;\n}\n.portfolio-modal .close-modal .lr .rl {\n  height: 75px;\n  width: 1px;\n  background-color: #2C3E50;\n  transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  /* IE 9 */\n  -webkit-transform: rotate(90deg);\n  /* Safari and Chrome */\n  z-index: 1052;\n}\n.portfolio-modal .modal-backdrop {\n  opacity: 0;\n  display: none;\n}\n"; });
define('text!less/mixins.css', ['module'], function(module) { module.exports = ""; });
define('text!less/variables.css', ['module'], function(module) { module.exports = ""; });
define('text!pages/register/components/index.html', ['module'], function(module) { module.exports = "<template><div class=au-animate><header><div class=\"container sub-header\"><div class=row><div class=col-lg-12><div class=intro-text><span class=skills>Let's get started! First we are going to ask you a few questions about who you are and what you are seeking in a new career. Don't worry, it's free!</span></div></div></div></div></header><section id=portfolio><div class=container><div class=row><div class=\"col-lg-12 text-center\"><h2>What is your role?</h2><hr class=hs-primary></div></div><div class=row><div class=\"col-lg-6 col-sm-12 portfolio-item text-center\"><h2>I'm a Job Provider</h2><a route-href=\"route: job-provider\" class=portfolio-link data-toggle=modal><img src=src/images/registration/job_provider.jpg class=\"img-responsive center-block\" alt=\"\"></a></div><div class=\"col-lg-6 col-sm-12 portfolio-item text-center\"><h2>I'm a Job Seeker</h2><a route-href=\"route: job-seeker\" class=portfolio-link data-toggle=modal><img src=src/images/registration/job_seeker.jpg class=\"img-responsive center-block\" alt=\"\"></a></div></div></div></section></div></template>"; });
define('text!resources/elements/form-components/check-list.html', ['module'], function(module) { module.exports = "<template><require from=.\\check-list.css></require><div id=check-list-${inputId} class=btn-group-vertical data-toggle=buttons><label repeat.for=\"opt of options\" for=${inputId}-${$index} click.delegate=checkListClicked($event) class=\"btn btn-primary\"><input type=checkbox name=${inputId} id=${inputId}-${$index} value=\"${opt.value ? opt.value : opt}\"> ${opt.name ? opt.name : opt}</label></div></template>"; });
define('text!resources/elements/form-components/radio-list.html', ['module'], function(module) { module.exports = "<template><require from=.\\radio-list.css></require><div id=radio-list-${inputId} class=btn-group-vertical data-toggle=buttons><label repeat.for=\"opt of options\" for=${inputId}-${$index} click.delegate=radioListClicked($event) class=\"btn btn-primary\"><input type=radio name=${inputId} id=${inputId}-${$index} value=\"${opt.value ? opt.value : opt}\"> ${opt.name ? opt.name : opt}</label></div></template>"; });
define('text!pages/register/components/job-provider/index.html', ['module'], function(module) { module.exports = "<template><div class=au-animate><section class=\"container text-center\"><h1>This is still a work in progress...</h1><p>Please check back later.</p></section></div></template>"; });
define('text!pages/register/components/job-seeker/index.html', ['module'], function(module) { module.exports = "<template><div class=au-animate><header><div class=\"container sub-header\"><div class=row><div class=col-lg-12><div class=intro-text><span class=skills>Hello job seeker! The following questions will be a self assessment of your job skills and work preferences.</span></div></div></div></div></header><div id=formCarousel class=\"carousel slide\" data-ride=carousel><form name=profile id=profileForm novalidate><div class=carousel-inner role=listbox><section id=phase1 class=\"item active\"><compose view=./form-components/profile-phase1.html></compose></section><section id=phase2 class=item><compose view=./form-components/profile-phase2.html></compose></section><section id=phase3 class=item><compose view=./form-components/profile-phase3.html></compose></section></div></form></div></div></template>"; });
define('text!resources/elements/form-components/job-seeker/job-exp-select-list.html', ['module'], function(module) { module.exports = "<template><div repeat.for=\"let [key, value] of skillSet\" id=jobExpFor-${key} class=row><label>How many years have you used the skill: ${value}</label><br><select id=jobExpInput-${key} class=form-control><option value=\"\">Please Select</option><option repeat.for=\"level of skillLevelList\" value=${level.value}>${level.name}</option></select></div></template>"; });
define('text!resources/elements/form-components/job-seeker/work-zip-pref.html', ['module'], function(module) { module.exports = "<template><div if.bind=zip_min class=row><label class=label-lg>Any particular zip code?</label><br><input type=number id=work_zip_pref name=work_zip_pref min=${zip_min} max=${zip_max} class=form-control><p>Zip range for this state is between ${zip_min} - ${zip_max}</p></div></template>"; });
define('text!pages/register/components/job-seeker/form-components/profile-phase1.html', ['module'], function(module) { module.exports = "<template><div class=container><div class=row><div class=\"col-lg-12 text-center\"><h2>How's your skillset?</h2><hr class=hs-primary></div></div><div class=row><div class=\"col-lg-9 col-lg-offset-2\"><div class=\"row control-group\"><div class=\"form-group col-lg-6 col-xs-12 controls\"><label class=label-lg>What job category are you looking for?</label><br><radio-list input-id=job_category options.bind=jobCategories></radio-list><p class=\"help-block text-danger\"></p></div><div class=\"form-group col-lg-6 col-xs-12 controls\"><label class=label-lg>What TOP 5 skills do you have?</label><br><check-list input-id=job_skills select-limit=5 options.bind=jobSkills></check-list><p class=\"help-block text-danger\"></p></div></div><div class=\"row control-group\"><div class=\"form-group col-lg-6 col-xs-12 controls\"><job-exp-select-list></job-exp-select-list></div></div><br><div class=row><div class=\"form-group col-xs-12\"><button class=\"btn btn-success pull-right btn-lg\" data-target=#formCarousel data-slide-to=1>Next</button></div></div></div></div></div></template>"; });
define('text!pages/register/components/job-seeker/form-components/profile-phase2.html', ['module'], function(module) { module.exports = "<template><div class=container><div class=row><div class=\"col-lg-12 text-center\"><h2>What are your job preferences?</h2><hr class=hs-primary></div></div><div class=row><div class=\"col-lg-9 col-lg-offset-2\"><div class=\"row control-group\"><div class=\"form-group col-lg-6 col-xs-12 controls\"><label class=label-lg>What TOP 5 qualities are most important?</label><br><check-list input-id=work_env_prefs select-limit=5 options.bind=workEnvPrefs></check-list><p class=\"help-block text-danger\"></p></div><div class=\"form-group col-lg-6 col-xs-12 controls\"><label class=label-lg>What work schedule are you looking for?</label><br><check-list input-id=work_schedule_prefs options.bind=workSchedulePrefs></check-list><p class=\"help-block text-danger\"></p></div></div><div class=\"row control-group\"><div class=\"form-group col-lg-6 col-xs-12 controls\"><label class=label-lg>What state are you looking to work in?</label><br><radio-list input-id=work_state_pref options.bind=stateZipList></radio-list><p class=\"help-block text-danger\"></p></div><div class=\"form-group col-lg-6 col-xs-12 controls\"><work-zip-pref state-zip-list.bind=stateZipList></work-zip-pref></div></div><br><div class=row><div class=\"form-group col-xs-12\"><button class=\"btn btn-success pull-right btn-lg\" data-target=#formCarousel data-slide-to=2>Next</button><button class=\"btn btn-primary btn-lg\" data-target=#formCarousel data-slide-to=0>Prev</button></div></div></div></div></div></template>"; });
define('text!pages/register/components/job-seeker/form-components/profile-phase3.html', ['module'], function(module) { module.exports = "<template><div class=container><div class=row><div class=\"col-lg-12 text-center\"><h2>Anything else you want to tell us? (Optional)</h2><hr class=hs-primary></div></div><div class=row><div class=\"col-lg-9 col-lg-offset-2\"><div class=\"row control-group\"><div class=\"form-group col-lg-6 col-xs-12 controls\"><label class=label-lg>What work personality type best matches yours?</label><br><radio-list input-id=work_personality options.bind=workPersonalities></radio-list><p class=\"help-block text-danger\"></p></div><div class=\"form-group col-lg-6 col-xs-12 controls\"><label class=label-lg>Likes/Dislikes of your current position? (Not job environment)</label><br><textarea id=current_position_description name=current_position_description row=5 class=form-control></textarea></div></div><div class=\"row control-group\"><div class=\"form-group col-lg-6 col-xs-12 controls\"><label class=label-lg>Would you like to upload a resume?</label><br><input type=file></div></div><br><div class=row><div class=\"form-group col-xs-12\"><button class=\"btn btn-success pull-right btn-lg\">Submit</button><button class=\"btn btn-primary btn-lg\" data-target=#formCarousel data-slide-to=1>Prev</button></div></div></div></div></div></template>"; });
//# sourceMappingURL=app-bundle.js.map