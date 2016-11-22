"use strict";
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var registration_component_1 = require('./registration.component');
exports.routes = [
    { path: '/', component: app_component_1.AppComponent },
    { path: 'register', component: registration_component_1.RegistrationComponent }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map