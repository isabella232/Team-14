import React from 'react';
import { Router, Redirect, Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { NavigationBar } from './components/navbar/NavigationBar';
import { SignupWizard } from './pages/signup/SignupWizard';
import UserCategoryStep from './pages/signup/steps/UserCategory';

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

const getStep = (n: number) => {
  return steps[n] || 'Whoops!?';
}

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about">
          <NavigationBar></NavigationBar>
        </Route>
        <Route path="/users">
          <NavigationBar></NavigationBar>
        </Route>
        <Route path="/signup">
          <SignupWizard steps={steps} />
        </Route>
        <Route path="/">
          <Redirect to="/signup"/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
