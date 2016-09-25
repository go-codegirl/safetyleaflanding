import {addProviders, inject} from '@angular/core/testing';

import {ProfileComponent} from './profileComponent';

describe('AppComponent', () => {
    beforeEach(() => addProviders([ProfileComponent]));

    it('should create the app component', inject([ProfileComponent], (app: ProfileComponent) => {
        expect(app).toBeTruthy();
    }));
});
