import { z } from "zod";

export const signupStudentFormSchema = z.object({
  email: z.string(),
  password: z
    .string()
    .min(8, { message: "Password Should be atleast 8 letters long. " })
    .regex(/[a-zA-Z]/, { message: "Contain at least one letter. " })
    .regex(/[0-9]/, { message: "Contain at least one number. " })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Contain at least one special character. ",
    })
    .trim(),
  firstName: z.string().regex(/[a-zA-Z]/, {
    message: "Name should contain alphabetic letters only",
  }),

  lastName: z.string().regex(/[a-zA-Z]/, {
    message: "Name should contain alphabetic letters only",
  }),

  contact: z
    .string()
    .regex(/[0-9]{10}/, { message: "Enter valid Phone Number" })
    .min(10)
    .max(10, { message: "Enter valid Phone Number" }),

  address: z.string(),

  state: z.string().regex(/[a-zA-Z]/, {
    message: "State should contain alphabetic letters only",
  }),

  gradYear: z
    .string()
    .regex(/[0-9]{4}/, { message: "Enter a valid Graduation Year" }),
});

export const signupProfFormSchema = z.object({
  email: z
    .string()
    .regex(/@iitkgp.ac.in/, {
      message: "Please enter a valid kgp email.",
    })
    .trim(),
  password: z
    .string()
    .min(8, { message: "Password Should be atleast 8 letters long. " })
    .regex(/[a-zA-Z]/, { message: "Contain at least one letter. " })
    .regex(/[0-9]/, { message: "Contain at least one number. " })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Contain at least one special character. ",
    })
    .trim(),
  firstName: z.string().regex(/[a-zA-Z]/, {
    message: "Name should contain alphabetic letters only",
  }),

  lastName: z.string().regex(/[a-zA-Z]/, {
    message: "Name should contain alphabetic letters only",
  }),

  contact: z
    .string()
    .regex(/[0-9]{10}/, { message: "Enter valid Phone Number" })
    .min(10)
    .max(10, { message: "Enter valid Phone Number" }),

  linkedin: z.string().url({ message: "Provide a valid url" }),

  scholar: z.string().url({ message: "Provide a valid url" }),

  completeYear: z
    .string()
    .regex(/[0-9]{4}/, { message: "Enter a valid Complete Year" }),
  teachingExp: z
    .string()
    .regex(/[0-9]/, { message: "Enter valid teaching exp" }),
  researchExp: z
    .string()
    .regex(/[0-9]/, { message: "Enter valid research exp" }),
});

export const SigninFormSchema = z.object({
  email: z.string().email({ message: "Please Enter a valid email. " }).trim(),
});

export type FormState =
  | {
      errors?: {
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;
