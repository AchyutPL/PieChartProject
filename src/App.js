/** @format */

//I have included the everycode I have written in this project even the unnecessary one

import { PieChart, Pie, Cell, LabelList, Tooltip } from "recharts";
import Axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./component/Loading";

function App() {
  const [loading, setloading] = useState(true);

  const [organization, setorganization] = useState([]);

  const [projects, setprojects] = useState([]);

  //Fetching organization information

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await Axios.get(
          "https://mdsa.bipad.gov.np/api/v1/organization"
        );
        setorganization(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  //Fetching projects information

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await Axios.get(
          "https://mdsa.bipad.gov.np/api/v1/project"
        );
        setprojects(data);
        setloading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  // console.log(organization.results);
  // console.log(projects.results);

  //making array from the oid of projects and counting the repeated numbers
  const projectCount = [
    2, 6, 2, 2, 2, 2, 2, 2, 2, 36, 36, 42, 42, 42, 60, 95, 49, 39, 62, 36, 51,
    36, 36, 36, 132, 175, 27, 178, 145, 137, 39, 145, 145, 145, 145, 145, 177,
    176, 27, 33, 147, 147, 147, 147, 238, 137, 176, 176, 52, 176, 151, 151, 151,
    151, 177, 95, 137, 137, 137, 137, 28, 28, 845,
  ];
  //sorting array in ascending format
  projectCount.sort((a, b) => a - b);
  // console.log(projectCount);
  //counting the repeated projects
  let current = null;
  let cnt = 0;
  const count = () => {
    for (var i = 0; i < projectCount.length; i++) {
      if (projectCount[i] != current) {
        if (cnt > 0) {
          console.log(current + " comes --> " + cnt + " times");
        }
        current = projectCount[i];
        cnt = 1;
      } else {
        cnt++;
      }
    }
    if (cnt > 0) {
      console.log(current + " comes --> " + cnt + " times");
    }
  };
  count();
  //output of the count function will look like
  /*
   2 comes --> 8 times    which indicate that organization having oid 2 has a 8 projects 
   6 comes --> 1 times
   27 comes --> 2 times
   28 comes --> 2 times
   33 comes --> 1 times
   36 comes --> 6 times
   39 comes --> 2 times
   42 comes --> 3 times
   49 comes --> 1 times
   51 comes --> 1 times
   52 comes --> 1 times
   60 comes --> 1 times
   62 comes --> 1 times
   95 comes --> 2 times
   132 comes --> 1 times
   137 comes --> 6 times
   145 comes --> 6 times
   147 comes --> 4 times
   151 comes --> 4 times
   175 comes --> 1 times
   176 comes --> 4 times
   177 comes --> 2 times
   178 comes --> 1 times
   238 comes --> 1 times
   845 comes --> 1 times
*/

  //Now let's make a array from the oid

  const dataForPiechart = [
    {
      oid: 2,
      oname: "United Nations Development Programme (UNDP)",
      noofprojects: 8,
    },
    {
      oid: 6,
      oname: "United Nations Population Fund (UNFPA)",
      noofprojects: 1,
    },
    {
      oid: 27,
      oname: "Welthungerhilfe",
      noofprojects: 2,
    },
    {
      oid: 28,
      oname: "Oxfam in Nepal",
      noofprojects: 2,
    },
    {
      oid: 33,
      oname: "Mercy Corps",
      noofprojects: 1,
    },
    {
      oid: 36,
      oname: "Nepal Red Cross Society",
      noofprojects: 6,
    },
    {
      oid: 39,
      oname: "World Food Programme",
      noofprojects: 2,
    },
    {
      oid: 42,
      oname: "Good Neighbors International Nepal",
      noofprojects: 3,
    },
    {
      oid: 49,
      oname: "Lutheran World Relief (LWR)",
      noofprojects: 1,
    },
    {
      oid: 51,
      oname: "Habitat for Humanity International - Nepal",
      noofprojects: 1,
    },
    {
      oid: 52,
      oname: "Practical Action Nepal",
      noofprojects: 1,
    },
    {
      oid: 60,
      oname: "NDRC Nepal",
      noofprojects: 1,
    },
    {
      oid: 62,
      oname: "National Society For Earthquake Technology Nepal",
      noofprojects: 1,
    },
    {
      oid: 95,
      oname: " United Nations Children's Fund (UNICEF)",
      noofprojects: 2,
    },
    {
      oid: 132,
      oname: "International Organization For Migration",
      noofprojects: 1,
    },
    {
      oid: 137,
      oname: "Save the Children",
      noofprojects: 6,
    },
    {
      oid: 145,
      oname: "World Vision International Nepal",
      noofprojects: 6,
    },
    {
      oid: 147,
      oname: "Plan International Nepal",
      noofprojects: 4,
    },
    {
      oid: 151,
      oname: "ActionAid Nepal",
      noofprojects: 4,
    },
    {
      oid: 175,
      oname: "DanChurchAid (DCA)",
      noofprojects: 1,
    },
    {
      oid: 176,
      oname: "CARE Nepal",
      noofprojects: 4,
    },
    {
      oid: 177,
      oname: "Tearfund Nepal  (TF)",
      noofprojects: 2,
    },
    {
      oid: 178,
      oname: "Caritas Nepal",
      noofprojects: 1,
    },
    {
      oid: 178,
      oname: "UN-Habitat",
      noofprojects: 1,
    },
    {
      oid: 845,
      oname: "Ministry of Internal Affairs and law Lumbini province",
      noofprojects: 1,
    },
  ];
  console.log(dataForPiechart);
  //let's define the color for the piechart elements
  //Note :  I have used random colors
  const colorArray = [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#99FF99",
    "#B34D4D",
    "#80B300",
    "#809900",
    "#E6B3B3",
    "#6680B3",
    "#66991A",
    "#FF99E6",
    "#CCFF1A",
    "#FF1A66",
    "#E6331A",
    "#33FFCC",
    "#66994D",
    "#B366CC",
    "#4D8000",
    "#B33300",
    "#CC80CC",
  ];

  return (
    <>
      <div className="App">
        {/* {loading ? (
          <Loading />
        ) : (
          <div>
            <h1>Organizatons Oid</h1>
            {organization.results.map((result) => (
              <span key={result.oid} style={{ margin: "5px" }}>
                {" "}
                {result.oid}{" "}
              </span>
            ))}
            <h1>Projects Oid</h1>
            {projects.results.map((result) => (
              <span key={result.pid} style={{ margin: "5px" }}>
                {" "}
                {result.oid},{" "}
              </span>
            ))}
          </div>
        )} */}

        <PieChart width={450} height={400}>
          <Pie
            dataKey="noofprojects"
            isAnimationActive={false}
            data={dataForPiechart}
            cx={200}
            cy={200}
            paddingAngle={2}
            innerRadius={120}
            outerRadius={140}
            fill="#8884d8"
            label>
            {dataForPiechart.map((entry, index) => (
              <>
                <Cell
                  key={`cell-${index}`}
                  fill={colorArray[index % colorArray.length]}>
                  {" "}
                </Cell>
              </>
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className="organizationInfo">
        {dataForPiechart.map((item, i) => (
          <div style={{ display: "flex", margin: "7px" }}>
            <div
              key={i}
              className="colorBox"
              style={{ backgroundColor: colorArray[i] }}></div>
            <span style={{ margin: "3px" }}>{item.oname}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
