import { randomInt } from 'node:crypto';

interface CreateParams {
  lower: boolean;
  upper: boolean;
  numbers: boolean;
  specials: boolean;
}

export class WordGenerator {
  private static readonly letters = 'abcdefghijklmnopqrstuvwxyz';
  private static readonly numbers = '1234567890';
  private static readonly specials = '.,*@!-+&%$#';

  private static createPool(params: Required<CreateParams>): string {
    let pool = '';

    if (params.lower) pool += this.letters;
    if (params.upper) pool += this.letters.toUpperCase();
    if (params.numbers) pool += this.numbers;
    if (params.specials) pool += this.specials;

    return pool;
  }

  private static genWord(pool: string, size: number): string {
    let word = '';

    for (let i = 0; i < size; i++) {
      const randomIndex = randomInt(0, pool.length);

      word += pool[randomIndex];
    }

    return word;
  }

  public static execute(size = 6, options: Partial<CreateParams> = {}): string {
    const safeSize = size <= 0 ? 6 : size;

    const {
      lower = true,
      upper = false,
      numbers = false,
      specials = false,
    } = options;

    const pool = this.createPool({ lower, upper, numbers, specials });

    if (!pool.length) return '';

    return this.genWord(pool, safeSize);
  }
}
