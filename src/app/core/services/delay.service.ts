// Service used by other services to simulate latency
export class DelayService {

  constructor() { }

  public static getRandomWaitTime(): number {
    return (Math.random() * 2000) + 1000;
  }
}
