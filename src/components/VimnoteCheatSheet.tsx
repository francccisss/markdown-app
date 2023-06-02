import { useEffect } from "react";

const VimnoteCheatSheet = () => {
	const keyShortcutsStyles = `flex flex-col w-full basis-1/4 shrink-0  `;
	const shortcuts = {
		global: {
			help: `:h[elp] keyword - open help for keyword`,
			save: `:w file - save file as `,
			close: `:q - close current pane`,
			terminal: `:ter - open a terminal window `,
		},
		cursorMovement: {
			h: `h - move cursor left`,
			j: `j - move cursor down`,
			k: `k - move cursor up`,
			l: `l - move cursor right`,
			H: `H - move to top of screen`,
			M: `M - move to middle of screen`,
			L: `L - move to bottom of screen`,
			w: `w - jump forwards to the start of a word`,
			W: `W - jump forwards to the start of a word (words can contain punctuation)`,
			e: `e - jump forwards to the end of a word`,
			E: `E - jump forwards to the end of a word (words can contain punctuation)`,
			b: `b - jump backwards to the start of a word`,
			B: `B - jump backwards to the start of a word (words can contain punctuation)`,
		},
		visualCommands: {
			greaterThan: "shift text right",
			lessThan: "shift text left",
			y: "yank (copy) marked text",
			d: "delete marked text",
			tilde: "switch case",
			u: "change marked text to lowercase",
			U: "change marked text to uppercase",
		},
		insertCommands: {
			i: "insert before the cursor",
			I: "insert at the beginning of the line",
			a: "insert (append) after the cursor",
			A: "insert (append) at the end of the line",
			o: "append (open) a new line below the current line",
			O: "append (open) a new line above the current line",
			ea: "insert (append) at the end of the word",
			Esc: "exit insert mode",
		},
		markingText: {
			v: "start Visual Mode, mark lines, then do a command (like y-yank)",
			V: "start linewise visual mode",
			o: "move to other end of marked area",
			CtrlPlusv: "start visual block mode",
			O: "move to other corner of block",
			aw: "mark a word",
			ab: "a block with ()",
			aB: "a block with {}",
			at: "a block with <> tags",
			ib: "inner block with ()",
			iB: "inner block with {}",
			it: "inner block with <> tags",
			Esc: "exit visual mode",
		},

		editing: {
			r: "replace a single character.",
			R: "replace more than one character, until <kbd>ESC</kbd> is pressed.",
			J: "join line below to the current one with one space in between",
			gJ: "join line below to the current one without space in between",
			cc: "change (replace) entire line",
			cDollar: "change (replace) to the end of the line",
			ciw: "change (replace) entire word",
			cw: "change (replace) to the end of the word",
			s: "delete character and substitute text",
			xp: "transpose two letters (delete and paste)",
			u: "undo",
			U: "restore (undo) last changed line",
			CtrlPlusr: "redo",
			dot: "repeat last command",
		},
	};

	function mapContents(contents: {}): React.ReactNode {
		let tmpArray: Array<string> = [];
		for (const item in contents) {
			tmpArray.push(contents[item]);
		}
		console.log(tmpArray);
		const extractJSXContents = tmpArray.map((content, i) => {
			return <li key={i}>{content}</li>;
		});

		return extractJSXContents;
	}

	return (
		<main className="text-vn-white bg-vn-dshade-black w-full gap-5 flex justify-center flex-col p-[2em]">
			<section className="">
				<h1 className="font-bold text-4xl">Vim Cheatsheet</h1>
				<p>To help you get started</p>
			</section>
			<section className="grid grid-cols-3 grid-rows-2 ">
				<div className={`${keyShortcutsStyles} `}>
					<h2>Global</h2>
					{mapContents(shortcuts.global)}
				</div>
				<div className={keyShortcutsStyles}>
					<h2>Cursor Movement</h2>
					{mapContents(shortcuts.cursorMovement)}
				</div>
				<div>
					<h2>Visual Commands</h2>
					{mapContents(shortcuts.visualCommands)}
				</div>
				<div>
					<h2>Insert Commands</h2>
					{mapContents(shortcuts.insertCommands)}
				</div>
				<div>
					<h2>Marking text</h2>
					{mapContents(shortcuts.markingText)}
				</div>
				<div>
					<h2>Editing</h2>
					{mapContents(shortcuts.editing)}
				</div>
			</section>
		</main>
	);
};

export default VimnoteCheatSheet;
