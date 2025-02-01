import { create } from "zustand";

export const useContentStore = create((set) => ({
	contentType: "links",
	setContentType: (type) => set({ contentType: type }),
}));
