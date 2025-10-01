import { openai } from "@ai-sdk/openai";
import type { ActionFunctionArgs, LoaderFunctionArgs } from 'react-router'
import { streamText, convertToModelMessages, type UIMessage, tool } from "ai";
import { z } from 'zod';

export async function action({ request }: ActionFunctionArgs) {
    const { messages }: { messages: UIMessage[] } = await request.json();

    const result = streamText({
        model: openai("gpt-4.1-mini"),
        messages: convertToModelMessages(messages),
        tools: {
            weather: tool({
                description: 'Get the weather in a location',
                inputSchema: z.object({
                    location: z.string().describe('The location to get the weather for'),
                }),
                execute: async ({ location }) => ({
                    location,
                    temperature: 72 + Math.floor(Math.random() * 21) - 10,
                }),
            }),
        },

    });

    return result.toUIMessageStreamResponse();
}