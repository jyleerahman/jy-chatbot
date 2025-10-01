import { openai } from "@ai-sdk/openai";
import type { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router'
import { streamText, convertToModelMessages, type UIMessage } from "ai";

export async function action({ request }: ActionFunctionArgs) {
    const { messages }: { messages: UIMessage[] } = await request.json();

    const result = streamText({
        model: openai("gpt-4.1-mini"),
        messages: convertToModelMessages(messages),
    });

    return result.toUIMessageStreamResponse();
}