import { Bug, Shield, Gauge, History, Code, Zap, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import download from "../assets/download.jpg";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "getting-started", label: "Getting Started" },
  { id: "features", label: "Features" },
  { id: "how-it-works", label: "How It Works" },
  { id: "faq", label: "FAQ" },
];

function Documentation() {
  const navigate = useNavigate();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex h-[calc(100vh-68px)] bg-[#0d1117] text-white">
      {/* Sidebar */}
      <aside className="w-64 shrink-0 overflow-y-auto border-r border-[#30363d] px-6 py-10 hidden lg:block">
        <div className="flex items-center gap-2 mb-8">
          <img src={download} className="h-5 w-5" alt="DevLens" />
          <span className="font-bold text-lg">DevLens Docs</span>
        </div>
        <nav className="flex flex-col gap-1">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="flex items-center gap-2 text-sm text-[#8b949e] hover:text-white py-1.5 px-2 rounded hover:bg-[#161b22] transition-colors text-left"
            >
              <ChevronRight size={12} />
              {s.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
      <div className="max-w-4xl mx-auto px-8 lg:px-16 py-12">
        {/* Overview */}
        <section id="overview" className="mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-purple-400">Documentation</span>
          <h1 className="text-4xl font-bold mt-2 mb-4">DevLens</h1>
          <p className="text-[#8b949e] text-base leading-relaxed">
            DevLens is an AI-powered code review platform that provides instant, intelligent feedback
            on bugs, security vulnerabilities, and performance bottlenecks. This guide covers everything
            you need to get up and running.
          </p>
          <div className="mt-6 flex gap-3">
            <button
              onClick={() => navigate("/signup")}
              className="bg-purple-600 hover:bg-purple-700 transition-colors px-5 py-2 rounded text-sm font-semibold"
            >
              Get Started Free
            </button>
            <button
              onClick={() => scrollTo("getting-started")}
              className="border border-[#30363d] hover:border-purple-500 transition-colors px-5 py-2 rounded text-sm font-semibold text-[#8b949e] hover:text-white"
            >
              Getting Started
            </button>
          </div>
        </section>

        <hr className="border-[#30363d] mb-16" />

        {/* Getting Started */}
        <section id="getting-started" className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Getting Started</h2>

          <div className="flex flex-col gap-6">
            {[
              {
                step: "1",
                title: "Create an account",
                desc: 'Click "Get Started For Free" on the landing page and sign up with your email. No credit card required.',
                code: null,
              },
              {
                step: "2",
                title: "Open the Dashboard",
                desc: "After logging in you will land on the Dashboard. This is where you submit code for review.",
                code: null,
              },
              {
                step: "3",
                title: "Paste your code",
                desc: "Paste any code snippet into the editor and select the programming language from the dropdown.",
                code: "// Example — paste anything\nfunction add(a, b) {\n  return a + b\n}",
              },
              {
                step: "4",
                title: "Run the review",
                desc: 'Click "Review" and receive instant AI feedback within seconds.',
                code: null,
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-5">
                <div className="flex flex-col items-center shrink-0">
                  <div className="border border-purple-500 rounded-lg w-9 h-9 flex items-center justify-center text-purple-400 font-bold text-sm">
                    {item.step}
                  </div>
                  <div className="w-px flex-1 bg-[#30363d] mt-2" />
                </div>
                <div className="pb-6">
                  <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                  <p className="text-[#8b949e] text-sm">{item.desc}</p>
                  {item.code && (
                    <pre className="mt-3 bg-[#161b22] border border-[#30363d] rounded p-4 text-sm text-[#8b949e] font-mono overflow-x-auto">
                      {item.code}
                    </pre>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-[#30363d] mb-16" />

        {/* Features */}
        <section id="features" className="mb-16">
          <h2 className="text-2xl font-bold mb-2">Features</h2>
          <p className="text-[#8b949e] text-sm mb-8">Everything DevLens analyses in a single review.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                icon: <Bug className="text-purple-400" size={20} />,
                title: "Bug Detection",
                desc: "Finds hidden logic errors, null-pointer risks, off-by-one mistakes, and edge cases that slip past manual review.",
              },
              {
                icon: <Shield className="text-purple-400" size={20} />,
                title: "Security Audits",
                desc: "Detects OWASP Top-10 vulnerabilities including SQL injection, XSS, insecure deserialization, and hardcoded secrets.",
              },
              {
                icon: <Gauge className="text-purple-400" size={20} />,
                title: "Performance Insights",
                desc: "Identifies O(n²) loops, redundant database calls, memory leaks, and suggests algorithmic improvements.",
              },
              {
                icon: <History className="text-purple-400" size={20} />,
                title: "Review History",
                desc: "Every review is saved to your history. Track how your code quality improves over time.",
              },
              {
                icon: <Code className="text-purple-400" size={20} />,
                title: "Multi-language Support",
                desc: "JavaScript, TypeScript, Python, Go, Java, C++, Rust, and more — with language-specific best practices.",
              },
              {
                icon: <Zap className="text-purple-400" size={20} />,
                title: "Instant Results",
                desc: "Powered by Claude, reviews complete in seconds even for large files.",
              },
            ].map((f) => (
              <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
                <div className="mb-3">{f.icon}</div>
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-[#8b949e] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-[#30363d] mb-16" />

        {/* How It Works */}
        <section id="how-it-works" className="mb-16">
          <h2 className="text-2xl font-bold mb-2">How It Works</h2>
          <p className="text-[#8b949e] text-sm mb-8">
            DevLens uses a large language model (LLM) to perform deep static analysis on your code.
          </p>

          <div className="flex flex-col gap-4">
            {[
              {
                title: "Code ingestion",
                desc: "Your snippet is sent over an encrypted connection to the DevLens backend. No code is stored beyond your review history.",
              },
              {
                title: "LLM analysis",
                desc: "The model analyses structure, control flow, data handling, and security patterns against thousands of known vulnerability signatures.",
              },
              {
                title: "Structured report",
                desc: "Results are returned as a structured markdown report: severity-ranked findings, affected lines, and actionable fix suggestions.",
              },
              {
                title: "History persistence",
                desc: "Each review is saved under your account so you can revisit findings, track regressions, and share reports with teammates.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-[#161b22] border border-[#30363d] rounded-lg p-4">
                <span className="text-purple-400 font-bold text-sm w-5 shrink-0">{i + 1}.</span>
                <div>
                  <span className="font-semibold text-white text-sm">{item.title} — </span>
                  <span className="text-[#8b949e] text-sm">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-[#30363d] mb-16" />

        {/* FAQ */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl font-bold mb-8">FAQ</h2>

          <div className="flex flex-col gap-5">
            {[
              {
                q: "Is my code stored permanently?",
                a: "Reviews are saved to your account history so you can revisit them. You can delete individual reviews from the History page at any time.",
              },
              {
                q: "Which languages are supported?",
                a: "DevLens works with any language the underlying model understands — including JavaScript, TypeScript, Python, Go, Java, Rust, C/C++, PHP, Ruby, and more.",
              },
              {
                q: "How accurate are the findings?",
                a: "Accuracy depends on snippet size and context. For best results, include enough surrounding code so the model can understand data flow and intent.",
              },
              {
                q: "Is there a file size limit?",
                a: "Currently the editor accepts up to ~10 000 tokens (~8 000 words) of code per review. Larger files should be split by module.",
              },
              {
                q: "Is DevLens free to use?",
                a: "Yes — creating an account and running reviews is completely free. Sign up and get started in under a minute.",
              },
            ].map((item) => (
              <details key={item.q} className="group border border-[#30363d] rounded-lg bg-[#161b22]">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-sm list-none">
                  {item.q}
                  <ChevronRight size={14} className="text-[#8b949e] group-open:rotate-90 transition-transform" />
                </summary>
                <p className="px-5 pb-4 text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-purple-600 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold mb-2">Ready to get started?</h3>
          <p className="text-sm text-purple-200 mb-5">Create a free account and run your first review in under a minute.</p>
          <button
            onClick={() => navigate("/signup")}
            className="bg-white text-purple-600 font-bold px-6 py-2.5 rounded hover:bg-purple-50 transition-colors"
          >
            Sign Up Free
          </button>
        </div>
      </div>
      </main>
    </div>
  );
}

export default Documentation;
