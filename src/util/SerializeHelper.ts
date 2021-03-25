export default class SerializeHelper {
    /**
     * This function is to prevent type errors in typescript
     * It's kind of a hack, but it works
     * Please improve if you have any ideas
     * @param object: any
     */
    public static toDown = <T extends object, V>(object: T): V => {
        const final: { [key: string]: any } = {};
        for (const key in object) {
            final[key] = object[key];
        }
        return final as V;
    }
}
