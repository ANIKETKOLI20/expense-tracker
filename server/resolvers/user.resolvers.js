import User from '../models/user.model.js'

const userResolver = {
    Query: {
		authUser: async (_, __, context) => {
			try {
				const user = await context.getUser();
				return user;
			} catch (err) {
				console.error("Error in authUser: ", err);
				throw new Error("Internal server error");
			}
		},
		user: async (_, { userId }) => {
			try {
				const user = await User.findById(userId);
				return user;
			} catch (err) {
				console.error("Error in user query:", err);
				throw new Error(err.message || "Error getting user");
			}
		},
	},
	
    Mutation :{
        signup: async (_,{input},context) => { // context is from expressMiddleware
            try {
                const {username , name , password , gender} = input

                if ( !username || !name || !password || !gender){
                    throw new Error('All fields are required.')
                }

                const exstingUser = await User.findOne({ username})
                if (existingUser){
                    throw new Error('Username already exists.')
                }

                const hashedPassword = await bcrypt.hash(password , 10)

                const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
				const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
                
                const newUser = new User({
                    username,
                    name,
                    password: hashedPassword,
                    profilePicture: gender === 'male'? boyProfilePic : girlProfilePic,
                    gender
                })

                await newUser.save()
                await context.login(newUser)
                return newUser
            } catch (error) {
                throw new Error(error.message || "Internal server error")
                console.log("Error in signUp: " , error)
            }
        },

        logout: async (_, __, context) => {
			try {
				await context.logout();
				context.req.session.destroy((err) => {
					if (err) throw err;
				});
				context.res.clearCookie("connect.sid");

				return { message: "Logged out successfully" };
			} catch (err) {
				console.error("Error in logout:", err);
				throw new Error(err.message || "Internal server error");
			}
		},
    } 
}

export default userResolver;