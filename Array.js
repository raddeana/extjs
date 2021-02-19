/**
 * 获取一个元素不重复的数组
 * @param {string} 唯一标识的键
 * @return {Array} 返回一个新的数组
 */
Array.prototype.uniqueness = function(uKey) {
    let map = new Map();

    return this.filter(function (item) {
        let uKeyV = (uKey || uKey === 0) && typeof item === 'object' && !(item instanceof Array) ? item[uKey] : item;
        return !map.has(uKeyV) && map.set(uKeyV, true);
    });
};
