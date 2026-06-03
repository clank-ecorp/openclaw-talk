

## I. Opening: Setting Context (and Why I'm Doing This Talk)

- Before I begin, hold questions until the end — most will get answered as I go through my slides
- OpenClaw was released January 30, 2026 and went viral — it's the fastest-growing open-source project ever to exist (250K+ GitHub stars by early March)
- Jensen Huang, CEO of NVIDIA, called it the "iPhone Moment" for AI — and he's not wrong
- For those who spend time building with ChatGPT, Gemini, Claude — once you start using OpenClaw you'll recognize how it's "leveling up" your productivity
- The key shift: instead of *asking* an AI questions, you *delegate* tasks. OpenClaw can read messages, send emails, manage calendars, automate workflows, and act across real systems — all through messaging apps you already use (WhatsApp, Discord, Slack, Telegram, iMessage)

**...HOWEVER...**

- OpenClaw is a very permissive system
- I'm going to cover my workflow AND how I keep it secure

---

## II. Disclosures & General AI Tips


### AI moves miles each day
- Anyone that says they are an expert or on the cutting edge probably isn't
- You can spend all your time researching the latest and greatest, or...

### Optimize the flow that works best for YOU
- Focus on what gives you the leverage you need to get to your end goal
- Personally, I lean heavily on Claude because I understand their ecosystem and platform the most
- What I'm demoing today is what I use in my workflow. I'm sure you all have your own tools/platforms/models — I'm not here to say mine is the golden standard (see bullet 1). It simply works best for me and how I leverage AI in my work

### Pattern match across tools
- This is the meta-takeaway: across tools, the most important thing you can do is pattern match
- Almost every tool/model/platform has the same concepts, they're just applied slightly differently
  - OpenClaw's core loop (input → context → model → tools → repeat → reply) is the same pattern Claude Code uses. Every serious agent framework runs some version of it.
