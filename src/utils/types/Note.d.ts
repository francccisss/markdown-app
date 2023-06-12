import { UserInfo } from "firebase/auth";

export interface INote {
	id: string;
	authorID?: UserInfo.uid | null;
	dateAdded?: Date;
	lastUpdated?: Date | null;
	contents: string;
}
