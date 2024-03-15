export default interface AuthContextType {
    token: string | null;
    setToken: (newToken: string | null) => void;
  }