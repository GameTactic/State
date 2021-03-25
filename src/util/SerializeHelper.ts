export default class SerializeHelper {
    /**
     * This function turns a class object where all private properties start with '_'
     * into an object where they have the same names, but without the '_'
     * Used when serializing a class with the Serialazy module
     * @param object: any
     */
    public static toDown = <T extends object, V>(object: T): V => {
        const final: { [key: string]: any } = {};
        for (const key in object) {
            if (object.hasOwnProperty(key) && key.startsWith('_') && key.length > 2) {
                const newKey = key.substring(1);
                final[newKey] = object[key];
            } else {
                final[key] = object[key];
            }
        }
        return final as V;
    }
}
