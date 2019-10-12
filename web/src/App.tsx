import React from 'react';
import { Redirect, Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { SignupWizard } from './pages/signup/SignupWizard';
import { DonationPage } from './pages/donor/donation/DonationPage';
import { Dashboard as StudentDashboard } from './pages/student/dashboard/Dashboard';
import { Dashboard as DonorDashboard } from './pages/donor/dashboard/Dashboard';
import { VendorsPage } from './pages/student/vendors/VendorsPage';
import { UserCategoryStep } from './pages/signup/steps/UserCategoryStep';
import './App.css';
import { TopBar } from './components/top-bar/TopBar';
import { GetMap } from './pages/student/map/map';
import { PaymentPage } from './pages/payment/PaymentPage';
import { PaymentSuccessPage } from './pages/payment/PaymentSuccessPage';

const steps = [
  {
    label: 'Category',
    element: <UserCategoryStep />
  },
  {
    label: 'Foo Bar',
    element: <UserCategoryStep />
  }
]

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true}>
          <Redirect to="/signup" />
        </Route>

        <Route path="/signup">
          <SignupWizard steps={steps} />
        </Route>

        <Route path="/donor" exact={true}>
          <DonationPage />
        </Route>

        <Route path="/donor/donate">
          <DonationPage />
        </Route>
        
        <Route path="/donor/payment">
          <PaymentPage />
        </Route>

        <Route path="/donor/success">
          <PaymentSuccessPage />
        </Route>

        <Route path="/student" exact={true}>
          <TopBar title="Student Dashboard"/>
          <StudentDashboard />
        </Route>
        
        <Route path="/student/map" exact={true}>
          <GetMap />
        </Route>

        <Route path="/student/vendors">
          <VendorsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
