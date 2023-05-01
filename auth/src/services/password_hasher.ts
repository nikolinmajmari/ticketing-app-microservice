import {scrypt,randomBytes} from "crypto";
import {promisify} from "util";

const scryptAsync = promisify(scrypt);

export default class PasswordHasher{
    static async toHash(password: string){
        const salt = randomBytes(8).toString("hex");
        const buff = (await scryptAsync(password,salt,64)) as Buffer;
        
        return `${buff.toString('hex')}.${salt}`;
    }

    static async compare(storedPassword:string,supliedPassword:string){
        const [hashedPassword,salt] = storedPassword.split(".");
        const buf = (await scryptAsync(supliedPassword,salt,64) as Buffer);
        return  buf.toString("hex") ===hashedPassword;
    }

}