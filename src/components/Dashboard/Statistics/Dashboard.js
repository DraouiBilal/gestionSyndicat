import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import PieChart from "./PieChart";
import VerticalBarChart from "./VerticalBarChart";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";

const Dashboard = ({auth:{user,loading}}) => {
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

  useEffect(() => {
    axios.get('/statistics').then(res=>{
      setStatistics({...res.data,loading:false})
    }).catch(err=>{
      console.log(err);
    })
  }, [user]);

  const [statistics, setStatistics] = useState({
    nombre_locataires: 0,
    annee_profits: [],
    mois_profits: 0,
    annee_depenses: [],
    mois_depenses: 0,
    paid_count: 0,
    not_paid_count: 0,
    loading:true
  });

  const dataProfit = {
    labels,
    datasets: [
      {
        label: "Profit",
        data: statistics.annee_profits,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const dataDepense = {
    labels,
    datasets: [
      {
        label: "Profit",
        data: statistics.annee_depenses,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
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
        data: [statistics.paid_count, statistics.not_paid_count],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(75, 192, 192, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(75, 192, 192, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (!loading && !statistics.loading &&
    <div className="main-content">
      <div className="col col-md col-lg">
        <div className="card">
          <div className="card-head">
            <p className="stats-header">Statistics</p>
          </div>
          <div className="card-body">
            <div className="statistics-cards">
              <div className="stati bg-emerald ">
                <FontAwesomeIcon icon={solid("sack-dollar")} />
                <div>
                  <b>{statistics.mois_profits}DH</b>
                  <span>profit de ce mois</span>
                </div>
              </div>
              <div className="stati bg-turquoise ">
                <FontAwesomeIcon icon={solid("house-chimney")} />
                <div>
                  <b>{statistics.nombre_locataires}</b>
                  <span>Nombre de locataire</span>
                </div>
              </div>
              <div className="stati bg-peter_river ">
                <FontAwesomeIcon icon={solid("hand-holding-dollar")} />
                <div>
                  <b>{statistics.mois_depenses}DH</b>
                  <span>Total depense</span>
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
              <div className="chart">
                <VerticalBarChart
                  options={getOptions("Depenses par mois")}
                  data={dataDepense}
                />
              </div>
              <div className="chart">
                <VerticalBarChart
                  options={getOptions("Profit par mois")}
                  data={dataProfit}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  auth:state.userReducer
})

export default connect(mapStateToProps)(Dashboard);
