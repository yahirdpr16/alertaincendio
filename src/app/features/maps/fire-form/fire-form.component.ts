import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-fire-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './fire-form.component.html',
  styleUrl: './fire-form.component.scss'
})
export class FireFormComponent {


}
