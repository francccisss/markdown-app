import createTheme from "@uiw/codemirror-themes";
import { tags as t } from "@lezer/highlight";
export const editorAppTheme = createTheme({
	dark: "light",
	settings: {
		background: "#2d2f33",
		foreground: "#d9d9d9",
		caret: "#AEAFAD",
		selection: "#878A8C50",
		selectionMatch: "#878A8C40",
		gutterBackground: "#22232600",
		gutterForeground: "#878A8C80",
		gutterBorder: "#6B7FF200",
		gutterActiveForeground: "#000000",
		lineHighlight: "#F2C46D",
	},
	styles: [
		{ tag: t.comment, color: "#787b80" },
		{ tag: t.labelName, color: "#F2C46D" },
		{ tag: t.name, color: "#902727" },
		{ tag: t.definition(t.typeName), color: "#6b7ff2" },
		{ tag: t.typeName, color: "#F2C46D" },
		{ tag: t.standard(t.typeName), color: "#194a7b" },
		{ tag: t.tagName, color: "#f2c46d" },
		{ tag: t.variableName, color: "#6b7ff2" },
		{ tag: t.definition(t.variableName), color: "#f2c46d" },
		{ tag: t.function(t.variableName), color: "#f2c46d" },
		{ tag: t.propertyName, color: "#52adad" },
		{ tag: t.function(t.propertyName), color: "#6b7ff2" },
		{ tag: t.definition(t.propertyName), color: "#f29961" },
		{ tag: t.special(t.propertyName), color: "#000000" },
		{ tag: t.attributeName, color: "#f29961" },
		{ tag: t.className, color: "#f2c46d" },
		{ tag: t.string, color: "#75bf69" },
		{ tag: t.docString, color: "#ffffff" },
		{ tag: t.attributeValue, color: "#75bf69" },
		{ tag: t.number, color: "#6b7ff2" },
		{ tag: t.integer, color: "#6b7ff2" },
		{ tag: t.bool, color: "#b955f2" },
		{ tag: t.keyword, color: "#f261c2" },
		{ tag: t.definitionKeyword, color: "#b955f2" },
	],
});