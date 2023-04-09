/**
 * Strips BOM (Byte Order Mark) from a string or buffer
 *
 * @param source String or buffer to strip bom from
 * @param encoding Encoding to use when decoding buffer
 * @returns String without BOM
 */
export function stripBom(source: string | BufferSource, encoding = 'utf-8'): string {
  if (typeof source !== 'string' && !Buffer.isBuffer(source)) {
    throw new TypeError(`String or Buffer expected, got ${typeof source}`);
  }

  if (typeof source === 'string') {
    if (source.charCodeAt(0) === 0xfeff) {
      return source.slice(1);
    }

    return source;
  }

  return new TextDecoder(encoding, { ignoreBOM: false }).decode(source as BufferSource);
}
