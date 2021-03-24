export default class Validator {
    /**
     * Checks a string if it's a valid hexadecimal
     * @param value: string
     * @returns boolean
     */
    public static isHex (value: string): boolean {
        return Boolean(value.match(/^0x[0-9a-f]+$/i));
    }
}
