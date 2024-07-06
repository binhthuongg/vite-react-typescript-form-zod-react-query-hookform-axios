import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ContentContainer from "UI/layouts/ContentContainer";
import UrlConfig from "configs/url.config";
import { useRef } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
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

function QueryPage(props: Props) {
  const { title } = props;

  const ref = useRef<boolean>(true);

  const timeoutSeconds = 3;

  let timeOUt = useRef<NodeJS.Timeout | null>(null);

  const queryClient = useQueryClient();

  const handleSubmitValue = (value: InputProps) => {
    console.log("value", value);
  };

  const mutation = useMutation({
    mutationFn: (value: InputProps) => {
      // console.log("mutation", mutation);
      // console.log("ref.current", ref.current);

      if (timeOUt.current) {
        clearTimeout(timeOUt.current);
      }
      timeOUt.current = setTimeout(() => {
        ref.current = true;
      }, timeoutSeconds * 1000);

      if (!ref.current) {
        return new Promise<void>((resolve, reject) => {
          resolve();
        });
      }
      if (ref.current) {
        handleSubmitValue(value);
        ref.current = false;
      }

      return new Promise<void>((resolve, reject) => {
        resolve();
      });
    },
    onSuccess: () => {
      // console.log("I'm first!");
    },
    onMutate: () => {
      // console.log("onMutate");
    },
    onSettled: () => {
      // console.log("onSettled");
    },
  });

  const UserSchema: ZodType<InputProps> = z.object({
    email: z.string().email({ message: "Sai định dạng email" }),

    // yearsOfExperience: z
    //   .number({
    //     required_error: "required field",
    //     invalid_type_error: "Years of Experience is required",
    //   })
    //   .min(1)
    //   .max(10),
    password: z
      .string()
      .min(10, { message: "Password is too short" })
      .max(20, { message: "Password is too long" }),
    confirmPassword: z.string(),
  });
  // .refine((data) => data.password === data.confirmPassword, {
  //   message: "Passwords do not match",
  //   path: ["confirmPassword"], // path of error
  // });

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "email@gmail.com",
      password: "confirmPassword331",
      confirmPassword: "confirmPassword",
    },
    resolver: zodResolver(UserSchema),
  });
  const onSubmit: SubmitHandler<InputProps> = (data, eg) => {
    // console.log("data", data);
    console.log("eg", eg);
    mutation.mutate(data);
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
          name: "QueryPage",
          path: `${UrlConfig.form}`,
        },
      ]}
    >
      <StyledComponent>
        <div className="pageWrapper">QueryPage</div>
        /* "handleSubmit 33" will validate your inputs before invoking
        "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
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

export default withAuthRoute(QueryPage);
