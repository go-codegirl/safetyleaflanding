import {addProviders, inject} from '@angular/core/testing';

import {ProductComponent} from './productComponent';

describe('FormComponent', () => {
    beforeEach(() => addProviders([ProductComponent]));

    it('should create the app component', inject([ProductComponent], (app: ProductComponent) => {
        expect(app).toBeTruthy();
    }));
});
