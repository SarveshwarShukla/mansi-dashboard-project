export default function getChartData(req, res) {
  const data = [
    { name: 0, user: 100, guest: 200 },
    { name: 1, user: 450, guest: 400 },
    { name: 2, user: 150, guest: 200 },
    { name: 3, user: 410, guest: 300 },
    { name: 4, user: 180, guest: 210 },
    { name: 5, user: 430, guest: 250 },
  ];

  return res?.status(200).json(data);
}
