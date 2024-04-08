import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'Explain technical concepts',
    message: `What is a "serverless function"?`
  },
  {
    heading: 'Summarize an article',
    message: 'Summarize the following article for a 2nd grader: \n'
  },
  {
    heading: 'Draft an email',
    message: `Draft an email to my boss about the following: \n`
  }
]

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <img src="pitch_sonic_logo_clean_purple.png" alt="Pitch Sonic" className="w-max h-auto" />
        <h2 className="text-lg font-light">
          <em>Develop</em> and<em> deploy</em> specialist jewellery knowledge,<em> faster </em>than a JET.
        </h2>
        <br/>
        <p className="leading-normal text-muted-foreground">
        Pitch Sonic delivers instant product insights, leveraging high-speed natural language processing and cutting edge technology to ensure low latency responses which exceed leading benchmarks. It facilitates in-depth analysis of product features, real-time pricing data, and local market price comparisons.
        </p>
        <p className="leading-normal text-muted-foreground">
          Compare product specifications, answer customer questions, and craft and clean a compelling sales pitch - all between consultations. 
        </p>
        <br/>
        <p className="text-lg font-light">
          Blink <em>or</em> it's gone.
        </p>
        <p className="leading-normal text-muted-foreground">
          Actionable insights in <b>1 second or less</b> or access is <b>free</b>.
        </p>
      </div>
    </div>
  )
}
