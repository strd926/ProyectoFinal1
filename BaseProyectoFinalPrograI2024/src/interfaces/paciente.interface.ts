export interface Paciente {
    id_paciente: number
    nombre: string
    fecha_nacimiento: number
    direccion: string
    telefono: number
    alergias: string[]
    medicamentos_actuales: string[]
    condiciones_medicas: string[]
}
