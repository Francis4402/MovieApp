import { create } from "zustand";
import * as zustandMiddleware from "zustand/middleware";
import useGetRandomUsers from "../hooks/useGetRandomUsers";

export const useGeneralStore = create() (
    zustandMiddleware.devtools(
        zustandMiddleware.persist(
            (set) => ({
                isLoginOpen: false,
                isEditProfileOpen: false,
                randomUsers: [],

                setIsLoginOpen: (val) => set({isLoginOpen: val}),
                setIsEditProfileOpen: (val) => set({isEditProfileOpen: val}),

                setRandomUsers: async () => {
                    const result = await useGetRandomUsers();
                    set({randomUsers: result})
                }
            }),

            {
            name: "store",
            storage: zustandMiddleware.createJSONStorage(() => localStorage)
            }
        )
    )
)