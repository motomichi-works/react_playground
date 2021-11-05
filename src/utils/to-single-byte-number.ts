// 全角数字を半角数字に変換して返します。
export default function toSingleByteNumber(str: string): string {
  return str.replace(/[０-９]/g, (s) =>
    String.fromCharCode(s.charCodeAt(0) - 0xfee0),
  );
}
