import { env } from "../env";

export async function createGoalCompletion(goalId: string) {
  await fetch(`${env.VITE_API_URL}/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      goalId,
    }),
  })
}
