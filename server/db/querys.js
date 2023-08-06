
export const queries = {
    //Select all Items
    getAllUsers: "SELECT * FROM Usuarios",
    getAllEstudiantes: "SELECT * FROM UsuarioEstudiante;",
    getAllEventos: "SELECT * FROM MasterEventos;",
    getAllRegistros: "SELECT * FROM RegistrosEventos;",
    
    //Create new Items
    addNewUser: "INSERT INTO Usuarios (nombre_usuario,contra_usuario,tipo_usuario) VALUES (@nombre,@contra,@tipo)",
    addNewEstudiante: "INSERT INTO UsuarioEstudiante (id,nombre_usuario,contra_usuario,puntos_coprogramaticos,estado_estudiante) VALUES (@id,@nombre,@contra,@puntos,@estado)",
    addNewEvento: "INSERT INTO MasterEventos (nombre_evento,fecha_evento,lugar_evento,tipo_evento,descripcion_evento,image_evento,puntos_coprogramaticos) VALUES (@nombre,@fecha,@lugar,@tipo,@descrip,@image,@puntos)",
    addNewRegistro:"INSERT INTO RegistrosEventos (id_evento,id_usuario,id_estudiante) VALUES (@evento,@usuario,@estudiante)",
    
    //get by id
    getUserById: "SELECT * FROM Usuarios WHERE id = @id",
    getEstudiantesById: "SELECT * FROM UsuarioEstudiante WHERE id = @id",
    getEventoById: "SELECT * FROM MasterEventos WHERE id = @id",
    getRegistroById: "SELECT * FROM RegistrosEventos WHERE id = @id",

    //Updates
    updateUserById:"UPDATE Usuarios SET nombre_usuario=@nombre, contra_usuario=@contra,tipo_usuario=@tipo WHERE id=@id",
    updateEstudianteById: "UPDATE UsuarioEstudiante SET nombre_usuario=(@nombre), contra_usuario=(@contra),puntos_coprogramaticos=(@puntos),estado_estudiante=(@estado) WHERE id=@id",
    updateEventosById:"UPDATE MasterEventos SET nombre_evento=(@nombre) , fecha_evento=(@fecha),lugar_Evento=(@lugar), tipo_evento=(@tipo), descripcion_evento=(@descrip), image_evento=(@image), puntos_coprogramaticos=(@puntos) WHERE id=@id",
    updateRegistroById:"Update RegistrosEventos SET id_usuario=(@usuario), id_estudiante=(@estudiante) WHERE id=@id",

    //Deletes by id
    deleteUserById: "DELETE FROM [proyecto].[dbo].[Usuarios] WHERE id = @id",
    deleteEstudianteById: "DELETE FROM [proyecto].[dbo].[UsuarioEstudiante] WHERE id = @id",
    deleteEventoById: "DELETE FROM [proyecto].[dbo].[MasterEventos] WHERE id = @id",
    deleteRegistroById: "DELETE FROM [proyecto].[dbo].[RegistrosEventos] WHERE id = @id"
}