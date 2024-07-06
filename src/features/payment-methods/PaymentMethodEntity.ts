import { BaseEntity } from "base/base.entity";
import { PaymentMethodModel } from "./payment-method.model";

/**
 * entity: khai báo, getter, setter
 * chỉ áp dụng trong đối tượng của nó
 */
class PaymentMethodEntity extends BaseEntity<PaymentMethodModel> {
  private payment: PaymentMethodModel;
  constructor(payment?: PaymentMethodModel) {
    let _payment: PaymentMethodModel;
    if (payment) {
      _payment = payment;
    } else {
      _payment = {
        id: 1,
        code: "",
        enabled: true,
        is_default: true,
        name: "",
        payment_provider: "",
        image_url: "",
      };
    }
    super(_payment);
    this.payment = _payment;
  }

  public getId(): number {
    return this.payment.id;
  }
  public setId(value: number) {
    this.payment.id = value;
  }

  public getCode(): string {
    return this.payment.code;
  }
  public setCode(value: string) {
    this.payment.code = value;
  }

  public getName(): string {
    return this.payment.name;
  }
  public setName(value: string) {
    this.payment.name = value;
  }

  public getEnabled(): boolean {
    return this.payment.enabled;
  }
  public setEnabled(value: boolean) {
    this.payment.enabled = value;
  }

  public getIsDefault(): boolean {
    return this.payment.is_default;
  }
  public setIsDefault(value: boolean) {
    this.payment.is_default = value;
  }

  public getPaymentProvider(): string | null {
    return this.payment.payment_provider;
  }
  public setPaymentProvider(value: string | null) {
    this.payment.payment_provider = value;
  }

  public getImageUrl(): string | null {
    return this.payment.image_url;
  }
  public setImageUrl(value: string | null) {
    this.payment.image_url = value;
  }
}

export default PaymentMethodEntity;
