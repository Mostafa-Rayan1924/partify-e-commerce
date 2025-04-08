"use client";
import { loginSchema } from "@/_components/validation/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import MainTitle from "@/_components/sharable/MainTitle";
import InputRerender from "@/_components/sharable/Input";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { loginFunc } from "@/store/AuthSlice/loginSlice";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginForm = () => {
  let { user, loading } = useSelector((state: RootState) => state.loginSlice);
  let router = useRouter();
  if (user.token) {
    router.push("/");
  }
  let dispatch = useDispatch<AppDispatch>();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    let params = {
      email: values.email,
      password: values.password,
    };
    let res: any = await dispatch(loginFunc(params)).unwrap();
    if (res.success) {
      form.reset();
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" container max-w-[600px] ">
        <MainTitle title="Welcome Back" />

        <div className=" border-border border-dotted border-2 p-4 mb-2 rounded-lg space-y-4 mx-auto">
          <InputRerender
            form={form}
            name="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
          />
          <InputRerender
            form={form}
            name="password"
            label="Password"
            type="text"
            placeholder="Enter your password"
          />

          <Button
            className={`w-full ${
              loading && "pointer-events-none bg-primary/70"
            }`}
            disabled={loading}
            type="submit">
            {loading ? <Loader2 className="animate-spin " /> : "Login"}
          </Button>
        </div>
        <Link href="/register">
          you don't have an account ?{" "}
          <span className="text-primary">sign up</span>
        </Link>
      </form>
    </Form>
  );
};

export default LoginForm;
