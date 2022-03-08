import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const cargarUsuario = createAction(
    '[Usuario] cargar Usuario',
    props< { id:string }>()
    );

export const cargarUsuarioSucess = createAction(
    '[Usuario] cargar Usuario Success',
    props< { usuario: Usuario }>()
);

export const cargarUsuarioError = createAction(
    '[Usuario] cargar Usuarios Success',
    props< { payload: any }>()
);