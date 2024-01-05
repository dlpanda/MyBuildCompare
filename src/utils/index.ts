export * from './HouseDesignKeyConfig';

// 小驼峰接口字段格式化成：大写开头 原本大写的前面增加空格。如interfaceKeyFormatter -> Interface Key Formatter
export function interfaceKeyFormatter(str: string) {
    let result = str.charAt(0).toUpperCase();
    for (let char of str.slice(1)) {
        result += `${isLetterUppercase(char) ? ' ' : ''}${char}`;
    }
    return result;
}

// 判断大小写  大写返回true
export function isLetterUppercase(letter: string) {
    return letter.toLowerCase() !== letter; // 将字母转换成小写后与原始值进行比较
}
