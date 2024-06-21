import { atom } from "jotai";
import {atomWithStorage} from "jotai/utils";

export const currentUserAtom =  atomWithStorage('currentUser', false);



