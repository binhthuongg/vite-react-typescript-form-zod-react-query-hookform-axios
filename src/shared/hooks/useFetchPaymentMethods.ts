import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { PaymentMethodResponseModel } from "features/payment-methods/payment-method.model";
import { paymentMethodServices } from "features/payment-methods/payment-method.services";
import { useDispatch } from "react-redux";
import {
  handleFetchApiError,
  handleTryCatchError,
  isFetchApiSuccessful,
} from "shared/utils/AppUtils";

export const fetchPaymentMethodsQueryKey = "fetchPaymentMethods";

function useFetchPaymentMethods(
  query?: any | null,
  queryOptions?: UseQueryOptions<PaymentMethodResponseModel[]>
) {
  const dispatch = useDispatch();

  const handleFetchData = async () => {
    let result: PaymentMethodResponseModel[] = [];
    // result = [
    //   {
    //     name: "Tiền mặt",
    //     is_default: false,
    //     enabled: true,
    //     id: 1,
    //     code: "cash",
    //   },
    //   {
    //     name: "Tiền mặt 2",
    //     is_default: false,
    //     enabled: false,
    //     id: 2,
    //     code: "cash",
    //   },
    //   {
    //     name: "Tiền mặt",
    //     is_default: true,
    //     enabled: true,
    //     id: 3,
    //     code: "cash",
    //   },
    //   {
    //     name: "Tiền mặt",
    //     is_default: true,
    //     enabled: true,
    //     id: 4,
    //     code: "cash",
    //   },
    //   {
    //     name: "Tiền mặt",
    //     is_default: true,
    //     enabled: true,
    //     id: 5,
    //     code: "cash",
    //   },
    // ];
    try {
      // return result;
      const response = await paymentMethodServices.getPaymentMethods();
      if (isFetchApiSuccessful(response)) {
        return response.data;
      } else {
        handleFetchApiError(
          response,
          "Danh sách phương thức thanh toán",
          dispatch
        );
        return result;
      }
    } catch (error) {
      handleTryCatchError(error);
      return result;
    }
  };

  const { data = [], ...rest } = useQuery({
    queryKey: [fetchPaymentMethodsQueryKey, query],
    queryFn: handleFetchData,
    ...queryOptions,
  });

  return {
    paymentMethods: data,
    ...rest,
  };
}

export default useFetchPaymentMethods;
