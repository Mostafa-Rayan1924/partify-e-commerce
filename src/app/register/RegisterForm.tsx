"use client";
import MainTitle from "@/_components/sharable/MainTitle";
import { RegisterSchema } from "@/_components/validation/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import { SignupFunc } from "@/store/AuthSlice/SignupSlice";
import { Loader2 } from "lucide-react";
const RegisterForm = () => {
  let { user, loading } = useSelector((state: RootState) => state.SignSlice);
  console.log(user);
  let router = useRouter();
  if (user.token) {
    router.push("/");
  }
  let dispatch = useDispatch<AppDispatch>();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  async function onSubmit(values: z.infer<typeof RegisterSchema>) {
    let params = {
      email: values.email,
      password: values.password,
      username: values.username,
      phone: values.phone,
      location: values.location,
    };
    let res: any = await dispatch(SignupFunc(params)).unwrap();
    console.log(res);
    if (res.status == 200) {
      form.reset();
    }
  }

  return (
    <section className="w-full">
      <MainTitle title="Register" />
      <div className="container max-w-[600px] border-2 border-border border-dotted rounded-lg p-4 ">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-2 mb-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your username" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your Password" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your location (optional)"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter your phone (optional)"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              className={`w-full ${
                loading && "pointer-events-none bg-primary/70"
              }`}
              disabled={loading}
              type="submit">
              {loading ? <Loader2 className="animate-spin " /> : "Signup"}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default RegisterForm;
