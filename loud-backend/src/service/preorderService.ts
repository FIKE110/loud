import { db } from "../database";
import { NewPreorder } from "../types";

export async function findPreorderByUserId(user_id:number){
    const preorder=await db.selectFrom("user_preorders").selectAll().where('user_id','=',user_id).executeTakeFirst()
    return preorder || null
}


export async function savePreorder(preorder:NewPreorder){
    await db.deleteFrom('user_preorders').where('user_id','=',preorder.user_id).execute();
    const newPreorder=await db.insertInto('user_preorders').values({
        user_id: preorder.user_id,
        package_code: preorder.package_code,
        package_price: preorder.package_price,
        status: preorder.status,
        payment_reference: preorder.payment_reference,
    }).returningAll().executeTakeFirst();

    return newPreorder || null;
} 


export async function updatePreorderStatus(user_id:number, status:NewPreorder['status']){
    await db.updateTable('user_preorders').set({status}).where('user_id','=',user_id).executeTakeFirst();
}