import bcrypt from "bcrypt";

const encrypt = async (senha: string | Buffer) => {
  return await bcrypt.hash(senha, 10);
};

export default encrypt;
