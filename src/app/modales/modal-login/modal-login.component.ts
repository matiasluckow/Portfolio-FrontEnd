// import { Component, OnInit } from '@angular/core';

// // importamos las librerias de formulario que vamos a necesitar

// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AutenticacionService } from 'src/app/servicio/autenticacion.service';

// @Component({
//   selector: 'app-modal-login',
//   templateUrl: './modal-login.component.html',
//   styleUrls: ['./modal-login.component.css']
// })

// export class ModalLoginComponent implements OnInit {
//   form: FormGroup;

//   // Inyectar en el constructor el formBuilder

//   constructor(private formBuilder: FormBuilder, private autenticacion: AutenticacionService, private ruta:Router){ 
    
//   //Creamos el grupo de controles para el formulario de login

//     this.form= this.formBuilder.group({
//       email:['', [Validators.required, Validators.email]],
//       password:['',[Validators.required, Validators.minLength(8)]],
//       deviceInfo:this.formBuilder.group({
//         deviceId: [""],
//         deviceType: [""],
//         notificationToken: [""]
//       })
//    })
//   }

//   ngOnInit() {}

//   get Password(){
//     return this.form.get("password");
//   }
 
//   get Email(){
//    return this.form.get("email");
//   }

//   get PasswordValid(){
//     return this.Password?.touched && !this.Password?.valid;
//   }

//   get EmailValid() {
//     return this.Email?.touched && !this.Email?.valid;
//   }
 

//   onEnviar(event: Event){
//     // Detenemos la propagación o ejecución del compotamiento submit de un form
//     event.preventDefault;
//     this.autenticacion.iniciarSesion(this.form.value).subscribe(data=>{
//       console.log("DATA:" + JSON.stringify(data));
//       this.ruta.navigate(['/menu'])
//     }) 
 
//     // if (this.form.valid){
//     //   // Llamamos a nuestro servicio para enviar los datos al servidor
//     //   // También podríamos ejecutar alguna lógica extra
//     //   alert("Todo salio bien ¡Enviar formuario!")
//     // }else{
//     //   // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
//     //   this.form.markAllAsTouched(); 
//     // }
 
//   }

// }

import { Component, OnInit } from '@angular/core';

// importamos las librerias de formulario que vamos a necesitar

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicio/autenticacion.service';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/servicio/auth.service';
import { TokenService } from 'src/app/servicio/token.service';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})

export class ModalLoginComponent implements OnInit {
  form: FormGroup;


  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;


  // Inyectar en el constructor el formBuilder

  constructor(private formBuilder: FormBuilder, private autenticacion: AutenticacionService, private ruta:Router, private tokenService: TokenService, private authService: AuthService, private router: Router){ 
    
  //Creamos el grupo de controles para el formulario de login

    this.form= this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(8)]],
      deviceInfo:this.formBuilder.group({
        deviceId: [""],
        deviceType: [""],
        notificationToken: [""]
      })
   })
  }

  ngOnInit() {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  get Password(){
    return this.form.get("password");
  }
 
  get Email(){
   return this.form.get("email");
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get EmailValid() {
    return this.Email?.touched && !this.Email?.valid;
  }
 

  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault;
    this.autenticacion.iniciarSesion(this.form.value).subscribe(data=>{
      console.log("DATA:" + JSON.stringify(data));
      this.ruta.navigate(['/menu'])
    }) 
 
    // if (this.form.valid){
    //   // Llamamos a nuestro servicio para enviar los datos al servidor
    //   // También podríamos ejecutar alguna lógica extra
    //   alert("Todo salio bien ¡Enviar formuario!")
    // }else{
    //   // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
    //   this.form.markAllAsTouched(); 
    // }
 
  }

  onLogin(): void{
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password); 
    this.authService.login(this.loginUsuario).subscribe(data =>{
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate([''])
      }, err =>{
        this.isLogged = false;
        this.isLogginFail = true;
        this.errMsj = err.error.mensaje;
        console.log(this.errMsj);
      })
  }


}






