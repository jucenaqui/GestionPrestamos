import { TestBed, async } from '@angular/core/testing';
import { ClienteComponent } from './clientes.component';
describe('ClienteComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ClienteComponent
            ],
        }).compileComponents();
    }));
    it('should create the clienteComponent', async(() => {
        const fixture = TestBed.createComponent(ClienteComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it(`should have as title 'app'`, async(() => {
        const fixture = TestBed.createComponent(ClienteComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.titulo).toEqual('Clientes');
    }));
    it('should render title in a h1 tag', async(() => {
        const fixture = TestBed.createComponent(ClienteComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Clientes');
    }));
});
