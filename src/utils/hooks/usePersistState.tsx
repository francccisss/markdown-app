import { useEffect, useRef } from "react";
import { INote } from "../types/Note";

export function usePersistState(originalState: Array<INote>): Array<INote> {
	const state = useRef(originalState);

	useEffect(() => {
		state.current = originalState;
	}, [originalState]);

	return state.current;
}
