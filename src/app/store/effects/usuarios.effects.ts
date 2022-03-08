import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError } from "rxjs";
import { of } from "rxjs";
import { map } from "rxjs";
import { tap,mergeMap } from "rxjs/operators";
import { UsuarioService } from "src/app/services/usuario.service";
import * as usuariosActions from '../actions/usuarios.actions';


@Injectable()
export class UsuariosEffects{

    constructor(
        private actions$: Actions,
        private usuariosService: UsuarioService

    ){}

    cargarUsuarios$ = createEffect(
        () => this.actions$.pipe(
            ofType( usuariosActions.cargarUsuarios ),            
            mergeMap(
                () => this.usuariosService.getUsers()
                    .pipe(
                        map(users => usuariosActions.cargarUsuariosSucess({ usuarios: users})),
                        catchError( err => of(usuariosActions.cargarUsuariosError({ payload: err })))
                        //catchError( err => {console.log(err)})
                    )
            )
        )
    );

}