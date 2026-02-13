import { useState } from "react";
import { nanoid } from "nanoid";

/**
 * Hook za stabilne key-eve
 */
export function useStableKeys(length: number) {
    // Inicijalni state sa length key-eva
    const [keys, setKeys] = useState<string[]>(() =>
        Array.from({ length }, () => nanoid())
    );

    /**
     * Dohvati key po indexu
     */
    const get = (index: number) => keys[index];

    /**
     * Dodaj novi key na kraj niza
     */
    const add = () => setKeys((prev) => [...prev, nanoid()]);

    /**
     * Premjesti key s indeksa 'from' na 'to'
     */
    const move = (from: number, to: number) => {
        setKeys((prev) => {
            if (from < 0 || from >= prev.length || to < 0 || to >= prev.length)
                return prev;
            const copy = [...prev];
            const [moved] = copy.splice(from, 1);
            copy.splice(to, 0, moved);
            return copy;
        });
    };

    /**
     * Ukloni key na određenom indexu
     */
    const removeAt = (index: number) => {
        setKeys((prev) => {
            if (index < 0 || index >= prev.length) return prev;
            const copy = [...prev];
            copy.splice(index, 1);
            return copy;
        });
    };

    /**
     * Sinkronizacija duljine: korisnik komponenta treba pozvati add() ili removeAt()
     * Ako se length promijeni, ne radimo setKeys u effectu – time izbjegavamo cascading render
     */

    return {
        keys,
        get,
        add,
        move,
        removeAt,
    };
}
