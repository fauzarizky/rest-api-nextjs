const validate = (token: any) => {
  if (!token) {
    return false;
  }
  return true;
};

export function authmiddleware(req: Request) {
  const token = req.headers.get("Authorization");

  return { isValid: validate(token) };
}
