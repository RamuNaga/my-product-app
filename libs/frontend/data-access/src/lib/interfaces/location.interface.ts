export interface Location {
  location: string;
  address: string;
  city: string;
  county: string;
  postcode: string;
  country: string;
  contact: string;
}

export interface LocationData {
  Greencore_UK_Locations: Location[];
}
