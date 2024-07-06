import { paymentGatewayBaseAxios } from "base/base.axios";
import BaseResponse from "base/base.model";
import {
  PaymentMethodResponseModel,
  PaymentMethodToggleRequestModel,
  PaymentMethodToggleResponseModel,
} from "./payment-method.model";

const paymentGatewayApi = "api/payment-gateways";

export const paymentMethodServices = {
  toggle: (
    body: PaymentMethodToggleRequestModel
  ): Promise<BaseResponse<PaymentMethodToggleResponseModel>> => {
    const url = `${paymentGatewayApi}/toggle.json`;
    return paymentGatewayBaseAxios.put(url, body);
  },

  getPaymentMethods: (): Promise<
    BaseResponse<PaymentMethodResponseModel[]>
  > => {
    const url = `${paymentGatewayApi}/payment-methods.json`;
    return paymentGatewayBaseAxios.get(url);
  },
};
