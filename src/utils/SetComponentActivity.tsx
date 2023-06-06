async function setComponentActivity(
	state: boolean,
	setter: (state: boolean) => void
): Promise<void> {
	state ? setter(false) : setter(true);
}
export default setComponentActivity;
