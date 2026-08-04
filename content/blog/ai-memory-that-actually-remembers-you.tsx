import {
  Lead,
  H2,
  P,
  List,
  ListItem,
  InlineCode,
  CodeBlock,
  Callout,
} from "@/components/blog/Prose";

export default function Content() {
  return (
    <>
      <Lead>
        Every new Claude Code session used to start the same way:
        re-explaining what I was working on, how I like feedback, what I&apos;d
        already tried. None of it was hard to repeat — it just meant the
        first five minutes of every session went into rebuilding context
        instead of using it. This is the fix I&apos;ve been running for a
        while now, and the exact steps to set up your own copy — written so a
        non-technical friend could follow it too.
      </Lead>

      <P>
        Credit where it&apos;s due before I get into it:{" "}
        <a
          href="https://github.com/Kiyoraka"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline decoration-accent/40 hover:decoration-accent"
        >
          Kiyoraka
        </a>{" "}
        built and open-sourced the whole thing. I didn&apos;t design this
        system, I just use it daily and wanted to make the setup easier to
        get into. Genuine thanks for putting it out there for free.
      </P>

      <H2>What this actually is</H2>
      <P>
        It&apos;s called{" "}
        <a
          href="https://github.com/Kiyoraka/Project-AI-MemoryCore"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline decoration-accent/40 hover:decoration-accent"
        >
          AI MemoryCore
        </a>
        , and there&apos;s no database or plugin underneath it — just three
        plain text files Claude already knows how to read. Think of it like a
        computer booting up: one file is firmware (barely changes, just tells
        Claude what to load), one is long-term memory (who you are, how you
        work, grows slowly over time), and one is RAM (whatever you&apos;re
        doing right now, cleared back to a short recap once the session
        ends).
      </P>
      <P>
        Nothing about it is clever engineering — that&apos;s sort of the
        point. You can open every file it uses in Notepad and read exactly
        what it&apos;s doing.
      </P>

      <H2>What you&apos;ll need</H2>
      <List>
        <ListItem>Claude Code already installed on your computer</ListItem>
        <ListItem>About 10 minutes</ListItem>
        <ListItem>
          No coding experience — every step below is copy, click, or
          type-and-answer
        </ListItem>
      </List>

      <H2>Get the files</H2>
      <P>
        Open{" "}
        <a
          href="https://github.com/Kiyoraka/Project-AI-MemoryCore"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline decoration-accent/40 hover:decoration-accent"
        >
          the GitHub page
        </a>{" "}
        in your browser, click the green <InlineCode>Code</InlineCode>{" "}
        button, then <InlineCode>Download ZIP</InlineCode>. No account or git
        knowledge needed. Unzip it — right-click and choose Extract All on
        Windows, double-click on a Mac — and move the folder somewhere easy
        to find, like Documents. Rename it to{" "}
        <InlineCode>ai-memorycore</InlineCode> if you like.
      </P>

      <H2>Open Claude Code right inside that folder</H2>
      <P>
        A terminal is just a plain window where you type one line instead of
        clicking. On Windows, open the folder in File Explorer, click into
        the address bar, and type <InlineCode>cmd</InlineCode>. On a Mac,
        right-click inside the folder in Finder and choose New Terminal at
        Folder. Either way, you land in a window already pointed at your
        folder. Type this and press Enter:
      </P>
      <CodeBlock label="terminal">claude</CodeBlock>

      <H2>Let Claude do the setup for you</H2>
      <P>Type this into the chat, exactly as shown:</P>
      <CodeBlock label="type in the chat">run setup-wizard.md</CodeBlock>
      <P>
        Claude will ask two questions — what to call your AI companion, and
        your own name. Answer normally, like you&apos;re texting. It saves
        everything itself; there&apos;s nothing to open or edit by hand.
      </P>

      <H2>One extra step: make it stick</H2>
      <P>
        The wizard sets up the memory files, but it doesn&apos;t yet tell
        Claude Code to check that folder automatically every time you open
        it — only for this one conversation. You still don&apos;t need to
        edit anything yourself. Just ask, in the same chat:
      </P>
      <CodeBlock label="type in the chat">
        Please add an instruction to my global CLAUDE.md that tells you to
        always load this folder&apos;s master-memory.md at the start of
        every session, and to treat the name I gave my AI companion as the
        keyword that restores its memory.
      </CodeBlock>
      <Callout label="What is a CLAUDE.md?">
        A personal notes file Claude Code reads at the start of every
        session, on every project, on your computer. One line there is what
        turns this from working in one chat into working every time.
      </Callout>

      <H2>Test it</H2>
      <P>
        Close the window completely, open a brand-new terminal the same way,
        and run <InlineCode>claude</InlineCode> again. As your very first
        message, type the name you chose.
      </P>
      <Callout label="Heads up">
        It will not greet you before you type anything — that is expected,
        not broken. Claude only ever responds after you say something first,
        so typing its name is what starts things off.
      </Callout>

      <H2>The four words it already understands</H2>
      <List>
        <ListItem>
          <InlineCode>[its name]</InlineCode> — restores its memory, said
          first every session
        </ListItem>
        <ListItem>
          <InlineCode>save</InlineCode> — saves what happened today,
          permanently
        </ListItem>
        <ListItem>
          <InlineCode>update memory</InlineCode> — refreshes what it&apos;s
          learned about you
        </ListItem>
        <ListItem>
          <InlineCode>review growth</InlineCode> — shows how it&apos;s
          changed since you started
        </ListItem>
      </List>

      <H2>Making it feel like yours, not just any AI&apos;s</H2>
      <P>
        Once the core setup is running, a short list of optional features
        change how it feels to use, not just what it remembers. Ask for any
        of these by name and it walks you through the rest:
      </P>
      <List>
        <ListItem>
          <InlineCode>load memory-consolidation</InlineCode> — merges split
          memory files into one, for faster loading
        </ListItem>
        <ListItem>
          <InlineCode>load skill-plugin</InlineCode> — lets any dropped-in
          skill file auto-activate, no extra wiring
        </ListItem>
        <ListItem>
          <InlineCode>load time-aware-core</InlineCode> — shifts its energy
          and tone by time of day
        </ListItem>
        <ListItem>
          <InlineCode>load auto-load-hook</InlineCode> — tries to restore
          memory automatically on startup, no name typed
        </ListItem>
        <ListItem>
          <InlineCode>load save-diary</InlineCode> — keeps a running daily
          journal
        </ListItem>
        <ListItem>
          <InlineCode>load topic-diary</InlineCode> — files reusable
          knowledge by subject, so &quot;what did we decide about X&quot;
          has a real answer
        </ListItem>
        <ListItem>
          <InlineCode>load memory-compaction</InlineCode> — summarizes old
          entries instead of deleting them once files get long
        </ListItem>
        <ListItem>
          <InlineCode>load echo-recall</InlineCode> — searches back through
          the diary on request (needs <InlineCode>save-diary</InlineCode>{" "}
          loaded first)
        </ListItem>
        <ListItem>
          <InlineCode>load reminders</InlineCode> — carries a task across
          sessions until it&apos;s actually done
        </ListItem>
        <ListItem>
          <InlineCode>load decision-log</InlineCode> — keeps a permanent
          record of why a call was made
        </ListItem>
        <ListItem>
          <InlineCode>load forge</InlineCode> — Forge Self-Improvement, its
          own thing, worth a section on its own (below)
        </ListItem>
      </List>

      <H2>Building it a skill of its own</H2>
      <P>
        Everything so far makes the companion remember things generally.
        The last piece — Forge Self-Improvement — lets it go further and
        track one specific part of your life on purpose. I actually have
        one of these myself: a Career Coach skill that remembers every job
        application, every interview outcome, and every resume edit, without
        me having to mention any of it twice.
      </P>
      <P>
        Turn it on the same way as everything else — ask it to{" "}
        <InlineCode>load forge</InlineCode>. Then describe what you want, in
        plain language, and ask directly:
      </P>
      <CodeBlock label="type in the chat">
        create skill — I want a Career Coach skill. Create a new folder
        named career, and use it to track every job application I make
        (company, role, stage reached, outcome), every resume version and
        what changed, and give me a quick status recap whenever I ask.
      </CodeBlock>
      <P>
        Or don&apos;t ask at all — just mention job hunting or resume edits a
        few times across normal conversation, then type{" "}
        <InlineCode>self improve</InlineCode>. It reviews what&apos;s
        actually come up and proposes something only if there&apos;s a real
        pattern; it needs at least two concrete examples before it&apos;ll
        suggest anything, so it won&apos;t invent a need that isn&apos;t
        there.
      </P>
      <Callout label="The one rule that never bends">
        Either way, nothing gets built without you seeing it first. It
        proposes exactly what it would create and track, you approve, adjust,
        or reject, and only a yes gets anything written. It&apos;s allowed to
        remember. It&apos;s never allowed to just decide on its own.
      </Callout>
      <P>
        Once approved, that becomes a permanent part of it. Mention a new
        application from then on and it just logs it — no re-explaining,
        same as everything else it already remembers about you.
      </P>

      <P>
        I&apos;m still running mine, session after session. It&apos;s a
        small thing to set up, but it changes how it actually feels to sit
        down and work with an AI — less like restarting a conversation, more
        like picking one back up.
      </P>
    </>
  );
}
