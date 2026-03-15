import { z } from "zod"

const MIN = 1
const MAX = 9999
const RANGE_MSG = `Enter a natural number from ${MIN} to ${MAX}`

export const cistercianFormSchema = z.object({
  number: z
    .number({ message: RANGE_MSG })
    .int(RANGE_MSG)
    .min(MIN, RANGE_MSG)
    .max(MAX, RANGE_MSG),
})

export type CistercianFormValues = z.infer<typeof cistercianFormSchema>
