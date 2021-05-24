/**
 * @param {string} s
 * @return {string}
 */
const toLowerCase = s => s.split('').map(el => el.charCodeAt() < 91 && el.charCodeAt() > 64 ? String.fromCharCode(el.charCodeAt() + 32) : el).join('');
