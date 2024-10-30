import DOMPurify from 'dompurify';

export default function sanitizeInput(input) { //to mitigate xss attacks
  return DOMPurify.sanitize(String(input.trim())); //converting any input to a str with whitespaces removed/trimmed
}