import bcrypt from "bcrypt";

const encrypt = async (textToEncrypt: string | Buffer) => {
  return await bcrypt.hash(textToEncrypt, 10);
};

export default encrypt;
