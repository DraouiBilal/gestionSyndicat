import PieChart from "./PieChart";
import VerticalBarChart from "./VerticalBarChart";

const Dashboard = () => {
  const labels = [
    "Jan",
    "Fev",
    "Mar",
    "Avr",
    "Mai",
    "Juin",
    "Juil",
    "Août",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const getOptions = (title) => ({
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: title,
      },
    },
  });

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => Math.floor(Math.random() * 1000 + 1)),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => Math.floor(Math.random() * 1000 + 1)),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const pieData = {
    labels: [
      "Nombre de locataire qui ont payer",
      "Nombre de locataire qui n'ont pas payer",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [20, 33],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(75, 192, 192, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(75, 192, 192, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="main-content">
      <div className="col col-md col-lg">
        <div className="card">
          <div className="card-head">
            <p className="stats-header">Statistics</p>
          </div>
          <div className="card-body">
            <div className="statistics-cards">
              <div class="stati bg-emerald ">
                <i class="icon-notebook icons"></i>
                <div>
                  <b>6</b>
                  <span>Nombre de locataire</span>
                </div>
              </div>
              <div class="stati bg-turquoise ">
                <i class="icon-notebook icons"></i>
                <div>
                  <b>6</b>
                  <span>Total depense</span>
                </div>
              </div>
              <div class="stati bg-peter_river ">
                <i class="icon-notebook icons"></i>
                <div>
                  <b>6</b>
                  <span>bg-emerald</span>
                </div>
              </div>
            </div>
            <div className="statistics">
              <div className="pie-chart">
                <PieChart
                  options={getOptions("état de locataires")}
                  data={pieData}
                />
              </div>
              <div className="pie-chart">
                <PieChart
                  options={getOptions("Profit par mois")}
                  data={pieData}
                />
              </div>
              <div className="chart">
                <VerticalBarChart
                  options={getOptions("Depenses par mois")}
                  data={data}
                />
              </div>
              <div className="chart">
                <VerticalBarChart
                  options={getOptions("Profit par mois")}
                  data={data}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
