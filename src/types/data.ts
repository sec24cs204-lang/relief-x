import { Zone, GlobalResources, DisasterState, EventLogEntry, RouteStatus } from './index';

export const INITIAL_ZONES: Zone[] = [
  {
    id: 'zone-a',
    name: 'ZONE A',
    population: 2500,
    casualties: 300,
    medicineStock: 12,
    foodStock: 35,
    consumptionRate: 150,
    accessibility: 70,
    vulnerablePopulation: 450,
  },
  {
    id: 'zone-b',
    name: 'ZONE B',
    population: 1800,
    casualties: 120,
    medicineStock: 28,
    foodStock: 20,
    consumptionRate: 180,
    accessibility: 60,
    vulnerablePopulation: 300,
  },
  {
    id: 'zone-c',
    name: 'ZONE C',
    population: 3200,
    casualties: 80,
    medicineStock: 55,
    foodStock: 60,
    consumptionRate: 100,
    accessibility: 85,
    vulnerablePopulation: 250,
  },
  {
    id: 'zone-d',
    name: 'ZONE D',
    population: 1200,
    casualties: 40,
    medicineStock: 70,
    foodStock: 75,
    consumptionRate: 60,
    accessibility: 90,
    vulnerablePopulation: 100,
  },
];

export const INITIAL_RESOURCES: GlobalResources = {
  food: 3000,
  medicine: 1000,
  rescueCrews: 10,
  vehicles: 5,
};

export const INITIAL_ROUTE_STATUS: RouteStatus[] = [
  { zoneId: 'zone-a', status: 'available' },
  { zoneId: 'zone-b', status: 'available' },
  { zoneId: 'zone-c', status: 'available' },
  { zoneId: 'zone-d', status: 'available' },
];

export const INITIAL_EVENT_LOG: EventLogEntry[] = [
  {
    timestamp: new Date(Date.now() - 60000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    message: 'System initialized',
    type: 'info',
  },
];

export const INITIAL_STATE: DisasterState = {
  zones: INITIAL_ZONES,
  resources: INITIAL_RESOURCES,
  urgencyScores: {},
  recommendations: [],
  routeStatus: INITIAL_ROUTE_STATUS,
  eventLog: INITIAL_EVENT_LOG,
  lastOptimizationTime: null,
};
