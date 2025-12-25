import { db } from "../database";
import { Package } from "../types";

export async function findPackagePriceByPackageCode(package_code: Package['code']) {
    return await db.selectFrom('packages').where('code', '=', package_code).select(['launch_price']).executeTakeFirst();
}
