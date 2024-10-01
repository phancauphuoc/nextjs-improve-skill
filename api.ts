import { IMember } from "./types/members";

const baseURL = "http://localhost:3001";

export const getAllMember = async (): Promise<IMember[]> => {
    const res = await fetch(`${baseURL}/member`, { cache: 'no-store' });
    const members = await res.json();
    return members;
}