import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminRegService } from 'src/app/servicios/admin-reg.service';

@Component({
  selector: 'app-registro-admin',
  templateUrl: './registro-admin.component.html',
  styleUrls: ['./registro-admin.component.scss']
})
export class RegistroAdminComponent implements OnInit{
  registroExitoso: boolean = false;
  registroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private adminRegService: AdminRegService,
    private router: Router
  ) {
    this.registroForm = new FormGroup({
      nombre: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rol: ['', Validators.required],
      // Agrega más campos y validaciones según sea necesario
    });
  }

  onSubmit() {
    if (this.registroForm.valid) {
      this.adminRegService.register(this.registroForm.value)
        .then(response => {
          console.log(response);
          this.registroExitoso = true;
          this.registroForm.reset();

          this.router.navigate(['/login']);
        })
        .catch(error => console.log(error));
    }
  } 

}
