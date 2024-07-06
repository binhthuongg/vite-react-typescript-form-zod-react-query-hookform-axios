export interface PaymentMethodModel {
  id: number;
  code: string;
  name: string;
  enabled: boolean;
  is_default: boolean;
  payment_provider: string | null;
  image_url: string | null;
}

export interface PaymentMethodToggleRequestModel {
  channels: string[] | null;
  client_ids: string[] | null;
  payment_providers: string[] | null;
  enabled: boolean;
}

export interface PaymentMethodToggleResponseModel {
  channels: string[] | null;
  client_ids: string[] | null;
  payment_providers: string[] | null;
  enabled: boolean;
}

export interface PaymentMethodResponseModel {
  code: string | null;
  id: number | null;
  name: string | null;
  is_default: boolean;
  enabled: boolean;
  payment_provider?: string | null;
  image_url?: string | null;
}
