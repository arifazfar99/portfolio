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

      <H2>If you want to go further</H2>
      <P>
        Inside the project there&apos;s a <InlineCode>Feature/</InlineCode>{" "}
        folder with two dozen or so optional add-ons — a daily journal,
        reminders, project tracking, that kind of thing. None of it is
        required to get started. When something sounds useful, just ask your
        companion about it by name and it&apos;ll walk you through adding it.
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
