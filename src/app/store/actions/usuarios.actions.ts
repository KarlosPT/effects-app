import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const cargarUsuarios = createAction('[Usuarios] cargar Usuarios');
export const cargarUsuariosSucess = createAction(
    '[Usuarios] cargar Usuarios Success',
    props< { usuarios: Usuario[] }>()
);

export const cargarUsuariosError = createAction(
    '[Usuarios] cargar Usuarios Success',
    props< { payload: any }>()
);