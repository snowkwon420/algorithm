function solution(numer1, denom1, numer2, denom2) {
  const numer = numer1 * denom2 + numer2 * denom1; //분자
  const denom = denom1 * denom2; //분모
  const getGcd = (a, b) => (a % b == 0 ? b : getGcd(b, a % b)); //유클리드 호제법
  const gcd = getGcd(numer, denom); //최대공약수
    
  return [numer / gcd, denom / gcd]; //약분하여 리턴
}