- When in doubt, just ask the model how you can work with it better or what you're not fully utilizing
- Peter Steinberger (OpenClaw's creator): **"AI is an infinitely patient explaining machine"**

---

## III. Follow the Crowd, Selectively

- I wasn't an early adopter of OpenClaw
  - Had the same concerns as others about security and data leaks
  - Waited until I could isolate it into its own environment without incurring the cost of buying a brand new Mac Mini
- Some sage advice I got early in my tech career: **if you wait around long enough, someone will build the tools you need to do your job, meaning you don't have to**
  - By not jumping into OpenClaw right away:
    - Got a more stable version of the software (the project releases roughly every 2 days — the early versions were rough)
    - Got a lot of people smarter than myself to figure out the problems with using it
    - Community-contributed documentation, security guides, and best practices emerged

---

## IV. My Personal Journey with OpenClaw

_Workflow evolution — three phases:_

1. **Prompting** — Same as using ChatGPT or Claude, just in a different wrapper
2. **Co-piloting** — Running tasks side-by-side, checking in frequently, holding its hand
3. **Delegating** — "I'm going to bed, you make the decisions"

---

## V. Demystifying the Setup

_This is probably the most painful part, but we're not in February anymore — things have gotten a lot easier._

### Getting started
- Go to openclaw.ai and follow the Quick Start — the goal is to start using it, you don't have to have it completely tricked out on Day 1
- **HOWEVER** -- OpenClaw is very permissive by default. Assume it can execute commands, access files, and automate workflows on your machine.

### Hardware / hosting options
- **My recommendation: run OpenClaw within a VM on your computer**
  - Isolates OpenClaw from your personal data — this is the key security boundary
  - You don't need a $700 Mac Mini
- Buy a hosting plan (Hostinger, Viktor, etc.)
  - Easier to get running, but you don't own the machine, which has its own risks
  - Token spending constraints if using subscription plans (at least with Anthropic's $200/mo plan)

### My actual setup process
- OpenClaw has docs on this, but I just used ChatGPT to give me step-by-step instructions from a fresh VM
- The pain is front-loaded — once you're set up, you're set up

---

## VI. Data Segregation & Security

### The concept of "zero-trust"
- Safest approach: separate accounts for everything, share only what's needed
- Falls under the "pain to set up" category — you have to manually create all of these
- But once you do it, you're done

### Meet Clank _(my OpenClaw agent)_

Clank has his own:
- iCloud Account
- Discord Account
- Email Address
- 1Password Account
- GitHub Username
- Shared Claude account (only because I'm not paying for two $200/mo subscriptions)

### Why all of the above? Because of Integrations.

OpenClaw's power comes from connecting to external services, and every connection is a potential attack surface:

- **ClawHub** — The public skills registry (2,800+ community-contributed skills)
  - Contains Skills and Plugins that extend what your agent can do
  - ⚠️ These are NOT endorsed by OpenClaw — buyer beware
  - Always do your own diligence before downloading/installing something
  - You reduce your attack surface by following the zero-trust steps above and cordoning OpenClaw off from your personal data
- **MCPs (Model Context Protocol)** — How AI integrates with third-party services
  - MCP establishes three core primitives: Tools (functions the agent can call), Resources (data sources it can read), and Prompts (reusable workflow templates)
  - Out of scope for this talk, but the key point: MCP lets OpenClaw dynamically discover and connect to any compatible service
- **APIs** — Direct integrations with external services
- Sky is the limit — you can add voice via ElevenLabs and Whisper, browser automation, and more

---

## VII. Sharing Data — Building Your Knowledge Base

Once your agent is isolated and secured, you selectively share what it needs:

- Shared cloud drives (Google Drive, Dropbox)
- GitHub repos
- Obsidian Vaults
- Specific project directories

The principle: your agent gets access to what it needs, not access to everything.

---

## VIII. OpenClaw Core Concepts

_Now that you have the setup and security foundations, here's what's actually running under the hood._

### The Three-Layer Architecture

Think of OpenClaw like a body:

1. **Channel Layer (Ears & Mouth)** — Messaging adapters. WhatsApp, Telegram, Slack, Discord, iMessage, etc. all connect to one Gateway process. These normalize incoming messages from any platform into a standard format.
2. **Brain Layer (Agent Runtime)** — Where the LLM reasoning happens. Your agent's instructions, personality, model configuration, and memory live here. Model-agnostic: Claude, GPT, Gemini, local models via Ollama — you pick the model, OpenClaw handles routing.
3. **Body Layer (Hands)** — Tools, browser automation, file access, and long-term memory. This turns conversation into action: opening web pages, filling forms, reading documents, sending messages on your behalf.

**The Gateway** is the hub that ties it all together — a long-running process that manages sessions, routing, and dispatching.

### Agents

- Your AI persona, configurable in `~/.openclaw/openclaw.json`
- Has a name, role description, and model assignment (primary + fallback chain)
- Can run one agent (default) or multiple specialized agents side-by-side (e.g., email triage agent, scheduling agent, research agent)
- The agent's identity, rules, and capabilities are composed from **markdown files on disk** — not code. This is what makes it accessible.

### Tools vs. Plugins vs. Skills

People confuse these — they're three distinct layers:

- **Tools** — Built-in atomic operations. File read, shell execute, browser actions. Always available out of the box.
- **Plugins** — Installable code packages with lifecycle hooks. Think of these like app extensions.
- **Skills** — The big one. Skills are **markdown documents** (SKILL.md) that teach your agent how to use tools for specific workflows. Natural language instructions, not code.
  - Example: a "Spotify DJ" skill teaches the agent to control playback and curate playlists. A "News Summarizer" skill scans news sites and delivers a morning briefing.
  - Install from ClawHub: `openclaw skills install <skill-name>`

### Memory

LLMs are stateless — every conversation starts fresh. OpenClaw solves this:

- **MEMORY.md** — Long-term facts in human-readable markdown
- **Daily logs** — Running context
- **SQLite + vector embeddings** — Machine-efficient search layer underneath

You can read your memory files in VS Code while the agent uses optimized search under the hood. Memory survives restarts, updates, and migrations.

### Automation: Cron Jobs, Heartbeat, and Hooks

This is what makes OpenClaw **autonomous** — the shift from reactive to proactive:

- **Cron Jobs** — Your agent's calendar. Precise scheduling.
  - "Every Friday at 5 PM, generate a weekly report"
  - "Every morning at 8, check my email and surface what's urgent"
  - Persisted in `~/.openclaw/cron/jobs.json` — survives Gateway restarts
- **Heartbeat** — Your agent's pulse. The subtlest and arguably most powerful feature.
  - Wakes up every N minutes, runs through a checklist (HEARTBEAT.md), decides if anything needs attention, stays quiet if nothing matters
  - Instead of creating a dozen cron jobs that each monitor one thing, heartbeat gives the agent a single, regular moment to look around
  - This is what makes it feel like a colleague quietly keeping things on track
- **Hooks** — Event-driven triggers. Something happens (GitHub push, new email via webhook) → agent reacts
- **Standing Orders** — Persistent context and authority boundaries that tell the agent what it's allowed to do

**Key insight:** "OpenClaw won't do anything autonomously until you configure the triggers." The power is dormant until you set it up. Cron for precision, Heartbeat for awareness, Hooks for reactions.

### The Seven-Stage Agentic Loop _(for the curious)_

Every message flows through:
1. **Normalize** — Standardize input from whatever platform
2. **Route** — Which agent handles this?
3. **Assemble Context** — Package history, memory, instructions, skill list
4. **Infer** — Send to the LLM
5. **ReAct** — Reason, call tools, integrate results
6. **Load Skills** — Pull in relevant capabilities on demand
7. **Persist Memory** — Save what matters for next time

This is the same pattern underlying Claude Code, LangChain, CrewAI, and every serious agent system. OpenClaw just makes it tangible, file-based, and readable. **This is the pattern matching I was talking about earlier.**

---

## IX. Now What?

At this point, you have set up an always-on, fully autonomous agent. Sky is the limit.

---

## X. Helpful Tips

_OpenClaw can be a little more janky than using ChatGPT or Claude, but it's also much more powerful._

- **Observe the behavior of the system.** Watch when it trips over itself. Sometimes it takes a while to respond — that means it's thinking.
- **Prod it occasionally.** There's a timeout issue I haven't fully configured/fixed yet. The heartbeat configuration helps here.
- **Software is imperfect** (general rule, by the way) — doesn't mean it doesn't have utility.
- **Figure out your flow.**  Find what works for you and iterate.
- **Ask for feedback from the AI.** Ask it when you're getting stuck, or why *it's* getting stuck. Remember: infinitely patient explaining machine.
- **Stay a couple versions behind.** The project releases roughly every 2 days across three channels (alpha, beta, stable). The stable channel is your friend. Current stable: 2026.5.18.

---

## XI. Live Demo + Workflow Examples

---

## XII. My Two Cents: Why Learn All of This?

### OpenClaw was a wake-up moment for the frontier models

- The concepts that OpenClaw introduced — persistent agents, heartbeat, skill registries, multi-channel delegation — while not the most stable, are powerful tools that sit on top of LLMs
- We are already seeing the core OpenClaw concepts propagate into the frontier companies' offerings

### Anthropic keeps shipping these
- **Claude Dispatch** (launched March 17, 2026) — text your desktop AI from your phone and come back to finished work. This is Anthropic's direct answer to OpenClaw-style delegation.
- Claude Code is adding skills, agents, and dispatch features that mirror OpenClaw's architecture
- Other frontier labs are following the same playbook

### The career angle
- By starting to use OpenClaw yourself, you are going to get ahead of the curve of where these companies are going
- For those working in bigger, established organizations or companies who are just now trying to figure out how to adopt AI — this is going to be a huge leg-up
- **You will be the smartest one in the room**

---

## Key Takeaways (Closing Slide)

1. OpenClaw is a step function in AI productivity — delegation, not just prompting
2. You don't need expensive hardware — a VM is fine
3. Security is non-negotiable — isolate everything (zero-trust)
4. The concepts transfer everywhere — pattern match across tools
5. Start with the basics (one cron job, one heartbeat, one skill), then expand
6. The frontier labs are following OpenClaw's lead — learning it now puts you ahead

---

