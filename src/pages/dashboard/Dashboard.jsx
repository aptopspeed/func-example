import React, { useEffect, useState } from 'react';
import { httpClient } from '../../utils/httpClient';


function Dashboard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await httpClient.get('https://65cd83b3c715428e8b3e8842.mockapi.io/api/v1/learning/users'); // Adjust the endpoint as needed
        setData(response.data);
      } catch (err) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='content-wrapper'>
      <h1>Data Table</h1>
      <table className='col-12'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;

// import { Component } from 'react'

// class Dashboard extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//       loading: true,
//       error: null,
//     };
//   }

//   async componentDidMount() {
//     try {
//       const response = await httpClient.get('https://jsonplaceholder.typicode.com/posts'); // Adjust the endpoint as needed
//       this.setState({ data: response.data, loading: false });
//     } catch (err) {
//       this.setState({ error: err.message || 'Something went wrong', loading: false });
//     }
//   }

//   render() {
//     const { data, loading, error } = this.state;

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error}</div>;

//     return (
//       <div className='content-wrapper'>
//         <h1>Data Table</h1>
//         <table className="col-12">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Title</th>
//               <th>Body</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.id}</td>
//                 <td>{item.title}</td>
//                 <td>{item.body}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// export default Dashboard;