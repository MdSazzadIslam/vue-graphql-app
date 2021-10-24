export interface ApolloResponse {
  data: any;
  loading: boolean;
  networkStatus: number;
  stale: boolean;
}
export interface ISensor {
  id?: number;
  name: string;
}

export interface IGPSPosition {
  lat: string;
  long: string;
}

export interface ISensorDataPoint {
  id?: string;
  timestamp: Date;
  value: number;
}

export interface IMachine {
  id?: number;
  name: string;
  sensor: ISensor[];
  lastKnownPosition: IGPSPosition;
}
