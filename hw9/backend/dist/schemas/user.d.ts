import { z } from 'zod';
export declare const CreateUserSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    phone: z.ZodString;
    category: z.ZodString;
    is_active: z.ZodDefault<z.ZodBoolean>;
    avatar_url: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
}, "strip", z.ZodTypeAny, {
    name: string;
    email: string;
    phone: string;
    category: string;
    is_active: boolean;
    avatar_url?: string | undefined;
}, {
    name: string;
    email: string;
    phone: string;
    category: string;
    is_active?: boolean | undefined;
    avatar_url?: string | undefined;
}>;
export type CreateUserInput = z.infer<typeof CreateUserSchema>;
//# sourceMappingURL=user.d.ts.map