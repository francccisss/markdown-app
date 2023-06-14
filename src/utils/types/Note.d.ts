import { UserInfo } from "firebase/auth";

export interface INote {
	id: string;
	authorID?: UserInfo.uid | null;
	dateAdded?: string;
	lastUpdated?: string;
	contents: string;
}
