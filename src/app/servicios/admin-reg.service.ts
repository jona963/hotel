import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { RoleService } from './role.service';
@Injectable({
  providedIn: 'root'
})
export class AdminRegService {
  private isLoggedIn = false;
  private token: string = ''; 

  constructor(private auth: Auth, private firestore: Firestore, private roleService: RoleService) { }

  async register({ email, password, nombre, apellido, telefono, rol }: any) {
    try {
      // Registrar usuario en Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);

      // obtener el id del nuevo usuario registrado
      const userID = userCredential.user.uid;

      // crear el documento en la colección usuarios
      const userDocRef = doc(this.firestore, 'administrativos', userID);

      // Set datos
      await setDoc(userDocRef, {
        email: email,
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        rol: rol
      });

      return userCredential;
    } catch (error) {
      throw error;
    }
  }

  // user.service.ts
  async login({ email, password }: any) {
    try {
      // Iniciar sesión en Firebase Auth
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);

      // Obtener el token JWT
      const token = await userCredential.user.getIdToken();
      console.log('Token JWT:', token);
      // Almacenar el token en UserService
      this.token = token;

      // Resto del código...
    } catch (error) {
      throw error;
    }
  }

  // Nueva propiedad 'getToken' para acceder al token
  getToken(): string {
    return this.token;
  }

  isLoggedInUser(): boolean {
    return this.isLoggedIn;
  }

  logout() {
    return signOut(this.auth);
  }



}
