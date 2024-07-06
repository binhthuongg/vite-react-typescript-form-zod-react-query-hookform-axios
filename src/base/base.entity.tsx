import { v4 as uuidv4 } from "uuid";

export abstract class BaseEntity<T> {
  protected readonly id: string;
  constructor(props: T, id?: string) {
    this.id = id || uuidv4();
  }
}
