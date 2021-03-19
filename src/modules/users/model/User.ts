import { v4 as uuidV4 } from 'uuid';

class User {
  public readonly id: string;

  public name: string;

  public admin = false;

  public email: string;

  public created_at: Date;

  public updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };
