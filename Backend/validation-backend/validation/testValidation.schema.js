import { email, z } from 'zod';

const customerSchema = z.object({
    name: z.string().min(3, 'Name must be 3 character long'),
    email: z.string().email('Invalid email'),
})

const paymentSchema = z.object({
    amount: z.coerce.number(),
    currency: z.string(),
    transactionId: z.string(),
    status: z.string(),
})

const dataSchema = z.object({
    customer: customerSchema,
    payment: paymentSchema
})

export const eventSchema = z.object({
    eventId: z.string(),
    eventType: z.string(),
    createdAt: z.string().datetime(),
    exp: z.string().datetime(),
    cardNumber: z.coerce.number(),
    data: dataSchema
})