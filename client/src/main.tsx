import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Suspense } from 'react'
import RouteView from './routes/RouteView'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'
import './index.css'
import 'reset-css'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement)

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div>加载中。。。</div>}>
      <BrowserRouter>
        <RouteView />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
)
