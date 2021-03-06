import React from 'react';
import Dashboard from './Dashboard';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
 
export default () => (
  <Tabs>
    <TabList className='tList'>
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
