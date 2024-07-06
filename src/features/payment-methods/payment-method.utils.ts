import { getArrayFromObject } from "utils/AppUtils";
import BankIcon from "./images/BankIcon.svg";
import CashIcon from "./images/CashIcon.svg";
import MomoQRIcon from "./images/MomoQRIcon.svg";
import PointIcon from "./images/PointIcon.svg";
import VnPayQRIcon from "./images/VnPayQRIcon.svg";
import BaoKimIcon from "./images/BaoKimIcon.svg";
import CardIcon from "./images/CardIcon.svg";
import ZaloPayQRIcon from "./images/ZaloPayQRIcon.svg";
import MBQRIcon from "./images/MBQRIcon.svg";

export const paymentMethodUtils = {
  paymentExtraInformation: {
    cash: {
      code: "cash",
      imageUrl: CashIcon,
    },
    point: {
      code: "point",
      imageUrl: PointIcon,
    },
    card: {
      code: "card",
      imageUrl: CardIcon,
    },
    bank_transfer: {
      code: "bank_transfer",
      imageUrl: BankIcon,
    },
    momo: {
      code: "momo",
      imageUrl: MomoQRIcon,
    },
    vn_pay: {
      code: "vn_pay",
      imageUrl: VnPayQRIcon,
    },
    baokim: {
      code: "baokim",
      imageUrl: BaoKimIcon,
    },
    zalopay: {
      code: "zalopay",
      provider: "zalopayProvider",
      imageUrl: ZaloPayQRIcon,
    },
    mb_qr: {
      code: "mb_qr",
      imageUrl: MBQRIcon,
    },
  },

  getAllPaymentExtraInformation: () => {
    return getArrayFromObject(paymentMethodUtils.paymentExtraInformation);
  },
};
