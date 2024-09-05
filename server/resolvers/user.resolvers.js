import  { users } from '../dummyData/data.js'

const userResolver = {
    Query :{
        users : () => {
            return users
        },

        user : (_, { id }) => {
            return users.find(user => user.id === id)
        }
    } ,
    Mutation :{} 
}

export default userResolver;