import { BaseEntity } from "base/base.entity";
import PaymentMethodEntity from "./PaymentMethodEntity";

/**
 * entity: khai báo, getter, setter
 */
class PayMentMethodsEntity extends BaseEntity<PaymentMethodEntity[]> {
  private payments: PaymentMethodEntity[];

  constructor(payments?: PaymentMethodEntity[]) {
    let _payments: PaymentMethodEntity[] = [];
    if (payments) {
      _payments = payments;
    }
    super(_payments);
    this.payments = _payments;
  }

  getPayments() {
    return this.payments;
  }

  setPayments(payments: PaymentMethodEntity[]) {
    this.payments = payments;
  }

  findPaymentById(id: number) {
    return this.payments.find((single) => single.getId() === id);
  }

  addPayment(payment: PaymentMethodEntity) {
    this.payments.push(payment);
  }
}

export default PayMentMethodsEntity;
