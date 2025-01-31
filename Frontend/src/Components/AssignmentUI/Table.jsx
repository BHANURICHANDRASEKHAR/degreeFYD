import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "Institute Name",
    dataIndex: "Institute_Name",
    // filters: [
    //   { text: "VSA Groups of Institutions", value: "VSA Groups of Institutions" },
    // ],
    // onFilter: (value, record) => record.Institute_Name.indexOf(value) === 0,
  },
  {
   title: "Course Stream",
    dataIndex: "Course_Stream",

  },
  {
    title: "City",
    dataIndex: "Institute_city",
    // filters: [
    //   { text: "Salem", value: "Salem" },
    // ],
    onFilter: (value, record) => record.Institute_city.indexOf(value) === 0,
  },
  {
    title: "Course Name",
    dataIndex: "Course_Name",
   
  },
  {
    title: "Fee",
    dataIndex: "Fee",
    sorter: (a, b) => a.Fee - b.Fee,
  },
  {
    title: "Course Duration",
    dataIndex: "Course_Duration",
    sorter: (a, b) => a.Course_Duration - b.Course_Duration,
  },
  {
    title: "Level",
    dataIndex: "Level",
    filters: [
        { text: "Diploma", value: "Diploma" },
      { text: "UG", value: "UG" },
      
      { text: "PG", value: "PG" }
    ],
    onFilter: (value, record) => record.Level.indexOf(value) === 0,
  },
];

const App = ({ SearchResults }) => (
    <React.Fragment> <div className="alert alert-success col fs-5">
     <p className="text-center fw-bold">Search Results Count : {SearchResults.length}</p>
  </div>
  <Table columns={columns} dataSource={SearchResults} onChange={onChange} />

  </React.Fragment>
);

const onChange = (pagination, filters, sorter, extra) => {
  
};

export default App;
