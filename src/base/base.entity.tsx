export abstract class BaseEntity<T> {
  protected readonly id: number;
  constructor(props: T, id?: number) {
    this.id = id || new Date().getTime();
  }
}
