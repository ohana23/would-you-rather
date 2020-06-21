import React from 'react';
import Dashboard from './Dashboard';
// import '../styles/Toggle.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
 
export default () => (
  <Tabs>
    <TabList>
      <Tab>Unanswered</Tab>
      <Tab>Answered</Tab>
    </TabList>
 
    <TabPanel>
      <Dashboard showUnanswered={true}/>
    </TabPanel>
    <TabPanel>
      <Dashboard showUnanswered={false}/>
    </TabPanel>
  </Tabs>
);