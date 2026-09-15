import { z } from "zod";

export const inquiryTypes = [
  "investor",
  "strategic_partner",
  "technology_partner",
  "parent",
  "school",
] as const;

export const inquiryTypeLabels: Record<(typeof inquiryTypes)[number], string> = {
  investor: "Investor",
  strategic_partner: "Strategic Partner",
  technology_partner: "Technology Partner",
  parent: "Parent / Early Access",
  school: "School / Institution",
};

export const investorTypes = [
  "Angel investor",
  "Venture capital",
  "Family office",
  "Strategic / corporate investor",
  "Other",
];

export const investmentRanges = [
  "Under $50,000",
  "$50,000 – $250,000",
  "$250,000 – $1,000,000",
  "$1,000,000+",
  "Prefer not to say",
];

export const contactFormSchema = z
  .object({
    inquiryType: z.enum(inquiryTypes),
    name: z.string().trim().min(1, "Name is required").max(200),
    email: z.string().trim().email("Enter a valid email address").max(320),
    organization: z.string().trim().max(200).optional().or(z.literal("")),
    investorType: z.string().trim().max(120).optional().or(z.literal("")),
    investmentRange: z.string().trim().max(120).optional().or(z.literal("")),
    message: z.string().trim().min(10, "Please add a bit more detail (10+ characters)").max(4000),
    linkedinUrl: z
      .string()
      .trim()
      .url("Enter a valid URL")
      .max(500)
      .optional()
      .or(z.literal("")),
    phone: z.string().trim().max(40).optional().or(z.literal("")),
    consent: z.literal(true, {
      error: () => ({ message: "You must consent to be contacted" }),
    }),
  })
  .strict();

export type ContactFormInput = z.infer<typeof contactFormSchema>;

export const earlyAccessSchema = z
  .object({
    email: z.string().trim().email("Enter a valid email address").max(320),
    country: z.string().trim().max(120).optional().or(z.literal("")),
    isParentOrCaregiver: z.enum(["yes", "no"]).optional(),
    numberOfChildren: z.string().trim().max(20).optional().or(z.literal("")),
    ageRange: z.string().trim().max(60).optional().or(z.literal("")),
    preferredFormFactor: z.string().trim().max(60).optional().or(z.literal("")),
    interestArea: z.string().trim().max(120).optional().or(z.literal("")),
    consent: z.literal(true, {
      error: () => ({ message: "You must consent to be contacted" }),
    }),
  })
  .strict();

export type EarlyAccessInput = z.infer<typeof earlyAccessSchema>;
