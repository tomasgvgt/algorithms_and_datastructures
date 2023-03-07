function findRepeatedDnaSequences(s: string): string[] {
  const subStrings = new Set<string>();
  const repeatedSubStrings = new Set<string>();
  let sub;

  if (s.length > 9) {
      sub = s.slice(0, 10);
      subStrings.add(sub);
  }

  for (let right = 10; right < s.length; right++) {
      sub = sub.substring(1);
      sub = sub + s[right];
      if (subStrings.has(sub)) repeatedSubStrings.add(sub);
      subStrings.add(sub);
  }
  return Array.from(repeatedSubStrings);
};