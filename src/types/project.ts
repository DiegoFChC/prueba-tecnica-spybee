export interface Project {
    _id:                string;
    title:              string;
    projectPlan:        ProjectPlan;
    status:             ProjectStatus;
    img:                string;
    lastVisit:          Date;
    position:           Position;
    users:              User[];
    clientData:         ClientData;
    city:               string;
    lastUpdated:        Date;
    partnerClients:     PartnerClient[];
    companyId:          string;
    address:            string;
    projectClientAdmin: string[];
    projectPlanData:    ProjectPlanData;
    createdAt:          Date;
    incidents:          Incident[];
    country?:           number | string;
}

export interface ClientData {
    title: string;
    _id:   string;
}

export interface Incident {
    _id:         string;
    status:      IncidentStatus;
    item:        Item;
    description: string;
    owner:       string;
    tag:         Tag;
    coordinates: Coordinates;
    limitDate:   Date;
    createdAt:   Date;
    updatedAt:   Date;
}

export interface Coordinates {
    lat: number;
    lng: number;
}

export enum Item {
    Incidents = "incidents",
    RFI = "RFI",
    Task = "task",
}

export enum IncidentStatus {
    Active = "active",
    Close = "close",
}

export enum Tag {
    Abroad = "abroad",
    Inside = "inside",
}

export interface PartnerClient {
    _id:        string;
    maxUsers:   number;
    maxAdmins:  number;
    maxStorage: number;
}

export interface Position {
    _id: string;
    lat: number;
    lng: number;
}

export interface ProjectPlan {
    _id: ID;
}

export enum ID {
    The6385140Fe518625Cb607F288 = "6385140fe518625cb607f288",
    The63C1Dcc858A3475C2Af52Ee0 = "63c1dcc858a3475c2af52ee0",
    The63Eb939A0E6F087E2592012B = "63eb939a0e6f087e2592012b",
    The6508Cbab34B46D2006707B94 = "6508cbab34b46d2006707b94",
}

export interface ProjectPlanData {
    plan: Plan;
}

export enum Plan {
    Big = "big",
    Small = "small",
}

export enum ProjectStatus {
    Active = "active",
    Inactive = "inactive",
    PendingPayment = "pending_payment",
    Suspended = "suspended",
}

export interface User {
    name:     string;
    lastName: string;
}
