import jwt from "jsonwebtoken";
class JWT {
  private secretKey = process.env.SECRET_KEY as string;

  //Firmar token
  sign(data: any): string {
    return jwt.sign(
      { id: data.id, user: data.user, nombre: data.nombre, rol: data.rol },
      this.secretKey,
      { expiresIn: "24h" }
    );
  }

  //verificiar
  verify(token: string): string {
    try {
      return jwt.verify(token, this.secretKey) as string;
    } catch (error: any) {
      return "error";
    }
  }
}

export default JWT;
