
import { db } from "../database";
import { NewUser, User } from "../types";

export async function saveUser(user:NewUser):Promise<User | null>  {
    const existingUser = await findUserByEmail(user.email);

    if (existingUser) return existingUser

    const newUser=await db.insertInto('users').values({
        first_name: user.first_name,
        email: user.email,
        gender: user.gender,
        last_name: user.last_name,
    }).returningAll().executeTakeFirst();

    if(!newUser){
        return null;
    }

    return newUser;
}



export async function findUserByEmail(email:string):Promise<User | null> {
    const user=await db.selectFrom('users').where('email', '=', email).selectAll().executeTakeFirst();
    return user || null;
}
