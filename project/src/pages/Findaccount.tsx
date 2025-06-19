import React, { useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

const users: User[] = [
  { id: "johndoe", name: "JohnDoe", email: "john@example.com", password: "abcd1234" },
  { id: "janesmith", name: "JaneSmith", email: "jane@example.com", password: "pw123456" }
];

const FindAccount: React.FC = () => {
  // 아이디 찾기 상태
  const [idName, setIdName] = useState("");
  const [idEmail, setIdEmail] = useState("");
  const [idMessage, setIdMessage] = useState<React.ReactNode>(<></>);

  // 비밀번호 찾기 상태
  const [pwId, setPwId] = useState("");
  const [pwName, setPwName] = useState("");
  const [pwEmail, setPwEmail] = useState("");
  const [pwMessage, setPwMessage] = useState<React.ReactNode>(<></>);

  const findId = () => {
    const user = users.find(u => u.name === idName && u.email === idEmail);
    if (!user) {
      setIdMessage(<div style={{ color: "red", marginTop: 10 }}>등록되지 않은 이름 또는 이메일입니다.</div>);
    } else {
      setIdMessage(<div style={{ color: "green", marginTop: 10 }}>인증 완료. 아이디는 <strong>{user.id}</strong>입니다.</div>);
    }
  };

  const findPw = () => {
    const user = users.find(u => u.id === pwId && u.name === pwName && u.email === pwEmail);
    if (!user) {
      setPwMessage(<div style={{ color: "red", marginTop: 10 }}>등록되지 않은 정보입니다. 다시 입력해주세요.</div>);
    } else {
      setPwMessage(
        <div style={{ color: "green", marginTop: 10 }}>
          인증 완료. 임시 비밀번호는 <strong>{user.password}</strong> 입니다.<br />
          <button
            style={{
              marginTop: 10,
              backgroundColor: "#f5a9a9",
              color: "white",
              padding: "8px 16px",
              border: "none",
              borderRadius: 6,
              cursor: "pointer"
            }}
            onClick={() => window.location.href = "/login"}
          >
            로그인 페이지로 이동
          </button>
        </div>
      );
    }
  };

  return (
    <div style={styles.body}>
      <h1 style={styles.title}>아이디 / 비밀번호 찾기</h1>
      <div style={styles.container}>
        {/* 아이디 찾기 */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>아이디 찾기</h2>
          <div style={styles.row}>
            <label style={styles.label}>영문이름</label>
            <input
              type="text"
              value={idName}
              onChange={e => setIdName(e.target.value)}
              placeholder="영문이름을 입력하세요"
              style={styles.input}
            />
          </div>
          <div style={styles.row}>
            <label style={styles.label}>이메일</label>
            <input
              type="email"
              value={idEmail}
              onChange={e => setIdEmail(e.target.value)}
              placeholder="이메일을 입력하세요"
              style={styles.input}
            />
          </div>
          <button className="btn" onClick={findId} style={styles.btn}>확인</button>
          {idMessage}
          <div style={styles.info}>가입시 등록한 정보로 아이디를 찾을 수 있습니다.</div>
        </div>

        {/* 비밀번호 찾기 */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>비밀번호 찾기</h2>
          <div style={styles.row}>
            <label style={styles.label}>아이디</label>
            <input
              type="text"
              value={pwId}
              onChange={e => setPwId(e.target.value)}
              placeholder="아이디를 입력하세요"
              style={styles.input}
            />
          </div>
          <div style={styles.row}>
            <label style={styles.label}>영문이름</label>
            <input
              type="text"
              value={pwName}
              onChange={e => setPwName(e.target.value)}
              placeholder="영문이름을 입력하세요"
              style={styles.input}
            />
          </div>
          <div style={styles.row}>
            <label style={styles.label}>이메일</label>
            <input
              type="email"
              value={pwEmail}
              onChange={e => setPwEmail(e.target.value)}
              placeholder="이메일을 입력하세요"
              style={styles.input}
            />
          </div>
          <button className="btn" onClick={findPw} style={styles.btn}>확인</button>
          {pwMessage}
          <div style={styles.info}>가입시 등록한 이메일로 임시비밀번호를 전송합니다.</div>
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  body: {
    backgroundColor: "#fbefef",
    fontFamily: "Arial, sans-serif",
    padding: "50px 20px"
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 40
  },
  container: {
    display: "flex",
    justifyContent: "center",
    gap: 50,
    flexWrap: "wrap"
  },
  section: {
    backgroundColor: "#fff",
    padding: 30,
    width: 400,
    boxShadow: "0 0 10px #F5A9A9",
    borderRadius: 12
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 20,
    borderBottom: "1px solid #ccc",
    paddingBottom: 10
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 15
  },
  label: {
    flex: 1,
    fontWeight: "bold",
    textAlign: "left"
  },
  input: {
    flex: 2,
    padding: 6,
    border: "1px solid #ccc",
    borderRadius: 5
  },
  btn: {
    width: "100%",
    padding: "14px 0",
    border: "1px solid #F5A9A9",
    backgroundColor: "#fff",
    color: "#F5A9A9",
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 8,
    cursor: "pointer",
    marginBottom: 20
  },
  info: {
    textAlign: "center",
    fontSize: 12,
    color: "#555",
    marginTop: 15
  }
};

export default FindAccount;
