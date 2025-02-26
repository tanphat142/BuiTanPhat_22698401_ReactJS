import { useState } from "react";
import "./Bai2.css";
function Bai2() {
  const [invest, setInvest] = useState('');
  const [rate, setRate] = useState('');
  const [goal, setGoal] = useState('');
  const [years, setYears] = useState(null);
  const [tableData, setTableData] = useState([]);

  const calculateYears = () => {
    if (!invest || !rate || !goal) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    const P = parseFloat(invest);
    const r = parseFloat(rate) / 100;
    const G = parseFloat(goal);

    if (P <= 0 || r <= 0 || G <= P) {
      alert("Dữ liệu không hợp lệ!");
      return;
    }

    let amount = P;
    let year = 0;
    let data = [];

    while (amount < G) {
      amount += amount * r; 
      year++;
      data.push({ year, amount: amount.toFixed(2) });
    }

    setYears(year);
    setTableData(data);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "20px auto", textAlign: "center" }}>
      <h2>Tính số năm để đạt mục tiêu</h2>
      <input
        type="number"
        placeholder="Số tiền đầu tư ban đầu"
        value={invest}
        onChange={(e) => setInvest(e.target.value)}
      />
      <input
        type="number"
        placeholder="Lãi suất hằng năm (%)"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
      />
      <input
        type="number"
        placeholder="Mục tiêu số tiền"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />
      <button onClick={calculateYears}>Tính toán</button>

      {years !== null && (
        <div>
          <p>Bạn cần khoảng <strong>{years}</strong> năm để đạt mục tiêu!</p>
          <table border="1" style={{ width: "100%", marginTop: "10px" }}>
            <thead>
              <tr>
                <th>Năm</th>
                <th>Số tiền tích lũy</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr key={row.year}>
                  <td>{row.year}</td>
                  <td>{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Bai2;
