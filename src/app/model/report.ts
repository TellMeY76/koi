export class RepoContentItem {
  name: string;
  icon: string;
  tip: string;
}


export class RepoDetail {
  name: string;
  icon: string;
  description: string;
  status: string[];
  suggest: string;
  weAdvice: WeAdvice;
}

export class WeAdvice {
  label: string;
  contents: string[];
}

export class RepoSchedule {
  title: string;
  schedule: ScheduleItem[];
}

export class ScheduleItem {
  content: string;
  date: string;
  tip: string;
  executive: string;
}

export class Package {
  name: string;
  contents: string[];
  ranges: string[];
  worth: string;
  sell: string;
}
