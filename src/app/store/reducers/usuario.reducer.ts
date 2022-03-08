import { createReducer, on } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import { cargarUsuario, cargarUsuarioError, cargarUsuarioSucess } from '../actions';


export interface UsuarioState {
    id      : string,
    user    : Usuario,
    loaded  : boolean,
    loading : boolean, 
    error   : any
}

export const UsuarioInitialState: UsuarioState = {
    id      : null, 
    user    : null,
    loaded  : false,
    loading : false, 
    error   : null
}

const _UsuarioReducer = createReducer(UsuarioInitialState,

    on(cargarUsuario, (state, {id }) => ({ 
        ...state, 
        loading :true,
        id      :id
    })),

    on(cargarUsuarioSucess, (state, { usuario }) => ({ 
        ...state, 
        loading:false,
        loaded:true,
        user: { ...usuario }
    })),

    on(cargarUsuarioError, (state, { payload }) => ({ 
        ...state, 
        loading:false,
        loaded:false,
        error: payload
    })),

);

export function UsuarioReducer(state, action) {
    return _UsuarioReducer(state, action);
}