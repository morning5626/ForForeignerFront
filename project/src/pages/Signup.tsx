import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [sentCode, setSentCode] = useState("");
  const [verifyMsg, setVerifyMsg] = useState("");
  const [form, setForm] = useState({
    lastname: "",
    firstname: "",
    userId: "",
    password: "",
    confirmPassword: "",
    nationality: "",
    emailUser: "",
    emailDomain: "",
    emailCode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const setDomain = (value: string) => {
    setForm((prev) => ({
      ...prev,
      emailDomain: value,
    }));
  };

  const sendVerificationCode = () => {
    const { emailUser, emailDomain } = form;
    if (!emailUser || !emailDomain) {
      alert("이메일 주소를 정확히 입력해주세요.");
      return;
    }
    setSentCode("123456");
    alert("인증번호가 전송되었습니다. (테스트용: 123456)");
  };

  const verifyEmailCode = () => {
    if (form.emailCode === sentCode) {
      setVerifyMsg("✅ 인증 완료되었습니다.");
    } else {
      setVerifyMsg("❌ 인증번호가 올바르지 않습니다.");
    }
  };

  const checkDuplicate = () => {
    if (!form.userId.trim()) {
      alert("아이디를 입력해주세요.");
      return;
    }
    alert("사용 가능한 아이디입니다. (예시)");
  };

  const validateForm = () => {
    const fields = [
      { key: "lastname", msg: "성을 입력해주세요." },
      { key: "firstname", msg: "이름을 입력해주세요." },
      { key: "userId", msg: "아이디를 입력해주세요." },
      { key: "password", msg: "비밀번호를 입력해주세요." },
      { key: "confirmPassword", msg: "비밀번호 확인을 입력해주세요." },
      { key: "nationality", msg: "국적을 선택해주세요." },
      { key: "emailUser", msg: "이메일 앞부분을 입력해주세요." },
      { key: "emailDomain", msg: "도메인을 입력해주세요." },
      { key: "emailCode", msg: "인증번호를 입력해주세요." },
    ];

    for (const field of fields) {
      if (!form[field.key as keyof typeof form].trim()) {
        alert(field.msg);
        return;
      }
    }

    if (form.password !== form.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    if (form.emailCode !== sentCode) {
      alert("이메일 인증을 완료해주세요.");
      return;
    }

    alert("회원가입이 완료되었습니다!");
  };

  return (
    <div className="min-h-screen bg-[#fbefef] py-12">
      <div className="container mx-auto max-w-3xl px-6">
        <h2 className="text-3xl text-center font-bold mb-6">회원가입</h2>

        <div className="flex justify-center gap-4 mb-6">
          <div>약관동의</div>
          <div className="font-bold border-b-2 border-black">회원정보 입력</div>
          <div>가입완료</div>
        </div>

        <div className="text-red-600 text-sm text-right mb-4">
          * 표시 항목은 필수 입력 항목 입니다.
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            validateForm();
          }}
          className="border-t pt-6 space-y-5"
        >
          {/* 이름 */}
          <div className="flex flex-col md:flex-row gap-2 items-center">
            <label className="w-32 font-semibold">
              영문이름 <span className="text-red-500">*</span>
            </label>
            <input className="w-full md:flex-1 border p-2" id="lastname" placeholder="성" value={form.lastname} onChange={handleChange} />
            <input className="w-full md:flex-1 border p-2" id="firstname" placeholder="이름" value={form.firstname} onChange={handleChange} />
          </div>

          {/* 아이디 */}
          <div className="flex flex-col md:flex-row gap-2 items-center">
            <label className="w-32 font-semibold">
              아이디 <span className="text-red-500">*</span>
            </label>
            <input className="w-full md:flex-1 border p-2" id="userId" value={form.userId} onChange={handleChange} />
            <button type="button" onClick={checkDuplicate} className="bg-gray-700 text-white px-4 py-2">중복확인</button>
          </div>

          {/* 비밀번호 */}
          <div className="flex flex-col md:flex-row gap-2 items-center">
            <label className="w-32 font-semibold">
              비밀번호 <span className="text-red-500">*</span>
            </label>
            <input type="password" className="w-full md:flex-1 border p-2" id="password" value={form.password} onChange={handleChange} />
          </div>
          <div className="flex flex-col md:flex-row gap-2 items-center">
            <label className="w-32 font-semibold">
              비밀번호 확인 <span className="text-red-500">*</span>
            </label>
            <input type="password" className="w-full md:flex-1 border p-2" id="confirmPassword" value={form.confirmPassword} onChange={handleChange} />
          </div>

          {/* 국적 */}
          <div className="flex flex-col md:flex-row gap-2 items-center">
            <label className="w-32 font-semibold">
              국적 <span className="text-red-500">*</span>
            </label>
            <select id="nationality" value={form.nationality} onChange={handleChange} className="w-full md:flex-1 border p-2">
              <option value="">국가 선택</option>
              <option>미국</option>
              <option>중국</option>
            </select>
          </div>

          {/* 이메일 */}
          <div className="flex flex-wrap md:flex-row gap-2 items-center">
            <label className="w-32 font-semibold">
              이메일 <span className="text-red-500">*</span>
            </label>
            <input id="emailUser" value={form.emailUser} onChange={handleChange} className="w-28 border p-2" />
            <span>@</span>
            <input id="emailDomain" value={form.emailDomain} onChange={handleChange} className="w-40 border p-2" />
            <select onChange={(e) => setDomain(e.target.value)} className="border p-2">
              <option value="">직접입력</option>
              <option value="gmail.com">gmail.com</option>
              <option value="naver.com">naver.com</option>
            </select>
            <button type="button" onClick={sendVerificationCode} className="bg-gray-700 text-white px-4 py-2">인증번호 발송</button>
          </div>

          {/* 인증 코드 */}
          <div className="flex flex-col md:flex-row gap-2 items-center">
            <label className="w-32 font-semibold">이메일 인증</label>
            <input id="emailCode" value={form.emailCode} onChange={handleChange} className="w-full md:flex-1 border p-2" />
            <button type="button" onClick={verifyEmailCode} className="bg-gray-700 text-white px-4 py-2">인증 확인</button>
            <span className="text-sm">{verifyMsg}</span>
          </div>

          {/* 버튼 그룹 */}
          <div className="flex justify-between mt-8">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="bg-gray-300 text-black px-6 py-3 rounded hover:bg-gray-400"
            >
              이전 단계
            </button>
            <button type="submit" className="bg-gray-700 text-white px-6 py-3 rounded hover:bg-gray-800">
              다음 단계
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
