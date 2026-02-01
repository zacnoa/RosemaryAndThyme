import { useRef } from "react";
import { nanoid } from "nanoid";

/**
 * Hook koji generira stabilne React key-eve za listu
 * @param length Broj elemenata u listi
 */
export function useStableKeys(length: number) {
    const keysRef = useRef<string[]>([]);

    // Sinkronizacija duljine
    if (keysRef.current.length < length) {
        // Dodavanje novih key-eva
        const diff = length - keysRef.current.length;
        keysRef.current.push(...Array.from({ length: diff }, () => nanoid()));
    } else if (keysRef.current.length > length) {
        // Skraćivanje (remove s kraja)
        keysRef.current.length = length;
    }

    /**
     * Move key s indeksa `from` na `to`
     */
    const move = (from: number, to: number) => {
        const [key] = keysRef.current.splice(from, 1);
        keysRef.current.splice(to, 0, key);
    };

    /**
     * Remove key na indexu
     */
    const removeAt = (index: number) => {
        keysRef.current.splice(index, 1);
    };
    const add = () => {
        keysRef.current.push(nanoid());
    };

    const get =(index:number)=>keysRef.current[index]

    return {
        keys: keysRef.current,
        add,
        move,
        removeAt,
        get
    };
}
