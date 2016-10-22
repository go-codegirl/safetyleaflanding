import {addProviders, inject} from '@angular/core/testing';

import {LoginFormComponent} from './loginFormComponent';

describe('AppComponent', () => {
    beforeEach(() => addProviders([LoginFormComponent]));

    it('should create the app component', inject([LoginFormComponent], (app: LoginFormComponent) => {
        expect(app).toBeTruthy();
    }));
});
