import { useState } from "react";
import download from "../assets/download.jpg";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import API_URL from "../config";
import { useAuth } from "../components/AuthContext";
import type { LoginFormErrors } from "../utils/validators";
import { validateLoginForm } from "../utils/validators";

function Login() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<LoginFormErrors>({});
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const githubLogin = async () => {
    const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID;
    const redirectUri = `${import.meta.env.VITE_BACKEND_URL}/api/auth/github/callback`;
    const scope = "user:email";

    if (!clientId || !redirectUri) {
      alert("GitHub OAuth configuration missing. Check .env file.");
      return;
    }
    const authUrl =
      `https://github.com/login/oauth/authorize?` +
      `client_id=${clientId}&` +
      `redirect_uri=${encodeURIComponent(redirectUri)}&` +
      `scope=${scope}`;

    window.location.href = authUrl;
  };

  const handleLogin = async () => {
    const validationErrors = validateLoginForm(email, password);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (!res.ok) {
        if (Array.isArray(data.errors) && data.errors.length > 0) {
          const fieldErrors: LoginFormErrors = {};
          data.errors.forEach((err: { field?: string; message: string }) => {
            if (err.field === "email") fieldErrors.email = err.message;
            else if (err.field === "password") fieldErrors.password = err.message;
            else fieldErrors.form = err.message;
          });
          if (!fieldErrors.email && !fieldErrors.password && !fieldErrors.form) {
            fieldErrors.form = "Login failed. Please try again.";
          }
          setErrors(fieldErrors);
        } else {
          setErrors({ form: data.message || "Login failed. Please try again." });
        }
        return;
      }
      login(data.token, data.name);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      setErrors({ form: "Login failed. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center px-4 py-8">
      <div className="bg-[#161B22] items-center justify-center w-full max-w-[420px]">
        <div className="flex items-center flex-col mt-10 pb-10">
          <img src={download} className="w-[48px] h-[50px]" />
          <h3 className=" text-[#D2BBFF] tracking-wide font-bold text-2xl mt-5">
            DevLens
          </h3>

          <h1 className="font-bold text-3xl mt-5">Welcome Back</h1>
          <p className="text-[#8B949E] mt-3">Sign in to your DevLens account</p>
        </div>

        <div className="flex flex-col mx-8">
          <small
            style={{ fontFamily: "JetBrains Mono", fontWeight: 400 }}
            className="mt-8 mb-2"
          >
            Email Address
          </small>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="you@example.com"
            className="bg-[#0D1117] border border-[#30363D] text-white text-sm rounded-md px-4 py-3 w-full placeholder-[#4B5563] focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
          />
          {errors.email && (
            <span className="text-red-400 text-xs mt-1">{errors.email}</span>
          )}
        </div>

        <div className="flex flex-col mx-8">
          <small
            style={{ fontFamily: "JetBrains Mono", fontWeight: 400 }}
            className="mt-6 mb-2"
          >
            Password
          </small>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="••••••••"
            className="bg-[#0D1117] border border-[#30363D] text-white text-sm rounded-md px-4 py-3 w-full placeholder-[#4B5563] focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
          />
          {errors.password && (
            <span className="text-red-400 text-xs mt-1">{errors.password}</span>
          )}
          <a
            href="#"
            className="text-purple-400 text-xs mt-2 self-end hover:text-purple-300"
          >
            Forgot password?
          </a>
          {errors.form && (
            <span className="text-red-400 text-xs mt-2">{errors.form}</span>
          )}
          <button
            className="mt-6 bg-purple-600 h-[40px] cursor-pointer"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          
          </button>
        </div>

        <div className="flex items-center gap-3 px-8 mt-6">
          <div className="flex-1 h-[1px] bg-[#30363d]"></div>
          <span className="text-[#8b949e] text-sm">OR</span>
          <div className="flex-1 h-[1px] bg-[#30363d]"></div>
        </div>
        <div className="px-8 mt-4">
          <button
            className="flex items-center justify-center gap-3 w-full  border border-[#30363d] px-4 py-3 rounded-md hover:bg-[#30363d] transition-all cursor-pointer"
            onClick={githubLogin}
          >
            <FaGithub size={20}></FaGithub>
            <span>Continue with Github</span>
          </button>
        </div>
        <div className="flex items-center justify-center mt-6 mb-6">
          <h3 className="text-[14px]">
            Don't have an account?{" "}
            <span
              className="text-purple-500 cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Login;
