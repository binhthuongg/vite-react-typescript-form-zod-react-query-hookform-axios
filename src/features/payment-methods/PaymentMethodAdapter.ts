import PaymentMethodEntity from "./PaymentMethodEntity";
import { PaymentMethodResponseModel } from "./payment-method.model";
import { paymentMethodUtils } from "./payment-method.utils";

/**
 * class chuyển đổi về entity
 */
export class PaymentMethodAdapter {
  private paymentMethod: PaymentMethodEntity;
  constructor() {
    this.paymentMethod = new PaymentMethodEntity();
  }

  convertFromResponseToEntity(responseItem: PaymentMethodResponseModel) {
    if (responseItem.id) {
      this.paymentMethod.setId(responseItem.id);
    }
    this.paymentMethod.setName(responseItem.name || "");
    this.paymentMethod.setCode(responseItem.code || "");
    const foundPayment = paymentMethodUtils
      .getAllPaymentExtraInformation()
      .find((single) => single.code === responseItem.code);
    if (foundPayment) {
      if (!responseItem.image_url) {
        this.paymentMethod.setImageUrl(foundPayment.imageUrl);
      }
    }
    this.paymentMethod.setIsDefault(responseItem.is_default);
    this.paymentMethod.setEnabled(responseItem.enabled);
    if (responseItem.payment_provider) {
      this.paymentMethod.setPaymentProvider(responseItem.payment_provider);
    }
    return this.paymentMethod;
  }
}
