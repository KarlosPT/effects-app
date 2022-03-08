import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError } from "rxjs";
import { of } from "rxjs";
import { map } from "rxjs";
import { tap,mergeMap } from "rxjs/operators";
import { UsuarioService } from "src/app/services/usuario.service";
import * as usuarioActions from '../actions/usuario.actions';
import { ActionReducerMap } from '@ngrx/store';


@Injectable()
export class UsuarioEffects{

    constructor(
        private actions$: Actions,
        private usuarioService: UsuarioService

    ){}

    cargarUsuario$ = createEffect(
        () => this.actions$.pipe(
            ofType( usuarioActions.cargarUsuario ),            
            mergeMap(
                (action) => this.usuarioService.getUserById( action.id )
                    .pipe(
                        map(user => usuarioActions.cargarUsuarioSucess({ usuario: user})),
                        catchError( err => of(usuarioActions.cargarUsuarioError({ payload: err })))
                        //catchError( err => {console.log(err)})
                    )
            )
        )
    );

}