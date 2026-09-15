export interface Zone {
  id: string;
  name: string;
  population: number;
  casualties: number;
  medicineStock: number; // percentage 0-100
  foodStock: number; // percentage 0-100
  consumptionRate: number; // units/hour
  accessibility: number; // percentage 0-100
  vulnerablePopulation: number;
}

export interface UrgencyScores {
  [zoneId: string]: {
    score: number;
    level: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  };
}

export interface ShortagePredicition {
  medicineMinutes: number;
  foodMinutes: number;
}

export interface ResourceAllocation {
  medicineUnits: number;
  foodUnits: number;
  rescueCrews: number;
  vehicles: number;
}

export interface Recommendation {
  zoneId: string;
  zoneName: string;
  allocation: ResourceAllocation;
  reason: string;
  priority: number;
}

export interface GlobalResources {
  food: number;
  medicine: number;
  rescueCrews: number;
  vehicles: number;
}

export interface EventLogEntry {
  timestamp: string;
  message: string;
  type: 'info' | 'warning' | 'alert' | 'success';
}

export interface RouteStatus {
  zoneId: string;
  status: 'available' | 'blocked' | 'alternate';
  vehicleAssigned?: number;
}

export interface DisasterState {
  zones: Zone[];
  resources: GlobalResources;
  urgencyScores: UrgencyScores;
  recommendations: Recommendation[];
  routeStatus: RouteStatus[];
  eventLog: EventLogEntry[];
  lastOptimizationTime: string | null;
}
