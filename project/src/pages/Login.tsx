import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({
    userId: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { userId, password } = form;
    if (!userId.trim() || !password.trim()) {
      alert("아이디와 비밀번호를 모두 입력해주세요.");
    } else {
      alert(`환영합니다, ${userId}님!`);
      // 여기에 실제 로그인 API 요청 등을 구현할 수 있습니다.
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fbefef] text-[#333]">
      <div className="bg-white p-8 rounded-xl shadow-md w-[400px]">
        <h1 className="text-xl font-bold text-center mb-3">로그인</h1>
        <p className="text-sm text-center text-[#666] mb-6">
          ForForeigner에 방문해 주셔서 감사합니다.
          <br />
          로그인하시면 보다 편리하게 서비스 이용이 가능합니다.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 border border-[#F5A9A9] rounded px-4 py-3">
              <label htmlFor="userId" className="w-20 text-sm font-bold">
                ID
              </label>
              <input
                id="userId"
                type="text"
                placeholder="아이디를 입력해 주세요."
                value={form.userId}
                onChange={handleChange}
                className="flex-1 outline-none bg-transparent text-sm"
              />
            </div>

            <div className="flex items-center gap-3 border border-[#F5A9A9] rounded px-4 py-3">
              <label htmlFor="password" className="w-20 text-sm font-bold">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="비밀번호를 입력해주세요"
                value={form.password}
                onChange={handleChange}
                className="flex-1 outline-none bg-transparent text-sm"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-md border border-[#F5A9A9] bg-white text-[#F5A9A9] font-bold text-base hover:bg-[#F5A9A9] hover:text-white transition"
          >
            로그인
          </button>
        </form>

        <div className="text-center text-sm text-[#666] mt-4">
  <Link to="/find" className="hover:underline">
    아이디/비밀번호 찾기
  </Link>
  <span className="mx-2">ㆍ</span>
  <Link to="/signup" className="hover:underline">
    회원가입
  </Link>
</div>

        
      </div>
    </div>
  );
}
