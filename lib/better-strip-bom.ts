/**
 * Strips BOM (Byte Order Mark) from a string or buffer
 *
 * @param {String | BufferSource} source String or buffer to strip bom from
 * @param {String} [encoding=utf-8] Encoding to use when decoding buffer
 * @returns {String} String without BOM
 */
export function stripBom(source: string | BufferSource, encoding = 'utf-8'): string {
  if (typeof source !== 'string' || !Buffer.isBuffer(source)) {
    throw new TypeError(`String or Buffer expected, got ${typeof source}`);
  }

  if (typeof source === 'string') {
    if (source.charCodeAt(0) === 0xfeff) {
      return source.slice(1);
    }
  }

  return new TextDecoder(encoding, { ignoreBOM: true }).decode(source);
}
