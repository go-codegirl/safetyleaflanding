import {addProviders, inject} from '@angular/core/testing';

import {FormComponent} from './formComponent';

describe('FormComponent', () => {
    beforeEach(() => addProviders([FormComponent]));

    it('should create the app component', inject([FormComponent], (app: FormComponent) => {
        expect(app).toBeTruthy();
    }));
});
