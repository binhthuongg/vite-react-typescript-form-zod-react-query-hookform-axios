import { zodResolver } from "@hookform/resolvers/zod";
import ContentContainer from "UI/layouts/ContentContainer";
import UrlConfig from "configs/url.config";
import {
  Controller,
  FieldErrors,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import withAuthRoute from "shared/HOCs/withAuthRoute";
import { z, ZodType } from "zod";
import { StyledComponent } from "./styles";

type Props = {
  title: string;
};

type InputProps = {
  email: string;
  password: string;
  confirmPassword: string;
};

function FormPage(props: Props) {
  const { title } = props;

  const UserSchema: ZodType<InputProps> = z
    .object({
      email: z.string().email({ message: "Sai định dạng email" }),

      yearsOfExperience: z
        .number({
          required_error: "required field",
          invalid_type_error: "Years of Experience is required",
        })
        .min(1)
        .max(10),
      password: z
        .string()
        .min(10, { message: "Password is too short" })
        .max(20, { message: "Password is too long" }),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"], // path of error
    });

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "email@gmail.com",
      password: "",
      confirmPassword: "confirmPassword",
    },
    resolver: zodResolver(UserSchema),
  });
  const onSubmit: SubmitHandler<InputProps> = (data) => {
    console.log("data", data);
  };

  const onError = (errors?: FieldErrors<InputProps>) => {
    console.log("errors", errors);
  };
  return (
    <ContentContainer
      title={title}
      breadcrumb={[
        {
          name: "Tổng quan",
          path: UrlConfig.HOME,
        },
        {
          name: "FormPage",
          path: `${UrlConfig.form}`,
        },
      ]}
    >
      <StyledComponent>
        <div className="pageWrapper">FormPage</div>
        /* "handleSubmit" will validate your inputs before invoking "onSubmit"
        */
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input defaultValue="test" {...register("email")} />
          {errors.email && <span>{errors.email.message}</span>}
          {/* include validation with required or other standard HTML validation rules */}
          {/* <input {...register("password", { required: true })} /> */}
          <Controller
            name="password"
            defaultValue="ggg"
            control={control}
            render={(props) => (
              <input
                onChange={(value) => {
                  console.log("value", value);
                  props.field.onChange(value);
                }}
                value={props.field.value}
              />
            )}
          />
          {/* errors will return when field validation fails  */}
          {errors.password && <span>{errors.password.message}</span>}

          <input type="submit" />
        </form>
      </StyledComponent>
    </ContentContainer>
  );
}

export default withAuthRoute(FormPage);
