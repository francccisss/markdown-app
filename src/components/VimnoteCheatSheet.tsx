// this won't work if the runtime is in nodejs and electron
// we wont have access to electron/nodejs methods
// const shell = typeof window === "object" ? require("electron").shell : null;
const isBrowser = typeof window;
console.log(isBrowser);

import { useEffect, useRef } from "react";

const VimnoteCheatSheet = () => {
	const keyboardShortcutStyles = `flex flex-col min-w-full basis-1/4 text-lg `;
	const sectionTitles = `text-[2rem] font-semibold mb-2 max-[1024px]:text-[1.5rem]`;
	const shortcuts = {
		global: {
			help: `:h - open vim Cheatsheeet`,
			save: `:w - save file as `,
			close: `:q - close editor`,
			openPreview: `ctrl+shift+p - toggle between preview and editor`,
			openSidebar: `ctrl+shift+e - toggle sidebar`,
			cheatsheetToPreviousPage: `ctrl+shift+h - toggle help and previous note`,
			focusSearchBar: `ctrl+shift+f - focus on search bar`,
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
			greaterThan: "> - shift text right",
			lessThan: "< - shift text left",
			y: "y - yank (copy) marked text",
			d: "d - delete marked text",
			tilde: " ~ - switch case",
			u: "u - change marked text to lowercase",
			U: "U -change marked text to uppercase",
		},
		insertCommands: {
			i: "i - insert before the cursor",
			I: "I - insert at the beginning of the line",
			a: "a - insert (append) after the cursor",
			A: "A - insert (append) at the end of the line",
			o: "o - append (open) a new line below the current line",
			O: "O - append (open) a new line above the current line",
			ea: "ea - insert (append) at the end of the word",
			Esc: "Esc - exit insert mode",
		},
		markingText: {
			v: "v - start Visual Mode, mark lines, then do a command (like y-yank)",
			V: "V - start linewise visual mode",
			o: "o - move to other end of marked area",
			CtrlPlusv: " ctrl+v - start visual block mode",
			O: "O - move to other corner of block",
			aw: "aw - mark a word",
			ab: "ab - a block with ()",
			aB: "aB- a block with {}",
			at: "at- a block with <> tags",
			ib: "ib - inner block with ()",
			iB: "iB - inner block with {}",
			it: "it - inner block with <> tags",
			Esc: "Esc - exit visual mode",
		},

		editing: {
			r: "r - replace a single character.",
			R: "R- replace more than one character, until <kbd>ESC</kbd> is pressed.",
			J: "J - join line below to the current one with one space in between",
			gJ: "gJ - join line below to the current one without space in between",
			cc: "cc - change (replace) entire line",
			cDollar: "c$ - change (replace) to the end of the line",
			ciw: "ciw - change (replace) entire word",
			cw: "cw - change (replace) to the end of the word",
			s: "s - delete character and substitute text",
			xp: "xp - transpose two letters (delete and paste)",
			u: "u - undo",
			U: "U - restore (undo) last changed line",
			CtrlPlusr: "Ctrl+r - redo",
			dot: ". - repeat last command",
		},
	};

	function mapContents(contents: any): React.ReactNode {
		let tmpArray: Array<string> = [];
		for (const item in contents) {
			tmpArray.push(contents[item]);
		}
		const extractJSXContents = tmpArray.map((content, i) => {
			const firstChar = content.slice(0, 1);
			return (
				<li key={i} className="text-base  max-[1024px]:text-[.9rem]">
					<span className="text-vn-blue text-lg font-bold">
						{firstChar}
					</span>
					{content.slice(1)}
				</li>
			);
		});

		return extractJSXContents;
	}

	function onLinkClick(event: any): void {
		event?.preventDefault();
		const link = event.target.href.toString();
		if (isBrowser === "object") {
			window.open(link);
		} else {
			navigator.clipboard.writeText(link);
		}
	}
	const cheatSheetRef = useRef() as any;

	useEffect(() => {
		cheatSheetRef.current.focus();
	}, []);

	return (
		<main
			ref={cheatSheetRef}
			tabIndex={0}
			autoFocus
			onKeyDown={(e) => {
				e.preventDefault();
				const target = e.target as Element;
				switch (e.key) {
					case "G": {
						console.log("bottom scrolled");
						target.scrollTo({ top: 99999 });
						break;
					}
					case "g": {
						console.log("bottom scrolled");
						target.scrollTo({ top: 0 });
						break;
					}
					case "j": {
						console.log("scoll by 20");
						target.scrollBy({ top: 50, behavior: "smooth" });
						break;
					}
					case "k": {
						console.log("scoll by 20");
						target.scrollBy({ top: -50, behavior: "smooth" });
						break;
					}
				}
			}}
			className="outline-none text-vn-white appearance-none bg-vn-dshade-black  flex flex-1 gap-6 flex-col h-full overflow-auto p-[2em]"
		>
			<section className="">
				<p className="text-base">To help you get started using Vimnotes</p>
				<h1 className="font-bold text-4xl">
					Vim Cheatsheet by <span className="text-vn-blue">rtorr</span>{" "}
				</h1>
				<p className="text-sm text-vn-dshade-white ">
					For more keyboard shortcuts click {""}
					<a
						onClick={onLinkClick}
						href="https://vim.rtorr.com/"
						className="text-vn-blue underline hover:text-vn-dark-blue"
					>
						Here
					</a>
				</p>
			</section>
			<section className="grid grid-cols-[repeat(3,minmax(150px,500px))] flex-1 grid-rows-[repeat(2,1fr)] gap-5  max-[800px]:flex max-[800px]:flex-col ">
				<div className={``}>
					<h2 className={sectionTitles}>Global</h2>
					{mapContents(shortcuts.global)}
				</div>
				<div className={``}>
					<h2 className={sectionTitles}>Cursor Movement</h2>
					{mapContents(shortcuts.cursorMovement)}
				</div>
				<div>
					<h2 className={sectionTitles}>Visual Commands</h2>
					{mapContents(shortcuts.visualCommands)}
				</div>
				<div className="">
					<h2 className={sectionTitles}>Insert Commands</h2>
					{mapContents(shortcuts.insertCommands)}
				</div>
				<div>
					<h2 className={sectionTitles}>Marking text</h2>
					{mapContents(shortcuts.markingText)}
				</div>
				<div>
					<h2 className={sectionTitles}>Editing</h2>
					{mapContents(shortcuts.editing)}
				</div>
			</section>
		</main>
	);
};

export default VimnoteCheatSheet;
