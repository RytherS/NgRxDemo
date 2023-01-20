import { throwError } from "rxjs";

// Service used by other services to help simulate errors
export class NetworkErrorSimulationService {

    constructor() { }
  
    public static simulateNetworkErrorChance() {
      const simulateError = Math.random() < 0.1;
      if (simulateError) throw new Error("SIMULATED NETWORK ERROR");
    }
  }