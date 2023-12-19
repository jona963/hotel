import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  registroExitoso: boolean = false;
  registroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
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
      depto: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rol: ['residente', Validators.required],
      // Agrega más campos y validaciones según sea necesario
    });
  }

  onSubmit() {
    if (this.registroForm.valid) {
      this.userService.register(this.registroForm.value)
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

