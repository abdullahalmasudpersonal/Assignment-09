
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart, Pie, PieChart, XAxis, YAxis } from 'recharts';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'


const Dashboard = () => {
  const [business, setBusiness] = useState([]);
  useEffect(() => {
    axios.get('data.json')
      .then(data => setBusiness(data.data))
  }, []);
  return (
    <div className='container mt-4 bg-color'>
      <div class=" row row-cols-1 row-cols-md-2 g-4 ">

        <div class="col mb-3">
          <h5 className='m-4'>Investment VS Revenue</h5>
          <div class="card border-0">
            <BarChart width={350} height={300} data={business}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey='month' />
              <YAxis />
              <Legend />
              <Bar dataKey='investment' fill='brown' />
              <Bar dataKey='revenue' fill='purple' />
            </BarChart >
          </div>
        </div>

        <div class="col mb-3">
          <h5 className=' m-4 '>Investment VS Revenue</h5>
          <div class="card border-0">
            <LineChart width={350} height={300} data={business}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey='month' />
              <YAxis />
              <Legend />
              <Line type='monotone' dataKey='revenue' stroke="#8884d8" />
              <Line type='monotone' dataKey='investment' stroke="#82ca9d" />
            </LineChart>
          </div>
        </div>

        <div class="col mb-3">
          <h5 className=' m-4'>Investment VS Revenue</h5>
          <div class="card border-0">
            <ComposedChart width={350} height={300} data={business}>
              <XAxis dataKey="month" />
              <YAxis />
              <Legend />
              <CartesianGrid stroke="#f5f5f5" />
              <Area type="monotone" dataKey="investment" fill="#8884d8" stroke="#8884d8" />
              <Bar dataKey="revenue" barSize={20} fill="#413ea0" />
              <Line type="monotone" dataKey="sell" stroke="#ff7300" />
            </ComposedChart>
          </div>
        </div>

        <div class="col mb-3">
          <h5 className=' m-4'>Investment VS Revenue</h5>
          <div class="card border-0">
            <PieChart width={350} height={300}>
              <Pie data={business} dataKey="investment" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
              <Pie data={business} dataKey="revenue" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={120} fill="#82ca9d" label />
            </PieChart>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Dashboard; 