export interface ApolloResponse {
  data: any;
  loading: boolean;
  networkStatus: number;
  stale: boolean;
}
export interface ISensor {
  id?: string;
  name: string;
}

export interface IGPSPosition {
  lat: string;
  long: string;
}

export interface ISensorDataPoint {
  timestamp: Date;
  value: number;
}

export interface IMachine {
  id?: string;
  name: string;
  sensor: ISensor[];
  lastKnownPosition: IGPSPosition;
}
