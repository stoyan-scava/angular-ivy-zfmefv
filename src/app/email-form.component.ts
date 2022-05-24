import { Component, Input } from '@angular/core';

@Component({
  selector: 'email-form',
  templateUrl: './email-form.component.html',
})
export class EmailFormComponent {
  @Input() message: string;
}
