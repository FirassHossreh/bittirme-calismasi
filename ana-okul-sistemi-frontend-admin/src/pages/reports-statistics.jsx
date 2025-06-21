import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const COLORS = ["#007BFF", "#ffffff", "#66b3ff", "#cce5ff"];

// 1. Yaş Dağılımı Verisi (Pie)
const ageData = [
  { name: "3 Yaş", value: 4 },
  { name: "4 Yaş", value: 3 },
  { name: "5 Yaş", value: 3 },
];

// 2. Cinsiyet Dağılımı (Pie)
const genderData = [
  { name: "Erkek", value: 6 },
  { name: "Kız", value: 4 },
];

// 3. Sınıflara Göre Öğrenci Sayısı (Bar)
const classData = [
  { name: "Kırmızı Sınıf", count: 4 },
  { name: "Mavi Sınıf", count: 3 },
  { name: "Yeşil Sınıf", count: 3 },
];

export default function ReportsStatistics() {
  return (
    <>
      <div className="min-h-screen bg-white p-8">
        <h1 className="text-3xl font-bold text-[#007BFF] mb-8">
          İstatistikler
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Yaş Dağılımı */}
          <div className="bg-[#f9f9f9] rounded-2xl p-4 shadow">
            <h2 className="text-xl font-semibold text-[#007BFF] mb-4">
              Yaş Dağılımı
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={ageData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {ageData.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Cinsiyet Dağılımı */}
          <div className="bg-[#f9f9f9] rounded-2xl p-4 shadow">
            <h2 className="text-xl font-semibold text-[#007BFF] mb-4">
              Cinsiyet Dağılımı
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={genderData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {genderData.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Sınıf Dağılımı (Bar Chart) */}
          <div className="bg-[#f9f9f9] rounded-2xl p-4 shadow col-span-1 md:col-span-2">
            <h2 className="text-xl font-semibold text-[#007BFF] mb-4">
              Sınıflara Göre Öğrenci Sayısı
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={classData}>
                <XAxis dataKey="name" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#007BFF" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>{" "}
    </>
  );
}
