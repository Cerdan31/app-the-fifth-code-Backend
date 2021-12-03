const { gql } = require('apollo-server-express')
const typeDefs = gql`
    type Proyecto{
        _id: ID
        name: String
        generalObjective: String
        specificObjectives: [String]
        budget: Float
        startDate: String
        endDate: String
        leader_id: String
        status: String      
    }

    type Usuario{
        _id: ID
        fullName: String
        identification: String
        email: String
        password: String
        role: String
        status: String
    }
    
    type Query{
        proyectos: [Proyecto]
        proyecto(name: String): Proyecto
        getProyecto(name:String): Proyecto
        usuarios: [Usuario]
        getUsuario(identification: String): Usuario
    }

    input ProyectoInput{
        name: String
        generalObjective: String
        specificObjectives: [String]
        budget: Float
        startDate: String
        endDate: String
        leader_id: String
        status: String 
    }

    input UsuarioInput{
        fullName: String
        identification: String
        email: String
        password: String
        role: String
        status: String
    }

    type Mutation{
        createProyecto(Proyecto:ProyectoInput): String 
        activeProyecto(name:String): String 
        deleteProyecto(name1:String): String
        createUsuario(Usuario: UsuarioInput): String
        updateStatusUsuario(identification: String, status: String): String
        updateUsuario(_id: ID, fullName: String, identification: String, email: String, password: String, role: String, status: String): String
    }
    
`


module.exports = typeDefs