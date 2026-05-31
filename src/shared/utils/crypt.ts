import * as bcrypt from 'bcrypt';

export class Crypt {
  private static readonly salts = 10;

  public static async hashPassword(password: string): Promise<string> {
    const hash = await bcrypt.hash(password, this.salts);

    return hash;
  }

  public static async compare(input: string, hash: string): Promise<boolean> {
    const valid = await bcrypt.compare(input, hash);

    return valid;
  }
}
