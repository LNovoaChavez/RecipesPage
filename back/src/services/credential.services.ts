import bcrypt from "bcrypt";
import { CredentialRepository } from "../repositories/credential.repository";
import { Credential } from "../entities/Credential";
import CreateCredentialDto from "../dtos/createCredential.dto";

export const createCredentialService = async (credentialDto: CreateCredentialDto): Promise<Credential> => {
    const { password } = credentialDto;
    const hashedPassword = await bcrypt.hash(password, 10);
    const credential = CredentialRepository.create({ password: hashedPassword });
    await CredentialRepository.save(credential);
    return credential;
}

export const checkPasswordService = async (password: string, hashedPassword: string): Promise<boolean> => {
    return bcrypt.compare(password, hashedPassword);
}