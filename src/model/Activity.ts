import {ActivityType} from "model/AcitivtyType";

export interface Activity {
  /** Generate record id */
  id: string
  /** The person activity was done with */
  person: string
  /** Type of the activity done */
  type: ActivityType
  /** Custom user note about the activity */
  note: string
}
