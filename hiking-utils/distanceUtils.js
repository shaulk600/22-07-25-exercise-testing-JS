
/**
 * a function to calculate number Kilometers
 * @param  { Number } num - number to represention to KM
 * @return { Number }  number to represent at Meters
 */

export function kmToMeters(num) {
    try {
        if (typeof num === "number" && num > 0) {
            return num / 1000;
        }
        // else {
        //     // throw new TypeError("this number must be posetive");

        //     return ('input a number is not negative or zero');
        // }
    }
    catch (err) {
        throwconsole.log('', err);
    }
}


//אפשרות נוספת למימוש 
export function a(num) {
    //אפשר במקרה האמיתי לעשות 
    // try and catch
    //  ואם כן - להביא את 
    // null

    if (typeof num !== "number") throw new TypeError('input nust be a number');
    if (num < 0) throw new RangeError('Discribe connot be negative');
    return num * 1000
}

// עיקר המבחן על טסטים - להתכונן טוב לזה - וגם פייתון