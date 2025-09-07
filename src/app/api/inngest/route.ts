import { serve } from "inngest/next";
import { inngest } from "@/inngest/client";
import { meetingsProcessing } from "../../../inngest/functions";

// Expose Inngest handler
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    meetingsProcessing
  ],
});