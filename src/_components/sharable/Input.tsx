import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { loginSchema } from "../validation/loginSchema";
interface InputProps {
  form: UseFormReturn<z.infer<typeof loginSchema>>;
  name: "email" | "password";
  label: string;
  type: string;
  placeholder: string;
}
const InputRerender = ({
  form,
  name,
  label,
  type,
  placeholder,
}: InputProps) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input type={type} placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InputRerender;
